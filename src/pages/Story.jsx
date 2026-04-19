import { motion } from 'framer-motion';
import { Users, Target, Heart, Sparkles, Building2, Coffee } from 'lucide-react';

const Story = () => {
  // 核心价值观
  const values = [
    {
      icon: Sparkles,
      title: '思想碰撞',
      description: '"昆仑"代表中国文化中的最高山和精神象征',
    },
    {
      icon: Heart,
      title: '共筑之巢',
      description: '"巢"象征着创业者和创新者的共同家园',
    },
    {
      icon: Target,
      title: '创新驱动',
      description: '非营利创新中心，推动产业升级与本土发展',
    },
  ];

  // 主要创始人
  const mainFounders = [
    {
      name: '苏菂',
      title: '昆仑巢发起人',
      description: '车库咖啡创始人，中国创业生态的开创者，深耕科技创新社区建设多年，致力于为创业者打造思想碰撞与资源共享的平台。',
      avatar: 'https://kunlunnest.cn/_next/image?url=%2Fimages%2Ffounders%2Fsudi.avif&w=3840&q=75',
      achievements: ['车库咖啡创始人', '中国创业生态先驱', '天使投资人'],
    },
    {
      name: '鲍岳桥',
      title: '技术顾问',
      description: '中国第一代程序员，UCDOS操作系统创造者，联众游戏创始人，中国互联网行业的传奇人物，见证并推动了中国互联网的发展历程。',
      avatar: 'https://kunlunnest.cn/_next/image?url=%2Fimages%2Ffounders%2Fbaoyueqiao.avif&w=3840&q=75',
      achievements: ['UCDOS创造者', '联众游戏创始人', '互联网先驱'],
    },
  ];

  // 部分共建人（示例）
  const coBuilders = [
    { name: '刘伟', role: '投资人' },
    { name: '吴晓波', role: '财经作家' },
    { name: '蒋涛', role: 'CSDN创始人' },
    { name: '许方雷', role: '3D打印专家' },
    { name: '郭成凯', role: '机器人专家' },
    { name: '联想集团', role: '企业支持' },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Hero区域 */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
              昆仑故事
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              "昆仑"代表中国文化中的最高山和精神象征，"巢"则象征着共筑之巢。
              <br />
              我们是一个非营利创新中心，致力于为创业者提供思想碰撞的空间，
              共享资源，探索新方向，支持本土发展和产业升级。
            </p>
          </motion.div>
        </div>
      </section>

      {/* 核心价值观 */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-16 tracking-tight"
          >
            我们的使命
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="bg-gray-50 border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-blue-600 flex items-center justify-center mb-6">
                  <value.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 核心创始人 */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 tracking-tight">
              核心创始人
            </h2>
            <p className="text-gray-600 text-lg">引领昆仑巢发展的灵魂人物</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {mainFounders.map((founder, index) => (
              <motion.div
                key={founder.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="h-96 overflow-hidden">
                  <img
                    src={founder.avatar}
                    alt={founder.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{founder.name}</h3>
                  <p className="text-blue-600 text-sm font-medium mb-4">{founder.title}</p>
                  <p className="text-gray-600 leading-relaxed mb-6">{founder.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {founder.achievements.map((achievement) => (
                      <span
                        key={achievement}
                        className="px-3 py-1 text-xs font-medium text-gray-700 bg-gray-100 rounded-full"
                      >
                        {achievement}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 共建人网络 */}
      <section className="py-20 px-6 bg-white" id="builders">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 tracking-tight">
              共建人网络
            </h2>
            <p className="text-gray-600 text-lg">
              汇聚60+位创业者、投资人、技术专家与企业家
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6"
          >
            {coBuilders.map((builder, index) => (
              <motion.div
                key={builder.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="bg-gray-50 border border-gray-200 rounded-xl p-6 text-center hover:shadow-lg hover:border-blue-300 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center mx-auto mb-3">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-semibold text-gray-900 text-sm mb-1">{builder.name}</h4>
                <p className="text-xs text-gray-600">{builder.role}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <p className="text-gray-500 text-sm">
              还有更多优秀的共建者正在加入昆仑巢大家庭...
            </p>
          </motion.div>
        </div>
      </section>

      {/* 加入我们 */}
      <section className="py-20 px-6 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Building2 className="w-16 h-16 text-blue-600 mx-auto mb-6" />
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 tracking-tight">
              成为共建人
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              如果你认同昆仑巢的理念，愿意分享经验、资源与智慧，
              <br />
              欢迎加入我们的共建人网络，一起推动科技创新生态的发展。
            </p>
            <a href="/contact">
              <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-full text-white font-medium shadow-lg hover:shadow-xl transition-all duration-300">
                申请加入
              </button>
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Story;
