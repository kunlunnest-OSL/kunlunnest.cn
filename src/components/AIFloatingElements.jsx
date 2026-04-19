import { motion } from 'framer-motion';

/**
 * AI 浮动元素 - 装饰性的 AI 图标和文字
 */
const AIFloatingElements = () => {
  const elements = [
    { text: 'AI', x: '10%', y: '20%', delay: 0, duration: 20 },
    { text: 'ML', x: '85%', y: '15%', delay: 2, duration: 25 },
    { text: 'GPT', x: '15%', y: '70%', delay: 4, duration: 22 },
    { text: 'AGI', x: '80%', y: '75%', delay: 6, duration: 28 },
    { text: '智能', x: '25%', y: '45%', delay: 1, duration: 24 },
    { text: '神经网络', x: '70%', y: '40%', delay: 3, duration: 26 },
    { text: 'NEURAL', x: '50%', y: '85%', delay: 5, duration: 23 },
    { text: 'DEEP', x: '90%', y: '50%', delay: 7, duration: 27 },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 1 }}>
      {elements.map((el, i) => (
        <motion.div
          key={i}
          className="absolute text-blue-500/5 font-black text-6xl md:text-8xl select-none"
          style={{
            left: el.x,
            top: el.y,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.03, 0.08, 0.03],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: el.duration,
            repeat: Infinity,
            delay: el.delay,
            ease: 'easeInOut',
          }}
        >
          {el.text}
        </motion.div>
      ))}
    </div>
  );
};

export default AIFloatingElements;
