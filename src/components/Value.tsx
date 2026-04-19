import { motion, useAnimation } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { useInView } from 'framer-motion';

export default function Value() {
  const skillCategories = [
    {
      category: "Frontend",
      skills: ["HTML", "CSS", "JavaScript", "React.js", "Tailwind CSS"]
    },
    {
      category: "Backend",
      skills: ["Node.js", "Express.js", "MongoDB", "REST APIs"]
    },
    {
      category: "Developer Skills",
      skills: ["Full Stack Development", "Responsive Design", "Problem Solving", "Git & GitHub"]
    }
  ];

  const controls = useAnimation();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { margin: '-100px', once: true });

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  const containerVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.3,
        duration: 1,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
      }
    }
  };

  return (
    <section
      id="values"
      aria-label="Core values section"
      ref={sectionRef}
      className="min-h-screen w-full flex flex-col items-start justify-center bg-[#05020d] transition-colors px-6 sm:px-8 py-12 sm:py-8"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={controls}
        className="flex flex-col items-start justify-center text-left max-w-6xl mx-auto w-full"
      >
        <h2 className="font-gambarino text-4xl sm:text-5xl md:text-6xl font-semibold mb-16 text-white">
          My <span className="bg-gradient-to-r from-violet-300 via-fuchsia-300 to-cyan-200 bg-clip-text text-transparent">Skills</span>
        </h2>
        
        <div className="grid md:grid-cols-3 gap-12 w-full">
          {skillCategories.map((category) => (
            <motion.div
              key={category.category}
              variants={itemVariants}
              className="flex flex-col"
            >
              <h3 className="font-gambarino text-2xl sm:text-3xl md:text-4xl font-semibold mb-6 text-violet-300">
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/30 text-violet-200 text-sm font-medium hover:bg-violet-500/20 hover:border-violet-500/50 transition-all"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}