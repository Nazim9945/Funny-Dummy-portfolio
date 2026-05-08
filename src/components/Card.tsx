import { motion, useScroll, useTransform } from "motion/react";
import TagButton from "./TagButton"
import { useRef } from "react";


interface Props {
  title: string;
  description: string;
  tags: string[];
  imageUrl: any;
  index: boolean;
}

const Card = ({title,description,tags,index,imageUrl}:Props) => {
    const ref=useRef(null)
    const {scrollYProgress}=useScroll({
        target:ref,
        offset:["0 1","1.33 1"]
    })
    const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.5, 1]);
  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: scaleProgress,
      }}
      className={` ${!index ? "flex-row-reverse bg-gray-50 dark:bg-gray-800" : "bg-gray-100 dark:bg-gray-950"}    flex justify-between w-full  p-4 gap-2 rounded-md overflow-hidden group`}
    >
      <div className="flex flex-col justify-between w-[60%]">
        <div className="gap-2 flex flex-col">
          <div className="sm:text-2xl max-sm:text-xl mb-2 font-medium dark:text-white/90">
            {title}
          </div>
          <div className="sm:text-xl max-sm:text-xs sm:leading-8 max-sm:leading-5 mt-4 max-sm:mb-5 text-gray-500 dark:text-gray-300">
            {description}
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-5">
          {tags.map((d) => {
            return <TagButton key={d} text={d} />;
          })}
        </div>
      </div>
      <div
        className={`w-[40%] relative ${index ? "left-20 rotate-15" : "-left-20 -rotate-15"} group-hover:left-0 group-hover:rotate-0  rounded-md transition-all duration-1000 overflow-hidden shadow-lg shadow-gray-900 dark:shadow-gray-600`}
      >
        <img src={imageUrl} className="  w-full h-full " />
      </div>
    </motion.div>
  );
}

export default Card