# Deploy script: build the site and push to gh-pages branch.
# Usage: .\deploy.ps1
# Requires git remote 'origin' to be set with push access.

$ErrorActionPreference = "Stop"
$repoRoot = Split-Path -Parent $MyInvocation.MyCommand.Path

Push-Location $repoRoot
try {
    # 1. Build
    npm run build
    if (-not (Test-Path "dist\index.html")) {
        throw "Build failed: dist\index.html not found"
    }

    # 2. Create/refresh orphan gh-pages branch with dist contents at root
    $branches = git branch --list gh-pages
    if ($branches) {
        git branch -D gh-pages
    }
    git checkout --orphan gh-pages
    git rm -rf --cached . | Out-Null
    # remove all tracked files from working tree except dist
    git ls-files | ForEach-Object { git rm -rf --cached "$_" | Out-Null }
    # move dist contents to root
    Copy-Item -Path "dist\*" -Destination "." -Recurse -Force
    Remove-Item -Path "dist" -Recurse -Force -ErrorAction SilentlyContinue
    git add -A
    git commit -m "deploy: $(Get-Date -Format 'yyyy-MM-dd HH:mm')" | Out-Null

    # 3. Push
    git push -f origin gh-pages

    # 4. Return to main
    git checkout main
    Write-Host "Deployed. Site will be live at https://jayl3333.github.io/prosthetics-hero/" -ForegroundColor Green
} finally {
    Pop-Location
}
