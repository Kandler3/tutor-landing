import React from 'react';
import { FaTelegramPlane } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { TELEGRAM_LINKS, ACCENT_COLOR } from '../config/links';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="scroll-section bg-bg-primary flex justify-center items-start pt-20 min-h-screen">
      <motion.div
        style={{ marginTop: 30 }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto px-4 md:px-6 text-center"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-white">
          Запишитесь на <span style={{ color: ACCENT_COLOR }}>бесплатное</span> занятие
        </h2>
        <p className="text-xl md:text-2xl text-text-secondary mb-8 max-w-2xl mx-auto">
          Свяжитесь со мной в Telegram, чтобы обсудить детали, задать вопросы и назначить бесплатное пробное занятие.
        </p>
        <motion.a
          href={TELEGRAM_LINKS.contact}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#229ED9] text-white text-sm font-semibold px-6 py-3 rounded-md hover:bg-[#1c8dbf] transition flex items-center gap-2 shadow-lg shadow-[#229ED9]/30 min-h-12 min-w-24 interactive w-full sm:w-auto justify-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.13 }}
          viewport={{ once: true }}
        >
          <FaTelegramPlane size={20} />
          Записаться
        </motion.a>
      </motion.div>
    </section>
  );
};

export default ContactSection;




