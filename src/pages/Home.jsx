import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';
import { useRef } from 'react';

const Home = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);

  return (
    <div className="bg-gradient-to-b from-white via-blue-50/30 to-white">
      {/* Hero - 创新视觉 */}
      <section ref={heroRef} className="min-h-screen flex items-center justify-center px-6 pt-20 relative overflow-hidden">
        {/* 背景装饰 */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{
              rotate: 360,
              scale: [1, 1.2, 1],
            }}
            transition={{
              rotate: { duration: 50, repeat: Infinity, ease: "linear" },
              scale: { duration: 8, repeat: Infinity, ease: "easeInOut" }
            }}
            className="absolute -top-1/2 -right-1/2 w-[100vh] h-[100vh] bg-gradient-to-br from-blue-100/40 via-purple-100/40 to-pink-100/40 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              rotate: -360,
              scale: [1, 1.3, 1],
            }}
            transition={{
              rotate: { duration: 40, repeat: Infinity, ease: "linear" },
              scale: { duration: 10, repeat: Infinity, ease: "easeInOut" }
            }}
            className="absolute -bottom-1/2 -left-1/2 w-[100vh] h-[100vh] bg-gradient-to-tr from-orange-100/40 via-yellow-100/40 to-green-100/40 rounded-full blur-3xl"
          />
        </div>

        <motion.div
          style={{ opacity, scale, y }}
          className="max-w-7xl mx-auto text-center relative z-10"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* 浮动标签 */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 backdrop-blur-sm mb-8"
            >
              <Sparkles className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-medium bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                科技创新共同体
              </span>
            </motion.div>

            {/* 主标题 - 渐变 */}
            <h1 className="text-[clamp(5rem,15vw,12rem)] font-black leading-[0.9] tracking-tighter mb-12 relative">
              <motion.span
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="block bg-gradient-to-br from-gray-900 via-gray-800 to-gray-600 bg-clip-text text-transparent"
              >
                昆仑巢
              </motion.span>
              <motion.div
                animate={{
                  scaleX: [1, 1.2, 1],
                  opacity: [0.3, 0.6, 0.3]
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-64 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent"
              />
            </h1>

            {/* 描述 - 打字机效果 */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 1 }}
              className="text-xl md:text-2xl text-gray-600 mb-16 max-w-3xl mx-auto leading-relaxed font-light"
            >
              汇聚创新思维，共享前沿科技
              <br />
              <span className="text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text font-medium">
                打造中国领先的创新社区
              </span>
            </motion.p>

            {/* 按钮 - 创新设计 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link to="/story">
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
                  whileTap={{ scale: 0.95 }}
                  className="group px-10 py-4 bg-gradient-to-r from-gray-900 to-gray-700 text-white rounded-2xl text-base font-medium relative overflow-hidden"
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                  <span className="relative z-10 flex items-center gap-2">
                    了解我们
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </motion.button>
              </Link>
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-4 bg-white/80 backdrop-blur-sm text-gray-800 rounded-2xl text-base font-medium border-2 border-gray-200 hover:border-gray-300 hover:bg-white transition-all shadow-lg shadow-gray-200/50"
                >
                  加入我们
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>

          {/* 数据展示 - 玻璃态卡片 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-32 max-w-5xl mx-auto"
          >
            {[
              { num: '60+', label: '共建人', gradient: 'from-blue-500 to-cyan-500' },
              { num: '3', label: '开放实验室', gradient: 'from-purple-500 to-pink-500' },
              { num: '30+', label: '孵化项目', gradient: 'from-orange-500 to-red-500' },
              { num: '1000+', label: '社区成员', gradient: 'from-green-500 to-emerald-500' },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2 + i * 0.1, duration: 0.5 }}
                whileHover={{ y: -8, scale: 1.05 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity rounded-3xl blur from-blue-500 to-purple-500" />
                <div className="relative backdrop-blur-xl bg-white/70 border border-white/20 rounded-3xl p-8 shadow-xl shadow-gray-200/50">
                  <div className={`text-5xl md:text-6xl font-black mb-3 bg-gradient-to-br ${stat.gradient} bg-clip-text text-transparent`}>
                    {stat.num}
                  </div>
                  <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* 核心价值 - 磁性卡片 */}
      <section className="py-32 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <motion.h2
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="text-6xl md:text-7xl font-black text-gray-900 mb-6 tracking-tight"
            >
              核心<span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">价值</span>
            </motion.h2>
            <p className="text-gray-500 text-lg">我们的价值主张</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: '思想碰撞',
                desc: '汇聚多元思维，激发创新火花。在开放的氛围中，让不同背景的创新者碰撞出无限可能。',
                gradient: 'from-blue-500/20 to-cyan-500/20',
                borderGradient: 'from-blue-500 to-cyan-500',
                icon: '💡'
              },
              {
                title: '抱团取暖',
                desc: '共享资源与智慧，互助成长。构建相互支持的创新生态，在协作中实现更大价值。',
                gradient: 'from-purple-500/20 to-pink-500/20',
                borderGradient: 'from-purple-500 to-pink-500',
                icon: '🤝'
              },
              {
                title: '产业升级',
                desc: '推动科技创新与产业深度融合，加速传统产业转型，引领新兴产业蓬勃发展。',
                gradient: 'from-orange-500/20 to-red-500/20',
                borderGradient: 'from-orange-500 to-red-500',
                icon: '🚀'
              },
            ].map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 40, rotateX: 45 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -12, rotateX: -5, scale: 1.02 }}
                className="group relative"
                style={{ perspective: "1000px" }}
              >
                {/* 发光效果 */}
                <motion.div
                  className={`absolute -inset-1 bg-gradient-to-r ${value.borderGradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`}
                />

                {/* 卡片主体 */}
                <div className={`relative h-full backdrop-blur-sm bg-gradient-to-br ${value.gradient} border border-white/40 rounded-3xl p-10 shadow-xl overflow-hidden`}>
                  {/* 背景装饰 */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/40 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

                  {/* 图标 */}
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    className="text-6xl mb-6"
                  >
                    {value.icon}
                  </motion.div>

                  <h3 className="text-3xl font-black text-gray-900 mb-4 tracking-tight">
                    {value.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed font-light">
                    {value.desc}
                  </p>

                  {/* 底部装饰线 */}
                  <motion.div
                    className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${value.borderGradient}`}
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15 + 0.5, duration: 0.8 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 实验室 - 沉浸式卡片 */}
      <section className="py-32 px-6 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <motion.h2
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="text-6xl md:text-7xl font-black text-gray-900 mb-6 tracking-tight"
            >
              开放<span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">实验室</span>
            </motion.h2>
            <p className="text-gray-500 text-lg">前沿科技探索矩阵</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: '人形机器人实验室',
                lead: '郭成凯 博士',
                desc: '探索具身智能技术的前沿应用',
                image: 'https://kunlunnest.cn/_next/image?url=%2Fimages%2Flabs%2Frobot%2F1.avif&w=3840&q=75',
                link: '/labs',
                gradient: 'from-blue-600 to-cyan-600',
                tagColor: 'bg-blue-500'
              },
              {
                title: '3D打印实验室',
                lead: '许方雷',
                desc: '推动增材制造技术创新发展',
                image: 'https://kunlunnest.cn/_next/image?url=%2Fimages%2Flabs%2F3D%2F1.avif&w=3840&q=75',
                link: '/labs',
                gradient: 'from-purple-600 to-pink-600',
                tagColor: 'bg-purple-500'
              },
              {
                title: 'AIGC实验室',
                lead: '优酷早期团队',
                desc: 'AI生成内容的企业级应用探索',
                image: 'https://kunlunnest.cn/_next/image?url=%2Fimages%2Flabs%2Faigc%2F1.avif&w=3840&q=75',
                link: '/labs',
                gradient: 'from-orange-600 to-red-600',
                tagColor: 'bg-orange-500'
              },
            ].map((lab, i) => (
              <Link key={lab.title} to={lab.link}>
                <motion.div
                  initial={{ opacity: 0, y: 50, rotateY: -15 }}
                  whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ y: -16, rotateY: 5, scale: 1.02 }}
                  className="group cursor-pointer relative"
                  style={{ perspective: "1000px", transformStyle: "preserve-3d" }}
                >
                  {/* 卡片容器 */}
                  <div className="relative rounded-3xl overflow-hidden bg-white shadow-2xl shadow-gray-300/50">
                    {/* 图片容器 */}
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <motion.img
                        src={lab.image}
                        alt={lab.title}
                        className="w-full h-full object-cover"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                      />
                      {/* 渐变遮罩 */}
                      <div className={`absolute inset-0 bg-gradient-to-t ${lab.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />

                      {/* 浮动标签 */}
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className={`absolute top-4 left-4 ${lab.tagColor} text-white px-4 py-1.5 rounded-full text-xs font-medium backdrop-blur-sm`}
                      >
                        前沿探索
                      </motion.div>
                    </div>

                    {/* 内容区 */}
                    <div className="p-8 relative">
                      {/* 背景装饰 */}
                      <motion.div
                        className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${lab.gradient} opacity-0 group-hover:opacity-10 rounded-full blur-3xl transition-opacity duration-500`}
                      />

                      <h3 className="text-2xl font-black text-gray-900 mb-3 tracking-tight group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-gray-900 group-hover:to-gray-600 transition-all">
                        {lab.title}
                      </h3>

                      <p className="text-sm text-gray-500 mb-4 font-medium flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-gray-400" />
                        负责人：{lab.lead}
                      </p>

                      <p className="text-gray-600 leading-relaxed mb-6 font-light">
                        {lab.desc}
                      </p>

                      {/* 查看按钮 */}
                      <motion.div
                        className={`flex items-center gap-2 text-sm font-semibold bg-gradient-to-r ${lab.gradient} bg-clip-text text-transparent`}
                        whileHover={{ gap: "0.75rem" }}
                      >
                        <span>了解详情</span>
                        <ArrowRight className="w-4 h-4 text-gray-900 group-hover:text-blue-600 transition-colors" />
                      </motion.div>
                    </div>

                    {/* 底部高光 */}
                    <motion.div
                      className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${lab.gradient} scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}
                    />
                  </div>

                  {/* 外发光 */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-r ${lab.gradient} opacity-0 group-hover:opacity-20 blur-2xl -z-10 rounded-3xl transition-opacity duration-500`}
                  />
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 创始人 - 人物聚焦 */}
      <section className="py-32 px-6 relative overflow-hidden">
        {/* 背景装饰 */}
        <div className="absolute inset-0 bg-gradient-to-b from-white via-purple-50/20 to-white" />

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <motion.h2
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="text-6xl md:text-7xl font-black text-gray-900 mb-6 tracking-tight"
            >
              灵魂<span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">人物</span>
            </motion.h2>
            <p className="text-gray-500 text-lg">昆仑巢的核心创始人</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {[
              {
                name: '苏菂',
                title: '昆仑巢发起人',
                desc: '车库咖啡创始人，中国创业生态的开创者',
                image: 'https://kunlunnest.cn/_next/image?url=%2Fimages%2Ffounders%2Fsudi.avif&w=3840&q=75',
                gradient: 'from-blue-600 to-cyan-600'
              },
              {
                name: '鲍岳桥',
                title: '技术顾问',
                desc: 'UCDOS创造者，联众游戏创始人，中国互联网先驱',
                image: 'https://kunlunnest.cn/_next/image?url=%2Fimages%2Ffounders%2Fbaoyueqiao.avif&w=3840&q=75',
                gradient: 'from-purple-600 to-pink-600'
              }
            ].map((founder, i) => (
              <motion.div
                key={founder.name}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -12, scale: 1.02 }}
                className="group relative"
              >
                {/* 外发光 */}
                <motion.div
                  className={`absolute -inset-4 bg-gradient-to-r ${founder.gradient} opacity-0 group-hover:opacity-20 blur-3xl rounded-3xl transition-opacity duration-500`}
                />

                <div className="relative bg-white rounded-3xl overflow-hidden shadow-2xl shadow-gray-300/50">
                  {/* 图片容器 */}
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <motion.img
                      src={founder.image}
                      alt={founder.name}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.6 }}
                    />

                    {/* 渐变遮罩 */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* 名字浮现 */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileHover={{ opacity: 1, y: 0 }}
                      className="absolute bottom-8 left-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    >
                      <h3 className="text-4xl font-black text-white mb-2 tracking-tight">
                        {founder.name}
                      </h3>
                      <p className={`text-sm font-semibold bg-gradient-to-r ${founder.gradient} bg-clip-text text-transparent`}>
                        {founder.title}
                      </p>
                    </motion.div>
                  </div>

                  {/* 内容区 */}
                  <div className="p-8 relative">
                    {/* 装饰元素 */}
                    <div className={`absolute top-0 left-0 w-1 h-16 bg-gradient-to-b ${founder.gradient} rounded-full`} />

                    <h3 className="text-3xl font-black text-gray-900 mb-3 tracking-tight">
                      {founder.name}
                    </h3>

                    <div className="flex items-center gap-2 mb-4">
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${founder.gradient}`} />
                      <p className={`text-sm font-bold bg-gradient-to-r ${founder.gradient} bg-clip-text text-transparent`}>
                        {founder.title}
                      </p>
                    </div>

                    <p className="text-gray-600 leading-relaxed font-light">
                      {founder.desc}
                    </p>

                    {/* 底部装饰 */}
                    <motion.div
                      className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${founder.gradient}`}
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.2 + 0.5, duration: 0.8 }}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA - 磁吸效果 */}
      <section className="py-32 px-6 relative overflow-hidden">
        {/* 动态背景 */}
        <div className="absolute inset-0">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 90, 0]
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-400/20 via-purple-400/20 to-pink-400/20 rounded-full blur-3xl"
          />
        </div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* 标题 */}
            <motion.h2
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="text-6xl md:text-8xl font-black text-gray-900 mb-8 tracking-tighter leading-none"
            >
              共创
              <span className="block mt-2 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                科技未来
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-2xl text-gray-600 mb-16 leading-relaxed font-light"
            >
              加入中国最具前瞻性的科技创新社区
            </motion.p>

            {/* CTA 按钮 */}
            <Link to="/contact">
              <motion.button
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                whileHover={{ scale: 1.05, y: -4 }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-16 py-6 text-xl font-bold text-white rounded-2xl overflow-hidden shadow-2xl shadow-purple-500/30"
              >
                {/* 渐变背景 */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600" />

                {/* 动态光效 */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                  animate={{
                    x: ["-200%", "200%"]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />

                {/* 按钮文字 */}
                <span className="relative z-10 flex items-center gap-3">
                  立即加入
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowRight className="w-6 h-6" />
                  </motion.div>
                </span>

                {/* 外发光 */}
                <motion.div
                  className="absolute -inset-2 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 opacity-0 group-hover:opacity-50 blur-xl -z-10 rounded-2xl transition-opacity duration-500"
                />
              </motion.button>
            </Link>

            {/* 装饰元素 */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="flex items-center justify-center gap-8 mt-16 text-sm text-gray-500"
            >
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span>60+ 共建人在线</span>
              </div>
              <div className="w-px h-4 bg-gray-300" />
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-yellow-500" />
                <span>3 个实验室开放</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer - 简约优雅 */}
      <footer className="py-16 px-6 border-t border-gray-200 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            {/* Logo */}
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="relative w-10 h-10">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-gray-900 to-gray-600" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-white text-sm font-bold">K</span>
                </div>
              </div>
              <span className="text-2xl font-bold text-gray-900">昆仑巢</span>
            </div>

            <p className="text-gray-600 mb-3">北京智能之路科技有限公司</p>
            <p className="text-gray-400 text-sm">© 2026 昆仑巢 KUNLUN NEST · 京ICP备2024042943号</p>

            {/* 装饰线 */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              className="mt-8 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"
            />
          </motion.div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
