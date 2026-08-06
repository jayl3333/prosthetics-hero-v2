import {
  X,
  Mail,
  Phone,
  Globe,
  Database,
  User,
  ExternalLink,
  ImageIcon,
  Cpu,
} from "lucide-react";
import type { BaseCompany, ResourceCompany } from "../data";

type Props = {
  company: BaseCompany | null;
  onClose: () => void;
};

function isResourceCompany(c: BaseCompany): c is ResourceCompany {
  return "resourceType" in c;
}

export default function CompanyModal({ company, onClose }: Props) {
  if (!company) return null;

  const rc = isResourceCompany(company) ? company : null;

  // Collect all photos (venue + device images)
  const photos: { url: string; caption: string }[] = [];
  if (rc) {
    (rc.venuePhotos ?? []).forEach((p) => photos.push(p));
    (rc.deviceSpecs ?? []).forEach((d) =>
      photos.push({ url: d.image, caption: d.name })
    );
  }

  return (
    <div
      className="rpg-modal-overlay rpg-scale-in fixed inset-0 z-[60] flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="rpg-modal-panel rpg-scrollbar max-h-[90vh] w-[90vw] max-w-[600px] overflow-y-auto rounded-[6px] p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <span
              className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[4px] text-xl font-serif-display font-semibold"
              style={{
                backgroundColor: "rgba(212,168,67,0.08)",
                color: "#e0b85c",
                border: "1px solid rgba(212,168,67,0.25)",
              }}
            >
              {company.initial}
            </span>
            <div>
              <div className="font-serif-display text-[16px] font-semibold text-[#e8e0d4]">
                {company.name}
              </div>
              {rc && (
                <div className="mt-0.5 text-[11px] uppercase tracking-wide text-[#a8a094]">
                  {rc.resourceType === "data" && "数据资源方"}
                  {rc.resourceType === "scene" && "场景资源方"}
                  {rc.resourceType === "device" && "设备资源方"}
                  {rc.resourceType === "talent" && "人力资源方"}
                </div>
              )}
            </div>
          </div>
          <button
            onClick={onClose}
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-[#a8a094] transition-colors hover:bg-[#d4a843]/10 hover:text-[#e0b85c]"
            aria-label="关闭"
          >
            <X size={18} />
          </button>
        </div>

        {/* Gold divider */}
        <div className="rpg-gold-line my-5" />

        {/* Detail */}
        <p className="text-[13px] leading-relaxed text-[#a8a094]">
          {company.detail}
        </p>

        {/* Tags */}
        <div className="mt-4 flex flex-wrap gap-2">
          {company.tags.map((t) => (
            <span
              key={t}
              className="rounded-[3px] border border-[#d4a843]/15 bg-[#d4a843]/5 px-2.5 py-1 text-[11px] font-medium text-[#e0b85c]"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Person in charge */}
        {rc?.personInCharge && (
          <div className="mt-5">
            <SectionLabel icon={<User size={13} />} text="负责人" />
            <div className="rpg-info-row flex items-center gap-3 px-3 py-2.5">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#d4a843]/10 text-[12px] font-medium text-[#e0b85c]">
                {rc.personInCharge[0]}
              </span>
              <span className="text-[13px] text-[#e8e0d4]">
                {rc.personInCharge}
              </span>
            </div>
          </div>
        )}

        {/* Contact info */}
        {(company.email || company.phone || company.website) && (
          <div className="mt-5">
            <SectionLabel icon={<Mail size={13} />} text="联系方式" />
            <div className="space-y-0">
              {company.email && (
                <div className="rpg-info-row flex items-center gap-2.5 px-3 py-2.5 text-[13px] text-[#a8a094]">
                  <Mail size={14} className="shrink-0 text-[#d4a843]" />
                  <a
                    href={`mailto:${company.email}`}
                    className="hover:text-[#e0b85c]"
                  >
                    {company.email}
                  </a>
                </div>
              )}
              {company.phone && (
                <div className="rpg-info-row flex items-center gap-2.5 px-3 py-2.5 text-[13px] text-[#a8a094]">
                  <Phone size={14} className="shrink-0 text-[#d4a843]" />
                  <span>{company.phone}</span>
                </div>
              )}
              {company.website && (
                <div className="rpg-info-row flex items-center gap-2.5 px-3 py-2.5 text-[13px] text-[#a8a094]">
                  <Globe size={14} className="shrink-0 text-[#d4a843]" />
                  <span>{company.website}</span>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Case links */}
        {rc?.caseLinks && rc.caseLinks.length > 0 && (
          <div className="mt-5">
            <SectionLabel icon={<ExternalLink size={13} />} text="合作案例" />
            <div className="space-y-2">
              {rc.caseLinks.map((link, i) => (
                <a
                  key={i}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rpg-case-link group flex items-center justify-between gap-2 rounded-[4px] px-3.5 py-2.5"
                >
                  <span className="text-[13px] text-[#a8a094] group-hover:text-[#e0b85c]">
                    {link.title}
                  </span>
                  <ExternalLink
                    size={13}
                    className="shrink-0 text-[#6b6558] group-hover:text-[#d4a843]"
                  />
                </a>
              ))}
            </div>
          </div>
        )}

        {/* Classic datasets */}
        {rc && rc.datasets.length > 0 && (
          <div className="mt-5">
            <SectionLabel icon={<Database size={13} />} text="经典数据集" />
            <div className="space-y-2">
              {rc.datasets.map((ds) => (
                <div
                  key={ds.name}
                  className="rpg-info-row rounded-[4px] px-3.5 py-2.5"
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[13px] font-medium text-[#e8e0d4]">
                      {ds.name}
                    </span>
                    <span className="shrink-0 rounded-[2px] border border-[#d4a843]/20 px-2 py-0.5 text-[10px] font-medium text-[#e0b85c]">
                      {ds.scale}
                    </span>
                  </div>
                  <p className="mt-1 text-[12px] leading-relaxed text-[#a8a094]">
                    {ds.desc}
                  </p>
                  <span className="mt-1 inline-block text-[10px] text-[#6b6558]">
                    {ds.type}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Related photos */}
        {photos.length > 0 && (
          <div className="mt-5">
            <SectionLabel icon={<ImageIcon size={13} />} text="相关照片" />
            <div className="grid grid-cols-2 gap-3">
              {photos.map((p, i) => (
                <div
                  key={i}
                  className="rpg-photo-frame group rounded-[4px]"
                >
                  <div className="relative aspect-[4/3] overflow-hidden rounded-t-[4px]">
                    <img
                      src={p.url}
                      alt={p.caption}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="px-2.5 py-1.5">
                    <p className="truncate text-[11px] text-[#a8a094]">
                      {p.caption}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Device specs */}
        {rc && rc.deviceSpecs && rc.deviceSpecs.length > 0 && (
          <div className="mt-5">
            <SectionLabel icon={<Cpu size={13} />} text="设备规格" />
            <div className="space-y-2">
              {rc.deviceSpecs.map((dev) => (
                <div
                  key={dev.name}
                  className="rpg-info-row rounded-[4px] px-3.5 py-2.5"
                >
                  <div className="text-[13px] font-medium text-[#e8e0d4]">
                    {dev.name}
                  </div>
                  <p className="mt-1 text-[12px] leading-relaxed text-[#a8a094]">
                    {dev.desc}
                  </p>
                  <div className="mt-2 rounded-[3px] bg-[#d4a843]/5 px-2.5 py-1.5">
                    <span className="text-[10px] text-[#6b6558]">规格参数</span>
                    <p className="mt-0.5 text-[12px] font-medium text-[#e0b85c]">
                      {dev.specs}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function SectionLabel({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="mb-2.5 flex items-center gap-1.5">
      <span className="text-[#d4a843]">{icon}</span>
      <span className="font-cormorant text-[12px] font-medium uppercase tracking-[0.15em] text-[#a8a094]">
        {text}
      </span>
      <span className="ml-1 h-px flex-1 bg-[#d4a843]/15" />
    </div>
  );
}
