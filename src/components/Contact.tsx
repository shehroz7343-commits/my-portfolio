import { motion } from 'framer-motion';

export default function Contact() {
  const socialLinks = [
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/shehroz7343',
    },
    {
      name: 'GitHub',
      href: 'https://www.github.com/shehroz7343',
    },
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/shehroz7343/',
    },
    {
      name: 'Email',
      href: 'mailto:shehroz7343@gmail.com',
    },
  ];

  return (
    <section
      id="contact"
      className="min-h-screen w-full flex flex-col items-start justify-center bg-[#05020d] transition-colors px-6 sm:px-8 py-12 sm:py-8"
      aria-labelledby="contact-title"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1 }}
        className="flex flex-col items-start justify-center text-left max-w-4xl mx-auto w-full"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="font-gambarino text-4xl sm:text-5xl md:text-6xl text-orange-600 dark:text-orange-600 leading-tight">
            Let's
            <br />
            Connect
          </h2>
          <p className="mt-4 font-mono text-neutral-600 dark:text-neutral-400 text-sm sm:text-md">
            Available for collaborations, opportunities, or just a friendly chat.
          </p>
        </motion.div>

        <div className="flex flex-col gap-8 mb-16">
          {socialLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.href}
              target={link.name !== 'Email' ? '_blank' : undefined}
              rel={link.name !== 'Email' ? 'noopener noreferrer' : undefined}
              className="group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <div className="relative inline-block">
                <div className="flex items-baseline gap-2">
                  <span className="font-gambarino text-2xl sm:text-3xl text-neutral-900 dark:text-white group-hover:text-neutral-600 dark:group-hover:text-neutral-300 transition-colors">
                    {link.name}
                  </span>
                  <span className="text-sm text-orange-600 dark:text-orange-600">
                    {link.name === 'Email' ? 'shehroz7343@gmail.com' : '@shehroz7343'}
                  </span>
                </div>
                <div className="absolute bottom-0 left-0 h-[1px] w-0 group-hover:w-full bg-neutral-600 dark:bg-neutral-600 transition-all duration-500" />
              </div>
            </motion.a>
          ))}
        </div>

        {/* 🔐 Glorified Secure Footer */}
<div className="w-full mt-24 font-mono text-center px-4 text-xs sm:text-base text-neutral-500 dark:text-neutral-400 font-medium tracking-tight">
  🔒&nbsp;
  <a
    href="https://securityheaders.com/?q=https://www.muhammadshehroz.com"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="View Security Headers verification report"
    className="underline underline-offset-4 hover:text-orange-600 dark:hover:text-orange-600 transition-colors"
  >
    A+ Security Verified
  </a>
  &nbsp;·&nbsp;Built & secured by Muhammad Shehroz&nbsp;·&nbsp;© 2025
</div>
      </motion.div>
    </section>
  );
}