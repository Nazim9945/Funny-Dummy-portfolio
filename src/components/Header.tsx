import {motion } from 'motion/react'


const Header = () => {
  return (
    
      <motion.div className="fixed left-1/2 -translate-x-1/2 top-0 rounded-none h-10 bg-white/50 border border-white/80 shadow-md shadow-black/20  backdrop-blur-3xl sm:top-4 sm:rounded-full sm:w-140 flex justify-between items-center px-3 w-full "
      initial={{y:-100,opacity:0}}
      animate={{y:0,opacity:1}}
      transition={{duration:0.75}}
      >
        {["Home", "About", "Contact", "Projects", "Skills", "Expirience"].map((d) => {
          return (
            <motion.div
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="transition-all duration-300 cursor-pointer hover:bg-gray-200 text-gray-500 hover:text-black rounded-full px-4 py-1"
            >
              {d}
            </motion.div>
          );
        })}
      </motion.div>
    
  );
}

export default Header