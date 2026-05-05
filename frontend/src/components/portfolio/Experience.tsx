import { motion } from 'framer-motion'

export function Experience() {
    return (
        <section id="experience" className="py-12 px-4 border-t border-zinc-800/50">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-2xl font-semibold text-white mb-6">Experience</h2>
                <div className="space-y-12">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="relative pl-8 border-l border-zinc-800"
                    >
                        <div className="absolute w-3 h-3 bg-blue-500 rounded-full -left-[6.5px] top-1.5 ring-4 ring-zinc-950"></div>
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                            <h3 className="text-lg font-medium text-white">Academic & Practical Experience</h3>
                            <span className="text-sm text-zinc-500">Jan 2020 - Present</span>
                        </div>
                        <p className="text-blue-400 text-sm mb-3">Sree Narayana Guru College of Engineering and Technology</p>
                        <p className="text-zinc-400 text-sm leading-relaxed">
                            Focused on rigorous hands-on project work bridging the gap between hardware and software. Demonstrated strong problem-solving capabilities by independently designing and developing embedded applications and real-time systems.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
