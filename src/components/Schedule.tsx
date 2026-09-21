import Link from 'next/link';

export default function Schedule() {
  return (
    <section id="horarios" className="py-16 md:py-24 bg-althea-ivory text-althea-deep-olive">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-display text-4xl md:text-5xl font-bold mb-12 leading-tight">
          Horarios Flexibles para tu Bienestar.
        </h2>

        <p className="text-xl md:text-2xl mb-8 leading-relaxed">
          Ofrecemos una variedad de horarios para adaptarnos a tu rutina.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col items-center border border-althea-sage/30">
            <h3 className="font-display text-3xl font-semibold mb-4">Clases Mat</h3>
            <p className="text-lg mb-2">Lunes a Viernes: 6:00 AM - 7:00 AM</p>
            <p className="text-lg mb-2">Lunes, Miércoles, Viernes: 8:00 AM - 9:00 AM</p>
            <p className="text-lg mb-2">Martes, Jueves: 5:00 PM - 6:00 PM</p>
            <p className="text-lg">Sábados: 8:00 AM - 9:00 AM</p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col items-center border border-althea-sage/30">
            <h3 className="font-display text-3xl font-semibold mb-4">Clases Reformer</h3>
            <p className="text-lg mb-2">Lunes a Viernes: 7:00 AM - 8:00 AM</p>
            <p className="text-lg mb-2">Lunes, Miércoles, Viernes: 9:00 AM - 10:00 AM</p>
            <p className="text-lg mb-2">Martes, Jueves: 6:00 PM - 7:00 PM</p>
            <p className="text-lg">Sábados: 9:00 AM - 10:00 AM</p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col items-center border border-althea-sage/30">
            <h3 className="font-display text-3xl font-semibold mb-4">Clases Wunda Chair</h3>
            <p className="text-lg mb-2">Martes, Jueves: 7:00 AM - 8:00 AM</p>
            <p className="text-lg mb-2">Lunes a Viernes: 4:00 PM - 5:00 PM</p>
            <p className="text-lg">Sábados: 10:00 AM - 11:00 AM</p>
          </div>
        </div>

        <Link href="https://altheastudio.wstudio.app/#/onboarding" target="_blank" rel="noopener noreferrer" className="inline-block bg-althea-deep-olive text-althea-ivory px-8 py-4 rounded-xl text-lg font-semibold shadow-lg hover:bg-althea-sage transition-colors duration-300">
          Ver disponibilidad y reservar
        </Link>
      </div>
    </section>
  );
}
