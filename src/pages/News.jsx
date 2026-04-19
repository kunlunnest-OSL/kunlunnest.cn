import { motion } from 'framer-motion';
import { Calendar, Tag, ArrowRight, Newspaper } from 'lucide-react';
import { useState } from 'react';

const News = () => {
  const [selectedCategory, setSelectedCategory] = useState('全部');

  // 分类
  const categories = ['全部', '实验室', '活动', '合作', '媒体报道'];

  // 新闻数据
  const newsData = [
    {
      id: 1,
      date: '2025.03.15',
      title: '昆仑巢人形机器人开放实验室正式启动',
      category: '实验室',
      excerpt: '由郭成凯博士领衔的人形机器人开放实验室正式启动，标志着昆仑巢在具身智能领域迈出重要一步...',
      image: 'https://kunlunnest.cn/_next/image?url=%2Fimages%2Flabs%2Frobot%2F1.avif&w=3840&q=75',
    },
    {
      id: 13,
      date: '2024.10.12',
      title: '昆仑巢：创新创业生态的新样本',
      category: '媒体报道',
      excerpt: '财经频道深度报道，探讨昆仑巢如何打造开放创新平台，助力科技创业者成长...',
      image: 'https://kunlunnest.cn/_next/image?url=%2Fimages%2Fhero%2F1.avif&w=3840&q=75',
      source: '财经频道',
    },
    {
      id: 14,
      date: '2024.10.09',
      title: '昆仑巢：科技创新共同体的探索之路',
      category: '媒体报道',
      excerpt: '整版图文深度报道，全面展示昆仑巢的发展历程、创新模式与社会价值...',
      image: 'https://kunlunnest.cn/_next/image?url=%2Fimages%2Fhero%2F1.avif&w=3840&q=75',
      source: '第5-6版整版报道',
    },
    {
      id: 15,
      date: '2024.09.08',
      title: '走进昆仑巢：创业者的思想碰撞之地',
      category: '媒体报道',
      excerpt: '配图6张深度报道，记录昆仑巢日常运营、实验室建设与创业者故事...',
      image: 'https://kunlunnest.cn/_next/image?url=%2Fimages%2Fhero%2F1.avif&w=3840&q=75',
    },
    {
      id: 16,
      date: '2024.07.25',
      title: '科技创新平台的新探索：昆仑巢模式解析',
      category: '媒体报道',
      excerpt: 'B6科技版专题报道，解析昆仑巢的创新运营模式与技术服务能力...',
      image: 'https://kunlunnest.cn/_next/image?url=%2Fimages%2Flabs%2Frobot%2F1.avif&w=3840&q=75',
      source: 'B6 科技版',
    },
    {
      id: 17,
      date: '2024.07.12',
      title: '昆仑巢：抱团取暖的创业新生态',
      category: '媒体报道',
      excerpt: 'A08创业版报道，关注昆仑巢如何为创业者提供资源共享与协作创新平台...',
      image: 'https://kunlunnest.cn/_next/image?url=%2Fimages%2Fhero%2F1.avif&w=3840&q=75',
      source: 'A08 创业版',
    },
    {
      id: 18,
      date: '2024.05.06',
      title: '刚成立就有地方政府洽谈合作，昆仑巢是个怎样的平台？',
      category: '媒体报道',
      excerpt: '首页推荐报道，解读昆仑巢成立即获浙江地方政府关注的背后原因...',
      image: 'https://kunlunnest.cn/_next/image?url=%2Fimages%2Fhero%2F1.avif&w=3840&q=75',
      source: '潮新闻',
      link: 'https://tidenews.com.cn/news.html?id=2638155',
    },
    {
      id: 19,
      date: '2024.03.18',
      title: '北青深一度：昆仑巢的创新实验',
      category: '媒体报道',
      excerpt: '北京青年报深度报道，探访昆仑巢的创新理念与实践探索...',
      image: 'https://kunlunnest.cn/_next/image?url=%2Fimages%2Fhero%2F1.avif&w=3840&q=75',
      source: '北青深一度',
    },
    {
      id: 2,
      date: '2025.03.10',
      title: '第五期昆仑夜话：AI时代的创业机遇与挑战',
      category: '活动',
      excerpt: '本期夜话邀请多位AI领域创业者，共同探讨人工智能浪潮下的创业新机遇...',
      image: 'https://kunlunnest.cn/_next/image?url=%2Fimages%2Fhero%2F1.avif&w=3840&q=75',
    },
    {
      id: 3,
      date: '2025.03.05',
      title: '昆仑巢与宇树科技达成战略合作',
      category: '合作',
      excerpt: '双方将在人形机器人技术研发、产业应用等方面展开深度合作，共同推动机器人产业发展...',
      image: 'https://kunlunnest.cn/_next/image?url=%2Fimages%2Flabs%2Frobot%2F2.avif&w=3840&q=75',
    },
    {
      id: 4,
      date: '2025.02.20',
      title: 'AIGC实验室举办首期技术沙龙',
      category: '活动',
      excerpt: '围绕AI内容生成技术的企业级应用展开讨论，吸引了众多创业者和技术专家参与...',
      image: 'https://kunlunnest.cn/_next/image?url=%2Fimages%2Flabs%2Faigc%2F1.avif&w=3840&q=75',
    },
    {
      id: 5,
      date: '2025.02.15',
      title: '3D打印实验室推出创业者快速原型服务',
      category: '实验室',
      excerpt: '为创业者提供从设计到原型制作的一站式服务，大幅缩短产品验证周期...',
      image: 'https://kunlunnest.cn/_next/image?url=%2Fimages%2Flabs%2F3D%2F1.avif&w=3840&q=75',
    },
    {
      id: 6,
      date: '2025.02.01',
      title: '昆仑巢获评"2024年度最具影响力创新社区"',
      category: '媒体报道',
      excerpt: '凭借在科技创新领域的突出贡献，昆仑巢获得行业认可...',
      image: 'https://kunlunnest.cn/_next/image?url=%2Fimages%2Fhero%2F1.avif&w=3840&q=75',
    },
    {
      id: 7,
      date: '2025.01.25',
      title: '第四期昆仑夜话：硬科技创业的机遇与挑战',
      category: '活动',
      excerpt: '邀请硬科技领域创业者分享经验，探讨硬科技创业的关键要素...',
      image: 'https://kunlunnest.cn/_next/image?url=%2Fimages%2Fhero%2F1.avif&w=3840&q=75',
    },
    {
      id: 8,
      date: '2025.01.15',
      title: '昆仑巢共建人突破60位里程碑',
      category: '合作',
      excerpt: '越来越多的创业者、投资人和技术专家加入昆仑巢共建人网络...',
      image: 'https://kunlunnest.cn/_next/image?url=%2Fimages%2Ffounders%2Fsudi.avif&w=3840&q=75',
    },
    {
      id: 9,
      date: '2024.12.20',
      title: '年度回顾：昆仑巢2024创新成果展',
      category: '活动',
      excerpt: '回顾2024年昆仑巢在实验室建设、社区活动、项目孵化等方面的成果...',
      image: 'https://kunlunnest.cn/_next/image?url=%2Fimages%2Fhero%2F1.avif&w=3840&q=75',
    },
    {
      id: 10,
      date: '2024.12.10',
      title: '人形机器人技术研讨会成功举办',
      category: '活动',
      excerpt: '汇聚产学研各界专家，深入探讨人形机器人技术发展趋势...',
      image: 'https://kunlunnest.cn/_next/image?url=%2Fimages%2Flabs%2Frobot%2F3.avif&w=3840&q=75',
    },
    {
      id: 11,
      date: '2024.11.28',
      title: '昆仑巢启动"科技创新加速计划"',
      category: '实验室',
      excerpt: '为优秀创新项目提供技术支持、资源对接和导师辅导...',
      image: 'https://kunlunnest.cn/_next/image?url=%2Fimages%2Fhero%2F1.avif&w=3840&q=75',
    },
    {
      id: 12,
      date: '2024.11.15',
      title: '3D打印技术在工业设计中的应用分享',
      category: '活动',
      excerpt: '许方雷分享3D打印技术如何加速产品创新迭代...',
      image: 'https://kunlunnest.cn/_next/image?url=%2Fimages%2Flabs%2F3D%2F2.avif&w=3840&q=75',
    },
  ];

  // 筛选新闻
  const filteredNews =
    selectedCategory === '全部'
      ? newsData
      : newsData.filter((news) => news.category === selectedCategory);

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
            <Newspaper className="w-16 h-16 text-blue-600 mx-auto mb-6" />
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
              昆仑动态
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              关注昆仑巢的最新动态，了解我们的活动、成果与合作
            </p>
          </motion.div>
        </div>
      </section>

      {/* 分类筛选 */}
      <section className="py-8 px-6 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 新闻列表 */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredNews.map((news, index) => (
              <motion.div
                key={news.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer group"
              >
                {/* 图片 */}
                <div className="h-48 overflow-hidden">
                  <img
                    src={news.image}
                    alt={news.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* 内容 */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center text-gray-500 text-sm">
                      <Calendar className="w-4 h-4 mr-2" />
                      {news.date}
                    </div>
                    <span className="px-3 py-1 text-xs font-medium text-blue-600 bg-blue-50 border border-blue-200 rounded-full">
                      {news.category}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                    {news.title}
                  </h3>
                  {news.source && (
                    <p className="text-xs text-gray-500 mb-2 flex items-center">
                      <Tag className="w-3 h-3 mr-1" />
                      来源：{news.source}
                    </p>
                  )}
                  <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-2">
                    {news.excerpt}
                  </p>
                  {news.link ? (
                    <a
                      href={news.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-blue-600 text-sm font-medium group-hover:translate-x-2 transition-transform duration-300"
                    >
                      <span>查看原文</span>
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </a>
                  ) : (
                    <div className="flex items-center text-blue-600 text-sm font-medium group-hover:translate-x-2 transition-transform duration-300">
                      <span>阅读更多</span>
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* 空状态 */}
          {filteredNews.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-500">暂无该分类的动态</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default News;
