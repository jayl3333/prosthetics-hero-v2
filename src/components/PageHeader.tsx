type Props = {
  eyebrow: string;
  title: string;
  description: string;
};

export default function PageHeader({ eyebrow, title, description }: Props) {
  return (
    <section className="bg-cream px-6 pb-8 pt-28 sm:px-12 sm:pt-32 md:px-20 lg:px-28">
      <span className="text-[12px] font-medium uppercase tracking-wide text-blue-500">
        {eyebrow}
      </span>
      <h1 className="mt-2 text-[1.5rem] font-semibold tracking-tight text-gray-900 sm:text-[1.875rem]">
        {title}
      </h1>
      <p className="mt-3 max-w-2xl text-[14px] text-gray-500">{description}</p>
    </section>
  );
}
