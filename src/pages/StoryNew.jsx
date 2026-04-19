import { motion } from 'framer-motion';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import AppleNavbar from '../components/AppleNavbar';
import AIParticles from '../components/AIParticles';
import { Building2, Users, MessageSquare, Target, RefreshCw } from 'lucide-react';

/**
 * 昆仑巢故事页面 - 苹果 2026 风格
 * 讲述昆仑巢的起源、创始人和愿景
 */
const StoryNew = () => {
  const [shuffleKey, setShuffleKey] = useState(0);

  const handleShuffle = () => {
    setShuffleKey(prev => prev + 1);
  };

  return (
    <div className="bg-black min-h-screen">
      {/* AI 粒子背景 */}
      <AIParticles particleCount={60} particleColor="rgba(168, 85, 247, 0.6)" lineColor="rgba(168, 85, 247, 0.2)" />

      {/* 导航栏 */}
      <AppleNavbar />

      {/* Hero - 起源 */}
      <section className="relative min-h-screen flex items-center justify-center px-6 pt-20 md:pt-32 pb-20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(168,85,247,0.15)_0%,transparent_70%)]" />

        {/* 背景：车库咖啡照片 */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'url(/images/garage-cafe-1.jpg)', // 📸 车库咖啡外景
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
          }}
        />

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="mb-12"
            >
              <div className="text-sm font-bold tracking-[0.2em] md:tracking-[0.5em] text-purple-400 mb-4">OUR STORY</div>
              <h1 className="text-[clamp(2.5rem,15vw,10rem)] font-black mb-8 bg-gradient-to-r from-purple-400 via-pink-300 to-purple-400 bg-clip-text text-transparent leading-none">
                昆仑巢
              </h1>
              <p className="text-xl md:text-2xl text-gray-400 tracking-[0.15em] md:tracking-[0.3em]">创新思想汇聚之地</p>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-xl md:text-2xl text-gray-400 max-w-4xl mx-auto leading-relaxed"
            >
            
              <br />
              十余年创业生态沉淀，AI 时代的<span className="text-purple-400 font-semibold">「新龙门客栈」</span>。
              <br />
              汇聚大模型、具身智能、人形机器人、硬科技创业者，各行各业创新者，
              <br />
              共同探索未来
            </motion.p>
          </motion.div>
        </div>

        {/* 滚动提示 */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500">
          <span className="text-xs tracking-widest">SCROLL</span>
          <div className="w-[1px] h-16 bg-gradient-to-b from-gray-500 to-transparent animate-scroll-line" />
        </div>
      </section>

      {/* 创始人完整介绍 */}
      <section className="relative px-6 py-16 md:py-32">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400 bg-clip-text text-transparent">
              FOUNDERS
            </h2>
            <p className="text-gray-400 text-xl tracking-[0.15em] md:tracking-[0.3em]">创始人</p>
          </motion.div>

          {/* 苏菂 */}
          <div className="mb-32">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-12 items-center">
              {/* 肖像 */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="md:col-span-2 relative group"
              >
                <div className="absolute -inset-6 bg-gradient-to-r from-blue-500 to-cyan-500 opacity-0 group-hover:opacity-30 blur-3xl transition-opacity duration-500 rounded-3xl" />
                <div className="relative aspect-[3/4] rounded-3xl overflow-hidden bg-gray-800">
                  {/* 📸 苏菂高清肖像 */}
                  <div
                    className="w-full h-full bg-cover bg-center"
                    style={{
                      backgroundImage: 'url(/images/founder-sudi.webp)',
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

                  {/* 名字浮现在照片上 */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                    <div className="text-xs font-bold tracking-[0.15em] md:tracking-[0.3em] text-gray-400 mb-2">FOUNDER</div>
                    <h3 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-2">苏菂</h3>
                    <p className="text-sm font-semibold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                      昆仑巢创始人 · 车库咖啡创始人
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* 介绍 */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="md:col-span-3"
              >
                <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
                  <p className="text-xl md:text-2xl text-white font-semibold">
                    "中国创业服务领域的标志性人物"
                  </p>
                  <p>
                    <span className="text-cyan-400 font-semibold">2011年</span> 创办车库咖啡，成为移动互联网时代的创业地标；
                  </p>
                  <p>
                    <span className="text-cyan-400 font-semibold">2015年</span> 联合创立YOU+国际青年社区，致力于打造结合居住与创业的"乌托邦式"社区；
                  </p>
                  <p>
                    <span className="text-cyan-400 font-semibold">2018年</span> 发起「中关村创业博物馆」，中国首家以展示中关村创业历史与科技产业发展为主题的专题博物馆；
                  </p>
                  <p>
                    <span className="text-cyan-400 font-semibold">2023年</span> 与鲍岳桥共同创立昆仑巢，AI时代的「新龙门客栈」，打造思想碰撞与合作交流的平台。
                  </p>
                  <p>
                    他相信，真正的创新来自思想的碰撞。从车库咖啡到昆仑巢，他始终在构建一个开放、包容、充满活力的创新社区。
                  </p>
                </div>

                {/* 成就标签 */}
                <div className="flex flex-wrap gap-3 mt-8">
                  {['车库咖啡创始人', '昆仑巢创始人', 'YOU+联合创始人', '中关村创业博物馆发起人'].map((tag) => (
                    <span
                      key={tag}
                      className="px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-sm text-blue-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>

          {/* 鲍岳桥 */}
          <div>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-12 items-center">
              {/* 介绍（左侧） */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="md:col-span-3 order-2 md:order-1"
              >
                <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
                  <p className="text-xl md:text-2xl text-white font-semibold">
                    "中国IT行业的标志性人物之一"
                  </p>
                  <p>
                    程序员时期，鲍岳桥研发了汉字系统UCDOS。<span className="text-purple-400 font-semibold">1995年，UCDOS市场份额达90%以上</span>，成为中国计算机用户的"标配"；
                  </p>
                  <p>
                    <span className="text-purple-400 font-semibold">1998年</span> 创办联众游戏，<span className="text-purple-400 font-semibold">2000年</span>联众成为当时中国最大的休闲游戏网站；
                  </p>
                  <p>
                    <span className="text-purple-400 font-semibold">2007年</span> 离开联众，转型为天使投资人，期间创立发展成头部在校教育平台乐教乐学，高峰期覆盖7000万用户；
                  </p>
                  <p>
                    <span className="text-purple-400 font-semibold">2023年</span> 与苏菂共同创立昆仑巢。
                  </p>
                  <p>
                    从 UCDOS 到联众游戏，他始终站在技术创新的最前沿。加入昆仑巢后，他将丰富的技术经验和产业洞察带给新一代创业者。
                  </p>
                </div>

                {/* 成就标签 */}
                <div className="flex flex-wrap gap-3 mt-8">
                  {['UCDOS 开发者', '联众游戏创始人', '昆仑巢创始人', '天使投资人'].map((tag) => (
                    <span
                      key={tag}
                      className="px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full text-sm text-purple-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>

              {/* 肖像（右侧） */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="md:col-span-2 order-1 md:order-2 relative group"
              >
                <div className="absolute -inset-6 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-30 blur-3xl transition-opacity duration-500 rounded-3xl" />
                <div className="relative aspect-[3/4] rounded-3xl overflow-hidden bg-gray-800">
                  {/* 📸 鲍岳桥高清肖像 */}
                  <div
                    className="w-full h-full bg-cover bg-center"
                    style={{
                      backgroundImage: 'url(/images/founder-baoyueqiao.webp)',
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

                  {/* 名字浮现在照片上 */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                    <div className="text-xs font-bold tracking-[0.15em] md:tracking-[0.3em] text-gray-400 mb-2">TECH ADVISOR</div>
                    <h3 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-2">鲍岳桥</h3>
                    <p className="text-sm font-semibold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                      第一代程序员 · 互联网先驱
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 共同发起人 */}
      <section className="relative px-6 py-16 md:py-32">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 bg-gradient-to-r from-orange-400 via-amber-300 to-orange-400 bg-clip-text text-transparent">
              CO-INITIATORS
            </h2>
            <p className="text-gray-400 text-xl tracking-[0.15em] md:tracking-[0.3em]">共同发起人</p>
            <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
              感谢这些企业家、投资人和行业领袖的大力支持与信任
            </p>
          </motion.div>

          {/* 所有共同发起人 - 平等展示 */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              { name: '刘伟', org: '共同发起人', gradient: 'from-orange-500 to-amber-500' },
              { name: '吴晓波', org: '知名财经人物', gradient: 'from-blue-500 to-cyan-500' },
              { name: '蒋涛', org: 'CSDN 创始人', gradient: 'from-purple-500 to-pink-500' },
              { name: '刘松海', org: '金山办公', gradient: 'from-green-500 to-emerald-500' },
              { name: '邓虎斌', org: '共同发起人', gradient: 'from-red-500 to-orange-500' },
              { name: '陈升', org: '世纪互联', gradient: 'from-cyan-500 to-blue-500' },
              { name: '沈文', org: '共同发起人', gradient: 'from-pink-500 to-purple-500' },
              { name: '孙永吉', org: '共同发起人', gradient: 'from-yellow-500 to-orange-500' },
              { name: '王瑞杰', org: '共同发起人', gradient: 'from-indigo-500 to-purple-500' },
              { name: '张荣明', org: '爱慕集团', gradient: 'from-emerald-500 to-green-500' },
              { name: '李宗胜', org: '共同发起人', gradient: 'from-blue-500 to-indigo-500' },
              { name: '李明顺', org: '共同发起人', gradient: 'from-orange-500 to-red-500' },
              { name: '赵远飞', org: '共同发起人', gradient: 'from-purple-500 to-indigo-500' },
              { name: '耿元善', org: '共同发起人', gradient: 'from-cyan-500 to-teal-500' },
              { name: '程皓宇', org: '共同发起人', gradient: 'from-pink-500 to-red-500' },
              { name: '李杰', org: '共同发起人', gradient: 'from-teal-500 to-cyan-500' },
              { name: '莫小翼', org: '共同发起人', gradient: 'from-amber-500 to-yellow-500' },
              { name: '上官永强', org: '共同发起人', gradient: 'from-violet-500 to-purple-500' },
              { name: '联想集团', org: '共同发起人', gradient: 'from-blue-600 to-indigo-600', icon: '🏢' },
              { name: '聚鼎家族', org: '共同发起人', gradient: 'from-purple-600 to-pink-600', icon: '🏢' },
            ].map((person, i) => (
              <motion.div
                key={person.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.03, duration: 0.6 }}
                whileHover={{ y: -8, scale: 1.03 }}
                className="relative group"
              >
                <div className={`absolute -inset-2 bg-gradient-to-r ${person.gradient} opacity-0 group-hover:opacity-30 blur-2xl transition-all duration-500 rounded-3xl`} />
                <div className="relative bg-black/50 backdrop-blur-xl border border-white/10 rounded-3xl p-6 md:p-8 text-center h-full flex flex-col justify-center">
                  <div className="w-20 h-20 mx-auto mb-5 rounded-full bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center shadow-xl group-hover:shadow-2xl transition-shadow">
                    {person.icon ? (
                      <Building2 className="w-10 h-10 text-white" strokeWidth={1.5} />
                    ) : (
                      <span className="text-3xl font-black text-white">{person.name.charAt(0)}</span>
                    )}
                  </div>
                  <h3 className="text-xl md:text-2xl font-black text-white mb-2">{person.name}</h3>
                  <p className="text-sm text-gray-400">{person.org}</p>
                  <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${person.gradient}`} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 共建人社区 - 流动展示 */}
      <section className="relative py-16 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(34,197,94,0.08)_0%,transparent_70%)]" />

        <div className="max-w-full relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-center mb-16 px-6"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 bg-gradient-to-r from-green-400 via-emerald-300 to-green-400 bg-clip-text text-transparent">
              CO-BUILDERS
            </h2>
            <p className="text-gray-400 text-xl tracking-[0.15em] md:tracking-[0.3em]">共建人</p>
            <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
              60+ 共建人在线 · 悬停暂停查看
            </p>
          </motion.div>

          {/* 多层无限滚动 - 现代流动效果 */}
          <div className="relative">
            {/* 渐变遮罩 */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

            <div className="space-y-6 py-8">
              {/* 第一行 - 向右滚动 */}
              <div className="marquee-container group">
                <div className="marquee-content" style={{ '--duration': '60s' }}>
                  {[
                    '蔡学丰', 'Peter Fok', '左世哲', '马智慧', '王保军', '周杨',
                    '大龙', '段凯庭', '杭鑫鑫', '杨维', '王永旺', '高节',
                  ].concat(['蔡学丰', 'Peter Fok', '左世哲', '马智慧', '王保军', '周杨',
                    '大龙', '段凯庭', '杭鑫鑫', '杨维', '王永旺', '高节']).map((name, i) => (
                    <div
                      key={i}
                      className="marquee-item"
                    >
                      <div className="px-6 py-3 bg-gradient-to-r from-green-900/30 to-emerald-900/30 backdrop-blur-sm border border-green-500/20 rounded-full text-sm font-medium text-green-300 hover:border-green-400 hover:text-white hover:scale-110 hover:shadow-lg hover:shadow-green-500/50 transition-all whitespace-nowrap">
                        {name}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* 第二行 - 向左滚动 */}
              <div className="marquee-container group">
                <div className="marquee-content marquee-reverse" style={{ '--duration': '70s' }}>
                  {[
                    '曹睿', '董必杰', '美娜', '高扬', 'May', '段利军',
                    '孟德', '罗荆', '永青', '东栋', '醒客', '李辰',
                  ].concat(['曹睿', '董必杰', '美娜', '高扬', 'May', '段利军',
                    '孟德', '罗荆', '永青', '东栋', '醒客', '李辰']).map((name, i) => (
                    <div
                      key={i}
                      className="marquee-item"
                    >
                      <div className="px-6 py-3 bg-gradient-to-r from-emerald-900/30 to-green-900/30 backdrop-blur-sm border border-green-500/20 rounded-full text-sm font-medium text-emerald-300 hover:border-green-400 hover:text-white hover:scale-110 hover:shadow-lg hover:shadow-green-500/50 transition-all whitespace-nowrap">
                        {name}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* 第三行 - 向右滚动（慢速） */}
              <div className="marquee-container group">
                <div className="marquee-content" style={{ '--duration': '80s' }}>
                  {[
                    '韩三石', '王卓', '张法伦', '邱彬彬', '马懿宏', '王亚南',
                    '纪中展', '昊东', '智筹Peter周', '步拙愚', '陈天明', '曾昭岩',
                  ].concat(['韩三石', '王卓', '张法伦', '邱彬彬', '马懿宏', '王亚南',
                    '纪中展', '昊东', '智筹Peter周', '步拙愚', '陈天明', '曾昭岩']).map((name, i) => (
                    <div
                      key={i}
                      className="marquee-item"
                    >
                      <div className="px-6 py-3 bg-gradient-to-r from-green-900/30 to-teal-900/30 backdrop-blur-sm border border-green-500/20 rounded-full text-sm font-medium text-green-300 hover:border-green-400 hover:text-white hover:scale-110 hover:shadow-lg hover:shadow-green-500/50 transition-all whitespace-nowrap">
                        {name}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* 第四行 - 向左滚动 */}
              <div className="marquee-container group">
                <div className="marquee-content marquee-reverse" style={{ '--duration': '65s' }}>
                  {[
                    '常远', '梁尧', '杨晓东', '徐祥生', '张娜', '数智科技文化',
                    '李强', '王文波', '王剑飞', '李慧英', '董永芳', '刘星',
                  ].concat(['常远', '梁尧', '杨晓东', '徐祥生', '张娜', '数智科技文化',
                    '李强', '王文波', '王剑飞', '李慧英', '董永芳', '刘星']).map((name, i) => (
                    <div
                      key={i}
                      className="marquee-item"
                    >
                      <div className="px-6 py-3 bg-gradient-to-r from-teal-900/30 to-cyan-900/30 backdrop-blur-sm border border-green-500/20 rounded-full text-sm font-medium text-teal-300 hover:border-green-400 hover:text-white hover:scale-110 hover:shadow-lg hover:shadow-green-500/50 transition-all whitespace-nowrap">
                        {name}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* 第五行 - 向右滚动 */}
              <div className="marquee-container group">
                <div className="marquee-content" style={{ '--duration': '75s' }}>
                  {[
                    '韩喜阳', '田雅娟', '白杨', '王萌', '南岳', '彭秀珍',
                    '刘善泉', '陈宁', '大成歌', '张弘', '谢国锋', '徐华欧',
                  ].concat(['韩喜阳', '田雅娟', '白杨', '王萌', '南岳', '彭秀珍',
                    '刘善泉', '陈宁', '大成歌', '张弘', '谢国锋', '徐华欧']).map((name, i) => (
                    <div
                      key={i}
                      className="marquee-item"
                    >
                      <div className="px-6 py-3 bg-gradient-to-r from-cyan-900/30 to-emerald-900/30 backdrop-blur-sm border border-green-500/20 rounded-full text-sm font-medium text-cyan-300 hover:border-green-400 hover:text-white hover:scale-110 hover:shadow-lg hover:shadow-green-500/50 transition-all whitespace-nowrap">
                        {name}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* 第六行 - 向左滚动 */}
              <div className="marquee-container group">
                <div className="marquee-content marquee-reverse" style={{ '--duration': '70s' }}>
                  {[
                    '许淼', '耿晓笛', '李春雷', '闫峰', '刘健', '王海利',
                    '逍遥津', '张敏', '刘维一', '王桐', '张海涛', '曾著',
                  ].concat(['许淼', '耿晓笛', '李春雷', '闫峰', '刘健', '王海利',
                    '逍遥津', '张敏', '刘维一', '王桐', '张海涛', '曾著']).map((name, i) => (
                    <div
                      key={i}
                      className="marquee-item"
                    >
                      <div className="px-6 py-3 bg-gradient-to-r from-emerald-900/30 to-green-900/30 backdrop-blur-sm border border-green-500/20 rounded-full text-sm font-medium text-emerald-300 hover:border-green-400 hover:text-white hover:scale-110 hover:shadow-lg hover:shadow-green-500/50 transition-all whitespace-nowrap">
                        {name}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <style jsx>{`
          .marquee-container {
            overflow: hidden;
            position: relative;
          }

          .marquee-content {
            display: flex;
            gap: 1rem;
            animation: marquee var(--duration, 60s) linear infinite;
            width: fit-content;
          }

          .marquee-reverse {
            animation-direction: reverse;
          }

          .marquee-container:hover .marquee-content {
            animation-play-state: paused;
          }

          .marquee-item {
            flex-shrink: 0;
          }

          @keyframes marquee {
            from {
              transform: translateX(0);
            }
            to {
              transform: translateX(-50%);
            }
          }
        `}</style>
      </section>

      {/* 昆仑巢的诞生 */}
      <section className="relative px-6 py-16 md:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.15)_0%,transparent_70%)]" />

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <div className="text-sm font-bold tracking-[0.2em] md:tracking-[0.5em] text-blue-400 mb-4">WHY KUNLUN NEST</div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-8 bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400 bg-clip-text text-transparent">
              为什么是昆仑巢？
            </h2>

            <div className="space-y-6 text-gray-400 text-xl leading-relaxed mb-12">
              <p>
                <span className="text-white font-semibold">昆仑</span>，代表中国文化中的最高山和精神象征，万山之祖。
              </p>
              <p>
                <span className="text-white font-semibold">巢</span>，象征着共筑之巢，希望成为一个有归属感的地方。
              </p>
              <p className="text-2xl text-cyan-400 font-bold tracking-wide">
                昆仑巢，AI 时代的「新龙门客栈」，创新思想汇聚之地。
              </p>
              <p className="text-lg">
                不以营利为首要目的，向社会提供一个<span className="text-white font-semibold">思想碰撞的空间</span>，
                <br />
                让创业者抱团取暖、碰撞想法、另寻出路，
                <br />
                致力于助力地方发展和产业升级，在开放的世界解决开放的问题。
              </p>
              <p className="text-lg text-cyan-300">
                帮助有梦想的人<span className="text-white font-semibold">在创新道路上走得更稳</span>
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mt-16">
              {[
                { icon: <Users className="w-12 h-12 text-blue-400" strokeWidth={1.5} />, title: '共创共建共享', desc: '所有参与者既是生态的享用者，也是建设者', gradient: 'from-blue-500 to-cyan-500' },
                { icon: <MessageSquare className="w-12 h-12 text-purple-400" strokeWidth={1.5} />, title: '平等开放交流', desc: '无门槛的平等、开放、自由的交流空间', gradient: 'from-purple-500 to-pink-500' },
                { icon: <Target className="w-12 h-12 text-orange-400" strokeWidth={1.5} />, title: '价值回归务实', desc: '从追逐融资回归具体问题，关注实际痛点和现金流', gradient: 'from-orange-500 to-red-500' },
                { icon: <RefreshCw className="w-12 h-12 text-green-400" strokeWidth={1.5} />, title: '能力重组冗余', desc: '基因重组而非简单对接，让失败不归零', gradient: 'from-green-500 to-emerald-500' },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.6 }}
                  whileHover={{ y: -10, scale: 1.05 }}
                  className="bg-black/50 backdrop-blur-xl border border-white/10 rounded-2xl p-6 md:p-8"
                >
                  <div className="text-5xl mb-4">{item.icon}</div>
                  <h4 className="text-xl md:text-2xl font-black text-white mb-3">{item.title}</h4>
                  <p className="text-gray-400">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative px-6 py-16 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              书写你的故事
            </h2>
            <p className="text-xl text-gray-400 mb-12">
              昆仑巢的故事，由每一个加入者共同书写。
              <br />
          
            </p>
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 0 80px rgba(168,85,247,0.5)' }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 md:px-12 md:py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-lg font-bold rounded-full"
              >
                加入昆仑巢
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

export default StoryNew;
