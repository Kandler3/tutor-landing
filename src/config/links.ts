// Конфигурация ссылок
export const TELEGRAM_USERNAME = 'kandler3'; // Замените на ваш username

// Базовые ссылки
export const TELEGRAM_LINK = `https://t.me/${TELEGRAM_USERNAME}`;

// Ссылки с готовыми сообщениями
export const TELEGRAM_LINKS = {
  base: TELEGRAM_LINK,
  oge: `${TELEGRAM_LINK}?text=Здравствуйте, интересует подготовка к ОГЭ`,
  ege: `${TELEGRAM_LINK}?text=Здравствуйте, интересует подготовка к ЕГЭ`,
  informatics: `${TELEGRAM_LINK}?text=Здравствуйте, интересует подготовка по Информатике`,
  programming: `${TELEGRAM_LINK}?text=Здравствуйте, интересует подготовка по Программированию`,
  contact: `${TELEGRAM_LINK}?text=Здравствуйте, хочу записаться на пробное занятие`
};

export const ACCENT_COLOR = '#5db921'; 