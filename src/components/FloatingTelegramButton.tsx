import React, { useState, useEffect } from 'react';
import { FaTelegramPlane } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { TELEGRAM_LINKS } from '../config/links';

const FloatingTelegramButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.a
          href={TELEGRAM_LINKS.base}
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 bg-[#229ED9] text-white p-4 rounded-full shadow-2xl shadow-[#229ED9]/40 hover:bg-[#1c8dbf] transition-colors duration-300 z-40 flex items-center justify-center interactive"
          aria-label="Написать в Telegram"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          transition={{ duration: 0.3 }}
        >
          <FaTelegramPlane size={24} />
        </motion.a>
      )}
    </AnimatePresence>
  );
};

export default FloatingTelegramButton;

