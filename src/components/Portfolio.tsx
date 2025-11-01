import { projects } from "@/lib/projects";
import Image from "next/image";

const Portfolio = () => {
  const isSingleProject = projects.length === 1;

  return (
    <section id="portfolio" className="py-10 px-8">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Project</h2>
        <div
          className={`grid gap-8 ${
            isSingleProject
              ? "grid-cols-1 place-items-center"
              : "grid-cols-1 md:grid-cols-3"
          }`}
        >
          {projects.map((project, index) => (
            <div
              key={index}
              className="rounded-lg shadow-md border border-neutral-700 overflow-hidden"
            >
              <Image
                src={project.image}
                alt={project.title}
                width={500}
                height={300}
                className="object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-sm">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
