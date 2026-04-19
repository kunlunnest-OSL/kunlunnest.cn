import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: '昆仑故事', path: '/story' },
    { name: '开放实验室', path: '/labs' },
    { name: '昆仑动态', path: '/news' },
    { name: '联系预约', path: '/contact' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'backdrop-blur-xl bg-white/95 border-b border-gray-200 shadow-sm'
          : 'backdrop-blur-sm bg-white/80'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo - Minimal */}
          <Link to="/">
            <motion.div
              whileHover={{ opacity: 0.8 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-3 cursor-pointer"
            >
              <div className="relative w-8 h-8">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-gray-800 to-gray-600" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-white text-xs font-semibold">K</span>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-base font-medium tracking-tight text-gray-900">昆仑巢</span>
                <span className="text-[10px] text-gray-500 font-light tracking-wider">KUNLUN NEST</span>
              </div>
            </motion.div>
          </Link>

          {/* Desktop Navigation - Minimal */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link, index) => (
              <Link key={link.name} to={link.path}>
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + index * 0.1, duration: 0.5 }}
                  whileHover={{ y: -2 }}
                  className="relative px-5 py-2"
                >
                  <span
                    className={`text-sm font-normal transition-colors duration-300 ${
                      isActive(link.path)
                        ? 'text-gray-900'
                        : 'text-gray-500 hover:text-gray-900'
                    }`}
                  >
                    {link.name}
                  </span>
                  {isActive(link.path) && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-gray-900"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </motion.div>
              </Link>
            ))}
          </div>

          {/* CTA - Minimal */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="hidden lg:flex"
          >
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-6 py-2 text-sm font-normal rounded-full bg-gray-900 text-white hover:bg-gray-800 transition-colors"
              >
                加入我们
              </motion.button>
            </Link>
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 hover:bg-gray-100 rounded-full transition-colors text-gray-900"
          >
            <AnimatePresence mode="wait">
              {isMobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={20} strokeWidth={1} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu size={20} strokeWidth={1} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu - Minimal */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden backdrop-blur-xl bg-white/95 border-t border-gray-200"
          >
            <div className="px-6 py-6 space-y-1">
              {navLinks.map((link, index) => (
                <Link key={link.name} to={link.path} onClick={() => setIsMobileMenuOpen(false)}>
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className={`block px-4 py-3 rounded-xl font-normal transition-all ${
                      isActive(link.path)
                        ? 'text-gray-900 bg-gray-100'
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                    }`}
                  >
                    {link.name}
                  </motion.div>
                </Link>
              ))}
              <div className="pt-3 border-t border-gray-200">
                <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                  <motion.button
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: navLinks.length * 0.1 }}
                    className="w-full px-4 py-3 text-center rounded-xl bg-gray-900 text-white font-normal hover:bg-gray-800 transition-all"
                  >
                    加入我们
                  </motion.button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
