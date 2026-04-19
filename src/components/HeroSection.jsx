import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
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
      className="relative h-[200vh] bg-black overflow-hidden"
    >
      {/* 固定视口内容 */}
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center">
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
          className="will-change-transform w-full max-w-[90vw] md:max-w-[800px]"
          viewBox="0 0 800 250"
          xmlns="http://www.w3.org/2000/svg"
          style={{ height: 'auto' }}
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
            fontSize="185"
            fontWeight="bold"
            fill="url(#imgPattern)"
            filter="url(#brighten)"
            style={{ fontFamily: "'KangXi', serif" }}
          >
            昆仑巢
          </text>
        </svg>

        {/* 英文副标题 */}
        <p
          className="
            text-xs md:text-sm lg:text-base text-gray-500 font-medium tracking-[0.2em] md:tracking-[0.5em] mt-2
            opacity-60
          "
        >
          KUNLUN NEST
        </p>

        {/* 品牌 Slogan */}
        <p
          ref={subtitleRef}
          className="
            mt-8 md:mt-12 text-xl md:text-2xl lg:text-3xl font-light tracking-[0.2em] md:tracking-[0.4em]
            bg-gradient-to-r from-gray-300 via-white to-gray-300
            bg-clip-text text-transparent
            opacity-0 translate-y-10
          "
          style={{
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          创新思想汇聚之地
        </p>

        {/* 次级 Slogan */}
        <p className="mt-4 md:mt-6 text-base md:text-lg text-gray-400 tracking-[0.15em] md:tracking-[0.3em] opacity-70">
          共创 · 共建 · 共享
        </p>

        {/* 环绕光晕 */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[800px] h-[800px] bg-blue-500/10 rounded-full blur-[200px] animate-pulse" />
        </div>
      </div>

      {/* 滚动提示 */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500 z-20">
        <span className="text-xs tracking-widest">SCROLL</span>
        <div className="w-[1px] h-16 bg-gradient-to-b from-gray-500 to-transparent animate-scroll-line" />
      </div>
    </section>
  );
};

export default HeroSection;
