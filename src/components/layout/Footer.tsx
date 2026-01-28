import Link from 'next/link'

import { footerNavConfig } from '@/config/navigation'
import { social } from '@/config/social'
import Image from 'next/image'
import { Text } from '@/components/ui/text'
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from '@/components/ui/popover'

const Footer = () => {
  return (
    <footer className='bg-neutral-100' aria-labelledby='footer-heading'>
      <h2 id='footer-heading' className='sr-only'>
        Footer
      </h2>
      <div className='mx-auto max-w-7xl px-6 pb-6 pt-8 lg:px-8'>
        <div className='xl:grid xl:grid-cols-3 xl:gap-8'>
          <div className='space-y-6'>
            <Image
              className='h-8 w-auto'
              src='/meta/logo.svg'
              alt='昆仑巢。'
              width={800}
              height={306}
            />
            <Text size='caption' className='text-neutral-600'>
              创新思想汇聚之地。
            </Text>
            <div className='flex space-x-6'>
              {social.map((item) => {
                if (item.imageUrl) {
                  return (
                    <Popover key={item.name}>
                      <PopoverTrigger className='text-neutral-500 hover:text-neutral-600 transition-colors'>
                        <span className='sr-only'>{item.name}</span>
                        <item.icon className='h-5 w-5 cursor-pointer' aria-hidden='true' />
                      </PopoverTrigger>
                      <PopoverContent className='w-32 p-1 rounded-xl'>
                        <div className='relative aspect-square w-full'>
                          <Image
                            src={item.imageUrl}
                            alt={item.imageAlt || item.name}
                            fill
                            className='object-cover'
                          />
                        </div>
                      </PopoverContent>
                    </Popover>
                  )
                }
                return (
                  <Link 
                    key={item.name} 
                    href={item.href ?? '#'} 
                    className='text-neutral-500 hover:text-neutral-600 transition-colors'
                    target='_blank'
                  >
                    <span className='sr-only'>{item.name}</span>
                    <item.icon className='h-5 w-5' aria-hidden='true' />
                  </Link>
                )
              })}
            </div>
          </div>
          <div className='mt-10 grid grid-cols-1 md:grid-cols-4 gap-8 xl:col-span-2 xl:mt-0'>
            {footerNavConfig.map((section) => (
              <div key={section.title}>
                <Text size='caption' weight='semibold'>
                  {section.title}
                </Text>
                <ul role='list' className='mt-3 space-y-3'>
                  {section.children?.map((item) => (
                    <li key={item.title}>
                      <Link 
                        href={item.href ?? '#'} 
                        className='text-xs text-neutral-600 hover:underline'
                      >
                        <Text size='caption' className='text-neutral-600 hover:underline'>
                          {item.title}
                        </Text>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className='mt-6 border-t border-neutral-900/10 pt-6 md:flex md:items-center md:justify-between'>
          <Text size='xs' variant='muted' className='md:order-1 mt-0'>
            &copy; {new Date().getFullYear()} 昆仑巢（北京智能之路科技有限公司）保留所有权利。
          </Text>
          <Link href='http://beian.miit.gov.cn' className='md:order-2 md:mt-0' target='_blank'>
            <Text size='xs' variant='muted' className='hover:underline'>
              京ICP备2024042943号
            </Text>
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer