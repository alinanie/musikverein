import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Instruments from "./components/Instruments";
import Join from "./components/Join";
import Youth from "./components/Youth";
import Events from "./components/Events";
import Support from "./components/Support";
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
        <Events />
        <Join />
        <Youth />
        <Support />
        <Social />
      </main>
      <Footer />
    </>
  );
}
