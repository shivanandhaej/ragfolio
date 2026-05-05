import { motion } from 'framer-motion'

interface ProjectData {
  title: string;
  description: string;
  tags: string[];
}

const projectsData: ProjectData[] = [
  {
    title: "Real-Time Operating System (RTOS)",
    description: "Designed and developed a lightweight, deterministic RTOS for embedded applications. Implemented task scheduling and resource allocation algorithms to handle strict timing constraints without deadlocks.",
    tags: ["C/C++", "Microcontrollers"]
  }
]

function ProjectCard({ data, index }: { data: ProjectData; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ scale: 1.02 }}
      className="p-6 rounded-xl bg-zinc-900/40 border border-zinc-800 hover:border-zinc-700 transition-colors cursor-default"
    >
      <h3 className="font-medium text-white text-lg">{data.title}</h3>
      <p className="text-sm text-zinc-400 mt-2 leading-relaxed">{data.description}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {data.tags.map((tag) => (
          <span key={tag} className="text-xs px-2 py-1 rounded bg-zinc-800 text-zinc-300">{tag}</span>
        ))}
      </div>
    </motion.div>
  )
}

export function Projects() {
  return (
    <section id="projects" className="py-12 px-4 border-t border-zinc-800/50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold text-white mb-6">Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {projectsData.map((project, index) => (
            <ProjectCard key={index} data={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
