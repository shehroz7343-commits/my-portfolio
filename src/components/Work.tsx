import { motion } from "framer-motion";
import { useEffect, useState } from "react";
export default function Work() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768); // 768px is typical tablet/mobile breakpoint
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack MERN application with product catalog, shopping cart, and secure payment integration. Built with MongoDB for data management and Express API.",
      image: "https://picsum.photos/seed/project1/400/225",
      technologies: ["React.js", "Node.js", "Express", "MongoDB"],
    },
    {
      title: "Task Management App",
      description: "A collaborative task management tool built with React frontend and Node.js backend. Features real-time updates with MongoDB database integration.",
      image: "https://picsum.photos/seed/project2/400/225",
      technologies: ["React.js", "Tailwind CSS", "Node.js", "MongoDB"],
    },
    {
      title: "Social Media Dashboard",
      description: "A responsive social media dashboard built with React and Tailwind CSS. Backend API developed with Express.js and MongoDB for user data management.",
      image: "https://picsum.photos/seed/project3/400/225",
      technologies: ["React.js", "Express", "MongoDB", "Tailwind CSS"],
    },
  ];

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isMobile) return; // Don't apply 3D effect on mobile
    
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = (y - centerY) / 15;
    const rotateY = (centerX - x) / 15;
    
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isMobile) return; // Don't reset transform on mobile
    e.currentTarget.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
  };

  return (
    <motion.section
      id="work"
      className="min-h-screen w-full flex flex-col items-center justify-center bg-[#05020d] transition-colors py-12 sm:py-8 lg:pl-[10%]"
      aria-labelledby="portfolio-title"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ staggerChildren: 0.2 }}
      variants={{
        hidden: {},
        visible: {},
      }}
    >
      <motion.div
        className="w-full max-w-6xl mx-auto"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-5 sm:gap-y-10 gap-y-14">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="group h-full flex border border-orange-500/20 dark:border-orange-500/20 rounded-xl flex-col p-6  backdrop-blur-sm transition-all duration-300 hover:border-orange-500/50 hover:dark:border-orange-500/30"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{
                transformStyle: 'preserve-3d',
                transition: 'transform 0.5s cubic-bezier(0.23, 1, 0.32, 1)',
                willChange: 'transform'
              }}
            >
              <div
                aria-label={`Project: ${project.title}`}
                className="flex flex-col gap-4 flex-1"
              >
                <div className="flex flex-col gap-4 flex-1">
                  <div className="w-full aspect-[16/9] overflow-hidden rounded-lg mb-2">
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                      initial={{ scale: 1 }}
                      transition={{ duration: 0.5 }}
                    />
                  </div>
                  <h3 className="font-gambarino text-[1.45rem] sm:text-2xl font-semibold text-neutral-900 dark:text-white mb-1 leading-tight">
                    {project.title}
                  </h3>
                  <p className="text-neutral-600 dark:text-neutral-400 font-mono text-[1rem] leading-relaxed mb-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="text-xs px-2.5 py-1 rounded-full border border-orange-500/20 dark:border-orange-500/20 text-orange-700 dark:text-orange-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
}