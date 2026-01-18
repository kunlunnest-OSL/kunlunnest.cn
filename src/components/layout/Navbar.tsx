'use client'

import React from 'react'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

import { cn } from '@/lib/utils'
import { navConfig } from '@/config/navigation'
import { Button } from '@/components/ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuPortal, DropdownMenuSeparator, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'

const Navbar = () => {
  const [ isOpen, setIsOpen ] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={cn('sticky top-0 z-50 transition-colors duration-300', isScrolled ? 'bg-white/80 backdrop-blur-xl' : 'bg-transparent')}>
      <nav aria-label='Global' className='mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8'>

        {/* Logo */}
        <div className='flex lg:flex-1'>
          <Link href={'/'} className='-m-1.5 p-1.5'>
            <span className='sr-only'>昆仑巢</span>
            <Image
              alt='昆仑巢的 logo'
              src='/meta/logo.svg'
              className='h-8 w-auto'
              width={800}
              height={306}
            />
          </Link>
        </div>

        {/* Mobile Menu */}
        <div className='flex lg:hidden'>
          <DropdownMenu onOpenChange={setIsOpen}>
            <DropdownMenuTrigger asChild>
              <button
                type='button'
                className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-neutral-700 cursor-pointer outline-none'
              >
                {isOpen ? (
                  <>
                    <span className='sr-only'>关闭主菜单</span>
                    <X aria-hidden='true' className='size-6' />
                  </>
                ) : (
                  <>
                    <span className='sr-only'>打开主菜单</span>
                    <Menu aria-hidden='true' className='size-6' />
                  </>
                )}
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className='w-56' align='end'>
              {navConfig.map((section, index) => (
                <React.Fragment key={section.title}>
                  <DropdownMenuGroup>
                    <DropdownMenuLabel className='text-neutral-900 font-semibold'>
                      {section.title}
                    </DropdownMenuLabel>
                    {section.children.map((item) => (
                      <React.Fragment key={item.title}>
                        {item.children ? (
                          <DropdownMenuSub>
                            <DropdownMenuSubTrigger>
                              {item.title}
                            </DropdownMenuSubTrigger>
                            <DropdownMenuPortal>
                              <DropdownMenuSubContent>
                                {item.children.map((child) => (
                                  <DropdownMenuItem key={child.title} asChild>
                                    <Link href={child.href} className='w-full'>
                                      {child.title}
                                    </Link>
                                  </DropdownMenuItem>
                                ))}
                              </DropdownMenuSubContent>
                            </DropdownMenuPortal>
                          </DropdownMenuSub>
                        ) : (
                          <DropdownMenuItem asChild>
                            <Link href={item.href} className='w-full'>
                              {item.title}
                            </Link>
                          </DropdownMenuItem>
                        )}
                      </React.Fragment>
                    ))}
                  </DropdownMenuGroup>
                  {index < navConfig.length - 1 && <DropdownMenuSeparator />}
                </React.Fragment>
              ))}
              <Button variant='default' className='w-full mt-2'>
                预约访问
              </Button>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Desktop Menu */}
        <div className='hidden lg:flex lg:gap-x-8'>
          {navConfig.map((group) => (
            <DropdownMenu key={group.title}>
              <DropdownMenuTrigger className='text-sm font-semibold text-neutral-900 flex items-center cursor-pointer outline-none'>
                {group.title}
              </DropdownMenuTrigger>
              
              <DropdownMenuContent className='w-56' align='center'>
                {group.children?.map((item) => (
                  <React.Fragment key={item.title}>
                    {item.children ? (
                      <DropdownMenuSub>
                        <DropdownMenuSubTrigger>{item.title}</DropdownMenuSubTrigger>
                        <DropdownMenuPortal>
                          <DropdownMenuSubContent>
                            {item.children.map((child) => (
                              <DropdownMenuItem key={child.title} asChild className='cursor-pointer'>
                                <Link href={child.href ?? '#'}>{child.title}</Link>
                              </DropdownMenuItem>
                            ))}
                          </DropdownMenuSubContent>
                        </DropdownMenuPortal>
                      </DropdownMenuSub>
                    ) : (
                      <DropdownMenuItem key={item.title} asChild className='cursor-pointer'>
                        <Link href={item.href ?? '#'}>{item.title}</Link>
                      </DropdownMenuItem>
                    )}
                  </React.Fragment>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          ))}
        </div>
        <div className='hidden lg:flex lg:flex-1 lg:justify-end'>
          <Button>
            预约访问
          </Button>
        </div>
      </nav>
    </header>
  )
}

export default Navbar