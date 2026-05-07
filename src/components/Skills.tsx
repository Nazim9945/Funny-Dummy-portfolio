
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
    <div ref={ref} id="skills" className="w-150 mx-auto flex flex-col items-center scroll-mt-20">
        <div className="text-2xl font-semibold mt-20 mb-10">My Skills</div>
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
                className="bg-white  rounded-md  border border-black/40 text-gray-700 px-4 py-2" key={item}>
                        {item}
                </motion.div>
               })
            }
        </div>
    </div>
  )
}

export default Skills