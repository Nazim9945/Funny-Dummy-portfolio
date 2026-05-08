import { useContext, useEffect } from "react";
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

function App() {
  const { theme, setTheme } = useSetTheme();
const props=useContext(Context)
useEffect(()=>{
  window.location.hash=props?.tag || ""
},[props?.tag])
  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <main className="text-gray-950  pt-35 dark:text-gray-50 dark:bg-gray-900 dark:opacity-90 relative">
      <div className="bg-blue-700 absolute h-50 w-120 rounded-full rotate-45   top-50 blur-[7rem] right-100 border -z-10 dark:bg-blue-50"></div>
      <div className="bg-gray-primary absolute h-124 w-124 rounded-full -top-20 left-20 blur-[10rem] -z-10 dark:bg-[#946263]"></div>
      <div className="bg-blue-primary absolute h-130 w-124 rounded-full -top-10 right-20 blur-[10rem] -z-10 dark:bg-[#676394]"></div>
      <Header />
      <Hero />
      <DivElement />
      <About />
      <MyProjects />
      <Skills />
      <Experience theme={theme} />
      <Contact />
      <Footer />
      <LightDarkMode theme={theme} setTheme={setTheme} />
      <ScrollToTop/>
    </main>
  );
}

export default App;
