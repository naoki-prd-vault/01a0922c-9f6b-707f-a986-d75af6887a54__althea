import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Pilates from '../components/Pilates';
import Schedule from '../components/Schedule';
import Location from '../components/Location';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Pilates />
      <Schedule />
      <Location />
      <Contact />
      <Footer />
    </main>
  );
}
