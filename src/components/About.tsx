import Image from "next/image";
import profile from "../../public/pp.jpg";
import SkillCard from "./ui/SkillsCard";
import { skills } from "@/lib/skills";
import TimeEducation from "./ui/TimeEducation";

const About = () => {
  return (
    <section id="about" className="py-20 px-8 pt-24">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <Image
              src={profile}
              width={264}
              height={264}
              alt="Profile Picture"
              className="rounded-full mx-auto object-cover"
            />
          </div>
          <div className="md:w-2/2 md:pl-12">
            <p className="text-lg leading-relaxed mb-1">
              Informatics student at Universitas Majalengka who is passionate
              about technology, design, and building digital solutions. I love
              exploring web development, and AI —fields that allow me to turn
              ideas into impactful projects. I’m always eager to learn, collaborate, and contribute to
              innovative projects that make a difference. Outside of coding, I
              enjoy football culture and exploring community projects, which
              help me stay inspired and connected with people around me.
            </p>
            <h5 className="text-lg font-semibold mt-4">Skills</h5>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <SkillCard
                  key={skill.id}
                  title={skill.title}
                  image={skill.image}
                />
              ))}
            </div>
            <h5 className="text-lg font-semibold mt-6">Education</h5>
            <div className="relative flex items-center justify-between w-full mt-5">
              <div className="absolute top-6 left-0 right-0 h-0.5 bg-neutral-700 -z-10"></div>
              <TimeEducation
                logo="/education/unma.png"
                title="Universitas Majalengka"
                subtitle="Informatics"
                date="2023-Now"
              />
              <TimeEducation
                logo="/education/smk.png"
                title="SMKN 1 Maja"
                subtitle="Software Engineering"
                date="2020-2023"
              />
              <TimeEducation
                logo="/education/smp.png"
                title="SMPN 1 Argapura"
                subtitle="General"
                date="2018-2020"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
