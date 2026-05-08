import { useEffect, useState } from "react";


const useSetTheme=()=>{

 const [theme, setTheme] = useState(
   () => localStorage.getItem("theme") || "light",
 );

 useEffect(() => {
   if (localStorage.getItem("theme") === "dark") {
     document.documentElement.classList.add("dark");
   } else {
     document.documentElement.classList.remove("dark");
   }
 }, []);



    return {theme,setTheme}
}
export default useSetTheme