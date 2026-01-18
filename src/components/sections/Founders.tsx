import Image from 'next/image'

const founders = [
  {
    name: '苏菂',
    role: '联合创始人',
    imgSrc: '/images/founders/sudi.webp',
    imgAlt: '苏菂',
    achievements: [
      '2011年创办车库咖啡，成为移动互联网时代的创业地标',
      '2015年联合创立YOU+国际青年社区',
      '2018年发起中关村创业博物馆',
      '中国创业服务领域的标志性人物',
    ],
  },
  {
    name: '鲍岳桥',
    role: '联合创始人',
    imgSrc: '/images/founders/baoyueqiao.webp',
    imgAlt: '鲍岳桥',
    achievements: [
      '研发汉字系统UCDOS，1995年市场份额达90%以上',
      '1998年创办联众游戏，2000年成为中国最大休闲游戏网站',
      '2007年转型为天使投资人',
      '创立乐教乐学，高峰期覆盖7000万用户',
    ],
  },
];

const supporters = [
  '联想集团',
  '世纪互联',
  '爱慕集团',
  '金山办公',
  'CSDN',
  '吴晓波',
];

export function FoundersSection() {
  return (
    <section id='founders' className='py-24 lg:py-32'>
      <div className='max-w-7xl mx-auto px-6 lg:px-8'>
        <div className='text-center max-w-3xl mx-auto mb-16'>
          <p className='text-base/7 text-neutral-500'>
            创立人及共同发起人
          </p>
          <h2 className='mt-2 text-4xl font-semibold tracking-tight text-pretty text-neutral-900 sm:text-5xl lg:text-balance'>
            行业领袖共筑昆仑巢
          </h2>
        </div>

        <div className='grid md:grid-cols-2 gap-8 mb-16'>
          {founders.map((founder) => (
            <div
              key={founder.name}
              className='bg-card border border-border rounded-lg p-8'
            >
              <div className='flex items-center gap-4 mb-6'>
                <div className='w-16 h-16 rounded-full bg-secondary flex items-center justify-center'>
                  <Image
                    src={founder.imgSrc}
                    alt={founder.imgAlt}
                    width={40}
                    height={40}
                    className='h-full w-full rounded-full'
                  />
                </div>
                <div>
                  <h3 className='text-2xl font-bold text-neutral-900'>
                    {founder.name}
                  </h3>
                  <p className='text-brand-red'>{founder.role}</p>
                </div>
              </div>

              <ul className='space-y-3'>
                {founder.achievements.map((achievement, index) => (
                  <li key={index} className='flex items-start gap-3'>
                    <span className='w-1.5 h-1.5 rounded-full bg-brand-red mt-2 shrink-0' />
                    <span className='text-neutral-600 text-sm leading-relaxed'>
                      {achievement}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className='text-center'>
          <p className='text-neutral-500 mb-8'>共同发起人</p>
          <div className='flex flex-wrap justify-center gap-x-8 gap-y-4'>
            {supporters.map((supporter) => (
              <span
                key={supporter}
                className='text-lg font-medium text-neutral-900'
              >
                {supporter}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}