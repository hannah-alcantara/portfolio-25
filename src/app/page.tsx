import { Project } from "./types";
import Hero from "@/components/hero";
import ProjectCard from "@/components/project-card"


const projects: Project[] = [
  {
    id: 1,
    title: "Skincare Tracker",
    description: "A comprehensive web application for managing your skincare product collection, tracking expiration dates, and monitoring product usage.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui", "Supabase"],
    imageUrl: "test",
    liveUrl: "test",
    githubUrl: "https://github.com/hannah-alcantara/skincare-tracker",
    backgroundColor: "bg-green"
  },
  {
    id: 2,
    title: "Cinemate",
    description: "A comprehensive web application for managing your skincare product collection, tracking expiration dates, and monitoring product usage.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui", "Supabase"],
    imageUrl: "test",
    liveUrl: "test",
    githubUrl: "https://github.com/hannah-alcantara/skincare-tracker",
    backgroundColor: "bg-green"
  },
]

export default function Home() {
  return (
    <div>
      <Hero />
      {/* About Me Section */}
      <section className="bg-purple px-6 py-20 text-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <div className="max-w-lg">
            <h2 className="text-5xl font-bowlby mb-8">
              About Me
              <div className="w-70 h-2 bg-white mt-2"></div>
            </h2>
            <p className="text-lg mb-6 leading-relaxed">I am a Full Stack Developer based in Los Angeles!</p>
            <p className="text-lg mb-6 leading-relaxed">
              I was formerly a graphic designer, I love to bring a unique blend of creativity and technical expertise to
              my work.
            </p>
            <p className="text-lg leading-relaxed">
              In my free time, I enjoy crocheting, watching films, and exploring new technologies
            </p>
          </div>

          {/* Yellow organic shape */}
          <div className="relative">
            <div className="w-80 h-60 bg-yellow-400 rounded-full transform rotate-12 opacity-90"></div>
            {/* Decorative stars */}
            <div className="absolute -top-8 -left-8 text-yellow-300 text-2xl">✦</div>
            <div className="absolute -bottom-8 -right-8 text-yellow-300 text-xl">✦</div>
          </div>
        </div>
      </section>
      {projects.map((project, index) => (
        <ProjectCard
          key={project.id}
          title={project.title}
          description={project.description}
          technologies={project.technologies}
          imageUrl={project.imageUrl}
          liveUrl={project.liveUrl}
          githubUrl={project.githubUrl}
          backgroundColor={project.backgroundColor}
        />
      ))}

    </div>
  );
}
``