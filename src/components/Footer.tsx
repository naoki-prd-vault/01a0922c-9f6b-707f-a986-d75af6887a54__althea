import Link from 'next/link';
import Image from 'next/image';
import { FaWhatsapp, FaInstagram, FaFacebookF } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-althea-deep-olive text-althea-ivory py-12 md:py-16">
      <div className="container mx-auto px-4 text-center">
        <div className="flex flex-col items-center justify-center mb-8">
          <Link href="/">
            <Image src="/althea-logo-light.png" alt="Althea Pilates Studio Logo" width={150} height={50} className="mb-4" />
          </Link>
          <p className="text-lg mb-4">Movimiento con intención.</p>
          <div className="flex space-x-6">
            <Link href="https://wa.me/50688888888" target="_blank" rel="noopener noreferrer" className="text-althea-ivory hover:text-althea-sage transition-colors duration-300">
              <FaWhatsapp className="w-8 h-8" />
            </Link>
            <Link href="https://www.instagram.com/altheapilatescr" target="_blank" rel="noopener noreferrer" className="text-althea-ivory hover:text-althea-sage transition-colors duration-300">
              <FaInstagram className="w-8 h-8" />
            </Link>
            <Link href="https://www.facebook.com/altheapilatescr" target="_blank" rel="noopener noreferrer" className="text-althea-ivory hover:text-althea-sage transition-colors duration-300">
              <FaFacebookF className="w-8 h-8" />
            </Link>
          </div>
        </div>

        <div className="border-t border-althea-sage/50 pt-8 mt-8">
          <p className="text-sm">&copy; {new Date().getFullYear()} Althea Pilates Studio. Todos los derechos reservados.</p>
          <p className="text-sm mt-2">
            Diseñado y desarrollado por <Link href="https://naoki.ai" target="_blank" rel="noopener noreferrer" className="hover:underline">Naoki</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
