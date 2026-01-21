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

const supporters = [
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

export function FoundersSection() {
  return (
    <section id='founders' className='py-24 lg:py-32'>
      <div className='max-w-7xl mx-auto px-6 lg:px-8'>
        <div className='text-center max-w-3xl mx-auto mb-16'>
          <Text variant='accent' weight='semibold'>
            创始人
          </Text>
          <Text size='headline' weight='semibold' className='mt-2'>
            行业领袖共筑昆仑巢
          </Text>
        </div>

        <div className='grid md:grid-cols-2 gap-8 mb-16'>
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
              <Text weight='semibold' variant='accent' className='mt-8'>
                {founder.name}
              </Text>
              <Text weight='semibold'>
                {founder.titles}
              </Text>
              <Text variant='muted' weight='semibold'>
                {founder.achievements}
              </Text>

            </div>
          ))}
        </div>

        <div className='text-center'>
          <Text size='body' variant='accent' weight='semibold' className='mb-8'>
            共同发起人
          </Text>
          <div className='flex flex-wrap justify-center gap-x-8 gap-y-4'>
            {supporters.map((supporter) => (
              <span
                key={supporter}
              >
                <Text size='body' weight='semibold' variant='default'>
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