import Link from 'next/link';
import { FaWhatsapp, FaInstagram, FaFacebookF } from 'react-icons/fa';

export default function Contact() {
  return (
    <section id="contacto" className="py-16 md:py-24 bg-althea-ivory text-althea-deep-olive">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-display text-4xl md:text-5xl font-bold mb-12 leading-tight">
          Contáctanos.
        </h2>

        <p className="text-xl md:text-2xl mb-8 leading-relaxed">
          ¿Listo para empezar tu viaje Pilates? Contáctanos hoy mismo.
        </p>

        <div className="flex flex-col items-center justify-center gap-8 mb-12">
          <div className="flex space-x-6">
            <Link href="https://wa.me/50688888888" target="_blank" rel="noopener noreferrer" className="text-althea-deep-olive hover:text-althea-sage transition-colors duration-300">
              <FaWhatsapp className="w-10 h-10" />
            </Link>
            <Link href="https://www.instagram.com/altheapilatescr" target="_blank" rel="noopener noreferrer" className="text-althea-deep-olive hover:text-althea-sage transition-colors duration-300">
              <FaInstagram className="w-10 h-10" />
            </Link>
            <Link href="https://www.facebook.com/altheapilatescr" target="_blank" rel="noopener noreferrer" className="text-althea-deep-olive hover:text-althea-sage transition-colors duration-300">
              <FaFacebookF className="w-10 h-10" />
            </Link>
          </div>
          <p className="text-lg md:text-xl">O llámanos: <Link href="tel:+50688888888" className="text-althea-deep-olive hover:text-althea-sage transition-colors duration-300">+506 8888 8888</Link></p>
        </div>

        <Link href="https://altheastudio.wstudio.app/#/onboarding" target="_blank" rel="noopener noreferrer" className="inline-block bg-althea-deep-olive text-althea-ivory px-8 py-4 rounded-xl text-lg font-semibold shadow-lg hover:bg-althea-sage transition-colors duration-300">
          Reservar tu primera clase
        </Link>
      </div>
    </section>
  );
}
