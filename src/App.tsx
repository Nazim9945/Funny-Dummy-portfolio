import About from "./components/About";
import DivElement from "./components/DivElement";
import Header from "./components/Header";
import Hero from "./components/Hero";
import MyProjects from "./components/MyProjects";
import Skills from "./components/Skills";



function App() {
  

  return (
    <main className="text-gray-950 pt-40">
      <div className="bg-blue-700 absolute h-50 w-120 rounded-full rotate-45   top-50 blur-[7rem] right-100 border -z-10"></div>
      <div className="bg-gray-primary absolute h-124 w-124 rounded-full -top-20 left-20 blur-[10rem] -z-10"></div>
      <div className="bg-blue-primary absolute h-130 w-124 rounded-full -top-10 right-20 blur-[10rem] -z-10"></div>
      <Header />
      <Hero />
      <DivElement/>
      <About/>
      {/* <DivElement/> */}
      <MyProjects/>
      <Skills/>
      
    </main>
  );
}

export default App
