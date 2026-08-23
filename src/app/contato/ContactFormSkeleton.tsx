/**
 * Skeleton do formulário de contato, usado como fallback enquanto o
 * chunk do ContactForm (React Hook Form + Zod) carrega — ver
 * docs/design/PERFORMANCE.md. Reflete aproximadamente o layout real para
 * evitar Cumulative Layout Shift perceptível.
 */
export function ContactFormSkeleton() {
  return (
    <div className="flex animate-pulse flex-col gap-5" aria-hidden="true">
      <div className="grid gap-5 sm:grid-cols-2">
        {Array.from({ length: 6 }).map((_, index) => (
          <div key={index} className="flex flex-col gap-1.5">
            <div className="h-3.5 w-20 rounded bg-surface" />
            <div className="h-10 rounded-md bg-surface" />
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-1.5">
        <div className="h-3.5 w-24 rounded bg-surface" />
        <div className="h-28 rounded-md bg-surface" />
      </div>
      <div className="h-4 w-64 rounded bg-surface" />
      <div className="h-11 w-40 rounded-full bg-surface" />
    </div>
  );
}
