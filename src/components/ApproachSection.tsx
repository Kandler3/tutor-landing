import React from 'react';
import { motion } from 'framer-motion';
import { ACCENT_COLOR } from '../config/links';

const ApproachSection: React.FC = () => {
  return (
    <motion.section
      id="approach"
      className="scroll-section bg-bg-primary flex justify-center items-start pt-20 min-h-screen"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{ once: true }}
    >
      <div className="max-w-5xl mx-auto px-4 md:px-6 w-full flex flex-col items-center justify-center" style={{ marginTop: 30 }}>
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-6 text-white">
          Подход к <span style={{ color: ACCENT_COLOR }}>обучению</span>
        </h2>
        <div className="flex flex-col">
          <div className="bg-bg-card rounded-xl p-3 shadow-lg">
            <div className="text-xl md:text-2xl font-semibold text-white mb-1 text-left"><span style={{ color: ACCENT_COLOR }}>Индивидуальная</span> траектория</div>
            <div className="text-sm md:text-base text-[#999] text-left">
              На основе ваших знаний, целей и предпочтений составлю план подготовки. Будем отслеживать прогресс и уделять внимание слабым местам.
            </div>
          </div>
          <div className="bg-bg-card rounded-xl p-3 shadow-lg">
            <div className="text-xl md:text-2xl font-semibold text-white mb-1 text-left">Акцент на <span style={{ color: ACCENT_COLOR }}>практику</span></div>
            <div className="text-sm md:text-base text-[#999] text-left">
              Разбираем теорию и сразу отрабатываем её на практических задачах. Рецепт успеха - умение, не теряясь, решать задачи любой сложности - к&nbsp;этому мы и будем стремиться.
            </div>
          </div>
          <div className="bg-bg-card rounded-xl p-3 shadow-lg">
            <div className="text-xl md:text-2xl font-semibold text-white mb-1 text-left"><span style={{ color: ACCENT_COLOR }}>Не просто</span> репетитор</div>
            <div className="text-sm md:text-base text-[#999] text-left">
              Я знаю как непросто готовиться к экзаменам, поэтому стараюсь сделать этот процесс максимально комфортным. Вы всегда можете обратиться ко мне с любым вопросом: от помощи с домашним заданием до совета по поступлению в ВУЗ.
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default ApproachSection;




