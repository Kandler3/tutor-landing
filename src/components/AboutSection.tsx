import React from 'react';
import { motion } from 'framer-motion';
import { ACCENT_COLOR } from '../config/links';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="scroll-section bg-bg-primary flex justify-center items-start pt-20 min-h-screen">
      <motion.div
        style={{ marginTop: 30 }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto px-4 md:px-6"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-12 text-white">
          Обо <span style={{ color: ACCENT_COLOR }}>мне</span>
        </h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 font-bold">
          <motion.div
            className="text-xl md:text-2xl text-text-secondary space-y-4 font-bold"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.13 }}
            viewport={{ once: true }}
          >
            <ul className="space-y-4">
              <li className="flex items-start gap-2">
                <span className="text-accent-main select-none font-bold" style={{ color: ACCENT_COLOR }}>◯</span>
                <span className="flex-1 font-bold">Поступил на&nbsp;<span style={{ color: ACCENT_COLOR }}>бюджет</span> ФКН ВШЭ</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent-main select-none font-bold" style={{ color: ACCENT_COLOR }}>◯</span>
                <span className="flex-1 font-bold">Призер олимпиады <span style={{ color: ACCENT_COLOR }}>&quot;Высшая&nbsp;проба&quot;</span> по анализу данных</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent-main select-none font-bold" style={{ color: ACCENT_COLOR }}>◯</span>
                <span className="flex-1 font-bold">Сдал ЕГЭ по информатике на&nbsp;<span style={{ color: ACCENT_COLOR }}>98</span>&nbsp;баллов</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent-main select-none font-bold" style={{ color: ACCENT_COLOR }}>◯</span>
                <span className="flex-1 font-bold">Знаю, как <span style={{ color: ACCENT_COLOR }}>эффективно</span> готовиться к&nbsp;экзаменам</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;



