import Header from "./components/Header";
import Hero from "./components/Hero";



function App() {
  

  return (
    <main className="text-gray-950 pt-32">
      <div className="bg-gray-primary absolute h-124 w-124 rounded-full -top-20 left-20 blur-[10rem] -z-10"></div>
      <div className="bg-blue-primary absolute h-130 w-124 rounded-full -top-10 right-20 blur-[10rem] -z-10"></div>
      <Header/>
      <Hero/>
      
    </main>
  );
}

export default App
