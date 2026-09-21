import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-althea-ivory">
      <Image
        src="/hero-background.jpg" // Placeholder image
        alt="Althea Pilates Studio"
        layout="fill"
        objectFit="cover"
        quality={90}
        className="z-0 opacity-70"
      />
      <div className="relative z-10 text-center text-althea-deep-olive px-4">
        <h1 className="font-display text-5xl md:text-7xl font-bold leading-tight mb-4 animate-fade-in-up">
          Movimiento con intención.
        </h1>
        <p className="text-xl md:text-2xl mb-8 animate-fade-in-up animation-delay-200">
          Pilates clásico y contemporáneo en Ciudad Quesada.
        </p>
        <p className="text-lg md:text-xl mb-10 animate-fade-in-up animation-delay-400">
          Mat · Reformer · Wunda
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in-up animation-delay-600">
          <Link href="https://altheastudio.wstudio.app/#/onboarding" target="_blank" rel="noopener noreferrer" className="bg-althea-deep-olive text-althea-ivory px-8 py-4 rounded-xl text-lg font-semibold shadow-lg hover:bg-althea-sage transition-colors duration-300">
            Reservar clase
          </Link>
          <Link href="#el-estudio" className="bg-transparent border-2 border-althea-deep-olive text-althea-deep-olive px-8 py-4 rounded-xl text-lg font-semibold hover:bg-althea-deep-olive hover:text-althea-ivory transition-colors duration-300">
            Conocer Althea
          </Link>
        </div>
      </div>
    </section>
  );
}
