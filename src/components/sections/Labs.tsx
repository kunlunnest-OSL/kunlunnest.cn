import { Bot, Sparkles, Printer } from 'lucide-react'

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
  return (
    <section id='labs' className='py-24 lg:py-32'>
      <div className='max-w-7xl mx-auto px-6 lg:px-8'>
        <div className='flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16'>
          <div>
            <h2 className='text-base/7 text-neutral-500'>
              开放实验室集群
            </h2>
            <h2 className='mt-2 text-4xl font-semibold tracking-tight text-pretty text-neutral-900 sm:text-5xl lg:text-balance'>
              在开放的世界
              <br />
              <span className='text-brand-red'>解决开放的问题</span>
            </h2>
          </div>
          <p className='text-base/7 text-neutral-500 max-w-md'>
            依托不同专业方向的巢友，整合各方优质资源，建立开放实验室集群。在合力研究各自方向的同时，也交叉合作。
          </p>
        </div>

        <div className='grid lg:grid-cols-3 gap-6'>
          {labs.map((lab) => (
            <div
              key={lab.name}
              className='group bg-white border border-neutral-200 rounded-lg overflow-hidden'
            >
              <div className='p-8'>
                <div className='flex items-start justify-between mb-6'>
                  <div className='p-3 rounded-lg bg-neutral-100 transition-colors'>
                    <lab.icon className='w-6 h-6 text-neutral-500 group-hover:text-brand-red transition-colors' />
                  </div>
                </div>

                <h3 className='text-xl font-semibold text-neutral-900 mb-2'>
                  {lab.name}
                </h3>
                <p className='text-sm text-brand-red mb-4'>
                  发起人: {lab.leader}
                </p>
                <p className='text-neutral-500 text-sm leading-relaxed mb-6'>
                  {lab.description}
                </p>

                <div className='flex flex-wrap gap-2'>
                  {lab.focus.map((tag) => (
                    <span
                      key={tag}
                      className='px-3 py-1 text-xs font-medium bg-neutral-100 text-neutral-500 rounded-full'
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}