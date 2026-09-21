import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-althea-ivory bg-opacity-90 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <Image src="/althea-logo-dark.png" alt="Althea Pilates Studio Logo" width={120} height={40} />
        </Link>
        <div className="hidden md:flex space-x-8 items-center">
          <Link href="#inicio" className="text-althea-deep-olive hover:text-althea-sage transition-colors duration-300">Inicio</Link>
          <Link href="#el-estudio" className="text-althea-deep-olive hover:text-althea-sage transition-colors duration-300">El estudio</Link>
          <Link href="#pilates" className="text-althea-deep-olive hover:text-althea-sage transition-colors duration-300">Pilates</Link>
          <Link href="#horarios" className="text-althea-deep-olive hover:text-althea-sage transition-colors duration-300">Horarios</Link>
          <Link href="#ubicacion" className="text-althea-deep-olive hover:text-althea-sage transition-colors duration-300">Ubicación</Link>
          <Link href="#contacto" className="text-althea-deep-olive hover:text-althea-sage transition-colors duration-300">Contacto</Link>
          <Link href="https://altheastudio.wstudio.app/#/onboarding" target="_blank" rel="noopener noreferrer" className="bg-althea-deep-olive text-althea-ivory px-6 py-3 rounded-xl hover:bg-althea-sage transition-colors duration-300 font-semibold shadow-md">
            Reservar clase
          </Link>
        </div>
        {/* Mobile menu button */}
        <div className="md:hidden">
          <button className="text-althea-deep-olive focus:outline-none">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>
      {/* Mobile menu content (hidden by default) */}
      <div className="md:hidden hidden">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link href="#inicio" className="block px-3 py-2 rounded-md text-base font-medium text-althea-deep-olive hover:bg-althea-sage hover:text-althea-ivory">Inicio</Link>
          <Link href="#el-estudio" className="block px-3 py-2 rounded-md text-base font-medium text-althea-deep-olive hover:bg-althea-sage hover:text-althea-ivory">El estudio</Link>
          <Link href="#pilates" className="block px-3 py-2 rounded-md text-base font-medium text-althea-deep-olive hover:bg-althea-sage hover:text-althea-ivory">Pilates</Link>
          <Link href="#horarios" className="block px-3 py-2 rounded-md text-base font-medium text-althea-deep-olive hover:bg-althea-sage hover:text-althea-ivory">Horarios</Link>
          <Link href="#ubicacion" className="block px-3 py-2 rounded-md text-base font-medium text-althea-deep-olive hover:bg-althea-sage hover:text-althea-ivory">Ubicación</Link>
          <Link href="#contacto" className="block px-3 py-2 rounded-md text-base font-medium text-althea-deep-olive hover:bg-althea-sage hover:text-althea-ivory">Contacto</Link>
          <Link href="https://altheastudio.wstudio.app/#/onboarding" target="_blank" rel="noopener noreferrer" className="block w-full text-center bg-althea-deep-olive text-althea-ivory px-3 py-2 rounded-md text-base font-semibold mt-4">
            Reservar clase
          </Link>
        </div>
      </div>
    </nav>
  );
}
