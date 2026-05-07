import { motion } from "motion/react";
import { useContext } from "react";
import { Context } from "../store/ContextApi";


const Header = () => {
  const props = useContext(Context);
  

  return (
    <motion.div
      className="fixed left-1/2 -translate-x-1/2 top-0 rounded-none h-10 bg-white/50 border border-white/80 shadow-md shadow-black/20  backdrop-blur-3xl sm:top-4 sm:rounded-full sm:w-140 flex justify-between items-center px-3 w-full z-99"
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
              className={`transition-all duration-300 cursor-pointer hover:bg-gray-200 text-gray-500 hover:text-black rounded-full px-4 py-1 ${props?.tag.toLowerCase() === d.toLowerCase() && "bg-gray-200 text-black"}`}
              key={d}
              onClick={() => props?.setTag(d)}
            >
              <a href={`#${d.toLowerCase()}`}>{d}</a>
              {/* {tag.toLowerCase() === d.toLowerCase() && (
                <span
                  className={`absolute inset-0 -z-10 transition-all duration-300 cursor-pointer hover:bg-gray-200 text-gray-500 hover:text-black rounded-full px-10 py-2  ${tag.toLowerCase() === d.toLowerCase() && "bg-gray-200 text-black"}`}
                ></span>
              )} */}
            </motion.div>
          );
        },
      )}
    </motion.div>
  );
};

export default Header;
