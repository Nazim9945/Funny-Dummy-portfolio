import { motion } from "motion/react";
import { useContext } from "react";
import { Context } from "../store/ContextApi";


const Header = () => {
  const props = useContext(Context);
  

  return (
    <motion.div
      className="fixed left-1/2 -translate-x-1/2 flex-wrap top-0 rounded-none sm:h-10 h-18 bg-white/50 border border-white/80 shadow-md shadow-black/20  backdrop-blur-3xl sm:top-4 sm:rounded-full sm:w-140 flex sm:justify-between items-center max-sm:flex-col max-sm:items-center sm:px-3 px-2 w-full z-99 dark:bg-black/90 dark:border-gray-500"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.75 }}
    >
      {["Home", "About", "Projects", "Skills", "Experience", "Contact"].map(
        (d) => {
          return (
            <motion.div
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className={`transition-all duration-300 cursor-pointer  text-black dark:text-white/90 hover:text-gray-400 hover:dark:text-gray-400 rounded-full px-4 py-1 ${props?.tag.toLowerCase() === d.toLowerCase() && "bg-gray-200 dark:bg-gray-800"}`}
              key={d}
              onClick={() => props?.setTag(d)}
            >
              <a className="max-sm:text-xs" href={`#${d.toLowerCase()}`}>{d}</a>
            </motion.div>
          );
        },
      )}
    </motion.div>
  );
};

export default Header;
