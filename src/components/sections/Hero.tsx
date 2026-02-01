import Image from 'next/image'

import { Text } from '@/components/ui/text'

export function HeroSection() {
  return (
    <section id='hero' className='relative isolate pb-15'>
      <div>
        <div className='w-full'>
          <Image
            src='/images/hero/1.avif'
            alt='昆仑巢'
            width={2160}
            height={1440}
            className='w-full h-auto object-cover ring-neutral-900/10 aspect-video'
            priority
          />
        </div>
        <div className='mx-auto max-w-2xl px-6 lg:px-8'>
          <div className='text-center mt-12'>
            <Text size='body' variant='muted'>
              <span className='text-neutral-900 font-semibold'>“昆仑”代表中国文化中的最高山和精神象征，“巢”则象征着共筑之巢，我们希望成为一个有归属感的地方。</span>昆仑巢不以营利为首要目的，而是向社会提供一个思想碰撞的空间，让创业者抱团取暖、碰撞想法、另寻出路。同时也致力于助力地方发展和产业升级，打造一个创新思想汇聚之地，在开放的世界解决开放的问题。
            </Text>
          </div>
        </div>
      </div>
    </section>
  )
}