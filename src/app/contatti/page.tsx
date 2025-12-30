import Image from 'next/image';
import { Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const contactHeroImage = PlaceHolderImages.find((img) => img.id === 'contact-hero');

export default function ContactPage() {
  return (
    <>
      <section className="relative h-[40vh] min-h-[300px] w-full bg-primary">
          {contactHeroImage && (
              <Image
                  src={contactHeroImage.imageUrl}
                  alt={contactHeroImage.description}
                  fill
                  className="object-cover opacity-20"
                  data-ai-hint={contactHeroImage.imageHint}
              />
          )}
          <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-primary-foreground">
              <div className="container px-4 md:px-6">
                  <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl">
                      Contattaci
                  </h1>
                  <p className="mx-auto mt-4 max-w-[700px] text-lg text-primary-foreground/80">
                      Siamo pronti ad aiutarti. Compila il modulo o chiamaci direttamente.
                  </p>
              </div>
          </div>
      </section>

      <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
        <div className="container grid items-start justify-center gap-12 px-4 md:px-6 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-6">
            <div className="space-y-2">
              <h2 className="font-headline text-3xl font-bold tracking-tight">Mettiti in Contatto</h2>
              <p className="text-muted-foreground">
                Hai una domanda o hai bisogno di prenotare un servizio? Compila il modulo e ti risponderemo il prima possibile. Per emergenze, ti consigliamo di chiamare.
              </p>
            </div>
            <div className="space-y-4">
                <div className="flex items-center gap-4 rounded-lg border bg-card p-4">
                  <Phone className="size-6 text-primary" /> 
                  <div>
                    <h3 className="font-semibold">Chiamaci</h3>
                    <a href="tel:123-456-7890" className="text-muted-foreground hover:text-primary">123-456-7890</a>
                  </div>
                </div>
                <div className="flex items-center gap-4 rounded-lg border bg-card p-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail size-6 text-primary"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                   <div>
                    <h3 className="font-semibold">Scrivici un'email</h3>
                    <a href="mailto:contact@ionabrosidraulica.com" className="text-muted-foreground hover:text-primary">contact@ionabrosidraulica.com</a>
                  </div>
                </div>
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
    </>
  );
}
