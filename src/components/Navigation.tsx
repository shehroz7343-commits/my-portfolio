import { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import resume from '../assets/Muhammad_Shehroz_MERN_CV.pdf';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { id: 'intro', label: 'Home' },
  { id: 'work', label: 'Projects' },
  { id: 'values', label: 'Skills' },
  { id: 'background', label: 'Experience' },
  { id: 'about', label: 'About' },
  { id: 'contact', label: 'Contact' },
];

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('intro');
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const options = { root: null, rootMargin: '-40% 0px -40% 0px', threshold: 0 };
    observer.current = new IntersectionObserver((entries) => {
      entries.forEach(entry => entry.isIntersecting && setActiveSection(entry.target.id));
    }, options);

    const sections = document.querySelectorAll('section[id]');
    sections.forEach(sec => observer.current?.observe(sec));

    return () => sections.forEach(sec => observer.current?.unobserve(sec));
  }, []);

  const isActive = (section: string) => activeSection === section;

  const navLinkClass = (section: string) =>
    `text-slate-300 hover:text-white transition-colors text-sm font-gambarino tracking-tight leading-none ${
      isActive(section) ? 'text-violet-300 font-semibold' : ''
    }`;

  const mobileNavLinkClass = (section: string) =>
    `block text-slate-200 hover:text-white transition-colors text-xl font-gambarino tracking-tight leading-none ${
      isActive(section) ? 'text-violet-300 font-semibold' : ''
    }`;

  const menuVariants = {
    hidden: { opacity: 0, y: '-100%' },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, when: 'beforeChildren', staggerChildren: 0.1 },
    },
    exit: {
      opacity: 0,
      y: '-100%',
      transition: { duration: 0.5, staggerChildren: 0.1, staggerDirection: -1 },
    },
  };

  const linkVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.4 } },
    exit: { opacity: 0, x: -20, transition: { duration: 0.3 } },
  };

  return (
    <>
      <AnimatePresence mode="wait">
        {isMenuOpen && (
          <motion.div
            key="mobile-menu"
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="lg:hidden fixed inset-0 z-[100] bg-[#05020d]"
          >
            <motion.div className="h-full flex flex-col justify-center items-start px-8 pb-8">
              <div className="space-y-6 w-full">
                {navLinks.map((link) => (
                  <motion.a
                    key={link.id}
                    href={`#${link.id}`}
                    variants={linkVariants}
                    className={
                      `${mobileNavLinkClass(link.id)} py-1 pl-2 pr-6 relative transition-all flex items-center justify-between` +
                      (isActive(link.id)
                        ? ' font-semibold'
                        : ' hover:pl-3')
                    }
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span>{link.label}</span>
                  </motion.a>
                ))}
                <div className="border-t border-white/10 pt-4 mt-2 w-full">
                  <motion.a
                    href={resume}
                    download="Muhammad_Shehroz_MERN_CV.pdf"
                    variants={linkVariants}
                    onClick={() => setIsMenuOpen(false)}
                    className="underline decoration-dotted underline-offset-2 text-slate-200 hover:text-violet-300 transition-colors text-xl font-gambarino tracking-tight leading-none flex items-center gap-1 pt-2"
                  >
                    Resume*
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.nav
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="hidden lg:flex fixed top-0 inset-x-0 z-[101] items-center justify-between border-b border-white/10 bg-black/50 px-10 py-5 backdrop-blur-xl"
      >
        <div className="flex items-center gap-4">
          <a href="#intro" className="text-lg font-gambarino text-white tracking-tight transition hover:text-violet-300">
            Muhammad Shehroz.
          </a>
          <span className="text-sm text-slate-400">Portfolio</span>
        </div>

        <div className="flex items-center gap-8">
          {navLinks.map((link) => (
            <a key={link.id} href={`#${link.id}`} className={navLinkClass(link.id)}>
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <ThemeToggle />
          <a
            href={resume}
            download="Muhammad_Shehroz_MERN_CV.pdf"
            className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200 transition hover:border-violet-300 hover:text-white"
          >
            Resume*
          </a>
        </div>
      </motion.nav>

      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="lg:hidden fixed top-0 left-0 right-0 z-[101] flex items-center justify-between px-6 py-4 bg-black/70 backdrop-blur-xl"
      >
        <a href="#intro" className="text-xl font-gambarino text-white hover:text-violet-300 transition-colors tracking-tight leading-none">
          Sahil.
        </a>
        <div className="flex items-center space-x-4">
          <ThemeToggle />
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            className="text-white p-1"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.div>
    </>
  );
}
