import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { AIssueAnalyzer } from '@/components/ai-issue-analyzer';
import Link from 'next/link';

const heroImage = PlaceHolderImages.find((img) => img.id === 'hero-plumbing');
const analyzerImage = PlaceHolderImages.find((img) => img.id === 'analyzer-bg');

export default function Home() {
  return (
    <>
      <section className="relative h-[70vh] min-h-[450px] w-full">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            fill
            className="object-cover"
            data-ai-hint={heroImage.imageHint}
            priority
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white">
          <div className="container px-4 md:px-6">
            <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              Problemi Idraulici? Risolti.
            </h1>
            <p className="mx-auto mt-4 max-w-[700px] text-lg text-gray-200 md:text-xl">
              Servizi idraulici veloci, affidabili e professionali. La tua emergenza è la nostra priorità.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/servizi">
                <Button size="lg">Scopri i Nostri Servizi</Button>
              </Link>
              <Link href="/contatti">
                <Button size="lg" variant="secondary">Richiedi un Preventivo</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="analyzer" className="relative w-full py-16 md:py-24 lg:py-32">
        {analyzerImage && (
          <Image
            src={analyzerImage.imageUrl}
            alt={analyzerImage.description}
            fill
            className="object-cover"
            data-ai-hint={analyzerImage.imageHint}
          />
        )}
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="relative container z-10 px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-headline text-3xl font-bold tracking-tight text-white sm:text-4xl">Analizzatore Problemi AI</h2>
            <p className="mt-4 text-gray-300">
              Non sai qual è il problema? Descrivi il tuo problema qui sotto e il nostro assistente AI, Pipey, fornirà una diagnosi preliminare e consigli.
            </p>
          </div>
          <AIssueAnalyzer />
        </div>
      </section>
    </>
  );
}
