
import useInview from "../hooks/useInview";
import { motion } from "motion/react";


const skillsItem = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "TypeScript",
  "React.js",
  "Next.js",
  "Node.js",
  "Express.js",
  "MongoDB",
  "Mongoose",
  "Docker",
  "Redux Toolkit",
  "Tailwind CSS",
  "Prisma",
  "Git & GitHub",
];
const fadeIn={
    initial:{
        opacity:0,y:100
    },
    animate:(index:number)=>{
        return {
            opacity:1,
            y:0,
            transition:{
                delay:0.05 * index
            }
        }
    }
}
const Skills = () => {
    const {ref}=useInview("Skills",0.8)
  return (
    <div ref={ref} id="skills" className="sm:w-150 w-90 mx-auto flex flex-col items-center scroll-mt-20">
        <div className="sm:text-2xl font-semibold mt-20 mb-10 dark:text-white/90">My Skills</div>
        <div className="flex flex-wrap justify-center mb-20 gap-1">
            {
               skillsItem.map((item,index)=>{
                return <motion.div 
                variants={fadeIn}
                initial="initial"
                whileInView="animate"
                custom={index}
                viewport={{
                    once:true
                }}
                className="bg-white  rounded-md  border border-black/40 text-gray-700 sm:px-4 sm:py-2 p-2 dark:bg-black/90 dark:border-white/60 dark:text-gray-100 max-sm:text-xs" key={item}>
                        {item}
                </motion.div>
               })
            }
        </div>
    </div>
  )
}

export default Skills