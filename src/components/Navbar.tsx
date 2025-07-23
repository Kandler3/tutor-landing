import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FaTelegramPlane } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { TELEGRAM_LINKS } from '../config/links';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const mainContainer = document.getElementById('main-container');
    const handleScroll = () => {
      if (mainContainer) {
        setIsScrolled(mainContainer.scrollTop > 10);
      }
    };
    mainContainer?.addEventListener('scroll', handleScroll);
    return () => {
      mainContainer?.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-[#23272f] ${
        isScrolled ? 'bg-bg-primary/90 backdrop-blur-sm shadow-lg shadow-black/20' : 'bg-transparent'
      }`}
    >
      <div className="max-w-5xl mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center py-4 gap-4">
          <Link
            to="home"
            smooth={true}
            duration={500}
            containerId="main-container"
            className="cursor-pointer interactive flex-shrink-0"
          >
            <h1 className="text-lg font-bold text-white font-clash">Артём Ковальчук</h1>
          </Link>
          <a
            href={TELEGRAM_LINKS.base}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-md bg-[#229ED9] text-white text-sm font-semibold flex items-center gap-2 interactive transition hover:bg-[#1c8dbf] shadow-lg shadow-[#229ED9]/30 mr-2"
            style={{ transition: 'box-shadow 0.3s' }}
          >
            <FaTelegramPlane />
            <span>Связаться</span>
          </a>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
