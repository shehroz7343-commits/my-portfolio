import { motion } from "framer-motion";

const workExperiences = [
  {
    company: "Tech Startup Inc.",
    role: "MERN Stack Developer",
    period: "2024 - 2025",
    description: "Developed full-stack web applications using React, Node.js, Express, and MongoDB. Collaborated with team members to build scalable APIs and responsive user interfaces.",
  },
  {
    company: "Web Development Agency",
    role: "Junior Full Stack Developer",
    period: "2022 - 2023",
    description: "Built and maintained MERN stack projects for various clients. Implemented REST APIs, database schemas, and frontend components with a focus on performance and UX.",
  },
];


export default function Background() {
  return (
    <section
      id="background"
      className="min-h-screen w-full flex flex-col items-start justify-center bg-[#05020d] transition-colors px-6 sm:px-8 py-12 sm:py-8"
      aria-labelledby="experience-title"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1 }}
        className="flex flex-col items-start justify-center text-left max-w-6xl mx-auto w-full"
      >
        <h2 className="font-gambarino text-4xl sm:text-5xl md:text-6xl font-semibold mb-16 text-white">
          My <span className="bg-gradient-to-r from-violet-300 via-fuchsia-300 to-cyan-200 bg-clip-text text-transparent">Experience</span>
        </h2>

        <div className="space-y-20 w-full">
          {/* Work Experience Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="font-gambarino text-2xl sm:text-3xl font-semibold mb-8 text-violet-300">
              Work Experience
            </h3>
            <div className="space-y-8">
              {workExperiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="border-l-2 border-violet-500 pl-6 py-2"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                    <h4 className="text-xl font-bold text-white">{exp.role}</h4>
                    <span className="text-sm text-violet-300 font-mono">{exp.period}</span>
                  </div>
                  <p className="text-sm text-slate-400 mb-3">{exp.company}</p>
                  <p className="text-slate-300 leading-relaxed">{exp.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
