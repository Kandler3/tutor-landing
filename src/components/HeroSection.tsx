import React from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import { TELEGRAM_LINKS, ACCENT_COLOR } from '../config/links';

const HeroSection: React.FC = () => {
  return (
    <section
      id="home"
      className="scroll-section flex flex-col items-center text-center bg-bg-primary px-4 md:px-6 pt-24 min-h-screen"
    >
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.13 } },
        }}
        className="flex flex-col items-center"
      >
        <motion.img
          src="/myphoto.png"
          alt="Артём Ковальчук"
          className="rounded-full w-40 h-40 mb-8 shadow-2xl shadow-accent-neon-1/20 border-2 border-accent-neon-1/30"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        />
        <motion.h1
          className="text-4xl md:text-5xl font-extrabold text-white mb-4"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.13 }}
        >
          Артём Ковальчук
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl text-text-secondary mb-8"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.26 }}
        >
          Ваш репетитор по <span style={{ color: ACCENT_COLOR }}>информатике</span>
        </motion.p>
        <motion.div
          className="mt-8 flex flex-wrap justify-center gap-4 md:gap-6"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.39 }}
        >
          <a
            href={TELEGRAM_LINKS.oge}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-lg border text-white text-base font-bold bg-transparent hover:text-white transition min-h-10 min-w-20 interactive hover:bg-[var(--accent-color)]"
            style={{ borderColor: ACCENT_COLOR, '--accent-color': ACCENT_COLOR } as React.CSSProperties}
          >
            ОГЭ
          </a>
          <a
            href={TELEGRAM_LINKS.ege}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-lg border text-white text-base font-bold bg-transparent hover:text-white transition min-h-10 min-w-20 interactive hover:bg-[var(--accent-color)]"
            style={{ borderColor: ACCENT_COLOR, '--accent-color': ACCENT_COLOR } as React.CSSProperties}
          >
            ЕГЭ
          </a>
          <a
            href={TELEGRAM_LINKS.informatics}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-lg border text-white text-base font-bold bg-transparent hover:text-white transition min-h-10 min-w-20 interactive hover:bg-[var(--accent-color)]"
            style={{ borderColor: ACCENT_COLOR, '--accent-color': ACCENT_COLOR } as React.CSSProperties}
          >
            Информатика
          </a>
          <a
            href={TELEGRAM_LINKS.programming}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-lg border text-white text-base font-bold bg-transparent hover:text-white transition min-h-10 min-w-20 interactive hover:bg-[var(--accent-color)]"
            style={{ borderColor: ACCENT_COLOR, '--accent-color': ACCENT_COLOR } as React.CSSProperties}
          >
            Программирование
          </a>
        </motion.div>
      </motion.div>

      <Link
        to="about"
        spy={true}
        smooth={true}
        offset={0}
        duration={500}
        containerId="main-container"
        className="mt-8 flex justify-center text-accent-neon-1 cursor-pointer interactive"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{
            repeat: Infinity,
            duration: 1.5,
            ease: 'easeInOut',
          }}
        >
          <ChevronDownIcon className="h-8 w-8" />
        </motion.div>
      </Link>
    </section>
  );
};

export default HeroSection;



