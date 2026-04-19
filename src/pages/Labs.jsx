import { motion } from 'framer-motion';
import { Cpu, Layers, Zap, Users, Lightbulb, Target, ArrowRight } from 'lucide-react';

const Labs = () => {
  // 实验室详细信息
  const labs = [
    {
      id: 'humanoid',
      icon: Cpu,
      title: '人形机器人开放实验室',
      leader: '郭成凯 博士',
      description: '由郭成凯博士领衔，专注于具身机器人技术研发与AI应用落地。实验室聚焦人形机器人的感知、决策与执行能力，推动机器人技术在工业、服务等领域的实际应用。',
      images: [
        'https://kunlunnest.cn/_next/image?url=%2Fimages%2Flabs%2Frobot%2F1.avif&w=3840&q=75',
        'https://kunlunnest.cn/_next/image?url=%2Fimages%2Flabs%2Frobot%2F2.avif&w=3840&q=75',
        'https://kunlunnest.cn/_next/image?url=%2Fimages%2Flabs%2Frobot%2F3.avif&w=3840&q=75',
      ],
      focus: [
        '具身智能技术研究',
        '人机交互系统开发',
        '机器人应用场景探索',
        '产学研深度合作',
      ],
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      id: '3dprint',
      icon: Layers,
      title: '3D打印实验室',
      leader: '许方雷',
      description: '由许方雷发起，聚焦工业设计与增材制造技术创新。实验室致力于推动3D打印技术在产品原型、定制化生产等领域的应用，为创业者提供快速验证与迭代的能力。',
      images: [
        'https://kunlunnest.cn/_next/image?url=%2Fimages%2Flabs%2F3D%2F1.avif&w=3840&q=75',
        'https://kunlunnest.cn/_next/image?url=%2Fimages%2Flabs%2F3D%2F2.avif&w=3840&q=75',
        'https://kunlunnest.cn/_next/image?url=%2Fimages%2Flabs%2F3D%2F3.avif&w=3840&q=75',
      ],
      focus: [
        '增材制造技术研发',
        '工业设计与原型开发',
        '材料科学探索',
        '定制化生产方案',
      ],
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      id: 'aigc',
      icon: Zap,
      title: 'AIGC实验室',
      leader: '优酷早期团队',
      description: '由优酷早期团队成员主导，探索AI企业服务与内容生成技术。实验室聚焦AIGC技术在企业级应用的落地，推动AI赋能内容创作、营销传播等场景。',
      images: [
        'https://kunlunnest.cn/_next/image?url=%2Fimages%2Flabs%2Faigc%2F1.avif&w=3840&q=75',
        'https://kunlunnest.cn/_next/image?url=%2Fimages%2Flabs%2Faigc%2F2.avif&w=3840&q=75',
        'https://kunlunnest.cn/_next/image?url=%2Fimages%2Flabs%2Faigc%2F3.avif&w=3840&q=75',
      ],
      focus: [
        'AI内容生成技术',
        '企业级应用开发',
        '多模态AI探索',
        '商业化落地实践',
      ],
      gradient: 'from-orange-500 to-red-500',
    },
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
              开放实验室
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              昆仑巢打造的开放式创新实验室矩阵，汇聚顶尖专家与前沿技术，
              <br />
              为创业者提供技术支持、资源共享与协作创新的平台。
            </p>
          </motion.div>
        </div>
      </section>

      {/* 实验室详情 */}
      {labs.map((lab, index) => (
        <section
          key={lab.id}
          id={lab.id}
          className={`py-20 px-6 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
        >
          <div className="max-w-7xl mx-auto">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              {/* 图片区域 */}
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className={index % 2 === 1 ? 'lg:order-2' : ''}
              >
                <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src={lab.images[0]}
                    alt={lab.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4 mt-4">
                  {lab.images.slice(1).map((img, idx) => (
                    <div key={idx} className="h-48 rounded-xl overflow-hidden shadow-md">
                      <img
                        src={img}
                        alt={`${lab.title} ${idx + 2}`}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* 内容区域 */}
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? 30 : -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className={index % 2 === 1 ? 'lg:order-1' : ''}
              >
                <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${lab.gradient} mb-6`}>
                  <lab.icon className="w-7 h-7 text-white" />
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 tracking-tight">
                  {lab.title}
                </h2>
                <div className="flex items-center text-blue-600 mb-6">
                  <Users className="w-5 h-5 mr-2" />
                  <span className="font-medium">负责人：{lab.leader}</span>
                </div>
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  {lab.description}
                </p>

                {/* 研究方向 */}
                <div className="space-y-3">
                  <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide mb-4">
                    研究方向
                  </h3>
                  {lab.focus.map((item, idx) => (
                    <div key={idx} className="flex items-start">
                      <ArrowRight className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA区域 */}
      <section className="py-20 px-6 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Lightbulb className="w-16 h-16 text-blue-600 mx-auto mb-6" />
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 tracking-tight">
              开放协作，共创未来
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              昆仑巢的实验室向所有创新者开放，欢迎加入我们的技术社区，
              <br />
              共同探索前沿科技，推动创新项目落地。
            </p>
            <a href="/contact">
              <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-full text-white font-medium shadow-lg hover:shadow-xl transition-all duration-300">
                预约参观实验室
              </button>
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Labs;
