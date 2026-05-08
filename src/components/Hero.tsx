import { motion } from 'motion/react';
import SalmonBhaoi from '../../public/salmonbhoi.jpg'
import { FaArrowRight, FaDownload, FaGithub, FaLinkedin } from 'react-icons/fa';
import useInview from '../hooks/useInview';
import fahh from '../../public/fahhhhh.mp3'
import hehehe from '../../public/hehehe.mp3'
const fahhaudio=new Audio(fahh)
const heheaudio=new Audio(hehehe)
fahhaudio.volume=0.8
heheaudio.volume=0.8
const Hero=({setOpen,setLinkOpen}:{setOpen:()=>void,setLinkOpen:()=>void})=>{
  

  const { ref } = useInview("home", 0.7);
    return (
      <div
        id="home"
        ref={ref}
        className="sm:w-120 w-80 mx-auto flex flex-col items-center justify-center gap-4 scroll-mt-35"
      >
        <div className="relative">
          <motion.img
            src={SalmonBhaoi}
            className="sm:h-25 sm:w-25 h-15 w-15 rounded-full sm:border-4 border-white border-2 object-cover dark:border-black/80"
            initial={{ opacity: 0, scale: 0, x: -200 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ delay: 1.2, duration: 1 }}
          />
          <motion.span
            initial={{ opacity: 0, scale: 0, x: 200 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ delay: 1.7, duration: 1 }}
            className="absolute right-0 bottom-2  sm:text-xl text-xs"
          >
            🦌
          </motion.span>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 200, scale: 0 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="text-center sm:text-2xl  leading-10 "
        >
          <span className="font-bold bg-linear-to-br from-pink-400 dark:via-blue-300 dark:to-indigo-300 text-transparent bg-clip-text via-blue-600 to-indigo-900">
            Hey I'm Salmon khan
          </span>
          . I am{" "}
          <span className="font-bold dark:text-white/70">
            full-stack developer
          </span>{" "}
          with <span>8 years</span> of experience. I enjoy building{" "}
          <span className="italic dark:text-white/70 ">sites & app</span>. My
          focus is{" "}
          <span className="underline dark:text-white/70">React(Next.js)</span>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.4, duration: 1 }}
          className="flex items-center justify-between sm:gap-2 gap-1 sm:mt-10 mt-5 max-sm:w-80"
        >
          <div
            className="bg-white text-black/80 sm:px-4 sm:py-2 group rounded-full max-sm:p-2 flex items-center justify-center cursor-pointer dark:bg-black/80 dark:text-white "
            onClick={() => {
              fahhaudio.play();
              setOpen();
            }}
          >
            <div className="max-sm:text-xs">Contact me here</div>
            <span className="ml-1 group-hover:translate-x-1">
              <FaArrowRight />
            </span>
          </div>
          <div className="bg-white text-black/80 sm:px-4 sm:py-2 max-sm:p-2  rounded-full flex items-center justify-center cursor-pointer dark:bg-black/80 dark:text-white">
            <div className="max-sm:text-xs"> Download CV </div>
            <span className="ml-1">
              <FaDownload />
            </span>
          </div>
          <div
            className="sm:h-12 sm:w-12 h-6 w-6  bg-white rounded-full sm:p-4 max-sm:p-2 flex items-center cursor-pointer dark:bg-black/80 dark:text-white"
            onClick={() => {
              heheaudio.play();
              setLinkOpen();
            }}
          >
            <FaLinkedin className="sm:text-2xl text-xs" />
          </div>
          <div className="sm:h-12 sm:w-12 w-6 h-6  bg-white rounded-full sm:p-4 max-sm:p-2 flex items-center cursor-pointer dark:bg-black/80 dark:text-white">
            
              <FaGithub onClick={()=>{
                window.open(
                  "https://github.com/Nazim9945/Funny-Dummy-portfolio",
                  "_blank",
                );
              }} className="sm:text-2xl" />
            
          </div>
        </motion.div>
      </div>
    );

}
export default Hero