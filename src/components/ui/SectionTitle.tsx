export default function SectionTitle({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="mb-5">
      <h2 className="text-2xl font-bold tracking-tight md:text-3xl">{title}</h2>
      {subtitle && <p className="mt-1 text-sm text-aritium-text/75">{subtitle}</p>}
    </div>
  );
}
