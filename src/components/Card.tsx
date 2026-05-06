import { motion, useScroll, useTransform } from "motion/react";
import TagButton from "./TagButton"
import { useRef, useTransition } from "react";


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
      className={` ${!index ? "flex-row-reverse bg-gray-50" : "bg-gray-100"}    flex justify-between w-full  p-4 gap-2 rounded-md overflow-hidden group`}
    >
      <div className="flex flex-col justify-between w-[60%]">
        <div className="gap-2 flex flex-col">
          <div className="text-2xl mb-2 font-medium">{title}</div>
          <div className="text-xl leading-8 mt-4 text-gray-500">
            {description}
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-5">
          {tags.map((d) => {
            return <TagButton text={d} />;
          })}
        </div>
      </div>
      <div
        className={`w-[40%] relative ${index ? "left-20 rotate-15" : "-left-20 -rotate-15"} group-hover:left-0 group-hover:rotate-0  rounded-lg transition-all duration-1000`}
      >
        <img
          src={imageUrl}
          className=" shadow-lg shadow-gray-400 w-full h-full "
        />
      </div>
    </motion.div>
  );
}

export default Card