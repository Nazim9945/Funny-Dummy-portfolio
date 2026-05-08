import { useContext, useEffect, useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import DivElement from "./components/DivElement";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import LightDarkMode from "./components/LightDarkMode";
import MyProjects from "./components/MyProjects";
import Skills from "./components/Skills";
import useSetTheme from "./hooks/useSetTheme";
import { Context } from "./store/ContextApi";
import ScrollToTop from "./components/ScrollToTop";
import farmhouse from "../public/farmhouse.png";
import { useDisableScroll } from "./hooks/useDisableScroll";
import Popup from "./components/Popup";
import sadLife from '../public/sadLife.png'
import Blurred from "./components/Blurred";
function App() {
  const { theme, setTheme } = useSetTheme();
  const [open, setOpen] = useState(false);
  const[linkOpen,setLinkOpen]=useState(false)
  const props = useContext(Context);
  useDisableScroll(open);

  useEffect(() => {
    window.location.hash = props?.tag || "";
  }, [props?.tag]);
  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <main className="text-gray-950  sm:pt-35 pt-20 dark:text-gray-50 dark:bg-gray-900 dark:opacity-90 relative overflow-x-hidden">
      <Blurred/>

      {open && (
        <Popup
          close={() => setOpen(false)}
          title={"FarmHouse Files 💀"}
          img={farmhouse}
        />
      )}
      {linkOpen && (
        <Popup
          close={() => setLinkOpen(false)}
          title="Broke salmon bhoii 🥲"
          img={sadLife}
        />
      )}

      <Header />
      <Hero
        setLinkOpen={() => {
          setLinkOpen(true);
        }}
        setOpen={() => {
          setOpen(true);
        }}
      />
      <DivElement />
      <About />
      <MyProjects />
      <Skills />
      <Experience theme={theme} />
      <Contact />
      <Footer />
      <LightDarkMode theme={theme} setTheme={setTheme} />
      <ScrollToTop />
    </main>
  );
}

export default App;
