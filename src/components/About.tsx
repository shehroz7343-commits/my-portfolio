import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

export default function About() {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <section
      id="about"
      className="min-h-screen w-full flex flex-col items-start justify-center bg-[#05020d] text-white transition-colors px-6 sm:px-8 py-12 sm:py-8"
      aria-labelledby="about-title"
    >
      <div className="flex flex-col w-full max-w-7xl mx-auto py-24">
        {/* Center: Bio */}
        <div className="w-full flex items-start justify-center">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="max-w-2xl text-sm sm:text-base font-mono text-justify leading-relaxed"
          >
            <p>
              I'm Muhammad Shehroz, a passionate MERN Stack Developer dedicated to building full-stack web applications that solve real-world problems. I specialize in creating robust, scalable solutions using MongoDB, Express.js, React.js, and Node.js. With expertise in HTML, CSS, JavaScript, and Tailwind CSS, I craft responsive, user-friendly interfaces combined with powerful backend APIs. I'm driven by curiosity and a commitment to writing clean, maintainable code. Every project is an opportunity to learn and grow as a developer. I believe in the power of technology to create meaningful digital experiences and am constantly exploring new tools and best practices to stay at the forefront of full-stack development. Based in Mumbai, I'm passionate about collaborating with teams to bring innovative ideas to life through code.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}