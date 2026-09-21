import Link from 'next/link';

export default function Location() {
  return (
    <section id="ubicacion" className="py-16 md:py-24 bg-althea-sage text-althea-ivory">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-display text-4xl md:text-5xl font-bold mb-12 leading-tight">
          Encuéntranos en Ciudad Quesada.
        </h2>

        <p className="text-xl md:text-2xl mb-8 leading-relaxed">
          Estamos convenientemente ubicados para servirte.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-12">
          <div className="md:w-1/2 bg-althea-deep-olive p-8 rounded-lg shadow-lg text-left">
            <h3 className="font-display text-3xl font-semibold mb-4">Nuestra Dirección</h3>
            <p className="text-lg mb-2">Ciudad Quesada, San Carlos, Alajuela</p>
            <p className="text-lg mb-2">De la Catedral 200 metros este y 50 metros norte.</p>
            <p className="text-lg mb-4">Edificio esquinero, segunda planta.</p>
            <Link href="https://maps.app.goo.gl/your-location" target="_blank" rel="noopener noreferrer" className="inline-block bg-althea-ivory text-althea-deep-olive px-6 py-3 rounded-xl font-semibold hover:bg-althea-ivory/80 transition-colors duration-300">
              Abrir en Google Maps
            </Link>
          </div>
          <div className="md:w-1/2">
            {/* Placeholder for Google Maps iframe */}
            <div className="relative w-full h-64 md:h-96 bg-gray-300 rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.490709658712!2d-84.4285803259835!3d10.327663267980302!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa0640d85a1532f%3A0x67a3f8b0d0e6b5e!2sAlthea%20Pilates%20Studio!5e0!3m2!1sen!2scr!4v1717616123456!5m2!1sen!2scr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
