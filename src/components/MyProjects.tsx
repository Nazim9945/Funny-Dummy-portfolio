
import Card from "./Card"
import useInview from "../hooks/useInview";
import { CardData } from "../data/CardData";
const MyProjects = () => {
  const {ref}=useInview("projects",0.2)
  return (
    <div ref={ref} id="projects" className="sm:w-160 w-90 mx-auto scroll-mt-30">
      <div className="sm:text-2xl text-center mb-8">My Projects</div>
      <div className="flex flex-col gap-8">
        {CardData.map((data) => {
          return <Card key={data.title} {...data}/>;
        })}
      </div>
    </div>
  );
}

export default MyProjects