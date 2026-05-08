
import { BsMoon, BsSun } from "react-icons/bs"



const LightDarkMode = ({theme,setTheme}:{theme:string,setTheme:(val:string)=>void}) => {
   
   
  return (
    <button
      onClick={() => {
        if (theme === "light") {
          setTheme("dark");
          document.documentElement.classList.add("dark")
          localStorage.setItem('theme',"dark")
        } else {
          setTheme("light");
          document.documentElement.classList.remove("dark");
          localStorage.setItem("theme", "light");
        }
      }}
      className="cursor-pointer fixed right-6 border border-black/30 bottom-4 w-12 h-12 rounded-full  p-2 flex items-center justify-center   bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 transition-all duration-200"
    >
      {theme === "light" ? (
        <BsSun className="text-sm" />
      ) : (
        <BsMoon className="text-sm" />
      )}
    </button>
  );
}

export default LightDarkMode