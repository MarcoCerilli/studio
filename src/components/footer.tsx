import Link from 'next/link';
import { Logo } from '@/components/logo';

export function Footer() {
    return (
        <footer className="bg-primary text-primary-foreground">
        <div className="container flex flex-col items-center justify-between gap-4 px-4 py-8 md:flex-row md:px-6">
          <Link href="/" className="flex items-center gap-2">
            <Logo className="text-primary-foreground" />
          </Link>
          <p className="text-center text-sm text-primary-foreground/80">&copy; 2024 IonaBros Impianti srls ss 148 pontina km.105.500 04019 terracina lt p.iva 03291610594</p>
          <div className="flex items-center gap-4">
            <Link href="#" className="text-sm hover:underline">Informativa sulla Privacy</Link>
            <Link href="#" className="text-sm hover:underline">Termini di Servizio</Link>
          </div>
        </div>
      </footer>
    )
}
