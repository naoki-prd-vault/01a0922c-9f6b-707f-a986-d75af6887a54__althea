import Image from 'next/image';

export default function Pilates() {
  return (
    <section id="pilates" className="py-16 md:py-24 bg-althea-sage text-althea-ivory">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-display text-4xl md:text-5xl font-bold mb-12 leading-tight">
          Pilates para todos los niveles.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-althea-deep-olive p-8 rounded-lg shadow-lg flex flex-col items-center">
            <Image
              src="/pilates-mat.jpg" // Placeholder image
              alt="Pilates Mat"
              width={200}
              height={200}
              className="rounded-full mb-6 border-4 border-althea-ivory"
            />
            <h3 className="font-display text-3xl font-semibold mb-4">Pilates Mat</h3>
            <p className="text-lg leading-relaxed">
              La base del Pilates, utilizando el peso corporal y accesorios menores para fortalecer el core, mejorar la flexibilidad y la postura.
            </p>
          </div>

          <div className="bg-althea-deep-olive p-8 rounded-lg shadow-lg flex flex-col items-center">
            <Image
              src="/pilates-reformer.jpg" // Placeholder image
              alt="Pilates Reformer"
              width={200}
              height={200}
              className="rounded-full mb-6 border-4 border-althea-ivory"
            />
            <h3 className="font-display text-3xl font-semibold mb-4">Pilates Reformer</h3>
            <p className="text-lg leading-relaxed">
              Clases en la máquina Reformer, que ofrece resistencia y asistencia para un entrenamiento de cuerpo completo más intenso y versátil.
            </p>
          </div>

          <div className="bg-althea-deep-olive p-8 rounded-lg shadow-lg flex flex-col items-center">
            <Image
              src="/pilates-wunda.jpg" // Placeholder image
              alt="Pilates Wunda Chair"
              width={200}
              height={200}
              className="rounded-full mb-6 border-4 border-althea-ivory"
            />
            <h3 className="font-display text-3xl font-semibold mb-4">Pilates Wunda Chair</h3>
            <p className="text-lg leading-relaxed">
              Desafía tu equilibrio y fuerza con la Wunda Chair, ideal para un trabajo concentrado en el core y las extremidades.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
