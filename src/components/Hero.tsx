import { motion } from 'framer-motion';

const leftSkills = ['HTML', 'CSS', 'JavaScript', 'React.js', 'Node.js'];
const rightSkills = ['Express.js', 'MongoDB', 'Tailwind CSS', 'REST APIs', 'Full Stack'];

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

export default function Hero() {
  return (
    <section
      id="intro"
      aria-label="Hero section: Hi, I'm Sahil — crafting digital experiences that blend beautiful design with cutting-edge technology."
      className="relative min-h-screen overflow-hidden px-4 sm:px-8 pt-28 lg:pt-32 text-white"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(167,106,255,0.16),transparent_18%),radial-gradient(circle_at_70%_15%,rgba(255,255,255,0.08),transparent_15%),linear-gradient(180deg,rgba(10,11,30,0.92),rgba(4,6,20,0.98))]" />
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-16 top-24 h-28 w-28 rounded-full bg-violet-500/20 blur-3xl" />
        <div className="absolute right-20 top-32 h-24 w-24 rounded-full bg-fuchsia-500/15 blur-3xl" />
        <div className="absolute left-1/2 top-12 h-44 w-44 -translate-x-1/2 rounded-full bg-slate-300/5 blur-3xl" />
        <div className="absolute left-8 bottom-32 h-16 w-16 rounded-full bg-slate-100/5 blur-2xl" />
      </div>

      <div className="hidden lg:flex absolute left-8 top-1/2 -translate-y-1/2 flex-col gap-3">
        {leftSkills.map((skill) => (
          <span
            key={skill}
            className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 shadow-[0_0_40px_rgba(255,255,255,0.02)]"
          >
            {skill}
          </span>
        ))}
      </div>

      <div className="hidden lg:flex absolute right-8 top-1/2 -translate-y-1/2 flex-col gap-3">
        {rightSkills.map((skill) => (
          <span
            key={skill}
            className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 shadow-[0_0_40px_rgba(255,255,255,0.02)]"
          >
            {skill}
          </span>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative mx-auto flex max-w-6xl flex-col items-center justify-center text-center"
      >
        <div className="inline-flex rounded-full border border-white/10 bg-white/5 px-5 py-2 text-xs uppercase tracking-[0.35em] text-violet-200 shadow-lg shadow-violet-500/10 backdrop-blur-sm">
          MERN Stack Developer
        </div>

        <h1 className="mt-10 max-w-4xl text-5xl font-gambarino leading-tight tracking-tight text-white sm:text-[5.25rem] md:text-[5.75rem]">
          Hi, I'm <span className="bg-gradient-to-r from-violet-300 via-fuchsia-300 to-cyan-200 bg-clip-text text-transparent">Muhammad Shehroz</span>
        </h1>

        <p className="mt-6 max-w-3xl text-base leading-relaxed text-slate-300 sm:text-lg">
          Building robust <span className="text-violet-300">full-stack applications</span> with MongoDB, Express, React, and Node.js. Creating seamless web experiences that combine elegant design with <span className="font-semibold text-white">powerful backend solutions</span>.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#work"
            className="inline-flex items-center justify-center rounded-full bg-violet-500 px-8 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white shadow-lg shadow-violet-500/25 transition hover:bg-violet-400"
          >
            Explore My Work
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-8 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white transition hover:border-violet-300 hover:text-violet-200"
          >
            Let's Connect ↗
          </a>
        </div>

        <div className="mt-16 flex flex-col items-center gap-2 text-sm text-slate-400">
          <button
            onClick={() => scrollToSection('work')}
            className="flex flex-col items-center gap-2 cursor-pointer hover:text-violet-300 transition-colors"
            aria-label="Scroll to work section"
          >
            <span>Scroll to explore</span>
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-lg text-white/80 hover:border-violet-300 transition-colors animate-bounce">↓</span>
          </button>
        </div>
      </motion.div>
    </section>
  );
}