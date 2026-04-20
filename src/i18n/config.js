import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import zh from './locales/zh-CN.json';
import en from './locales/en-US.json';

i18n
  // 检测用户语言
  .use(LanguageDetector)
  // 传递 i18n 实例给 react-i18next
  .use(initReactI18next)
  // 初始化 i18next
  .init({
    resources: {
      zh: { translation: zh },
      en: { translation: en },
    },
    fallbackLng: 'zh', // 默认语言
    debug: false,
    interpolation: {
      escapeValue: false, // React 已经安全处理
    },
    detection: {
      // 检测顺序：浏览器语言优先，忽略localStorage
      order: ['navigator'],
      caches: [], // 不缓存语言选择
    },
  });

export default i18n;
