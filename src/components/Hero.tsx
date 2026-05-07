import { motion } from 'motion/react';
import SalmonBhaoi from '../../public/salmonbhoi.jpg'
import { FaArrowRight, FaDownload, FaGithub, FaLinkedin } from 'react-icons/fa';
import useInview from '../hooks/useInview';



const Hero=()=>{
  const { ref } = useInview("home", 0.7);
    return (
      <div
      id='home'
      ref={ref}
       className="w-120 mx-auto flex flex-col items-center justify-center gap-4 scroll-mt-40">
        <div className="relative">
          <motion.img
            src={SalmonBhaoi}
            className="h-25 w-25 rounded-full border-4 border-white object-cover"
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
          className="text-center text-2xl"
        >
          <span className="font-bold text-black">Hello I'm Salmon bhoi</span>. I am{" "}
          <span className="font-bold">full-stack developer</span> with{" "}
          <span>8 years</span> of experience. I enjoy building{" "}
          <span className="italic">sites & app</span>. My focus is{" "}
          <span className="underline">React(Next.js)</span>
        </motion.div>
        <motion.div
         initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0}}
          transition={{ delay: 2.4, duration: 1 }}
         className="flex items-center justify-between gap-2">
          <div className="bg-black text-white px-4 py-2 group rounded-full flex items-center justify-center cursor-pointer">
            <div>Contact me here</div>
            <span className="ml-1 group-hover:translate-x-1">
              <FaArrowRight />
            </span>
          </div>
          <div className="bg-white text-black px-4 py-2  rounded-full flex items-center justify-center cursor-pointer">
            <div> Download CV </div>
            <span className="ml-1">
              <FaDownload />
            </span>
          </div>
          <div className="h-12 w-12  bg-white rounded-full p-4 flex items-center cursor-pointer">
            <FaLinkedin  className='text-2xl'/>
          </div>
          <div className="h-12 w-12  bg-white rounded-full p-4 flex items-center cursor-pointer">
            <FaGithub  className='text-2xl'/>
          </div>
        </motion.div>
      </div>
    );

}
export default Hero