import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

import { Button } from '@/components/ui/button'

export function HeroSection() {
  return (
    <section id='hero' className='relative isolate px-6 lg:px-8'>
      <div
        aria-hidden='true'
        className='absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80'
      >
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className='relative left-[calc(50%-11rem)] aspect-1155/678 w-144.5 -translate-x-1/2 rotate-30 bg-linear-to-tr from-brand-red/60 to-brand-red opacity-10 sm:left-[calc(50%-30rem)] sm:w-288.75'
        />
      </div>
      <div className='mx-auto max-w-2xl py-32 sm:py-48 lg:py-56'>
        <div className='hidden sm:mb-8 sm:flex sm:justify-center'>
          <div className='relative rounded-full px-3 py-1 text-sm/6 text-neutral-600 ring-1 ring-neutral-900/10 hover:ring-neutral-900/20'>
            AI 时代的新龙门客栈
          </div>
        </div>
        <div className='text-center'>
          <h1 className='text-5xl font-semibold tracking-tight text-balance text-neutral-900 sm:text-7xl'>
            思想碰撞<br/><span className='text-brand-red'>共创未来</span>
          </h1>
          <p className='mt-8 text-lg font-medium text-pretty text-neutral-500 sm:text-xl/8'>
            昆仑巢是一个让创业者抱团取暖、碰撞想法的创新空间。在开放的世界解决开放的问题，打造一个创新思想汇聚之地。
          </p>
          <div className='mt-10 flex items-center justify-center gap-x-6'>
            <Button variant='default'>
              预约访问 <ArrowRight size={18} />
            </Button>
            <Link href='/about' className='text-sm/6 font-semibold text-neutral-900'>
              深入了解
            </Link>
          </div>
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