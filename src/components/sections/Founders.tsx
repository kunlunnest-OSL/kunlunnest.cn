import Image from 'next/image'

import { Text } from '@/components/ui/text'

const founders = [
  {
    name: '苏菂',
    role: '联合创始人',
    imgSrc: '/images/founders/sudi.avif',
    imgAlt: '苏菂',
    titles: '车库咖啡创始人 中国创业生态的先行者',
    achievements: '他在中关村开启了全球首家创业主题咖啡馆“车库咖啡”，将零散的创业资源集成化，定义了中国早期硬核创业的社区模式。他是连接资本与初创项目的核心枢纽，深刻推动了国内孵化器行业的演进。',
  },
  {
    name: '鲍岳桥',
    role: '联合创始人',
    imgSrc: '/images/founders/baoyueqiao.avif',
    imgAlt: '鲍岳桥',
    titles: '中国第一代传奇程序员 UCDOS 与联众游戏创始人',
    achievements: '九十年代他凭借 UCDOS 解决了中文计算难题，后创办联众游戏，开创了中国大规模在线娱乐社区的先河。作为技术驱动商业的先驱，他在底层软件开发与平台架构领域拥有奠基级成就。',
  },
];

const coFounders = [
  '刘伟',
  '吴晓波',
  '蒋涛',
  '刘松海',
  '邓虎斌',
  '陈升',
  '沈文',
  '孙永吉',
  '王瑞杰',
  '张荣明',
  '李宗胜',
  '李明顺',
  '赵远飞',
  '耿元善',
  '程皓宇',
  '李杰',
  '莫小翼',
  '上官永强',
  '联想集团',
  '聚鼎家族',
];

const supporters = [
  '蔡学丰',
  'Peter Fok',
  '左世哲',
  '马智慧',
  '王保军',
  '周杨',
  '大龙',
  '段凯庭',
  '杭鑫鑫',
  '杨维',
  'aiba.com',
  '王永旺',
  '高节',
  '曹睿',
  '董必杰',
  '美娜',
  '高扬',
  'May',
  '段利军',
  '孟德',
  '罗荆',
  '永青',
  '东栋',
  '醒客',
  '李辰',
  '韩三石',
  '王卓',
  '张法伦',
  '邱彬彬',
  '马懿宏',
  '王亚南',
  '纪中展',
  '昊东',
  '智筹Peter周',
  '步拙愚',
  '陈天明',
  '曾昭岩',
  '常远',
  '梁尧',
  '杨晓东',
  '徐祥生',
  '张娜',
  '数智科技文化',
  '李强',
  '王文波',
  '王剑飞',
  '李慧英',
  '董永芳',
  '刘松海',
  '刘星',
  '韩喜阳',
  '田雅娟',
  '白杨',
  '王萌',
  '南岳',
  '彭秀珍',
  '刘善泉',
  '陈宁',
  '大成歌',
  '张弘',
  '谢国锋',
  '徐华欧',
  '许淼',
  '耿晓笛',
  '李春雷',
  '闫峰',
  '刘健',
  '王海利',
  '逍遥津',
  '张敏',
  '刘维一',
  '王桐',
  '张海涛',
  '曾著',
];

export function FoundersSection() {
  return (
    <section id='founders' className='py-15'>
      <div className='max-w-7xl mx-auto px-6 lg:px-8 pt-8 pb-12'>
        <div className='text-center max-w-3xl mx-auto'>
          <Text variant='accent' weight='semibold'>
            创始人
          </Text>
          <Text size='headline' weight='semibold' className='mt-2'>
            行业领袖共筑昆仑巢
          </Text>
        </div>

        <div className='grid md:grid-cols-2 gap-12 mt-12'>
          {founders.map((founder) => (
            <div
              key={founder.name}
              className='flex flex-col'
            >
              <Image
                src={founder.imgSrc}
                alt={founder.imgAlt}
                width={1280}
                height={720}
                className='object cover rounded-2xl aspect-video'
              />
              <Text weight='semibold' variant='accent' className='mt-4'>
                {founder.name}
              </Text>
              <Text weight='semibold'>
                {founder.titles}
              </Text>
              <Text variant='muted'>
                {founder.achievements}
              </Text>
            </div>
          ))}
        </div>

        <div className='text-center'>
          <Text size='body' variant='accent' weight='semibold' className='mt-12'>
            共同发起人
          </Text>
          <div className='grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 justify-center gap-x-4 mt-2'>
            {coFounders.map((coFounder) => (
              <span
                key={coFounder}
              >
                <Text size='body' variant='default'>
                  {coFounder}
                </Text>
              </span>
            ))}
          </div>
        </div>

        <div className='text-center'>
          <Text size='body' variant='accent' weight='semibold' className='mt-12'>
            共建人
          </Text>
          <div className='grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 justify-center gap-x-4 mt-2'>
            {supporters.map((supporter) => (
              <span
                key={supporter}
              >
                <Text size='body' variant='default'>
                  {supporter}
                </Text>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}