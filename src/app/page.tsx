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
    title: 'Leak Repair',
    description: 'Quickly find and fix leaks to prevent water damage and save on your water bill.',
  },
  {
    icon: <Plug className="size-8 text-primary" />,
    title: 'Drain Cleaning',
    description: 'Clear clogged drains in your sinks, showers, and toilets for smooth water flow.',
  },
  {
    icon: <Thermometer className="size-8 text-primary" />,
    title: 'Water Heater Service',
    description: 'Repair and installation services for all types of water heaters, ensuring you have hot water.',
  },
  {
    icon: <Construction className="size-8 text-primary" />,
    title: 'Pipe Installation',
    description: 'Professional pipe fitting and installation for new construction and renovations.',
  },
  {
    icon: <Wrench className="size-8 text-primary" />,
    title: 'Fixture Repair',
    description: 'Fixing or replacing faucets, toilets, and showerheads to stop drips and improve function.',
  },
  {
    icon: <ShowerHead className="size-8 text-primary" />,
    title: 'Full System Upgrades',
    description: 'Modernize your entire plumbing system for better efficiency and reliability.',
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
            <a href="#services" className="hover:text-primary hover:underline">Services</a>
            <a href="#analyzer" className="hover:text-primary hover:underline">AI Diagnosis</a>
            <a href="#contact" className="hover:text-primary hover:underline">Contact</a>
          </nav>
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button className="bg-accent text-accent-foreground hover:bg-accent/90">
                <AlertTriangle className="mr-2 size-4" />
                Emergency Service
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Emergency Plumbing Situation?</AlertDialogTitle>
                <AlertDialogDescription>
                  For immediate assistance with urgent issues like burst pipes or major leaks, please call us directly. We are available 24/7.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <div className="flex flex-col items-center justify-center gap-4 py-4">
                <a href="tel:123-456-7890" className="flex items-center gap-3 rounded-lg bg-primary px-6 py-3 text-2xl font-bold text-primary-foreground">
                  <Phone />
                  <span>123-456-7890</span>
                </a>
                <p className="text-sm text-muted-foreground">Press to call now.</p>
              </div>
              <AlertDialogFooter>
                <AlertDialogCancel>Close</AlertDialogCancel>
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
                Plumbing Problems? Solved.
              </h1>
              <p className="mx-auto mt-4 max-w-[700px] text-lg text-gray-200 md:text-xl">
                Fast, reliable, and professional plumbing services. Your emergency is our priority.
              </p>
              <a href="#contact">
                <Button size="lg" className="mt-8">Get a Free Quote</Button>
              </a>
            </div>
          </div>
        </section>

        <section id="services" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="mx-auto mb-12 max-w-2xl text-center">
              <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">Our Services</h2>
              <p className="mt-4 text-muted-foreground">
                We offer a comprehensive range of plumbing services to meet all your needs.
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
              <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">AI Issue Analyzer</h2>
              <p className="mt-4 text-muted-foreground">
                Not sure what's wrong? Describe your issue below and our AI assistant, Pipey, will provide a preliminary diagnosis and advice.
              </p>
            </div>
            <AIssueAnalyzer />
          </div>
        </section>

        <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container grid items-center justify-center gap-8 px-4 md:px-6 lg:grid-cols-2 lg:gap-16">
            <div className="space-y-4">
              <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">Contact Us</h2>
              <p className="text-muted-foreground">
                Have a question or need to schedule a service? Fill out the form and we'll get back to you as soon as possible.
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
                      <Label htmlFor="name">Name</Label>
                      <Input id="name" placeholder="Your Name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone</Label>
                      <Input id="phone" type="tel" placeholder="Your Phone Number" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="Your Email" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea id="message" placeholder="How can we help?" className="min-h-[120px]" />
                  </div>
                  <Button type="submit" className="w-full">Send Message</Button>
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
          <p className="text-sm text-primary-foreground/80">&copy; 2024 PlumbQuick. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="text-sm hover:underline">Privacy Policy</a>
            <a href="#" className="text-sm hover:underline">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

    