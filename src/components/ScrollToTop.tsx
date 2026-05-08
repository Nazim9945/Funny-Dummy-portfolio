

import { FaArrowUp } from "react-icons/fa";



const ScrollToTop = () => {
 
   
  return (
    <button
    onClick={()=>{
        window.scrollTo({left:0,top:0,behavior:'smooth'})
        
    }}
      className="cursor-pointer fixed right-20 border border-black/30 bottom-4 w-12 h-12 rounded-full  p-2 flex items-center justify-center   bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 transition-all duration-200"
    >
  <FaArrowUp/>
    </button>
  );
}

export default ScrollToTop