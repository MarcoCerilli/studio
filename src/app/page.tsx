import Image from 'next/image';
import {
  AlertTriangle,
  Construction,
  Droplets,
  Phone,
  Plug,
  ShowerHead,
  Thermometer,
  Wrench,
} from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { Logo } from '@/components/logo';
import { AIssueAnalyzer } from '@/components/ai-issue-analyzer';

const heroImage = PlaceHolderImages.find((img) => img.id === 'hero-plumbing');

const services = [
  {
    icon: <Droplets className="size-8 text-primary" />,
    title: 'Riparazione Perdite',
    description: 'Individuiamo e ripariamo rapidamente le perdite per prevenire danni e risparmiare sulla bolletta dell\'acqua.',
  },
  {
    icon: <Plug className="size-8 text-primary" />,
    title: 'Pulizia Scarichi',
    description: 'Liberiamo scarichi intasati di lavandini, docce e WC per un flusso d\'acqua regolare.',
  },
  {
    icon: <Thermometer className="size-8 text-primary" />,
    title: 'Servizio Scaldabagni',
    description: 'Servizi di riparazione e installazione per tutti i tipi di scaldabagni, per garantirti sempre acqua calda.',
  },
  {
    icon: <Construction className="size-8 text-primary" />,
    title: 'Installazione Tubature',
    description: 'Installazione professionale di tubature per nuove costruzioni e ristrutturazioni.',
  },
  {
    icon: <Wrench className="size-8 text-primary" />,
    title: 'Riparazione Sanitari',
    description: 'Riparazione o sostituzione di rubinetti, WC e soffioni doccia per eliminare gocciolamenti e migliorare la funzionalità.',
  },
  {
    icon: <ShowerHead className="size-8 text-primary" />,
    title: 'Aggiornamento Impianti',
    description: 'Modernizziamo il tuo intero impianto idraulico per una maggiore efficienza e affidabilità.',
  },
];

export default function Home() {
  return (
    <div className="flex min-h-[100dvh] flex-col">
      <header className="fixed top-0 z-50 w-full bg-background/80 px-4 py-3 shadow-sm backdrop-blur-sm md:px-6">
        <div className="container mx-auto flex items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <Logo />
          </a>
          <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
            <a href="#services" className="hover:text-primary hover:underline">Servizi</a>
            <a href="#analyzer" className="hover:text-primary hover:underline">Diagnosi AI</a>
            <a href="#contact" className="hover:text-primary hover:underline">Contatti</a>
          </nav>
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button className="bg-accent text-accent-foreground hover:bg-accent/90">
                <AlertTriangle className="mr-2 size-4" />
                Pronto Intervento
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Emergenza Idraulica?</AlertDialogTitle>
                <AlertDialogDescription>
                  Per assistenza immediata con problemi urgenti come tubi rotti o grosse perdite, chiamaci direttamente. Siamo disponibili 24/7.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <div className="flex flex-col items-center justify-center gap-4 py-4">
                <a href="tel:123-456-7890" className="flex items-center gap-3 rounded-lg bg-primary px-6 py-3 text-2xl font-bold text-primary-foreground">
                  <Phone />
                  <span>123-456-7890</span>
                </a>
                <p className="text-sm text-muted-foreground">Premi per chiamare ora.</p>
              </div>
              <AlertDialogFooter>
                <AlertDialogCancel>Chiudi</AlertDialogCancel>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </header>

      <main className="flex-1 pt-[68px]">
        <section className="relative h-[60vh] min-h-[400px] w-full">
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
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
          <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white">
            <div className="container px-4 md:px-6">
              <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                Problemi Idraulici? Risolti.
              </h1>
              <p className="mx-auto mt-4 max-w-[700px] text-lg text-gray-200 md:text-xl">
                Servizi idraulici veloci, affidabili e professionali. La tua emergenza è la nostra priorità.
              </p>
              <a href="#contact">
                <Button size="lg" className="mt-8">Richiedi un Preventivo Gratuito</Button>
              </a>
            </div>
          </div>
        </section>

        <section id="services" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="mx-auto mb-12 max-w-2xl text-center">
              <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">I Nostri Servizi</h2>
              <p className="mt-4 text-muted-foreground">
                Offriamo una gamma completa di servizi idraulici per soddisfare ogni tua esigenza.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <Card key={service.title} className="flex flex-col text-center transition-all hover:shadow-lg hover:-translate-y-1">
                  <CardHeader>
                    <div className="mx-auto mb-4 flex size-16 items-center justify-center rounded-full bg-secondary">
                      {service.icon}
                    </div>
                    <CardTitle className="font-headline">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="analyzer" className="w-full bg-muted py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">Analizzatore Problemi AI</h2>
              <p className="mt-4 text-muted-foreground">
                Non sai qual è il problema? Descrivi il tuo problema qui sotto e il nostro assistente AI, Pipey, fornirà una diagnosi preliminare e consigli.
              </p>
            </div>
            <AIssueAnalyzer />
          </div>
        </section>

        <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container grid items-center justify-center gap-8 px-4 md:px-6 lg:grid-cols-2 lg:gap-16">
            <div className="space-y-4">
              <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">Contattaci</h2>
              <p className="text-muted-foreground">
                Hai una domanda o hai bisogno di prenotare un servizio? Compila il modulo e ti risponderemo il prima possibile.
              </p>
              <div className="space-y-2">
                <p className="flex items-center gap-2">
                  <Phone className="text-primary" /> <span>123-456-7890</span>
                </p>
                <p className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail text-primary"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                  <span>contact@plumbquick.com</span>
                </p>
              </div>
            </div>
            <Card>
              <CardContent className="p-6">
                <form className="space-y-4">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nome</Label>
                      <Input id="name" placeholder="Il tuo nome" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Telefono</Label>
                      <Input id="phone" type="tel" placeholder="Il tuo numero di telefono" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="La tua email" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Messaggio</Label>
                    <Textarea id="message" placeholder="Come possiamo aiutarti?" className="min-h-[120px]" />
                  </div>
                  <Button type="submit" className="w-full">Invia Messaggio</Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <footer className="bg-primary text-primary-foreground">
        <div className="container flex flex-col items-center justify-between gap-4 px-4 py-8 md:flex-row md:px-6">
          <a href="#" className="flex items-center gap-2">
            <Logo className="text-primary-foreground" />
          </a>
          <p className="text-sm text-primary-foreground/80">&copy; 2024 PlumbQuick. Tutti i diritti riservati.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="text-sm hover:underline">Informativa sulla Privacy</a>
            <a href="#" className="text-sm hover:underline">Termini di Servizio</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
