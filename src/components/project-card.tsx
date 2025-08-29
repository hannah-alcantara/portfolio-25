export interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  liveUrl: string;
  githubUrl: string;
  backgroundColor?: string;
}

export default function ProjectCard({
  title,
  description,
  technologies,
  imageUrl,
  liveUrl,
  githubUrl,
  backgroundColor = "bg-emerald-500",
}: ProjectCardProps) {
  return (
    <section className={`${backgroundColor} px-6 py-20 relative overflow-hidden`}>
      <div className='max-w-6xl mx-auto flex items-center justify-between'>
        <div className='max-w-sm'>
          <h2 className='text-5xl font-bold text-white mb-6'>{title}</h2>
          <p className='text-white/90 text-sm leading-relaxed'>{description}</p>
          <div className='flex flex-wrap gap-2 mt-4'>
            {technologies.map((tech, index) => (
              <span
                key={index}
                className='text-xs bg-white/20 text-white px-2 py-1 rounded'
              >
                {tech}
              </span>
            ))}
          </div>
          <div className='flex gap-4 mt-6'>
            <a
              href={liveUrl}
              className='bg-white border-1 border-foreground rounded-xl px-3 py-1 text-sm'
            >
              Live Site
            </a>
            <a href={githubUrl} className='text-white underline'>
              GitHub
            </a>
          </div>
        </div>

        <div className='bg-white rounded-lg w-96 h-72 shadow-lg overflow-hidden'>
          <img
            src={imageUrl}
            alt={title}
            className='w-full h-full object-cover'
          />
        </div>
      </div>
    </section>
  );
}
