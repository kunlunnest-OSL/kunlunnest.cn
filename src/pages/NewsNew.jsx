import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AppleNavbar from '../components/AppleNavbar';
import AIParticles from '../components/AIParticles';

/**
 * 新闻动态页面 - 苹果 2026 风格
 * 横向滚动时间线 + 活动照片墙 + 媒体报道
 *
 * 数据来源: public/data/news.json
 * 维护方式: 编辑根目录的 news-data.csv，然后运行"更新新闻.bat"
 */
const NewsNew = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  // 从JSON文件加载新闻数据
  useEffect(() => {
    fetch('/data/news.json')
      .then(response => response.json())
      .then(data => {
        setNews(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('加载新闻数据失败:', error);
        setLoading(false);
      });
  }, []);

  // 备用数据（如果JSON加载失败）
  const fallbackNews = [
    {
      id: 1,
      category: 'event',
      date: '2025.07',
      title: 'EMBA校友联盟参访昆仑巢',
      desc: '在思想碰撞中探寻商业新机遇，昆仑巢创始人苏菂分享理念愿景',
      image: '/images/event-space-1.jpg',
      tag: 'EVENT',
      gradient: 'from-blue-500 to-cyan-500',
      link: 'https://mp.weixin.qq.com/s?__biz=Mzk0NTQxNzI2Mg==&mid=2247486590&idx=1&sn=621ae55d287f77e5d1b6b9c3cf583b73',
    },
    {
      id: 2,
      category: 'media',
      date: '2025.06',
      title: 'AI时代的新龙门客栈',
      desc: '从车库咖啡到昆仑巢，苏菂作为"创业摆渡人"见证两轮技术浪潮',
      image: '/images/garage-cafe-1.jpg',
      tag: 'MEDIA',
      gradient: 'from-orange-500 to-red-500',
      link: 'https://mp.weixin.qq.com/s?__biz=Mzg5NDg1NjU0Ng==&mid=2247496029&idx=1&sn=bda84dfba4535a96a6bd86f28abacb62',
    },
    {
      id: 3,
      category: 'event',
      date: '2025.05',
      title: 'AI狂热：草根创业者与煤老板走到了一起',
      desc: '北京北三环周二创业沙龙聚集各类创业者讨论AI与创业机会',
      image: '/images/event-space-1.jpg',
      tag: 'EVENT',
      gradient: 'from-purple-500 to-pink-500',
      link: 'https://k.sina.cn/article_1650111241_625ab30902701d74a.html',
    },
    {
      id: 4,
      category: 'media',
      date: '2025.05',
      title: '对话"创业摆渡人"苏菂',
      desc: '从屋顶种菜到狗头摄像的逻辑之变，探讨大模型与具身智能',
      image: '/images/founder-sudi.webp',
      tag: 'MEDIA',
      gradient: 'from-yellow-500 to-orange-500',
      link: 'https://k.sina.com.cn/article_6248544856_174713a5802001pzmc.html',
    },
    {
      id: 5,
      category: 'event',
      date: '2025.04',
      title: '为创业者搭建精神栖居地',
      desc: '昆仑巢举办UI中国活动，百位创业者聆听AI视频创作等话题分享',
      image: '/images/event-space-1.jpg',
      tag: 'EVENT',
      gradient: 'from-green-500 to-emerald-500',
      link: 'https://mp.weixin.qq.com/s?__biz=MjM5OTM3OTA3NA==&mid=2656089233&idx=2&sn=d23e596d99346e5543c674c843145cfe',
    },
    {
      id: 6,
      category: 'media',
      date: '2024.11',
      title: '创业"新龙门客栈"',
      desc: '创始人鲍岳桥和苏菂把昆仑巢比作龙门客栈，汇聚创业机会',
      image: '/images/garage-cafe-2.jpg',
      tag: 'MEDIA',
      gradient: 'from-indigo-500 to-purple-500',
      link: 'https://m.eeo.com.cn/2024/1102/695817.shtml',
    },
    {
      id: 7,
      category: 'event',
      date: '2024.09',
      title: '浙江大学校友创业交流会',
      desc: '北京浙江大学校友会京鹰会"周周讲"第24期，蔡玮与鲍岳桥分享创业话题',
      image: '/images/event-space-1.jpg',
      tag: 'EVENT',
      gradient: 'from-blue-500 to-cyan-500',
      link: 'https://mp.weixin.qq.com/s?__biz=MzkyMTMyMjM5Mw==&mid=2247492606&idx=1&sn=f838fc1fdfa4082a852d495ac8b039ce',
    },
    {
      id: 8,
      category: 'event',
      date: '2024.09',
      title: '2024德胜科创汇科技文化活动',
      desc: '以"在开放的世界解决开放的问题"为主题，聚焦AIGC与数字游戏',
      image: '/images/event-openclaw-meetup.jpg',
      tag: 'EVENT',
      gradient: 'from-purple-500 to-pink-500',
      link: 'https://www.ncsti.gov.cn/kjdt/yqdy/yqdt/202409/t20240924_179895.html',
    },
    {
      id: 9,
      category: 'media',
      date: '2024.06',
      title: '鲍岳桥进场AI，要做"车库咖啡2.0"',
      desc: '越是这样的时候，越需要思想碰撞的地方，两位创始人再次创业',
      image: '/images/founder-baoyueqiao.webp',
      tag: 'MEDIA',
      gradient: 'from-orange-500 to-red-500',
      link: 'https://mp.weixin.qq.com/s?__biz=Mzg2NDcwMTI4NA==&mid=2247491967&idx=1&sn=324e9f8f0c0e26edb4b981872e229c7b',
    },
    {
      id: 10,
      category: 'lab',
      date: '2024.05',
      title: '昆仑巢AI孵化开放平台亮相西城科技周',
      desc: '设计之都公司携纹化数据库、昆仑巢平台参展大数据人工智能板块',
      image: '/images/lab-aigc-1.jpg',
      tag: 'LAUNCH',
      gradient: 'from-yellow-500 to-orange-500',
      link: 'https://mp.weixin.qq.com/s?__biz=MzI2MDU3MjIzNQ==&mid=2247553702&idx=4&sn=48d65eb6ddfa804c71d0124ef592d10f',
    },
    {
      id: 11,
      category: 'milestone',
      date: '2024.05',
      title: '"巢青年"品牌正式发布',
      desc: '五四青年节发起"Hello不躺平青年"宣讲活动，发布青年交流品牌',
      image: '/images/event-awards.jpg',
      tag: 'MILESTONE',
      gradient: 'from-green-500 to-emerald-500',
      link: 'https://news.ynet.com/2024/05/08/3758770t70.html',
    },
    {
      id: 12,
      category: 'milestone',
      date: '2023.11',
      title: '昆仑巢AI孵化开放平台落地西城',
      desc: '核心为AI公益算力、开源大模型、产业升级等，发起4支基金',
      image: '/images/garage-cafe-1.jpg',
      tag: 'MILESTONE',
      gradient: 'from-blue-500 to-purple-500',
      link: 'https://news.bjd.com.cn/2023/11/22/10627220.shtml',
    },
    {
      id: 13,
      category: 'media',
      date: '2024.11',
      title: '创业"新龙门客栈"',
      desc: '经济观察网深度报道：昆仑巢为创业者提供思想碰撞的空间',
      image: '/images/garage-cafe-history.jpg',
      tag: 'MEDIA',
      gradient: 'from-cyan-500 to-blue-500',
      link: 'http://m.eeo.com.cn/2024/1102/695817.shtml',
    },
    {
      id: 14,
      category: 'cooperation',
      date: '2025.01',
      title: '联想集团携手昆仑巢举办创业思创营新年聚会',
      desc: '为创业者指引创业新航向，搭建产业资源对接平台',
      image: '/images/event-space-1.jpg',
      tag: 'COOPERATION',
      gradient: 'from-red-500 to-orange-500',
      link: 'https://brand.lenovo.com.cn/brand/ppn02566.html',
    },
    {
      id: 15,
      category: 'media',
      date: '2024.02',
      title: '昆仑巢：为追梦人而筑',
      desc: '搜狐新闻报道：苏菂与鲍岳桥共同打造的创业者精神家园',
      image: '/images/brand-vision-1.jpg',
      tag: 'MEDIA',
      gradient: 'from-purple-500 to-pink-500',
      link: 'https://www.sohu.com/a/752191330_426502',
    },
    {
      id: 16,
      category: 'media',
      date: '2023.12',
      title: '"拼"在2023｜拼出梦想',
      desc: '央视新闻（CCTV13）/荆楚网报道：记录2023年创业者的拼搏故事',
      image: '/images/event-space-1.jpg',
      tag: 'MEDIA',
      gradient: 'from-red-500 to-orange-500',
      link: 'https://content-static.cctvnews.cctv.com/snow-book/index.html?item_id=6420697658979089412',
    },
    {
      id: 17,
      category: 'media',
      date: '2024.02',
      title: '邂逅创业者的精神食堂',
      desc: '中央广电总台国际在线深度报道昆仑巢创业社区',
      image: '/images/brand-vision-2.jpg',
      tag: 'MEDIA',
      gradient: 'from-blue-500 to-cyan-500',
      link: 'https://news.cri.cn/2024-02-09/821b6be0-331e-920d-abbe-c7b1b739da59.html',
    },
    {
      id: 18,
      category: 'media',
      date: '2023.12',
      title: '央视新闻丨科创西城：拼～拼～拼～',
      desc: '北京西城发布报道：昆仑巢助力西城科技创新发展',
      image: '/images/event-space-1.jpg',
      tag: 'MEDIA',
      gradient: 'from-purple-500 to-pink-500',
      link: 'https://peking.bjd.com.cn/content/s657fd63de4b0ec2b81d0a101.html',
    },
    {
      id: 19,
      category: 'event',
      date: '2024.01',
      title: '昆仑巢暨昆仑之巅AI创新论坛开幕',
      desc: '中国小康网报道：AI创新论坛在京隆重举行',
      image: '/images/event-awards.jpg',
      tag: 'EVENT',
      gradient: 'from-orange-500 to-red-500',
      link: 'https://www.163.com/dy/article/IK2BF808051498EH.html',
    },
    {
      id: 20,
      category: 'media',
      date: '2024.01',
      title: '重返昆仑巢：年轻人不愿意创业了吗？',
      desc: '吴晓波频道深度观察：新一代创业者的思考与选择',
      image: '/images/brand-vision-3.jpg',
      tag: 'MEDIA',
      gradient: 'from-cyan-500 to-blue-500',
      link: 'https://news.qq.com/rain/a/20240102A049P300',
    },
    {
      id: 21,
      category: 'media',
      date: '2025.03',
      title: '苏菂：为创业者搭建精神栖居地',
      desc: '中关村杂志专访：从车库咖啡到昆仑巢的创业服务理念',
      image: '/images/founder-sudi.webp',
      tag: 'MEDIA',
      gradient: 'from-green-500 to-emerald-500',
      link: 'https://mp.weixin.qq.com/s?__biz=MjM5OTM3OTA3NA==&mid=2656089233&idx=2&sn=d23e596d99346e5543c674c843145cfe',
    },
    {
      id: 22,
      category: 'cooperation',
      date: '2024.01',
      title: '联想X昆仑巢，硬核新年聚会',
      desc: '联想创投携手昆仑巢打造创业者交流平台',
      image: '/images/event-space-1.jpg',
      tag: 'COOPERATION',
      gradient: 'from-blue-500 to-purple-500',
      link: 'https://finance.sina.com.cn/tech/roll/2024-01-19/doc-inaczqyk1549918.shtml',
    },
    {
      id: 23,
      category: 'media',
      date: '2024.03',
      title: '中国Z世代 创业正当时',
      desc: '中国网报道：新一代创业者在昆仑巢的成长故事',
      image: '/images/brand-vision-4.jpg',
      tag: 'MEDIA',
      gradient: 'from-pink-500 to-red-500',
      link: 'http://www.china.com.cn/txt/2024-03/07/content_117045794.shtml',
    },
    {
      id: 24,
      category: 'media',
      date: '2024.06',
      title: '对话"创业摆渡人"苏菂',
      desc: '中国经营报《等深线》：从"屋顶种菜"到"狗头摄像"的逻辑之变',
      image: '/images/founder-sudi.webp',
      tag: 'MEDIA',
      gradient: 'from-orange-500 to-yellow-500',
      link: 'http://k.sina.com.cn/article_6248544856_174713a5802001pzmc.html',
    },
    {
      id: 25,
      category: 'media',
      date: '2024.12',
      title: '对话苏菂：中国还有人创业吗？',
      desc: 'EMBA/《商界》深度对话：探讨新时代创业环境与机遇',
      image: '/images/garage-cafe-2.jpg',
      tag: 'MEDIA',
      gradient: 'from-purple-500 to-indigo-500',
      link: 'https://www.toutiao.com/article/7457102968614994443/',
    },
    {
      id: 26,
      category: 'event',
      date: '2024.05',
      title: 'Hello不躺平青年！',
      desc: '德胜街道＆昆仑巢携手汇聚青年挺膺担当的青春力量',
      image: '/images/event-awards.jpg',
      tag: 'EVENT',
      gradient: 'from-green-500 to-teal-500',
      link: 'https://mp.weixin.qq.com/s?__biz=MzUzMDA1ODkzMg==&mid=2247558477&idx=1&sn=fe5bc86632fcb176a956ba4566d8469d',
    },
  ];

  // 使用加载的数据，如果加载失败则使用备用数据
  const displayNews = news.length > 0 ? news : fallbackNews;

  const categories = [
    { id: 'all', name: '全部', icon: '📋' },
    { id: 'lab', name: '实验室', icon: '🧪' },
    { id: 'event', name: '活动', icon: '🎪' },
    { id: 'milestone', name: '里程碑', icon: '🏆' },
    { id: 'media', name: '媒体', icon: '📰' },
    { id: 'cooperation', name: '合作', icon: '🤝' },
  ];

  const filteredNews = selectedCategory === 'all' ? displayNews : displayNews.filter((n) => n.category === selectedCategory);

  // 加载中状态
  if (loading) {
    return (
      <div className="bg-black min-h-screen flex items-center justify-center">
        <div className="text-white text-xl">加载中...</div>
      </div>
    );
  }

  return (
    <div className="bg-black min-h-screen">
      {/* AI 粒子背景 */}
      <AIParticles particleCount={50} particleColor="rgba(249, 115, 22, 0.6)" lineColor="rgba(249, 115, 22, 0.2)" />

      {/* 导航栏 */}
      <AppleNavbar />

      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center px-6 pt-20 md:pt-32 pb-20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(249,115,22,0.15)_0%,transparent_70%)]" />

        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-[clamp(2.5rem,15vw,10rem)] font-black mb-8 bg-gradient-to-r from-orange-400 via-red-300 to-orange-400 bg-clip-text text-transparent leading-none">
              NEWS
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 tracking-[0.15em] md:tracking-[0.3em] mb-6">昆仑动态</p>
            <p className="text-xl text-gray-500 max-w-3xl mx-auto leading-relaxed">
              持续探索，不断进化。
              <br />
              记录昆仑巢的每一个重要时刻。
            </p>
          </motion.div>

          {/* 分类过滤器 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="flex items-center justify-center gap-3 mt-16 flex-wrap"
          >
            {categories.map((cat) => (
              <motion.button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`
                  px-4 py-2 md:px-6 md:py-3 rounded-full font-medium text-sm tracking-wider transition-all duration-300
                  ${
                    selectedCategory === cat.id
                      ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-[0_0_30px_rgba(249,115,22,0.5)]'
                      : 'bg-black/50 border border-white/10 text-gray-400 hover:border-white/30'
                  }
                `}
              >
                {cat.icon} {cat.name}
              </motion.button>
            ))}
          </motion.div>
        </div>

        {/* 滚动提示 */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500">
          <span className="text-xs tracking-widest">SCROLL</span>
          <div className="w-[1px] h-16 bg-gradient-to-b from-gray-500 to-transparent animate-scroll-line" />
        </div>
      </section>

      {/* 横向滚动时间线 */}
      <section className="relative px-6 py-20">
        <div className="max-w-[1920px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="mb-12"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-white mb-4 text-center">时间线</h2>
            <p className="text-gray-400 text-center">横向滑动查看更多</p>
          </motion.div>

          {/* 横向滚动容器 */}
          <div className="overflow-x-auto pb-8 scrollbar-hide">
            <div className="flex gap-6 min-w-max px-6">
              {filteredNews.map((item, i) => (
                <motion.a
                  key={item.id}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.6 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="flex-shrink-0 w-[280px] md:w-[400px] relative group cursor-pointer"
                >
                  {/* 外发光 */}
                  <div className={`absolute -inset-2 bg-gradient-to-r ${item.gradient} opacity-0 group-hover:opacity-30 blur-3xl transition-opacity duration-500 rounded-3xl`} />

                  {/* 卡片 */}
                  <div className="relative bg-black/50 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden">
                    {/* 图片 */}
                    <div className="relative aspect-[16/10] overflow-hidden">
                      {/* 📸 活动照片占位符 */}
                      <div
                        className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                        style={{
                          backgroundImage: `url(${item.image})`,
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

                      {/* 标签 */}
                      <div className={`absolute top-4 left-4 px-4 py-1.5 bg-gradient-to-r ${item.gradient} text-white text-xs font-bold rounded-full`}>
                        {item.tag}
                      </div>

                      {/* 日期 */}
                      <div className="absolute bottom-4 left-4 text-5xl font-black text-white/20">{item.date}</div>
                    </div>

                    {/* 内容 */}
                    <div className="p-6">
                      <h3 className="text-xl md:text-2xl font-black text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-white group-hover:to-gray-400 transition-all">
                        {item.title}
                      </h3>
                      <p className="text-gray-400 leading-relaxed">{item.desc}</p>
                    </div>

                    {/* 底部装饰 */}
                    <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${item.gradient}`} />
                  </div>
                </motion.a>
              ))}
            </div>
          </div>

          {/* 滚动提示 */}
          <div className="text-center mt-6 text-gray-500 text-sm flex items-center justify-center gap-2">
            <span>←</span>
            <span>左右滑动查看更多</span>
            <span>→</span>
          </div>
        </div>
      </section>

      {/* 活动照片墙 */}
      <section className="relative px-6 py-16 md:py-32">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-center mb-16"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-white mb-4">活动掠影</h2>
            <p className="text-gray-400">昆仑巢的每一个精彩瞬间</p>
          </motion.div>

          {/* 照片网格 - Pinterest 瀑布流风格 */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {[
              { image: '/images/gallery/events/DSC00086.JPG', span: 'md:col-span-2 md:row-span-2' },
              { image: '/images/gallery/events/DSC00097.JPG', span: '' },
              { image: '/images/gallery/events/DSC01938.JPG', span: '' },
              { image: '/images/gallery/events/DSC01954.JPG', span: 'md:col-span-2' },
              { image: '/images/gallery/events/DSC01988.JPG', span: '' },
              { image: '/images/gallery/events/DSC02008.JPG', span: '' },
              { image: '/images/gallery/events/DSC02028.JPG', span: 'md:row-span-2' },
              { image: '/images/gallery/events/DSC09707.JPG', span: '' },
              { image: '/images/gallery/events/DSC09763.JPG', span: '' },
              { image: '/images/gallery/events/DSC09766.JPG', span: 'md:col-span-2' },
              { image: '/images/gallery/events/DSC09862.JPG', span: '' },
              { image: '/images/gallery/events/DSC09903.JPG', span: '' },
              { image: '/images/gallery/events/DSC09909.JPG', span: 'md:row-span-2' },
              { image: '/images/gallery/events/DSCF0538.JPG', span: '' },
              { image: '/images/gallery/events/DSCF0586.JPG', span: '' },
              { image: '/images/gallery/events/DSCF0687.JPG', span: 'md:col-span-2' },
              { image: '/images/gallery/events/DSCF0722.JPG', span: '' },
            ].map((photo, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.6 }}
                whileHover={{ scale: 1.05, zIndex: 10 }}
                className={`relative group cursor-pointer ${photo.span}`}
              >
                <div className="absolute -inset-2 bg-gradient-to-r from-orange-500 to-red-500 opacity-0 group-hover:opacity-30 blur-2xl transition-opacity duration-500 rounded-2xl" />
                <div className="relative aspect-square rounded-2xl overflow-hidden bg-gray-800">
                  {/* 📸 活动照片占位符 */}
                  <div
                    className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                    style={{
                      backgroundImage: `url(${photo.image})`,
                    }}
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 媒体报道 */}
      <section className="relative px-6 py-16 md:py-32">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-center mb-16"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-white mb-4">媒体报道</h2>
            <p className="text-gray-400">主流媒体眼中的昆仑巢</p>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                media: '36氪',
                title: '从车库咖啡到昆仑巢：苏菂的创业生态进化论',
                date: '2025.12.15',
                url: '#',
                logo: '36Kr',
              },
              {
                media: '机器之心',
                title: '昆仑巢开放实验室：让具身智能触手可及',
                date: '2026.01.20',
                url: '#',
                logo: 'AI',
              },
              {
                media: '钛媒体',
                title: '人形机器人实验室揭秘：AI如何从虚拟走向物理世界',
                date: '2026.02.10',
                url: '#',
                logo: 'Ti',
              },
              {
                media: '创业邦',
                title: 'AIGC实验室启动，昆仑巢加码生成式AI',
                date: '2026.04.05',
                url: '#',
                logo: 'CB',
              },
            ].map((report, i) => (
              <motion.a
                key={i}
                href={report.url}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                whileHover={{ x: 10 }}
                className="block bg-black/50 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-orange-500/30 transition-all duration-300 group"
              >
                <div className="flex items-center gap-6">
                  {/* Logo */}
                  <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center text-white font-black text-lg">
                    {report.logo}
                  </div>

                  {/* 内容 */}
                  <div className="flex-1">
                    <div className="text-sm text-gray-500 mb-1">{report.media} · {report.date}</div>
                    <h3 className="text-xl font-bold text-white group-hover:text-orange-400 transition-colors">
                      {report.title}
                    </h3>
                  </div>

                  {/* 箭头 */}
                  <div className="flex-shrink-0 text-gray-500 group-hover:text-orange-400 transition-colors">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative px-6 py-16 md:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(249,115,22,0.15)_0%,transparent_70%)]" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-6 bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
              成为新闻的一部分
            </h2>
            <p className="text-xl text-gray-400 mb-12">
              加入昆仑巢，你的故事将被记录，你的创新将被看见。
            </p>
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 0 80px rgba(249,115,22,0.5)' }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 md:px-12 md:py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white text-lg font-bold rounded-full"
              >
                立即加入
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

export default NewsNew;
