import { Bot, Sparkles, Printer } from 'lucide-react'

import { Text } from '@/components/ui/text'
import EmblaCarousel from '@/components/layout/EmblaCarousel'
import { EmblaOptionsType } from 'embla-carousel'

import slides from '@/config/slides'

const labs = [
  {
    icon: Bot,
    name: '人形机器人开发实验室',
    leader: '郭成凯博士',
    description:
      '由北京通用人工智能研究院技术中心技术负责人发起，涵盖大厂研发人员、科研院所研究人员、技术达人等共同参与。',
    focus: ['具身机器人', '机械手臂研究', 'AI 大模型应用'],
  },
  {
    icon: Sparkles,
    name: 'AIGC 开放实验室',
    leader: '优酷网创业团队研发负责人',
    description:
      '由早期优酷网创业团队研发负责人等发起，涵盖公司管理者、自媒体人、内容生产者等。',
    focus: ['AI 入企服务', 'AI 内容生成制作', '智能体搭建'],
  },
  {
    icon: Printer,
    name: '3D 打印实验室',
    leader: '许方雷',
    description:
      '由北京市创新专项领军人才许方雷发起，专注工业设计、增材制造、商业模型。为巢内设备提供初代产品设计制作。',
    focus: ['工业设计', '增材制造', '商业模型'],
  },
];

export function LabsSection() {
  const OPTIONS: EmblaOptionsType = { loop: true }

  return (
    <section id='labs' className='py-15'>
      <div className='pt-8 pb-12'>
        <div className='flex flex-col md:flex-row md:items-end md:justify-between max-w-7xl mx-auto px-6 lg:px-8'>
          <div className='text-center md:text-left'>
            <Text variant='accent' weight='semibold'>
              开放实验室集群
            </Text>
            <Text size='headline' weight='semibold' className='mt-2'>
              在开放的世界<br/>解决开放的问题
            </Text>
          </div>
          <Text variant='muted' className='md:max-w-xs mt-6 md:mt-0'>
            昆仑巢在内部依托不同专业方向的巢友，以在开放的世界解决开放的问题为理念，整合各方优质资源，建立开放实验室集群。在合力研究各自方向的同时，也交叉合作。
          </Text>
        </div>
        <div className='pt-8'>
          <div className='flex flex-col'>
            {slides.map((slide, index) => (
              <div key={index} className='text-center md:text-left mb-16 last:mb-0'>
                <Text size='subhead' weight='semibold' className='max-w-7xl mx-auto px-6 lg:px-8 pb-6'>
                  {slide.title}
                </Text>
                <EmblaCarousel options={OPTIONS} slides={slide.items} />
                <Text variant='muted' className='max-w-7xl mx-auto px-6 lg:px-8 mt-6'>
                  {slide.description}
                </Text>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}