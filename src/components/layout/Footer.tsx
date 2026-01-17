import Link from 'next/link'

import { footerNavConfig } from '@/config/navigation'

const Footer = () => {
  return (
    <footer className='bg-neutral-100' aria-labelledby='footer-heading'>
      <h2 id='footer-heading' className='sr-only'>
        Footer
      </h2>
      <div className='mx-auto max-w-7xl px-6 pb-6 pt-8 lg:px-8'>
        <div className='grid grid-cols-1 gap-x-12 gap-y-6 md:grid-cols-5'>
          {footerNavConfig.map((section) => (
            <div key={section.title}>
              <h3 className='text-xs font-medium text-neutral-900'>
                {section.title}
              </h3>
              
              <ul role='list' className='mt-2 space-y-1'>
                {section.children?.map((item) => (
                  <li key={item.title}>
                    <Link 
                      href={item.href ?? '#'} 
                      className='text-xs text-neutral-600 hover:text-neutral-900 transition-colors'
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className='mt-6 border-t border-neutral-900/10 pt-6 md:flex md:items-center md:justify-between'>
          <p className='text-xs leading-5 text-neutral-500 md:order-1 mt-0'>
            &copy; {new Date().getFullYear()} 昆仑巢科技创新有限公司 保留所有权利。
          </p>
          <Link href='http://beian.miit.gov.cn' className='text-xs leading-5 text-neutral-500 md:order-2 md:mt-0 hover:underline' target='_blank'>
            京ICP备2026XXXXXX号
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer