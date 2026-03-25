import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Instruments from "./components/Instruments";
import Join from "./components/Join";
import Events from "./components/Events";
import Social from "./components/Social";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Instruments />
        <Join />
        <Events />
        <Social />
      </main>
      <Footer />
    </>
  );
}
