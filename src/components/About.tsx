import Image from 'next/image';

export default function About() {
  return (
    <section id="el-estudio" className="py-16 md:py-24 bg-althea-ivory">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-althea-deep-olive mb-6 leading-tight">
              Un espacio para conectar contigo.
            </h2>
            <p className="text-lg md:text-xl text-althea-deep-olive mb-6 leading-relaxed">
              En Althea Pilates Studio, creemos en el poder transformador del movimiento consciente. Nuestro estudio en Ciudad Quesada, San Carlos, es un santuario dedicado a la práctica de Pilates, donde cada movimiento es una oportunidad para fortalecer tu cuerpo, calmar tu mente y nutrir tu espíritu.
            </p>
            <p className="text-lg md:text-xl text-althea-deep-olive mb-6 leading-relaxed">
              Ofrecemos clases personalizadas y grupales, adaptadas a todos los niveles y necesidades. Desde el Pilates clásico en Mat hasta el trabajo avanzado con Reformer y Wunda Chair, te guiamos en un viaje hacia una mayor conciencia corporal, fuerza, flexibilidad y equilibrio.
            </p>
            <p className="text-lg md:text-xl text-althea-deep-olive leading-relaxed">
              Descubre un enfoque integral para tu bienestar en un ambiente cálido, profesional y acogedor.
            </p>
          </div>
          <div className="md:w-1/2 relative">
            <div className="relative w-full h-96 rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/studio-interior.jpg" // Placeholder image
                alt="Interior del estudio Althea Pilates"
                layout="fill"
                objectFit="cover"
                quality={90}
              />
            </div>
            <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-althea-sage opacity-30 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-200"></div>
            <div className="absolute -top-8 -right-8 w-48 h-48 bg-althea-deep-olive opacity-30 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-400"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
