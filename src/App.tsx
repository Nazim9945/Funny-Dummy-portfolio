import Header from "./components/Header";



function App() {
  

  return (
    <main className="text-gray-950">
      <div className="bg-gray-primary absolute h-124 w-124 rounded-full -top-20 left-20 blur-[10rem] "></div>
      <div className="bg-blue-primary absolute h-130 w-124 rounded-full -top-10 right-20 blur-[10rem] "></div>
      <Header/>
    </main>
  );
}

export default App
