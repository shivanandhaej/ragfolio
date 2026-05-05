import { motion } from 'framer-motion'

interface EducationData {
    title: string;
    institution: string;
    description?: string;
}

const educationData: EducationData[] = [
    {
        title: "Bachelor of Technology (B.Tech) – Electronics and Communication Engineering",
        institution: "Sree Narayana Guru College of Engineering and Technology",
        description: "Gained advanced knowledge in hardware design, signal processing, and embedded programming, perfectly aligning with a career focus on IoT and automation."
    },
    {
        title: "Higher Secondary (Class XII)",
        institution: "Indira Gandhi Public School"
    },
    {
        title: "Secondary (Class X)",
        institution: "Indira Gandhi Public School"
    }
]

function EducationCard({ data, index }: { data: EducationData; index: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="p-6 rounded-2xl bg-zinc-900/30 border border-zinc-800/80 hover:bg-zinc-900/50 transition-all"
        >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                <h3 className="text-lg font-medium text-white">{data.title}</h3>
            </div>
            <p className="text-zinc-400">{data.institution}</p>
            {data.description && (
                <p className="text-sm text-zinc-500 mt-4 leading-relaxed italic">
                    {data.description}
                </p>
            )}
        </motion.div>
    )
}

export function Education() {
    return (
        <section className="py-12 px-4 border-t border-zinc-800/50">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-2xl font-semibold text-white mb-6">Education</h2>
                <div className="space-y-6">
                    {educationData.map((edu, i) => (
                        <EducationCard key={edu.title} data={edu} index={i} />
                    ))}
                </div>
            </div>
        </section>
    )
}
