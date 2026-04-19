import { motion } from 'framer-motion';
import { useState } from 'react';
import AppleNavbar from '../components/AppleNavbar';
import AIParticles from '../components/AIParticles';
import { Smartphone, Car, Train, Phone, Mail, Video, BookOpen, MessageCircle, Film, Newspaper, Ticket } from 'lucide-react';

/**
 * 联系页面 - 苹果 2026 风格
 * 上巢指南 + 联系方式 + 地图
 */
const ContactNew = () => {
  const [showQRModal, setShowQRModal] = useState(false);
  const [qrInfo, setQrInfo] = useState({ title: '', image: '', desc: '' });

  const handleShowQR = (title, image, desc = '') => {
    setQrInfo({ title, image, desc });
    setShowQRModal(true);
  };

  return (
    <div className="bg-black min-h-screen">
      {/* AI 粒子背景 */}
      <AIParticles particleCount={50} particleColor="rgba(34, 197, 94, 0.6)" lineColor="rgba(34, 197, 94, 0.2)" />

      {/* 导航栏 */}
      <AppleNavbar />

      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center px-6 pt-20 md:pt-32 pb-20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(34,197,94,0.15)_0%,transparent_70%)]" />

        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-[clamp(2.5rem,15vw,10rem)] font-black mb-8 bg-gradient-to-r from-green-400 via-emerald-300 to-green-400 bg-clip-text text-transparent leading-none">
              JOIN US
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 tracking-[0.15em] md:tracking-[0.3em] mb-6">来昆仑巢</p>
            <p className="text-xl text-gray-500 max-w-3xl mx-auto leading-relaxed">
              一个思想碰撞的空间，
              <br />
              有想法就来这里汇聚。
            </p>
          </motion.div>

        </div>

        {/* 滚动提示 */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500">
          <span className="text-xs tracking-widest">SCROLL</span>
          <div className="w-[1px] h-16 bg-gradient-to-b from-gray-500 to-transparent animate-scroll-line" />
        </div>
      </section>

      {/* 上巢指南 */}
      <section className="relative px-6 py-16 md:py-32">
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-center mb-20"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-6 bg-gradient-to-r from-green-400 via-emerald-300 to-green-400 bg-clip-text text-transparent">
              上巢指南
            </h2>
            <p className="text-xl text-gray-400 tracking-[0.15em] md:tracking-[0.2em]">HOW TO VISIT</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {/* 预约入场 */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="relative group"
            >
              <div className="absolute -inset-2 bg-gradient-to-r from-green-500 to-emerald-500 opacity-0 group-hover:opacity-30 blur-3xl transition-opacity duration-500 rounded-3xl" />
              <div className="relative bg-black/50 backdrop-blur-xl border border-white/10 rounded-3xl p-6 md:p-8 h-full">
                <div className="mb-6 flex justify-center">
                  <Smartphone className="w-16 h-16 text-green-400" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl md:text-2xl font-black text-white mb-4">预约入场</h3>
                <div className="space-y-3 text-gray-400 text-sm leading-relaxed">
                  <p>搜索服务号<br /><span className="text-green-400 font-semibold">【昆仑巢Kunlunnest】</span></p>
                  <p>点击<span className="text-green-400 font-semibold">【昆仑巢】</span>进入系统</p>
                  <p>出示动态二维码通过闸机</p>
                  <p>电梯到达<span className="text-green-400 font-semibold">9层融科·昆仑巢</span></p>
                </div>

                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-green-500 to-emerald-500" />
              </div>
            </motion.div>

            {/* 自驾 */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="relative group"
            >
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 to-cyan-500 opacity-0 group-hover:opacity-30 blur-3xl transition-opacity duration-500 rounded-3xl" />
              <div className="relative bg-black/50 backdrop-blur-xl border border-white/10 rounded-3xl p-6 md:p-8 h-full">
                <div className="mb-6 flex justify-center">
                  <Car className="w-16 h-16 text-blue-400" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl md:text-2xl font-black text-white mb-4">自驾导航</h3>
                <div className="space-y-3 text-gray-400 text-sm leading-relaxed">
                  <p>导航至<br /><span className="text-blue-400 font-semibold">【融科资讯中心A座】</span></p>
                  <p className="mt-6">停车费用：</p>
                  <p>地上 <span className="text-blue-400 font-semibold">12元/小时</span></p>
                  <p>地下 <span className="text-blue-400 font-semibold">6元/小时</span></p>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-cyan-500" />
              </div>
            </motion.div>

            {/* 地铁 */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.8 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="relative group"
            >
              <div className="absolute -inset-2 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-30 blur-3xl transition-opacity duration-500 rounded-3xl" />
              <div className="relative bg-black/50 backdrop-blur-xl border border-white/10 rounded-3xl p-6 md:p-8 h-full">
                <div className="mb-6 flex justify-center">
                  <Train className="w-16 h-16 text-purple-400" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl md:text-2xl font-black text-white mb-4">地铁出行</h3>
                <div className="space-y-3 text-gray-400 text-sm leading-relaxed">
                  <p><span className="text-purple-400 font-semibold">13号线</span> 五道口站<br />A口出 步行2.2km</p>
                  <p><span className="text-purple-400 font-semibold">10号线</span> 知春里<br />A口出 步行1.1km</p>
                  <p><span className="text-purple-400 font-semibold">4号线</span> 中关村站<br />B口出 步行1km</p>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-pink-500" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 联系我们 */}
      <section className="relative px-6 py-16 md:py-32">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative group"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-green-500 to-emerald-500 opacity-0 group-hover:opacity-10 blur-3xl transition-opacity duration-500 rounded-3xl" />
            <div className="relative bg-black/50 backdrop-blur-xl border border-white/10 rounded-3xl p-6 md:p-10">

              {/* 联系信息 */}
              <div className="flex flex-col md:flex-row items-center justify-center gap-12 mb-12">
                {/* 联系电话 */}
                <div className="text-center">
                  <div className="mb-3 flex justify-center">
                    <Phone className="w-10 h-10 text-green-400" strokeWidth={1.5} />
                  </div>
                  <div className="text-sm text-gray-500 mb-1">联系电话</div>
                  <div className="text-xl text-white font-semibold">158 1085 8370</div>
                </div>

                {/* 分隔线 */}
                <div className="hidden md:block w-px h-16 bg-gradient-to-b from-transparent via-gray-600 to-transparent" />

                {/* 邮箱 */}
                <div className="text-center">
                  <div className="mb-3 flex justify-center">
                    <Mail className="w-10 h-10 text-green-400" strokeWidth={1.5} />
                  </div>
                  <div className="text-sm text-gray-500 mb-1">联系邮箱</div>
                  <div className="text-xl text-white font-semibold">kunlunnest@yeah.net</div>
                </div>
              </div>

              {/* 社交媒体 */}
              <div className="border-t border-white/10 pt-12">
                <h3 className="text-xl md:text-2xl font-black text-white text-center mb-8">关注我们</h3>
                <div className="flex items-center justify-center gap-6 flex-wrap">
                  {/* 抖音 */}
                  <motion.button
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleShowQR('抖音', '/images/抖音.jpg')}
                    className="flex flex-col items-center gap-2 group"
                  >
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-pink-500 to-red-500 flex items-center justify-center group-hover:shadow-[0_0_30px_rgba(236,72,153,0.5)] transition-all">
                      <Video className="w-8 h-8 text-white" strokeWidth={1.5} />
                    </div>
                    <span className="text-xs text-gray-400 group-hover:text-white transition-colors">抖音</span>
                  </motion.button>

                  {/* 小红书 */}
                  <motion.button
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleShowQR('小红书', '/images/小红书.jpg')}
                    className="flex flex-col items-center gap-2 group"
                  >
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-red-500 to-pink-500 flex items-center justify-center group-hover:shadow-[0_0_30px_rgba(239,68,68,0.5)] transition-all">
                      <BookOpen className="w-8 h-8 text-white" strokeWidth={1.5} />
                    </div>
                    <span className="text-xs text-gray-400 group-hover:text-white transition-colors">小红书</span>
                  </motion.button>

                  {/* 微信 */}
                  <motion.button
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleShowQR('微信', '/images/微信.jpg')}
                    className="flex flex-col items-center gap-2 group"
                  >
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center group-hover:shadow-[0_0_30px_rgba(34,197,94,0.5)] transition-all">
                      <MessageCircle className="w-8 h-8 text-white" strokeWidth={1.5} />
                    </div>
                    <span className="text-xs text-gray-400 group-hover:text-white transition-colors">微信</span>
                  </motion.button>

                  {/* 视频号 */}
                  <motion.button
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleShowQR('视频号', '/images/视频号.jpg')}
                    className="flex flex-col items-center gap-2 group"
                  >
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center group-hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] transition-all">
                      <Film className="w-8 h-8 text-white" strokeWidth={1.5} />
                    </div>
                    <span className="text-xs text-gray-400 group-hover:text-white transition-colors">视频号</span>
                  </motion.button>

                  {/* 公众号 */}
                  <motion.button
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleShowQR('公众号', '/images/公众号.jpg')}
                    className="flex flex-col items-center gap-2 group"
                  >
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500 to-yellow-500 flex items-center justify-center group-hover:shadow-[0_0_30px_rgba(249,115,22,0.5)] transition-all">
                      <Newspaper className="w-8 h-8 text-white" strokeWidth={1.5} />
                    </div>
                    <span className="text-xs text-gray-400 group-hover:text-white transition-colors">公众号</span>
                  </motion.button>

                  {/* 服务号 */}
                  <motion.button
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleShowQR('服务号', '/images/服务号0.jpg')}
                    className="flex flex-col items-center gap-2 group"
                  >
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center group-hover:shadow-[0_0_30px_rgba(168,85,247,0.5)] transition-all">
                      <Ticket className="w-8 h-8 text-white" strokeWidth={1.5} />
                    </div>
                    <span className="text-xs text-gray-400 group-hover:text-white transition-colors">服务号</span>
                  </motion.button>
                </div>
              </div>

            </div>
          </motion.div>
        </div>
      </section>

      {/* 地图 */}
      <section className="relative px-6 py-16 md:py-32">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-white mb-4">如何到达</h2>
            <p className="text-gray-400">欢迎预约参观</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative group"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-green-500 to-emerald-500 opacity-0 group-hover:opacity-20 blur-3xl transition-opacity duration-500 rounded-3xl" />
            <div className="relative aspect-video md:aspect-[21/9] rounded-3xl overflow-hidden bg-gray-800 border border-white/10">
              {/* 📸 地图占位符 - 可以替换为实际地图（高德/百度地图嵌入）*/}
              <div
                className="w-full h-full bg-cover bg-center"
                style={{
                  backgroundImage: 'url(/images/地图.png)',
                }}
              />

              {/* 地图叠加层（示例） */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm">
                <div className="text-center text-white">
                  <div className="text-6xl mb-4">📍</div>
                  <div className="text-3xl font-black mb-2">北京市海淀区</div>
                  <div className="text-xl text-gray-300">融科资讯中心A座9层</div>
                  <div className="mt-6">
                    <a
                      href="https://map.baidu.com/" // TODO: 替换为实际地图链接
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-8 py-3 bg-green-500 hover:bg-green-600 text-white font-bold rounded-full transition-colors"
                    >
                      在地图中打开
                    </a>
                  </div>
                </div>
              </div>
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
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-6 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
              期待与你相遇
            </h2>
            <p className="text-xl text-gray-400 mb-12">
              昆仑巢的大门始终为创新者敞开。
              <br />
              无论何时，欢迎你的到来。
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleShowQR('预约参观', '/images/服务号0.jpg', '关注服务号 → 进入巢友系统 → 预约上巢')}
                className="px-6 py-3 md:px-12 md:py-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white text-lg font-bold rounded-full shadow-[0_0_50px_rgba(34,197,94,0.3)]"
              >
                预约参观
              </motion.button>
            </div>
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

      {/* 二维码弹窗 */}
      {showQRModal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setShowQRModal(false)}
          className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-6"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: 'spring', duration: 0.5 }}
            onClick={(e) => e.stopPropagation()}
            className="relative bg-gradient-to-br from-gray-900 to-black border border-white/20 rounded-3xl p-8 max-w-md w-full"
          >
            {/* 关闭按钮 */}
            <button
              onClick={() => setShowQRModal(false)}
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white text-xl transition-colors"
            >
              ✕
            </button>

            {/* 标题 */}
            <h3 className="text-3xl font-black text-white text-center mb-2">{qrInfo.title}</h3>

            {/* 描述 */}
            {qrInfo.desc && (
              <p className="text-green-400 text-center text-sm mb-6">{qrInfo.desc}</p>
            )}

            {/* 二维码 */}
            <div className="bg-white p-6 rounded-2xl mx-auto w-fit">
              <img
                src={qrInfo.image}
                alt={qrInfo.title}
                className="w-64 h-64 object-contain"
              />
            </div>

            {/* 提示 */}
            <p className="text-gray-400 text-center text-sm mt-6">
              扫描二维码关注我们
            </p>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default ContactNew;
