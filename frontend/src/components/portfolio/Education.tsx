import { motion } from 'framer-motion'

export function Education() {
    return (
        <section className="py-12 px-4 border-t border-zinc-800/50">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-2xl font-semibold text-white mb-6">Education</h2>
                <div className="space-y-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="p-6 rounded-2xl bg-zinc-900/30 border border-zinc-800/80 hover:bg-zinc-900/50 transition-all"
                    >
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                            <h3 className="text-lg font-medium text-white">Bachelor of Technology (B.Tech) – Electronics and Communication Engineering</h3>
                        </div>
                        <p className="text-zinc-400">Sree Narayana Guru College of Engineering and Technology</p>
                        <p className="text-sm text-zinc-500 mt-4 leading-relaxed italic">
                            Gained advanced knowledge in hardware design, signal processing, and embedded programming, perfectly aligning with a career focus on IoT and automation.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="p-6 rounded-2xl bg-zinc-900/30 border border-zinc-800/80 hover:bg-zinc-900/50 transition-all"
                    >
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                            <h3 className="text-lg font-medium text-white">Higher Secondary (Class XII)</h3>
                        </div>
                        <p className="text-zinc-400">Indira Gandhi Public School</p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="p-6 rounded-2xl bg-zinc-900/30 border border-zinc-800/80 hover:bg-zinc-900/50 transition-all"
                    >
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                            <h3 className="text-lg font-medium text-white">Secondary (Class X)</h3>
                        </div>
                        <p className="text-zinc-400">Indira Gandhi Public School</p>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
