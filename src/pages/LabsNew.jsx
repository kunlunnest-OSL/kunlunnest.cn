import { motion } from 'framer-motion';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import AppleNavbar from '../components/AppleNavbar';
import AIParticles from '../components/AIParticles';
import { Bot, Map, Hand, MessageCircle, Brain, Wrench, PenTool, Palette, Ruler, Gift, Sparkles, Film, FileText, Mic } from 'lucide-react';

/**
 * 开放实验室页面 - 苹果 2026 风格
 * 三个开放实验室的完整展示
 */
const LabsNew = () => {
  const [selectedLab, setSelectedLab] = useState('robot');

  const labs = {
    robot: {
      id: 'robot',
      title: '人形机器人实验室',
      subtitle: 'HUMANOID ROBOT LAB',
      lead: '郭成凯 博士',
      slogan: '让 AI 从虚拟走向物理世界',
      desc: '由北京通用人工智能研究院技术中心技术负责人郭成凯博士等巢友发起，涵盖大厂研发人员、科研院所研究人员、技术达人、技术极客、科技投资者等共同参与，常驻于昆仑巢的研究小组。主要从事具身机器人、机械手臂研究、AI大模型应用等方向的研究分享、技术讨论、成果转化。',
      gradient: 'from-blue-500 to-cyan-500',
      icon: <Bot className="w-20 h-20" strokeWidth={1.5} />,
      // 📸 需要的图片（5-8张）
      hero: '/images/lab-robot-hero.jpg',
      gallery: [
        '/images/gallery/robot/DSC02958.JPG',
        '/images/gallery/robot/DSC03101.JPG',
        '/images/gallery/robot/DSC03104.JPG',
        '/images/gallery/robot/DSC03107.JPG',
        '/images/gallery/robot/DSC03394.JPG',
        '/images/gallery/robot/DSC06083.JPG',
        '/images/gallery/robot/DSC06097.JPG',
        '/images/gallery/robot/DSC06958.JPG',
        '/images/gallery/robot/DSC08674.JPG',
        '/images/gallery/robot/DSC09243.JPG',
        '/images/gallery/robot/DSC09335.JPG',
        '/images/gallery/robot/FJY07721.JPG',
      ],
      highlights: [
        {
          title: '自主导航',
          desc: '复杂环境中的实时路径规划与避障',
          icon: <Map className="w-12 h-12" strokeWidth={1.5} />,
        },
        {
          title: '灵巧操作',
          desc: '基于视觉反馈的精准物体抓取',
          icon: <Hand className="w-12 h-12" strokeWidth={1.5} />,
        },
        {
          title: '人机协作',
          desc: '自然语言交互与意图理解',
          icon: <MessageCircle className="w-12 h-12" strokeWidth={1.5} />,
        },
        {
          title: '强化学习',
          desc: '端到端的运动控制策略学习',
          icon: <Brain className="w-12 h-12" strokeWidth={1.5} />,
        },
      ],
    },
    '3dprint': {
      id: '3dprint',
      title: '3D打印实验室',
      subtitle: '3D PRINTING LAB',
      lead: '许方雷',
      slogan: '重塑物理世界的创造方式',
      desc: '由北京市创新专项领军人才许方雷发起，专注工业设计、增材制造、商业模型。协助机器人实验室利用3D打印技术制造机械臂，同时为巢内如巢小贝等初代设备提供初代产品设计制作。从创意到实物，让每个人都能成为创造者。',
      gradient: 'from-purple-500 to-pink-500',
      icon: <Wrench className="w-20 h-20" strokeWidth={1.5} />,
      // 📸 需要的图片（5-8张）
      hero: '/images/lab-3dprint-hero.jpg',
      gallery: [
        '/images/gallery/3dprint/[副本][副本]3.313d开放讨论.png',
        '/images/gallery/3dprint/DSC00154.JPG',
        '/images/gallery/3dprint/DSC00162.JPG',
        '/images/gallery/3dprint/DSC00227.JPG',
        '/images/gallery/3dprint/DSC02761.JPG',
        '/images/gallery/3dprint/DSC02794.JPG',
        '/images/gallery/3dprint/DSC02988.JPG',
        '/images/gallery/3dprint/FJY00196.JPG',
      ],
      highlights: [
        {
          title: 'AI 生成设计',
          desc: '基于约束条件的自动化结构优化',
          icon: <PenTool className="w-12 h-12" strokeWidth={1.5} />,
        },
        {
          title: '多材料打印',
          desc: '金属、树脂、陶瓷的复合打印技术',
          icon: <Palette className="w-12 h-12" strokeWidth={1.5} />,
        },
        {
          title: '逆向工程',
          desc: '3D 扫描与快速原型制作',
          icon: <Ruler className="w-12 h-12" strokeWidth={1.5} />,
        },
        {
          title: '定制化生产',
          desc: '小批量个性化产品的低成本实现',
          icon: <Gift className="w-12 h-12" strokeWidth={1.5} />,
        },
      ],
    },
    aigc: {
      id: 'aigc',
      title: 'AIGC开放实验室',
      subtitle: 'AI GENERATED CONTENT LAB',
      lead: '',
      slogan: '释放创造力的无限可能',
      desc: '由早期优酷网创业团队研发负责人等发起，涵盖公司管理者、自媒体人、内容生产者等，主要从事AI入企服务、AI内容生成制作、智能体搭建、AI应用研讨等方向的研究分享、案例解读。从文字、图像到视频，让 AI 成为每个创作者的超级助手。',
      gradient: 'from-orange-500 to-red-500',
      icon: <Sparkles className="w-20 h-20" strokeWidth={1.5} />,
      // 📸 需要的图片（5-8张）
      hero: '/images/gallery/aigc/DSC03131.JPG',
      gallery: [
        '/images/gallery/aigc/DSC_2302-Enhanced-NR.jpg',
        '/images/gallery/aigc/DSC02951.JPG',
        '/images/gallery/aigc/DSC02952.JPG',
        '/images/gallery/aigc/DSC03131.JPG',
        '/images/gallery/aigc/DSC03149.JPG',
        '/images/gallery/aigc/DSC03157.JPG',
        '/images/gallery/aigc/DSC03158.JPG',
        '/images/gallery/aigc/DSC04227.JPG',
        '/images/gallery/aigc/DSC04282.JPG',
        '/images/gallery/aigc/DSC06956.JPG',
        '/images/gallery/aigc/FJY09366.JPG',
      ],
      highlights: [
        {
          title: 'AI 视频生成',
          desc: '从文本到专业级视频的一键生成',
          icon: <Film className="w-12 h-12" strokeWidth={1.5} />,
        },
        {
          title: 'AI 绘画',
          desc: 'Stable Diffusion / Midjourney 企业应用',
          icon: <Palette className="w-12 h-12" strokeWidth={1.5} />,
        },
        {
          title: 'AI 写作',
          desc: '营销文案、技术文档的智能生成',
          icon: <FileText className="w-12 h-12" strokeWidth={1.5} />,
        },
        {
          title: 'AI 配音',
          desc: '多语言、多音色的语音克隆技术',
          icon: <Mic className="w-12 h-12" strokeWidth={1.5} />,
        },
      ],
    },
  };

  const currentLab = labs[selectedLab];

  return (
    <div className="bg-black min-h-screen">
      {/* AI 粒子背景 */}
      <AIParticles particleCount={60} />

      {/* 导航栏 */}
      <AppleNavbar />

      {/* Hero - 开放实验室总览 */}
      <section className="relative min-h-screen flex items-center justify-center px-6 pt-20 md:pt-32 pb-20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.15)_0%,transparent_70%)]" />

        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-[clamp(2.5rem,15vw,10rem)] font-black mb-8 bg-gradient-to-r from-blue-400 via-purple-300 to-pink-400 bg-clip-text text-transparent leading-none">
              OPEN LABS
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 tracking-[0.15em] md:tracking-[0.3em] mb-6">开放实验室</p>
            <p className="text-xl text-gray-500 max-w-3xl mx-auto leading-relaxed">
              汇聚前沿科技，共享研发资源。
              <br />
              三大开放实验室，探索 AI、机器人、智能制造的无限可能。
            </p>
          </motion.div>

          {/* 实验室选择器 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="flex items-center justify-center gap-4 mt-16 flex-wrap"
          >
            {Object.values(labs).map((lab) => (
              <motion.button
                key={lab.id}
                onClick={() => setSelectedLab(lab.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`
                  px-6 py-3 md:px-8 md:py-4 rounded-full font-bold text-sm tracking-wider transition-all duration-300
                  ${
                    selectedLab === lab.id
                      ? `bg-gradient-to-r ${lab.gradient} text-white shadow-[0_0_50px_rgba(59,130,246,0.5)]`
                      : 'bg-black/50 border border-white/10 text-gray-400 hover:border-white/30'
                  }
                `}
              >
                {lab.title}
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 实验室详情 */}
      <section className="relative px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            key={selectedLab}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* 主图 + 介绍 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-20">
              {/* 主图 */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="relative group"
              >
                <div className={`absolute -inset-4 bg-gradient-to-r ${currentLab.gradient} opacity-0 group-hover:opacity-30 blur-3xl transition-opacity duration-500 rounded-3xl`} />
                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-gray-800">
                  {/* 📸 主图占位符 */}
                  <div
                    className="w-full h-full bg-cover bg-center"
                    style={{
                      backgroundImage: `url(${currentLab.hero})`,
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
              </motion.div>

              {/* 介绍 */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="flex flex-col justify-center"
              >
                <div className="text-sm font-bold tracking-[0.15em] md:tracking-[0.3em] text-gray-500 mb-2">
                  {currentLab.subtitle}
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4">{currentLab.title}</h2>
                {currentLab.lead && (
                  <p className="text-gray-400 mb-6 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-cyan-400" />
                    负责人：{currentLab.lead}
                  </p>
                )}
                <p className={`text-xl md:text-2xl font-bold mb-6 bg-gradient-to-r ${currentLab.gradient} bg-clip-text text-transparent`}>
                  {currentLab.slogan}
                </p>
                <p className="text-gray-400 text-lg leading-relaxed">{currentLab.desc}</p>
              </motion.div>
            </div>

            {/* 核心能力 */}
            <div className="mb-20">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-black text-white mb-8 text-center">核心能力</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
                {currentLab.highlights.map((highlight, i) => (
                  <motion.div
                    key={highlight.title}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + i * 0.1, duration: 0.6 }}
                    whileHover={{ y: -10, scale: 1.05 }}
                    className="relative group"
                  >
                    <div className={`absolute -inset-2 bg-gradient-to-r ${currentLab.gradient} opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-500 rounded-2xl`} />
                    <div className="relative bg-black/50 backdrop-blur-xl border border-white/10 rounded-2xl p-6 text-center">
                      <div className="text-4xl mb-4">{highlight.icon}</div>
                      <h4 className="text-lg font-bold text-white mb-2">{highlight.title}</h4>
                      <p className="text-sm text-gray-400">{highlight.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* 图片画廊 */}
            <div className="mb-20">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-black text-white mb-8 text-center">实验室掠影</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
                {currentLab.gallery.map((image, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8 + i * 0.1, duration: 0.6 }}
                    whileHover={{ scale: 1.05 }}
                    className="relative group"
                  >
                    <div className={`absolute -inset-2 bg-gradient-to-r ${currentLab.gradient} opacity-0 group-hover:opacity-30 blur-2xl transition-opacity duration-500 rounded-2xl`} />
                    <div className="relative aspect-video rounded-2xl overflow-hidden bg-gray-800">
                      {/* 📸 画廊图片占位符 */}
                      <div
                        className="w-full h-full bg-cover bg-center"
                        style={{
                          backgroundImage: `url(${image})`,
                        }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

          </motion.div>
        </div>
      </section>

      {/* CTA - 加入开放实验室 */}
      <section className="relative px-6 py-16 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              加入我们
            </h2>
            <p className="text-xl text-gray-400 mb-12">
              开放实验室全年欢迎创业者、研究者、学生加入。
              <br />
              让我们一起探索科技的边界。
            </p>
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 0 80px rgba(59,130,246,0.5)' }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 md:px-12 md:py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-lg font-bold rounded-full"
              >
                申请加入开放实验室
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-16 px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto text-center">
          <img src="/images/logo-white.png" alt="KUNLUN NEST" className="h-16 w-auto opacity-70 mx-auto mb-4" />
          <p className="text-gray-500 mb-2">北京智能之路科技有限公司</p>
          <p className="text-gray-600 text-sm">© 2026 昆仑巢 KUNLUN NEST</p>
        </div>
      </footer>
    </div>
  );
};

export default LabsNew;
