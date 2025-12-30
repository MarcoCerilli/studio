import { cn } from '@/lib/utils';

export function Logo({ className }: { className?: string }) {
  return (
    <div className={cn('flex items-center gap-2', className)}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="size-7 text-primary"
      >
        <path d="M2 5h2" />
        <path d="M14 3v2" />
        <path d="M14 9v2" />
        <path d="M4 17h2" />
        <path d="M14 15v2" />
        <path d="M4 11h10" />
        <path d="M10 11v8" />
        <path d="M18 5h-2" />
        <path d="M20 17h-2" />
        <path d="M14 21v-2" />
        <path d="M14 13V7" />
        <path d="M18 11h2" />
        <path d="M22 5h-2" />
        <path d="M20 11h2" />
        <path d="M14 7h8" />
        <path d="M14 13h4" />
        <path d="M10 5H4" />
      </svg>
      <span className="font-headline text-2xl font-bold text-foreground">
        IonaBrosIdraulica Srls
      </span>
    </div>
  );
}

    