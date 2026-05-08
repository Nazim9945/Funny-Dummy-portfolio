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
        className="w-120 mx-auto flex flex-col items-center justify-center gap-4 scroll-mt-35"
      >
        <div className="relative">
          <motion.img
            src={SalmonBhaoi}
            className="h-25 w-25 rounded-full border-4 border-white object-cover dark:border-black/80"
            initial={{ opacity: 0, scale: 0, x: -200 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ delay: 1.2, duration: 1 }}
          />
          <motion.span
            initial={{ opacity: 0, scale: 0, x: 200 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ delay: 1.7, duration: 1 }}
            className="absolute right-0 bottom-2  text-xl"
          >
            🦌
          </motion.span>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 200, scale: 0 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="text-center text-2xl leading-10 "
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
          className="flex items-center justify-between gap-2 mt-10"
        >
          <div
            className="bg-white text-black/80 px-4 py-2 group rounded-full flex items-center justify-center cursor-pointer dark:bg-black/80 dark:text-white "
            onClick={() => {
              fahhaudio.play();
              setOpen();
            }}
          >
            <div>Contact me here</div>
            <span className="ml-1 group-hover:translate-x-1">
              <FaArrowRight />
            </span>
          </div>
          <div className="bg-white text-black/80 px-4 py-2  rounded-full flex items-center justify-center cursor-pointer dark:bg-black/80 dark:text-white">
            <div> Download CV </div>
            <span className="ml-1">
              <FaDownload />
            </span>
          </div>
          <div
            className="h-12 w-12  bg-white rounded-full p-4 flex items-center cursor-pointer dark:bg-black/80 dark:text-white"
            onClick={() => {
              heheaudio.play();
              setLinkOpen();
            }}
          >
            <FaLinkedin className="text-2xl" />
          </div>
          <div className="h-12 w-12  bg-white rounded-full p-4 flex items-center cursor-pointer dark:bg-black/80 dark:text-white">
            <FaGithub className="text-2xl" />
          </div>
        </motion.div>
      </div>
    );

}
export default Hero