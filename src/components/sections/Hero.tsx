import Image from 'next/image'

export function HeroSection() {
  return (
    <section id='hero' className='relative isolate'>
      <div className='w-full'>
        <Image
          src='/images/hero/hero.webp'
          alt='昆仑巢'
          width={1080}
          height={720}
          className='ring-neutral-900/10'
          priority
        />
      </div>
      <div className='mx-auto max-w-2xl py-4 px-6 lg:px-8'>
        <div className='text-center'>
          <p className='mt-8 text-lg font-medium text-pretty text-neutral-500 sm:text-xl/8'>
            “昆仑”代表中国文化中的最高山和精神象征，“巢”则象征着共筑之巢，我们希望成为一个有归属感的地方。昆仑巢不以营利为首要目的，而是向社会提供一个思想碰撞的空间，让创业者抱团取暖、碰撞想法、另寻出路。同时也致力于助力地方发展和产业升级，打造一个创新思想汇聚之地，在开放的世界解决开放的问题。
          </p>
        </div>
      </div>
      <div
        aria-hidden='true'
        className='absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]'
      >
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className='relative left-[calc(50%+3rem)] aspect-1155/678 w-144.5 -translate-x-1/2 bg-linear-to-tr from-brand-red/60 to-brand-red opacity-10 sm:left-[calc(50%+36rem)] sm:w-288.75'
        />
      </div>
    </section>
  )
}