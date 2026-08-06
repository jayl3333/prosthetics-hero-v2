import { useState } from "react";
import { X, Check } from "lucide-react";
import { RESOURCE_TYPES } from "../data";

type Props = {
  open: boolean;
  onClose: () => void;
};

const EMPTY = {
  name: "",
  type: "",
  intro: "",
  email: "",
  phone: "",
  website: "",
};

export default function ApplyModal({ open, onClose }: Props) {
  const [form, setForm] = useState(EMPTY);
  const [submitted, setSubmitted] = useState(false);

  if (!open) return null;

  const canSubmit = form.name.trim() && form.type && form.email.trim();

  const reset = () => {
    setForm(EMPTY);
    setSubmitted(false);
  };

  const handleClose = () => {
    onClose();
    setTimeout(reset, 200);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputClass =
    "w-full rounded-card border border-gray-200 bg-white px-3.5 py-2.5 text-[13px] text-gray-900 outline-none transition-colors placeholder:text-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20";

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-black/30 p-4"
      onClick={handleClose}
    >
      <div
        className="max-h-[90vh] w-[90vw] max-w-[520px] overflow-y-auto rounded-2xl bg-white p-6 shadow-2xl sm:p-7"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between">
          <div>
            <div className="text-[16px] font-semibold text-gray-900">
              申请入驻资源公司库
            </div>
            <div className="mt-1 text-[12px] text-gray-500">
              提交后将进入社区审核，通过后即可展示在此。
            </div>
          </div>
          <button
            onClick={handleClose}
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-900"
            aria-label="关闭"
          >
            <X size={18} />
          </button>
        </div>

        {submitted ? (
          <div className="mt-8 flex flex-col items-center py-6 text-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-50 text-green-600">
              <Check size={24} />
            </div>
            <p className="mt-4 text-[14px] font-medium text-gray-900">
              申请已提交
            </p>
            <p className="mt-1 text-[13px] text-gray-500">
              我们会尽快通过邮箱与您联系，请留意查收。
            </p>
            <button
              onClick={handleClose}
              className="mt-6 rounded-full bg-blue-500 px-6 py-2.5 text-[13px] font-medium text-white transition-colors hover:bg-blue-600"
            >
              完成
            </button>
          </div>
        ) : (
          <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
            {/* Name */}
            <div>
              <label className="mb-1.5 block text-[13px] font-medium text-gray-700">
                公司 / 团队名称
              </label>
              <input
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="例如：智源数据工场"
                className={inputClass}
              />
            </div>

            {/* Resource type */}
            <div>
              <label className="mb-1.5 block text-[13px] font-medium text-gray-700">
                资源类型
              </label>
              <div className="flex flex-wrap gap-2">
                {RESOURCE_TYPES.map((t) => (
                  <button
                    key={t.key}
                    type="button"
                    onClick={() => setForm({ ...form, type: t.label })}
                    className={`rounded-full px-4 py-2 text-[12px] font-medium transition-colors duration-200 ${
                      form.type === t.label
                        ? "bg-blue-500 text-white"
                        : "bg-cream-pill text-gray-700 hover:text-gray-900"
                    }`}
                  >
                    {t.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Intro */}
            <div>
              <label className="mb-1.5 block text-[13px] font-medium text-gray-700">
                一句话简介
              </label>
              <textarea
                value={form.intro}
                onChange={(e) => setForm({ ...form, intro: e.target.value })}
                placeholder="简要描述贵方提供的资源或能力"
                rows={3}
                className={`${inputClass} resize-none`}
              />
            </div>

            {/* Contact info section */}
            <div>
              <div className="mb-3 text-[13px] font-medium text-gray-700">
                联系方式
              </div>

              {/* Email — required */}
              <div className="mb-3">
                <label className="mb-1.5 block text-[12px] text-gray-500">
                  邮箱 <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="例如：contact@company.com"
                  className={inputClass}
                />
              </div>

              {/* Phone */}
              <div className="mb-3">
                <label className="mb-1.5 block text-[12px] text-gray-500">
                  联系电话
                </label>
                <input
                  type="tel"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  placeholder="例如：021-5588-2025"
                  className={inputClass}
                />
              </div>

              {/* Website */}
              <div>
                <label className="mb-1.5 block text-[12px] text-gray-500">
                  公司网站
                </label>
                <input
                  type="text"
                  value={form.website}
                  onChange={(e) =>
                    setForm({ ...form, website: e.target.value })
                  }
                  placeholder="例如：company.com"
                  className={inputClass}
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={!canSubmit}
              className="mt-2 w-full rounded-full bg-blue-500 px-5 py-2.5 text-[13px] font-medium text-white transition-colors hover:bg-blue-600 disabled:cursor-not-allowed disabled:opacity-50"
            >
              提交申请
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
