import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

/**
 * 苹果风格导航栏 - 全站通用
 * 药丸形状 + 毛玻璃质感 + 真实 Logo
 */
const AppleNavbar = () => {
  const location = useLocation();

  const navItems = [
    { name: '首页', path: '/', label: 'HOME' },
    { name: '故事', path: '/story', label: 'STORY' },
    { name: '实验室', path: '/labs', label: 'LABS' },
    { name: '动态', path: '/news', label: 'NEWS' },
    { name: '加入', path: '/contact', label: 'JOIN' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.6, 0.05, 0.01, 0.9] }}
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50"
    >
      <div className="flex items-center gap-2 sm:gap-4 md:gap-6 lg:gap-8 px-4 sm:px-5 md:px-6 lg:px-8 py-3 bg-black/40 backdrop-blur-2xl border border-white/10 rounded-full shadow-[0_0_50px_rgba(59,130,246,0.15),inset_0_0_20px_rgba(59,130,246,0.05)]">
        {/* Logo */}
        <Link to="/">
          <motion.div whileHover={{ scale: 1.05 }} className="flex items-center">
            <img
              src="/images/logo-white.png"
              alt="KUNLUN NEST"
              className="h-6 md:h-8 lg:h-10 w-auto opacity-90 hover:opacity-100 transition-opacity"
            />
          </motion.div>
        </Link>

        {/* 导航项 */}
        {navItems.map((item) => (
          <Link key={item.path} to={item.path}>
            <motion.div
              whileHover={{ scale: 1.1, y: -2 }}
              className="relative group min-h-[44px] flex items-center"
            >
              <span
                className={`
                  text-[10px] sm:text-xs font-medium tracking-tight sm:tracking-wider transition-colors duration-300
                  ${isActive(item.path) ? 'text-white' : 'text-gray-400 hover:text-white'}
                `}
              >
                {item.label}
              </span>
              {/* 活动指示器 */}
              {isActive(item.path) && (
                <motion.div
                  layoutId="navbar-active"
                  className="absolute -bottom-1 left-0 right-0 h-[1px] bg-gradient-to-r from-blue-400 to-cyan-400"
                  transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                />
              )}
              {/* 悬停效果 */}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-gradient-to-r from-blue-400 to-cyan-400 group-hover:w-full transition-all duration-300" />
            </motion.div>
          </Link>
        ))}
      </div>
    </motion.nav>
  );
};

export default AppleNavbar;
