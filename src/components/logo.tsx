import { cn } from "@/lib/utils";

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
        className="size-7 shrink-0 text-primary" // shrink-0 impedisce all'icona di rimpicciolirsi troppo
      >
        {/* ... i tuoi path rimangono uguali ... */}
      </svg>
      
      <div className="flex flex-col">
        {/* Versione Desktop: Nome completo */}
        <span className="hidden font-headline text-xl font-bold leading-tight text-foreground md:block">
          IonaBrosImpianti Srls
        </span>
        {/* Versione Mobile: Nome abbreviato */}
        <span className="block font-headline text-lg font-bold leading-tight text-foreground md:hidden">
          IonaBrosImpianti Srls
        </span>
        
        {/* Il sottotitolo lo nascondiamo su mobile per risparmiare spazio */}
        <span className="text-xs font-medium text-muted-foreground -mt-1 md:block">
            di Iona Alessandro
        </span>
      </div>
    </div>
  );
}