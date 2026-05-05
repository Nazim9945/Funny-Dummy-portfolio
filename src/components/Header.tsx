import {motion } from 'motion/react'

const Header = () => {
  return (
   
      <motion.div className="transition-all duration-500 fixed top-0 w-full -translate-x-1/2 h-10 bg-white/50 border border-white/80 shadow-md shadow-black/20  backdrop-blur-3xl sm:top-4 sm:left-1/2 sm:rounded-full sm:w-140 flex justify-between items-center px-3"
      initial={{y:-100,opacity:0}}
      animate={{y:0,opacity:1}}
      >
        {[1,2,3,4,5,6].map(()=>{
            return (
              <motion.div
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1  }}
               
                className="transition-all duration-300 cursor-pointer hover:bg-gray-200 text-gray-500 hover:text-black rounded-full px-4 py-1"
              >
                About
              </motion.div>
            );
        })}
      </motion.div>
     
  );
}

export default Header