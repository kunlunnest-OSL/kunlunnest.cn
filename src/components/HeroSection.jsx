import { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  const { t, i18n } = useTranslation();
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);

  useEffect(() => {
    // 暂时禁用动画测试
    const title = titleRef.current;
    const subtitle = subtitleRef.current;

    // 直接显示，不做动画
    if (title) title.style.opacity = '1';
    if (subtitle) {
      subtitle.style.opacity = '1';
      subtitle.style.transform = 'translateY(0)';
    }
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative h-[90vh] bg-black overflow-hidden flex flex-col items-center justify-center"
    >
        {/* 昆仑山脉背景图 - 暗化处理 */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: 'url(/images/kunlun-mountain.jpg)',
            backgroundAttachment: 'fixed',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />

        {/* 背景全息网格 */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.15)_0%,transparent_70%)]" />
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '100px 100px',
            transform: 'perspective(1000px) rotateX(60deg)',
            transformOrigin: 'center bottom',
          }}
        />

        {/* 主标题：SVG图片蒙版文字 */}
        <svg
          ref={titleRef}
          className="will-change-transform w-full max-w-[90vw] md:max-w-[800px] relative z-10"
          viewBox="0 0 800 250"
          xmlns="http://www.w3.org/2000/svg"
          style={{ height: 'auto', opacity: 1 }}
        >
          <defs>
            {/* 定义图片 */}
            <pattern id="imgPattern" x="0" y="0" width="1" height="1">
              <image
                href="/images/ditu.png"
                x="0"
                y="10"
                width="800"
                height="250"
                preserveAspectRatio="xMidYMid slice"
              />
            </pattern>
            {/* 滤镜：降低亮度，增加对比度 */}
            <filter id="brighten">
              <feComponentTransfer>
                <feFuncR type="linear" slope="1.5" intercept="-0.2"/>
                <feFuncG type="linear" slope="1.5" intercept="-0.2"/>
                <feFuncB type="linear" slope="1.5" intercept="-0.2"/>
              </feComponentTransfer>
              <feColorMatrix type="saturate" values="1.3"/>
            </filter>
          </defs>
          {/* 文字填充图片 */}
          <text
            x="400"
            y="150"
            textAnchor="middle"
            dominantBaseline="middle"
            fontSize={i18n.language.startsWith('zh') ? "185" : "100"}
            fontWeight="bold"
            fill="url(#imgPattern)"
            filter="url(#brighten)"
            style={{
              fontFamily: i18n.language.startsWith('zh') ? "'KangXi', serif" : "'SF Pro Display', -apple-system, sans-serif",
              letterSpacing: i18n.language.startsWith('zh') ? 'normal' : '0.05em'
            }}
          >
            {t('hero.title')}
          </text>
        </svg>

        {/* 英文副标题 */}
        <p
          className="
            text-xs md:text-sm lg:text-base text-gray-500 font-medium tracking-[0.2em] md:tracking-[0.5em] mt-2
            opacity-60 relative z-10
          "
        >
          {t('hero.subtitle')}
        </p>

        {/* 品牌 Slogan */}
        <p
          ref={subtitleRef}
          className="
            mt-8 md:mt-12 text-xl md:text-2xl lg:text-3xl font-light tracking-[0.2em] md:tracking-[0.4em]
            bg-gradient-to-r from-gray-300 via-white to-gray-300
            bg-clip-text text-transparent
            relative z-10
          "
          style={{
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            opacity: 1,
          }}
        >
          {t('hero.slogan')}
        </p>

        {/* 次级 Slogan */}
        <p className="mt-4 md:mt-6 text-base md:text-lg text-gray-400 tracking-[0.15em] md:tracking-[0.3em] opacity-70 relative z-10">
          {t('hero.slogan2')}
        </p>

        {/* 环绕光晕 */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[800px] h-[800px] bg-blue-500/10 rounded-full blur-[200px] animate-pulse" />
        </div>

        {/* 滚动提示 - 居中显示 */}
        <div className="absolute bottom-8 md:bottom-12 left-0 right-0 flex flex-col items-center gap-2 text-gray-400 z-20 animate-bounce">
          <span className="text-xs tracking-widest font-semibold">{t('hero.scroll')}</span>
          <div className="w-[1px] h-12 md:h-16 bg-gradient-to-b from-blue-400 via-cyan-400 to-transparent animate-scroll-line" />
        </div>
    </section>
  );
};

export default HeroSection;
