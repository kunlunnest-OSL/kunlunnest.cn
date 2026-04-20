import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import HeroSection from '../components/HeroSection';
import AIParticles from '../components/AIParticles';
import AIFloatingElements from '../components/AIFloatingElements';
import AppleNavbar from '../components/AppleNavbar';
import LazyImage from '../components/LazyImage';
import { Users, MessageSquare, Target, RefreshCw, Bot, Wrench, Sparkles } from 'lucide-react';

/**
 * 昆仑巢主页 - 苹果 2026 风格 + AI 元素
 */
const HomeNew = () => {
  const { t } = useTranslation();
  return (
    <div className="bg-black min-h-screen">
      {/* AI 粒子背景 - 全局 */}
      <AIParticles />

      {/* AI 浮动文字 - 全局 */}
      <AIFloatingElements />

      {/* 导航栏 */}
      <AppleNavbar />

      {/* Hero 首屏 - 昆仑山脉蒙版文字 */}
      <HeroSection />

      {/* 核心价值 - AI 赋能 */}
      <section className="relative min-h-screen bg-black flex items-center justify-center px-6 py-16 md:py-32">
        {/* 背景渐变 - 顶部增强吸引力 */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-950/20 via-blue-950/10 to-black" />
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-blue-500/20 to-transparent" />

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-7xl lg:text-9xl font-black mb-6 bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400 bg-clip-text text-transparent">
              {t('values.title')}
            </h2>
            <p className="text-gray-400 text-lg md:text-xl tracking-[0.15em] md:tracking-[0.3em]">{t('values.subtitle')}</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {[
              {
                title: t('values.cocreate.title'),
                subtitle: t('values.cocreate.subtitle'),
                desc: t('values.cocreate.desc'),
                icon: <Users className="w-16 h-16 text-blue-400" strokeWidth={1.5} />,
                gradient: 'from-blue-500 to-cyan-500',
                image: '/images/value-innovation.jpg',
              },
              {
                title: t('values.communication.title'),
                subtitle: t('values.communication.subtitle'),
                desc: t('values.communication.desc'),
                icon: <MessageSquare className="w-16 h-16 text-purple-400" strokeWidth={1.5} />,
                gradient: 'from-purple-500 to-pink-500',
                image: '/images/value-collaboration.jpg',
              },
              {
                title: t('values.value.title'),
                subtitle: t('values.value.subtitle'),
                desc: t('values.value.desc'),
                icon: <Target className="w-16 h-16 text-orange-400" strokeWidth={1.5} />,
                gradient: 'from-orange-500 to-red-500',
                image: '/images/value-industry.jpg',
              },
              {
                title: t('values.capability.title'),
                subtitle: t('values.capability.subtitle'),
                desc: t('values.capability.desc'),
                icon: <RefreshCw className="w-16 h-16 text-green-400" strokeWidth={1.5} />,
                gradient: 'from-green-500 to-emerald-500',
                image: '/images/value-innovation.jpg',
              },
            ].map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 100, rotateX: 45 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -20, scale: 1.05 }}
                className="group relative overflow-hidden"
                style={{ perspective: '1000px' }}
              >
                {/* 外发光 */}
                <div className={`absolute -inset-2 bg-gradient-to-r ${value.gradient} opacity-0 group-hover:opacity-30 blur-3xl transition-opacity duration-500 rounded-3xl`} />

                {/* 卡片 */}
                <div className="relative h-full bg-black/50 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden">
                  {/* 背景图片（懒加载） */}
                  <LazyImage
                    src={value.image}
                    className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-500"
                    style={{
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${value.gradient} opacity-5`} />

                  {/* 内容 */}
                  <div className="relative p-6 md:p-10">
                    {/* 图标 */}
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      className="text-7xl mb-6"
                    >
                      {value.icon}
                    </motion.div>

                    {/* 英文副标题 */}
                    <div className="text-xs font-bold tracking-[0.3em] text-gray-500 mb-2">
                      {value.subtitle}
                    </div>

                    {/* 中文标题 */}
                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-black text-white mb-4 tracking-tight">
                      {value.title}
                    </h3>

                    {/* 描述 */}
                    <p className="text-gray-400 leading-relaxed">{value.desc}</p>

                    {/* 底部光线 */}
                    <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${value.gradient}`} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 开放实验室 - 具身智能 */}
      <section className="relative min-h-screen bg-black flex items-center justify-center px-6 py-16 md:py-32">
        {/* 背景网格 */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }}
        />

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-7xl lg:text-9xl font-black mb-6 bg-gradient-to-r from-purple-400 via-pink-300 to-purple-400 bg-clip-text text-transparent">
              {t('labs.title')}
            </h2>
            <p className="text-gray-400 text-lg md:text-xl tracking-[0.15em] md:tracking-[0.3em]">{t('labs.subtitle')}</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                title: t('labs.robot.title'),
                subtitle: t('labs.robot.subtitle'),
                lead: t('labs.robot.lead'),
                desc: t('labs.robot.desc'),
                icon: <Bot className="w-16 h-16 text-blue-400" strokeWidth={1.5} />,
                gradient: 'from-blue-500 to-cyan-500',
                image: '/images/lab-robot-hero.jpg',
                link: '/labs#robot',
              },
              {
                title: t('labs.3dprint.title'),
                subtitle: t('labs.3dprint.subtitle'),
                lead: t('labs.3dprint.lead'),
                desc: t('labs.3dprint.desc'),
                icon: <Wrench className="w-16 h-16 text-purple-400" strokeWidth={1.5} />,
                gradient: 'from-purple-500 to-pink-500',
                image: '/images/lab-3dprint-hero.jpg',
                link: '/labs#3dprint',
              },
              {
                title: t('labs.aigc.title'),
                subtitle: t('labs.aigc.subtitle'),
                lead: '',
                desc: t('labs.aigc.desc'),
                icon: <Sparkles className="w-16 h-16 text-orange-400" strokeWidth={1.5} />,
                gradient: 'from-orange-500 to-red-500',
                image: '/images/gallery/aigc/DSC03131.JPG',
                link: '/labs#aigc',
              },
            ].map((lab, i) => (
              <Link key={lab.title} to={lab.link}>
                <motion.div
                  initial={{ opacity: 0, y: 100, rotateY: -15 }}
                  whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ y: -20, scale: 1.05, rotateY: 5 }}
                  className="group relative cursor-pointer"
                  style={{ perspective: '1000px' }}
                >
                  {/* 外发光 */}
                  <div className={`absolute -inset-2 bg-gradient-to-r ${lab.gradient} opacity-0 group-hover:opacity-30 blur-3xl transition-opacity duration-500 rounded-3xl`} />

                  {/* 卡片 */}
                  <div className="relative h-full bg-black/50 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden">
                    {/* 背景图片（懒加载） */}
                    <LazyImage
                      src={lab.image}
                      className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-500"
                      style={{
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                      }}
                    />
                    <div className={`absolute inset-0 bg-gradient-to-br ${lab.gradient} opacity-10`} />

                    {/* 内容 */}
                    <div className="relative p-6 md:p-10">
                      <div className="text-xs font-bold tracking-[0.3em] text-gray-500 mb-2">
                        {lab.subtitle}
                      </div>

                      <h3 className="text-3xl font-black text-white mb-3 tracking-tight">
                        {lab.title}
                      </h3>

                      {lab.lead && (
                        <p className="text-sm text-gray-400 mb-4 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                          {t('common.leader')}{lab.lead}
                        </p>
                      )}

                      <p className="text-gray-400 leading-relaxed mb-6">{lab.desc}</p>

                      {/* 查看详情 */}
                      <div className={`flex items-center gap-2 text-sm font-bold bg-gradient-to-r ${lab.gradient} bg-clip-text text-transparent`}>
                        {t('labs.learnMore')}
                      </div>

                      {/* 底部光线 */}
                      <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${lab.gradient}`} />
                    </div>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>

          {/* 查看所有开放实验室 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <Link to="/labs">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 0 80px rgba(59,130,246,0.4)' }}
                whileTap={{ scale: 0.95 }}
                className="px-12 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-lg font-bold rounded-full relative overflow-hidden group"
              >
                <span className="relative z-10">{t('labs.exploreAll')}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 创始人预览 */}
      <section className="relative min-h-screen bg-black flex items-center justify-center px-6 py-16 md:py-32">
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-7xl lg:text-9xl font-black mb-6 bg-gradient-to-r from-orange-400 via-red-300 to-orange-400 bg-clip-text text-transparent">
              {t('founders.title')}
            </h2>
            <p className="text-gray-400 text-lg md:text-xl tracking-[0.15em] md:tracking-[0.3em]">{t('founders.subtitle')}</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-5xl mx-auto">
            {[
              {
                name: t('founders.sudi.name'),
                title: t('founders.sudi.title'),
                role: t('founders.sudi.role'),
                desc: t('founders.sudi.desc'),
                gradient: 'from-blue-500 to-cyan-500',
                image: '/images/founder-sudi.webp',
              },
              {
                name: t('founders.baoyueqiao.name'),
                title: t('founders.baoyueqiao.title'),
                role: t('founders.baoyueqiao.role'),
                desc: t('founders.baoyueqiao.desc'),
                gradient: 'from-purple-500 to-pink-500',
                image: '/images/founder-baoyueqiao.webp',
              },
            ].map((founder, i) => (
              <motion.div
                key={founder.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.3, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ scale: 1.05 }}
                className="group relative"
              >
                {/* 外发光 */}
                <div className={`absolute -inset-4 bg-gradient-to-r ${founder.gradient} opacity-0 group-hover:opacity-30 blur-3xl transition-opacity duration-500 rounded-3xl`} />

                {/* 卡片 */}
                <div className="relative bg-black/50 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden">
                  {/* 肖像照片（懒加载） */}
                  <LazyImage
                    src={founder.image}
                    className="aspect-[4/5] bg-gray-800"
                    style={{
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                  >
                    {/* 渐变遮罩 */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80" />

                    {/* 名字浮现在照片底部 */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                      <div className="text-xs font-bold tracking-[0.15em] md:tracking-[0.3em] text-gray-400 mb-2">
                        {founder.title}
                      </div>
                      <h3 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-2">{founder.name}</h3>
                      <p className={`text-sm font-semibold bg-gradient-to-r ${founder.gradient} bg-clip-text text-transparent`}>
                        {founder.role}
                      </p>
                    </div>
                  </LazyImage>

                  {/* 描述区域 */}
                  <div className="p-6 md:p-8">
                    <p className="text-gray-400 leading-relaxed">{founder.desc}</p>
                  </div>

                  {/* 底部装饰 */}
                  <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${founder.gradient}`} />
                </div>
              </motion.div>
            ))}
          </div>

          {/* 查看完整故事 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <Link to="/story">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-12 py-4 bg-black/50 backdrop-blur-xl border border-white/10 text-white text-lg font-medium rounded-full hover:border-white/30 transition-all"
              >
                {t('founders.viewStory')}
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA - 加入我们 */}
      <section className="relative min-h-screen bg-black flex items-center justify-center px-6 py-16 md:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.15)_0%,transparent_70%)]" />

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center relative z-10 max-w-4xl"
        >
          <h2 className="text-[clamp(2rem,10vw,8rem)] font-black mb-6 md:mb-8 bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400 bg-clip-text text-transparent leading-none whitespace-pre-line">
            {t('cta.title')}
          </h2>

          <p className="text-gray-400 text-lg md:text-2xl mb-4 md:mb-6 tracking-[0.1em] md:tracking-[0.2em]">{t('cta.subtitle')}</p>

          <p className="text-gray-500 text-base md:text-lg mb-8 md:mb-12 max-w-2xl mx-auto leading-relaxed">
            {t('cta.desc')}
          </p>

          <Link to="/contact">
            <motion.button
              whileHover={{ scale: 1.1, boxShadow: '0 0 100px rgba(59,130,246,0.5)' }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 md:px-16 md:py-6 bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-lg md:text-xl font-bold rounded-full relative overflow-hidden group"
            >
              <span className="relative z-10">{t('cta.button')}</span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.button>
          </Link>

          {/* 统计数据 */}
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 lg:gap-16 mt-12 md:mt-16 text-xs md:text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span>{t('cta.stats.members')}</span>
            </div>
            <div className="w-px h-4 bg-gray-700" />
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
              <span>{t('cta.stats.labs')}</span>
            </div>
            <div className="w-px h-4 bg-gray-700" />
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
              <span>{t('cta.stats.communities')}</span>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="relative py-16 px-6 border-t border-white/10 bg-black">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <img src="/images/logo-white.png" alt="KUNLUN NEST" className="h-16 w-auto opacity-70" />
            </div>
            <p className="text-gray-500 mb-3">{t('footer.company')}</p>
            <p className="text-gray-600 text-sm">{t('footer.copyright')}</p>

            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              className="mt-8 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"
            />
          </motion.div>
        </div>
      </footer>
    </div>
  );
};

export default HomeNew;
