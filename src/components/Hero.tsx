export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background video — kept from the base website, scoped to the home hero only */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260508_215831_c6a8989c-d716-4d8d-8745-e972a2eec711.mp4"
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Foreground content over video */}
      <div className="relative z-10 flex min-h-screen flex-col">
        <div className="flex flex-1 items-end px-6 pb-10 sm:px-12 sm:pb-16 md:px-20 lg:px-28 lg:pb-20">
          <div className="max-w-xs sm:max-w-md">
            {/* Headline */}
            <h1 className="mb-3 text-[1.375rem] font-semibold leading-[1.15] tracking-tight text-gray-900 sm:text-[1.5rem]">
              面向具身数据产业的一站式信息社区
            </h1>

            {/* Subtext */}
            <p className="mb-3 text-[13px] font-normal text-gray-500">
              连接产业各方（数据、场景、设备、人力），沉淀行业知识与资讯。
            </p>

            {/* CTA */}
            <a
              href="#/companies"
              className="group inline-flex items-center gap-2 rounded-full border border-blue-400 px-5 py-2.5 text-[13px] font-medium text-blue-500 transition-all duration-200 hover:border-blue-500 hover:bg-blue-500 hover:text-white"
            >
              浏览全球具身智能知名企业
              <span className="inline-block transition-transform duration-200 group-hover:translate-x-0.5">
                →
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
