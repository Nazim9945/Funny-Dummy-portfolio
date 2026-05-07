import { motion } from "motion/react";

import useInview from "../hooks/useInview";


const fadeIn = {
  initial: { opacity: 0, y: 100 },

  animate: { opacity: 1, y: 0, transition: { duration: 1 ,delay:0.35} },
};
const About = () => {
  const { ref } = useInview("about", 0.8);
  return (
    <motion.div
    ref={ref} 
    variants={fadeIn}
    initial="initial"
    whileInView={"animate"}
    viewport={{
      once:true
    }}
   
    id="about"
    className="max-w-180 leading-7 mx-auto text-center flex flex-col items-center gap-4 mb-40 scroll-mt-55">
      <div className="capitalize text-2xl">About me</div>
      <p>
        After graduating with a degree in{" "}
        <span className="font-medium">Accounting</span>, I decided to pursue my
        passion for programming. I enrolled in a codingbootcamp and learned{" "}
        <span className="font-medium">full-stack web development</span>. My
        favorite part of programming is the problem-solving aspect. I love the
        feeling of finally figuring out a solution to a problem. My core stack
        is{" "}
        <span className="font-medium">
          React, Next.js, Node.js, and MongoDB
        </span>
        . I am also familiar with TypeScript and Prisma. I am always looking to
        learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer.
      </p>
      <p>
        {" "}
        When I'm not coding, I enjoy playing video games, watching movies, and
        playing with my dog. I also enjoy learning new things. I am currently
        learning about{" "}
        <span className="font-medium">history and philosophy</span>. I'm also
        learning how to play the guitar.
      </p>
    </motion.div>
  );
}

export default About