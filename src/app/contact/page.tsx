import { Metadata } from 'next'
import Image from 'next/image'
import { Building, Mail, Phone } from 'lucide-react'

import { Text } from '@/components/ui/text'

export const metadata: Metadata = {
  title: '联系',
}

export default function ContactPage() {
  return (
    <div className='relative isolate bg-white'>
      <div className='mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2'>
        <div className='relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-48'>
          <div className='mx-auto max-w-xl lg:mx-0 lg:max-w-lg'>
            <div className='absolute inset-y-0 left-0 -z-10 w-full overflow-hidden bg-white lg:w-1/2'>
              <svg
                className='absolute inset-0 h-full w-full stroke-neutral-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]'
                aria-hidden='true'
              >
                <defs>
                  <pattern
                    id='83fd4e5a-9d52-42fc-97b6-718e5d7ee527'
                    width={200}
                    height={200}
                    x='100%'
                    y={-1}
                    patternUnits='userSpaceOnUse'
                  >
                    <path d='M130 200V.5M.5 .5H200' fill='none' />
                  </pattern>
                </defs>
                <rect width='100%' height='100%' strokeWidth={0} fill='white' />
                <svg x='100%' y={-1} className='overflow-visible fill-neutral-50'>
                  <path d='M-470.5 0h201v201h-201Z' strokeWidth={0} />
                </svg>
                <rect width='100%' height='100%' strokeWidth={0} fill='url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)' />
              </svg>
            </div>
            <Text size='headline' weight='semibold'>
              联系
            </Text>
            <dl className='mt-10 space-y-4 text-base leading-7 text-neutral-600'>
              <div className='flex gap-x-4'>
                <dt className='flex-none'>
                  <span className='sr-only'>Address</span>
                  <Building className='h-7 text-neutral-400' aria-hidden='true' />
                </dt>
                <dd>
                  北京市海淀区科学院南路 2 号
                  <br />
                  融科资讯中心A座9层
                </dd>
              </div>
              <div className='flex gap-x-4'>
                <dt className='flex-none'>
                  <span className='sr-only'>Telephone</span>
                  <Phone className='h-7 text-neutral-400' aria-hidden='true' />
                </dt>
                <dd>
                  <a className='hover:text-neutral-900' href='tel:+86 15810858370'>
                    +86 15810858370
                  </a>
                </dd>
              </div>
              <div className='flex gap-x-4'>
                <dt className='flex-none'>
                  <span className='sr-only'>Email</span>
                  <Mail className='h-7 text-neutral-400' aria-hidden='true' />
                </dt>
                <dd>
                  <a className='hover:text-neutral-900' href='mailto:15810858370@163.cm'>
                    15810858370@163.cm
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </div>
        <div className='px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-48'>
          <div className='mx-auto max-w-xl lg:mr-0 lg:max-w-lg'>
            <Text size='intro' weight='semibold'>
              官方微信
            </Text>
            <div className='mt-4 -ml-3'>
              <Image
                className='h-40 w-40'
                src='/social/wechat-official-account.jpg'
                alt='昆仑巢官方微信'
                width={400}
                height={400}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}