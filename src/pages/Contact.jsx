import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send, Globe, Music, Image, MessageCircle } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    purpose: '参观实验室',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // 这里可以添加表单提交逻辑
    alert('感谢您的预约！我们会尽快与您联系。');
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // 联系方式
  const contactInfo = [
    {
      icon: MapPin,
      title: '地址',
      content: '北京市海淀区中关村',
      link: null,
    },
    {
      icon: Mail,
      title: '邮箱',
      content: 'hello@kunlunnest.cn',
      link: 'mailto:hello@kunlunnest.cn',
    },
    {
      icon: Phone,
      title: '电话',
      content: '010-xxxx-xxxx',
      link: 'tel:010xxxxxxxx',
    },
  ];

  // 社交媒体
  const socialLinks = [
    {
      icon: Globe,
      name: 'GitHub',
      url: 'https://github.com/kunlunnest',
      color: 'hover:bg-gray-900',
    },
    {
      icon: Music,
      name: '抖音',
      url: '#',
      color: 'hover:bg-black',
    },
    {
      icon: Image,
      name: '小红书',
      url: '#',
      color: 'hover:bg-red-500',
    },
    {
      icon: MessageCircle,
      name: '微信公众号',
      url: '#',
      color: 'hover:bg-green-500',
    },
  ];

  // 预约目的选项
  const purposes = [
    '参观实验室',
    '项目合作',
    '技术交流',
    '媒体采访',
    '加入共建人',
    '其他',
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
              联系我们
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              欢迎来到昆仑巢，无论您是想参观实验室、寻求合作，还是加入我们的共建人网络，
              <br />
              我们都期待与您建立联系。
            </p>
          </motion.div>
        </div>
      </section>

      {/* 主要内容区域 */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* 左侧：联系信息 */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-8 tracking-tight">
                联系方式
              </h2>

              {/* 联系信息卡片 */}
              <div className="space-y-4 mb-12">
                {contactInfo.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-gray-50 border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex items-start">
                      <div className="w-12 h-12 rounded-lg bg-blue-600 flex items-center justify-center mr-4 flex-shrink-0">
                        <item.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-sm font-semibold text-gray-900 mb-1">
                          {item.title}
                        </h3>
                        {item.link ? (
                          <a
                            href={item.link}
                            className="text-gray-600 hover:text-blue-600 transition-colors"
                          >
                            {item.content}
                          </a>
                        ) : (
                          <p className="text-gray-600">{item.content}</p>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* 社交媒体 */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-6">关注我们</h3>
                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className={`flex items-center justify-center p-4 bg-gray-100 border border-gray-200 rounded-xl ${social.color} hover:text-white transition-all duration-300 group`}
                    >
                      <social.icon className="w-5 h-5 mr-2" />
                      <span className="font-medium">{social.name}</span>
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* 公司信息 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mt-12 p-6 bg-gradient-to-br from-blue-50 to-purple-50 border border-blue-200 rounded-xl"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  北京智能之路科技有限公司
                </h3>
                <p className="text-sm text-gray-600 mb-2">
                  © 2026 昆仑巢 KUNLUN NEST
                </p>
                <p className="text-xs text-gray-500">京ICP备2024042943号</p>
              </motion.div>
            </motion.div>

            {/* 右侧：预约表单 */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-8 tracking-tight">
                预约访问
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* 姓名 */}
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-2">
                    姓名 *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="请输入您的姓名"
                  />
                </div>

                {/* 邮箱 */}
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-2">
                    邮箱 *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="your@email.com"
                  />
                </div>

                {/* 电话 */}
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-2">
                    电话
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="您的联系电话"
                  />
                </div>

                {/* 公司/机构 */}
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-2">
                    公司/机构
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="您所在的公司或机构"
                  />
                </div>

                {/* 预约目的 */}
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-2">
                    预约目的 *
                  </label>
                  <select
                    name="purpose"
                    value={formData.purpose}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  >
                    {purposes.map((purpose) => (
                      <option key={purpose} value={purpose}>
                        {purpose}
                      </option>
                    ))}
                  </select>
                </div>

                {/* 留言 */}
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-2">
                    留言
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                    placeholder="请告诉我们更多信息..."
                  />
                </div>

                {/* 提交按钮 */}
                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-medium shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <Send className="w-5 h-5" />
                  <span>提交预约</span>
                </button>

                <p className="text-sm text-gray-500 text-center">
                  我们会在1-2个工作日内回复您的预约请求
                </p>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
