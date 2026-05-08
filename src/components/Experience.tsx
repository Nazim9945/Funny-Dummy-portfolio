
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";
import { ExperienceData } from "../data/experienceData";
import React from "react";
import useInview from "../hooks/useInview";


const Experience = ({theme}:{theme:string}) => {
  
 
    const { ref } = useInview("Experience", 0.4);
  return (
    <div ref={ref} id="experience" className="mb-20 sm:w-220 w-100 mx-auto scroll-mt-20">
      <div className="sm:text-2xl text-xl font-semibold  text-center mb-10">Experience</div>
      <VerticalTimeline lineColor="">
        {ExperienceData.map(({ title, description, date, icon, location }) => {
          return (
            <React.Fragment key={title}>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{
                  background: theme === "light" ? "white" : "black",
                  color: theme === "light" ? "black" : "white",
                  boxShadow: "none",
                  border: "1px solid rgba(0, 0, 0, 0.05)",
                  textAlign: "left",
                  padding: "1.3rem 2rem",
                }}
                dateClassName="mx-5"
                contentArrowStyle={{
                  borderRight: "0.4rem solid #9ca3af",
                }}
                iconStyle={{
                  background: theme == "light" ? "white" : "black",
                  fontSize: "0.7rem",
                }}
                date={date}
                icon={icon}
              >
                <div className="font-semibold capitalize">{title}</div>
                <div className="font-normal">{description}</div>
                <div className="text-gray-700 font-normal mt-1 dark:text-gray-200">{location}</div>
              </VerticalTimelineElement>
            </React.Fragment>
          );
        })}
      </VerticalTimeline>
    </div>
  );
}

export default Experience