import HeroSection from '../components/HeroSection';
import { motion } from 'framer-motion';

const AppleNavbar = () => {
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.6, 0.05, 0.01, 0.9] }}
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50"
    >
      <div className="flex items-center gap-8 px-8 py-3 bg-black/40 backdrop-blur-2xl border border-white/10 rounded-full shadow-[0_0_50px_rgba(59,130,246,0.15),inset_0_0_20px_rgba(59,130,246,0.05)]">
        <motion.a href="#" whileHover={{ scale: 1.05 }} className="flex items-center">
          <img
            src="/images/logo-white.png"
            alt="KUNLUN NEST"
            className="h-5 w-auto opacity-90 hover:opacity-100 transition-opacity"
          />
        </motion.a>
        {['LABS', 'FOUNDERS', 'NEWS', 'JOIN'].map((item) => (
          <motion.a
            key={item}
            href={`#${item.toLowerCase()}`}
            whileHover={{ scale: 1.1, y: -2 }}
            className="text-xs font-medium tracking-wider text-gray-300 hover:text-white transition-colors duration-300 relative group"
          >
            {item}
            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-gradient-to-r from-blue-400 to-cyan-400 group-hover:w-full transition-all duration-300" />
          </motion.a>
        ))}
      </div>
    </motion.nav>
  );
};

const AppleHome = () => {
  return (
    <div className="bg-black">
      {/* 苹果风格导航栏 */}
      <AppleNavbar />

      {/* 震撼的 Hero 首屏 */}
      <HeroSection />

      {/* Labs 区域 - 宇树科技风格 */}
      <section id="labs" className="relative min-h-screen bg-black flex items-center justify-center px-6 py-32">
        {/* 背景网格 */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }} />

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-center mb-20"
          >
            <h2 className="text-7xl md:text-9xl font-black mb-6 bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400 bg-clip-text text-transparent">
              OPEN LABS
            </h2>
            <p className="text-gray-400 text-xl tracking-[0.3em]">具身智能 · 创新矩阵</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'HUMANOID ROBOT',
                subtitle: '人形机器人实验室',
                desc: '探索具身智能的前沿边界',
                icon: '🤖',
              },
              {
                title: '3D PRINTING',
                subtitle: '增材制造实验室',
                desc: '重塑物理世界的创造方式',
                icon: '🔧',
              },
              {
                title: 'AIGC',
                subtitle: '生成式AI实验室',
                desc: '释放创造力的无限可能',
                icon: '✨',
              },
            ].map((lab, i) => (
              <motion.div
                key={lab.title}
                initial={{ opacity: 0, y: 100, rotateX: 45 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -20, scale: 1.05 }}
                className="group relative"
                style={{ perspective: '1000px' }}
              >
                {/* 外发光 */}
                <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* 卡片 */}
                <div className="relative h-full bg-black/50 backdrop-blur-xl border border-white/10 rounded-3xl p-10 overflow-hidden">
                  {/* 背景光晕 */}
                  <div className="absolute top-0 right-0 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl" />

                  <div className="text-6xl mb-6">{lab.icon}</div>
                  <h3 className="text-sm font-bold tracking-[0.3em] text-cyan-400 mb-2">{lab.title}</h3>
                  <h4 className="text-2xl font-black text-white mb-4">{lab.subtitle}</h4>
                  <p className="text-gray-400 leading-relaxed">{lab.desc}</p>

                  {/* 底部光线 */}
                  <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Founders 区域 - 电影级人物风 */}
      <section id="founders" className="relative min-h-screen bg-black flex items-center justify-center px-6 py-32">
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-7xl md:text-9xl font-black mb-6 bg-gradient-to-r from-purple-400 via-pink-300 to-purple-400 bg-clip-text text-transparent">
              VISIONARIES
            </h2>
            <p className="text-gray-400 text-xl tracking-[0.3em]">精神领袖 · 创新先锋</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            {[
              {
                name: '苏菂',
                title: 'FOUNDER',
                role: '昆仑巢发起人',
                desc: '车库咖啡创始人，中国创业生态开创者',
                gradient: 'from-blue-500 to-cyan-500',
              },
              {
                name: '鲍岳桥',
                title: 'TECH ADVISOR',
                role: '技术顾问',
                desc: 'UCDOS创造者，中国互联网先驱',
                gradient: 'from-purple-500 to-pink-500',
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
                <div className="relative bg-black/50 backdrop-blur-xl border border-white/10 rounded-3xl p-12 overflow-hidden">
                  {/* 背景光晕 */}
                  <div className={`absolute top-0 left-0 w-60 h-60 bg-gradient-to-br ${founder.gradient} opacity-10 rounded-full blur-3xl`} />

                  <div className="relative">
                    <h3 className="text-sm font-bold tracking-[0.3em] text-gray-400 mb-2">{founder.title}</h3>
                    <h2 className="text-6xl font-black text-white mb-4">{founder.name}</h2>
                    <p className={`text-lg font-semibold bg-gradient-to-r ${founder.gradient} bg-clip-text text-transparent mb-6`}>
                      {founder.role}
                    </p>
                    <p className="text-gray-400 text-lg leading-relaxed">{founder.desc}</p>
                  </div>

                  {/* 底部装饰 */}
                  <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${founder.gradient}`} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* News 时空回廊 */}
      <section id="news" className="relative min-h-screen bg-black flex items-center justify-center px-6 py-32">
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-7xl md:text-9xl font-black mb-6 bg-gradient-to-r from-orange-400 via-red-300 to-orange-400 bg-clip-text text-transparent">
              TIMELINE
            </h2>
            <p className="text-gray-400 text-xl tracking-[0.3em]">创新历程 · 持续演进</p>
          </motion.div>

          <div className="flex gap-8 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide">
            {[
              { date: '2026.04', event: 'AIGC实验室启动', tag: 'NEW' },
              { date: '2026.03', event: '3D打印实验室开放', tag: 'LAUNCH' },
              { date: '2026.02', event: '人形机器人实验室成立', tag: 'MAJOR' },
              { date: '2026.01', event: '昆仑巢正式启动', tag: 'MILESTONE' },
            ].map((news, i) => (
              <motion.div
                key={news.date}
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="flex-shrink-0 w-80 snap-center"
              >
                <div className="bg-black/50 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:border-orange-400/50 transition-all duration-300">
                  <div className="text-sm text-orange-400 font-bold tracking-widest mb-2">{news.tag}</div>
                  <div className="text-4xl font-black text-white mb-4">{news.date}</div>
                  <div className="text-gray-300 text-lg">{news.event}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join CTA */}
      <section id="join" className="relative min-h-screen bg-black flex items-center justify-center px-6 py-32">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.15)_0%,transparent_70%)]" />

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center relative z-10"
        >
          <h2 className="text-[clamp(3rem,10vw,8rem)] font-black mb-8 bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400 bg-clip-text text-transparent leading-none">
            JOIN THE
            <br />
            REVOLUTION
          </h2>
          <p className="text-gray-400 text-2xl mb-12 tracking-[0.2em]">成为改变世界的一员</p>

          <motion.button
            whileHover={{ scale: 1.1, boxShadow: '0 0 100px rgba(59,130,246,0.5)' }}
            whileTap={{ scale: 0.95 }}
            className="px-16 py-6 bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-xl font-bold rounded-full relative overflow-hidden group"
          >
            <span className="relative z-10">立即加入</span>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.button>
        </motion.div>
      </section>
    </div>
  );
};

export default AppleHome;
