import { Puzzle, Target, Scale, Users } from 'lucide-react'

const philosophies = [
  {
    name: '共创共建共享',
    description:
      '所有的参与者既是生态的享用者，也是建设者。在这里，每个人的贡献都被重视。',
    icon: Users,
  },
  {
    name: '平等开放交流',
    description:
      '极力营造一种无门槛的平等、开放、自由的交流空间，参与者自由讨论，相互建立联系。',
    icon: Scale,
  },
  {
    name: '价值回归 务实为本',
    description:
      '从追逐融资与估值，回归到具体问题。关注项目合作、解决实际痛点、高效业务落地。',
    icon: Target,
  },
  {
    name: '能力重组消化冗余',
    description:
      '不做简单的资源对接，专注能力的基因重组。失败不意味着归零，让未竟项目的经验成为集体财富。',
    icon: Puzzle,
  },
]

export function PhilosophySection() {
  return (
    <section id='philosophy' className='py-24 sm:py-32'>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base/7 text-neutral-500">核心理念</h2>
          <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-neutral-900 sm:text-5xl lg:text-balance">
            我们相信的价值
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {philosophies.map((philosophy) => (
              <div key={philosophy.name} className="relative pl-16">
                <dt className="text-base/7 font-semibold text-neutral-900">
                  <div className="absolute top-0 left-0 flex size-10 items-center justify-center rounded-lg bg-brand-red">
                    <philosophy.icon aria-hidden="true" className="size-6 text-white" />
                  </div>
                  {philosophy.name}
                </dt>
                <dd className="mt-2 text-base/7 text-neutral-600">{philosophy.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}