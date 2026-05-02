import NavBar from "./pages/NavBar";
import Hero from "./pages/Hero";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Pricing from "./pages/Pricing";
import Contact from "./pages/Contact";
import Footer from "./pages/Footer";
import { PricingProvider } from "./components/context/PricingContext";
import { Toaster } from "sonner";
import { NavProvider } from "./components/context/NavCtx";

function App() {
  return (
    <>
      <NavProvider>
        <NavBar />

        <Hero />

        <About />

        <Skills />

        <Projects />

        <PricingProvider>
          <Pricing />
        </PricingProvider>

        <Contact />

        <Footer />
      </NavProvider>
      <Toaster />
    </>
  );
}

export default App;
