import { Text } from '@/components/ui/text'
import Link from 'next/link'

const news = [
  {
    id: 22,
    title: 'EMBA 校友联盟参访昆仑巢：在思想碰撞中探寻商业新机遇',
    href: 'https://mp.weixin.qq.com/s?__biz=Mzk0NTQxNzI2Mg==&mid=2247486590&idx=1&sn=621ae55d287f77e5d1b6b9c3cf583b73&chksm=c2bd3231dbc796680c4ec3a93d5c2fa26732bd5f5f957f4e9f4d3c07d5b764a26c8f3dbb507b&mpshare=1&scene=1&srcid=0806CaA1FjNwjUlSX6BV15i4&sharer_shareinfo=02dbb73857d7a8f8b5bcd7ae09c879bb&sharer_shareinfo_first=02dbb73857d7a8f8b5bcd7ae09c879bb#rd',
    description:
      '在此次深度交流中，昆仑巢创始人苏菂分享了这一创新空间的理念与愿景；随后商学院网主理人邱彬彬系统介绍了新菁 EMBA 校友联盟的业务布局；此外，网秦创始人林宇也分享了其创业历程。不同的商业智慧在此交汇，与会嘉宾在思维共振中探寻商业新可能。',
    date: '2025 年 7 月 25 日',
    datetime: '2025-07-25',
    author: 'EMBA',
  },
  {
    id: 21,
    title: 'AI 时代的新龙门客栈——昆仑巢',
    href: 'https://mp.weixin.qq.com/s?__biz=Mzg5NDg1NjU0Ng==&mid=2247496029&idx=1&sn=bda84dfba4535a96a6bd86f28abacb62&chksm=c1ee59c14280823e30438848481932611b9a15198af34405a5c9c5af0adc2b281ec3b4e1493b&mpshare=1&scene=1&srcid=0806bsSlRjfM4AHWQdcHGrSL&sharer_shareinfo=5642e35c252d37aa6635092aeee5356e&sharer_shareinfo_first=5642e35c252d37aa6635092aeee5356e#rd',
    description:
      '从十几年前车库咖啡长桌上的“移动互联网”话题，到眼下昆仑巢的咖啡桌前的“千亿参数大模型”——具身智能机器人。作为车库咖啡和昆仑巢的创始人——苏菂，被称为亲历两轮技术浪潮的“创业摆渡人”，见证历史，更寻找着未来。',
    date: '2025 年 6 月 27 日',
    datetime: '2025-06-27',
    author: '康明集团号',
  },
  {
    id: 23,
    title: 'AI 狂热：草根创业者与煤老板走到了一起',
    href: 'https://k.sina.cn/article_1650111241_625ab30902701d74a.html',
    description:
      '北京北三环，一栋不起眼的写字楼里，每周二的“昆仑巢”创业沙龙总是挤满了人——他们大多三四十岁，背着双肩包，讨论的话题无一例外地聚焦于 AI 与创业——那位煤老板期待的机会，在这里大量聚集着。',
    date: '2025 年 5 月 19 日',
    datetime: '2025-05-19',
    author: '中国经营报《等深线》',
  },
  {
    id: 24,
    title: '对话“创业摆渡人”苏菂：从“屋顶种菜”到“狗头摄像”的逻辑之变',
    href: 'https://k.sina.com.cn/article_6248544856_174713a5802001pzmc.html',
    description:
      '北京，从十几年前车库咖啡长桌上的“移动互联网”话题，到眼下昆仑巢的咖啡桌前的“千亿参数大模型”“具身智能机器人”——作为车库咖啡和昆仑巢的创始人，苏菂被称为亲历两轮技术浪潮的“创业摆渡人”，见证历史，更寻找着未来。',
    date: '2025 年 5 月 18 日',
    datetime: '2025-05-18',
    author: '中国经营报《等深线》',
  },
  {
    id: 27,
    title: '苏菂：为创业者搭建精神栖居地',
    href: 'https://mp.weixin.qq.com/s?__biz=MjM5OTM3OTA3NA==&mid=2656089233&idx=2&sn=d23e596d99346e5543c674c843145cfe&chksm=bddcc070e1eb3081b635aa06494ea0bee8cded25b4f32b26dcedaedd5c18f01f3d353b0eaf85&mpshare=1&scene=1&srcid=0806elS7zhNVvGmnANpKoFNS&sharer_shareinfo=b1f6285e0886bb89e57f3460e168046e&sharer_shareinfo_first=b1f6285e0886bb89e57f3460e168046e#rd',
    description:
      '2025 年 3 月 15 日下午，北京西城区设计之都大厦一层的昆仑巢内，UI 中国的一个活动正在进行，演讲区的座位几近坐满。百来位创业者及 AI 爱好者正在聆听 AI 视频创作、MOOTION 技术及内容出海新趋势的分享，这种创业者汇聚的热闹场景在当下并不容易见到。',
    date: '2025 年 4 月 30 日',
    datetime: '2025-04-30',
    author: '中关村杂志 (杂志2025年3月刊)',
  },
  {
    id: 26,
    title: '创业“新龙门客栈”',
    href: 'https://m.eeo.com.cn/2024/1102/695817.shtml',
    description:
      '创始人鲍岳桥和苏菂都是创业领域的“老江湖”。昆仑是中国文化里最高的山，巢是共筑之巢。他们把昆仑巢比作“龙门客栈”，每天都有不同的人，带来新的信息，汇聚成创业机会。',
    date: '2024 年 11 月 2 日',
    datetime: '2024-11-02',
    author: '经济观察报/澎湃新闻',
  },
  {
    id: 16,
    title: '创业交流主题分享会在昆仑巢成功举办',
    href: 'https://mp.weixin.qq.com/s?__biz=MzkyMTMyMjM5Mw==&mid=2247492606&idx=1&sn=f838fc1fdfa4082a852d495ac8b039ce&chksm=c0b9dc52c272d0a8b858a1ce8015a242d61889b0163878c0c9dd9983957ee17779996b4a1a4d&mpshare=1&scene=1&srcid=0806ZZjywulxkMlHyNtWzK9g&sharer_shareinfo=7e128ff4fed57c68ed3abb887b597b83&sharer_shareinfo_first=7e128ff4fed57c68ed3abb887b597b83#rd',
    description:
      '2024 年 9 月 24 日，北京市浙江大学校友会京鹰会成功举办“周周讲”第 24 期创业交流主题分享会。本期分享嘉宾为京津冀国家技术创新中心新质科学家创业营总教练、《创业十三课》作者蔡玮校友和北京昆仑巢（共创空间）创始人、京鹰会副会长鲍岳桥校友，浙江大学校友总会理事会顾问潘里新、北京浙大校友会副秘书长赵均馨、京鹰会秘书长黄冬梅、京鹰会常务副会长李宇红等 20 多位校友参加本次活动。',
    date: '2024 年 9 月 30 日',
    datetime: '2024-9-30',
    author: '北京市浙江大学校友会',
  }, 
  {
    id: 28,
    title: '科技为文化赋能，文化为科技铸魂 “2024德胜科创汇”科技文化专项活动举办',
    href: 'https://www.ncsti.gov.cn/kjdt/yqdy/yqdt/202409/t20240924_179895.html',
    description:
      '科技为文化赋能，文化为科技铸魂。9 月 20 日下午，“2024 德胜科创汇”科技文化专项活动在昆仑巢举办。活动以“在开放的世界解决开放的问题”为主题，聚焦“文化+科技”命题，携手“创新生态合作伙伴”，围绕人工智能背景下 AIGC、数字游戏等产业发展话题展开深入讨论。区委常委、区委宣传部部长张晓家出席并致辞。',
    date: '2024 年 9 月 24 日',
    datetime: '2024-09-24',
    author: '中关村西城园微信公众号',
  },
  {
    id: 20,
    title: '中国第一代程序员鲍岳桥，离开职场多年再次回归，进场 AI，要做“车库咖啡 2.0”',
    href: 'https://mp.weixin.qq.com/s?__biz=Mzg2NDcwMTI4NA==&mid=2247491967&idx=1&sn=324e9f8f0c0e26edb4b981872e229c7b&chksm=cfd384c30417d410b25ab94225628f7be2a69cf2668dcec4e4df6bc06964772b6d5fb5d559df&mpshare=1&scene=1&srcid=0806OtpHcouDJGMwt4I7kzWK&sharer_shareinfo=d01a8cb448b1405bb38ee1f9dc0be53b&sharer_shareinfo_first=d01a8cb448b1405bb38ee1f9dc0be53b#rd',
    description:
      '2023 年，互联网行业历经寒冬，投资市场低迷，AI 时代暗潮涌动，绝望与希望共存。11 月 18 日，距离海淀中关村不到十公里的西城区马甸桥，一个名叫“昆仑巢”的众创空间诞生，45 岁的苏菂和 57 岁的鲍岳桥再次下场创业。他们认为越是这样的时候，越需要这样一个地方。这既是对过去美好的创业氛围的怀念，也是因为在这样思想碰撞的中心，最容易爆发新东西。',
    date: '2024 年 06 月 18 日',
    datetime: '2024-06-18',
    author: '《码客人生》/至顶AI实验室',
  },
  {
    id: 17,
    title: '金企说 | 金融街资本所属北京设计之都发展有限公司携纹化·纹样设计数据库、昆仑巢AI孵化开放平台亮相“2024西城科技周”',
    href: 'https://mp.weixin.qq.com/s?__biz=MzI2MDU3MjIzNQ==&mid=2247553702&idx=4&sn=48d65eb6ddfa804c71d0124ef592d10f&chksm=eb11865d0df73302e3421a7c64e685dbb60ef189eaaee31f55c1c27fc10f45154bdb3fdd52e8&mpshare=1&scene=1&srcid=0806UZvTrJQrJB6o4tA6hvjI&sharer_shareinfo=ac26c3ac13b453084a12d618ecfebf98&sharer_shareinfo_first=ac26c3ac13b453084a12d618ecfebf98#rd',
    description:
      '5 月 25 日，由中关村科技园区西城园管理委员会（北京市西城区科学技术委员会）、中共北京市西城区委宣传部、北京市西城区科学技术协会共同主办的 2024 年西城科技周正式启动，金融街资本所属北京设计之都发展有限公司携纹化·纹样设计数据库、昆仑巢AI孵化开放平台亮相大数据、人工智能板块，吸引了社会各界的广泛关注。',
    date: '2024 年 5 月 30 日',
    datetime: '2024-5-30',
    author: '金融街资本',
  }, 
  {
    id: 25,
    title: '昆仑巢“巢青年”品牌正式发布',
    href: 'https://news.ynet.com/2024/05/08/3758770t70.html',
    description:
      '5 月 4 日是五四青年节，昆仑巢在德胜街道大力支持下，于 5 月 4 日发起了“Hello 不躺平青年！”青年宣讲活动，同步昆仑巢发布“巢青年”青年交流品牌。',
    date: '2024 年 5 月 8 日',
    datetime: '2024-05-08',
    author: '北青网',
  },
  {
    id: 19,
    title: '“Hello不躺平青年！”德胜街道 & 昆仑巢携手汇聚青年挺膺担当的青春力量',
    href: 'https://mp.weixin.qq.com/s?__biz=MzUzMDA1ODkzMg==&mid=2247558477&idx=1&sn=fe5bc86632fcb176a956ba4566d8469d&chksm=fbf548befb1f87010ddec9d21afa466e1ad0f383deeff3c349198b8f502887ce74a3e2222f19&mpshare=1&scene=1&srcid=0806UwuYDl7WRZgnLAF24maT&sharer_shareinfo=108f8768c02fa4f5730125d4ec4877b0&sharer_shareinfo_first=108f8768c02fa4f5730125d4ec4877b0#rd',
    description:
      '5 月 4 日，德胜街道联合昆仑巢共同发起“Hello 不躺平青年！”青年宣讲活动，昆仑巢发布专注青年交流成长的“巢青年”品牌。西城团区委副书记（主持工作）、区青联主席朱晓冬，德胜街道工委副书记、办事处主任马佩鸿，德胜街道工委副书记陈曦，北京联合大学应用文理学院党委副书记李岩，昆仑巢创始人苏菂，总经理王海利及各领域创业青年参加活动。',
    date: '2024 年 5 月 5 日',
    datetime: '2024-5-5',
    author: '掌上德胜',
  },
  {
    id: 31,
    title: '昆仑巢：为追梦人而筑',
    href: 'https://www.sohu.com/a/752191330_426502',
    description:
      '马甸桥的一角、北京设计之都大厦一层，“昆仑巢”三个大字苍劲有力，昭示着勃勃生机正于此处迸发。开业不过月余，这个 2000 多平方米的空间里常常热火朝天，各行各业的追梦人都聚集在这里，跨越界限，积极展开相互交流，探讨着无尽的合作可能性。昆仑巢，不仅是一个真正的创业者乐园，更是一个激发思想交流的聚集地。',
    date: '2024 年 1 月 16 日',
    datetime: '2024-01-16',
    author: '中国小康网',
  },
  {
    id: 29,
    title: '重返昆仑巢：年轻人不愿意创业了吗？',
    href: 'https://news.qq.com/rain/a/20240102A049P300',
    description:
      '从车库咖啡到昆仑巢，地理位置不到 10 公里，却相隔了十年。这十年里，变化巨大。十年前，人们争先恐后涌入移动互联网。如今再次谈论的话题，已经换成了 AI、出海、新媒体。',
    date: '2024 年 1 月 2 日',
    datetime: '2024-01-02',
    author: '吴晓波频道/腾讯新闻/网易新闻',
  },
  {
    id: 33,
    title: '科创西城：拼～拼～拼～拼～拼～拼～',
    href: 'https://peking.bjd.com.cn/content/s657fd63de4b0ec2b81d0a101.html',
    description:
      '昆仑巢落地西城，在西城区政策支持下迅速成长，为科技从业者、创业者、投资人提供一个思想碰撞交流的新高地，成为西城区大力推进文化强区建设的重要成果。',
    date: '2023 年 12 月 18 日',
    datetime: '2023-12-18',
    author: '北京西城官方发布',
  },
  {
    id: 34,
    title: '“拼”在2023丨拼出梦想',
    href: 'https://content-static.cctvnews.cctv.com/snow-book/index.html?item_id=6420697658979089412',
    description:
      '今年是人工智能的爆发之年，多款人工智能产品重磅发布，激发了苏菂再次创业的雄心，苏菂又跟一群志同道合的朋友创立了昆仑巢：一个让创业者思想碰撞、信息交流、建立合作的场所。朋友说 12 年来，苏菂的头发没了，理想还在。',
    date: '2023 年 12 月 15 日',
    datetime: '2023-12-15',
    author: '央视新闻 (CCTV-13)/荆楚网',
  },
  {
    id: 32,
    title: '西城区打造优质市级文化产业园区服务新抓手——昆仑巢 AI 孵化开放平台',
    href: 'https://news.bjd.com.cn/2023/11/22/10627220.shtml',
    description:
      '昆仑巢 AI 孵化开放平台是北京设计之都发展有限公司（简称“设计之都”）联合前车库咖啡创始人团队共同打造的，以 AI 公益算力、AI 开源大模型、AI 智商测试、AI 产业升级及 AI 泛娱乐为核心的创新实验室。平台通过建立 AI 路演中心和科创出海转化中心，发起疯子基金、亿联资本、AI 产业基金、出海美元基金 4 支基金，为科技从业者、创业者、投资人提供一个思想碰撞交流的新高地。',
    date: '2023 年 11 月 22 日',
    datetime: '2023-11-22',
    author: '北京西城官方发布/京报网',
  },
  {
    id: 30,
    title: '昆仑巢暨昆仑之巅 AI 创新论坛开幕仪式在京隆重举行',
    href: 'https://www.sohu.com/a/752191330_426502',
    description:
      '昆仑巢暨昆仑之巅 AI 创新论坛开幕仪式在北京西城区设计之都隆重举行，来自 AI 科技行业的创始人、高管、精英、创业者们济济一堂。昆仑巢致力于打造一个思想碰撞空间，建设成公认的精神食堂，为有志之士再次腾飞提供公共服务平台。在这里，更多的人可以找到同道好友，相互启发，整合资源，齐头并进，探讨学习。',
    date: '2023 年 11 月 21 日',
    datetime: '2023-11-21',
    author: '中国小康网',
  },
  {
    id: 18,
    title: '昆仑巢：可能是新创业时代的新图腾',
    href: 'https://mp.weixin.qq.com/s?__biz=MzUxNjI1NTA1MA==&mid=2247485465&idx=1&sn=207e593dcbdcd546c0c3a63e09f0799f&chksm=f81587a74573c7fe8ebcf9ec71322447ad37fd3222138c83a7685df1692e5f7209afc337b643&mpshare=1&scene=1&srcid=08068IitAKddpsWnvD1ETm22&sharer_shareinfo=86f1e5c92e4125330867795d41b0302d&sharer_shareinfo_first=86f1e5c92e4125330867795d41b0302d#rd',
    description:
      '所谓“昆仑巢”，“昆仑”是中国文化中的神山，也是华夏文明的精神图腾之一，巍巍昆仑，象征的是中华民族博大包容、勇敢坚韧的精神，这也是创业者所必须具备的精神特质。“巢”就是家园，先民们于洪荒之中筑巢而居，为我们飘荡的身心创造了一处安放之所、歇憩之处。“昆仑巢”，也就是创业者的家园。',
    date: '2023 年 11 月 17 日',
    datetime: '2023-11-17',
    author: '炎黄利益',
  },
]

export function NewsSection() {
  return (
    <section id='ecosystem' className='py-15'>
      <div className='max-w-7xl mx-auto px-6 lg:px-8 pt-8 pb-12'>
        <div className='text-center max-w-3xl mx-auto'>
          <Text variant='accent' weight='semibold'>
            新闻中心
          </Text>
        </div>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-10 pt-10 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {news.map((post) => (
            <article key={post.id} className="flex max-w-xl flex-col items-start justify-between">
              <Link href={post.href} target='_blank' rel='noopener noreferrer'>
                <Text size='caption'>
                  <time dateTime={post.datetime} className="text-neutral-500">
                    {post.date}
                  </time>
                </Text>
                <div className="group relative grow">
                  <Text weight='semibold' className='mt-2'>
                    {post.title}
                  </Text>
                  <Text size='caption' variant='muted' className='mt-2 line-clamp-3'>
                    {post.description}
                  </Text>
                </div>
                <div className="relative mt-2 flex items-center justify-self-start">
                  <div className="text-sm/6">
                    <p className="font-semibold text-neutral-900">
                      {post.author}
                    </p>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}