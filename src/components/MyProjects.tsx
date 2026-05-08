
import Card from "./Card"
import pick1 from '../../public/pick1.png'
import pick2 from "../../public/pick2.png";
import pick3 from "../../public/pick3.png";
import pick4 from "../../public/pick4.png";

import useInview from "../hooks/useInview";
const CardData: {
  title: string;
  description: string;
  tags: string[];
  imageUrl: any,
  index:boolean

}[] = [
  {
    title: "Personal Portfolio Website",
    description:
      "A modern portfolio website to showcase my projects, skills, and experience with smooth animations and responsive design.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    imageUrl: pick1,
    index:true
  },
  {
    title: "E-commerce Store",
    description:
      "A full-stack e-commerce application with product listings, shopping cart, payment integration, and admin dashboard.",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    imageUrl: pick2,
    index:false
  },
  {
    title: "Task Management App",
    description:
      "A productivity app that helps users manage daily tasks with drag-and-drop features and real-time updates.",
    tags: ["React", "Firebase", "Redux", "Material UI"],
    imageUrl: pick3,
    index:true
  },
  {
    title: "Social Media Dashboard",
    description:
      "An analytics dashboard that visualizes social media metrics with interactive charts and performance insights.",
    tags: ["Vue.js", "Chart.js", "Express", "PostgreSQL"],
    imageUrl: pick4,
    index:false
  },
];
const MyProjects = () => {
  const {ref}=useInview("projects",0.2)
  return (
    <div ref={ref} id="projects" className="w-160 mx-auto scroll-mt-30">
      <div className="text-2xl text-center mb-8">My Projects</div>
      <div className="flex flex-col gap-8">
        {CardData.map((data) => {
          return <Card key={data.title} {...data}/>;
        })}
      </div>
    </div>
  );
}

export default MyProjects