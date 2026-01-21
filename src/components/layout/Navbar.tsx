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
import { NavigationMenu, NavigationMenuItem, NavigationMenuList, NavigationMenuTrigger, NavigationMenuContent, NavigationMenuLink } from '@/components/ui/navigation-menu'
import { useIsMobile } from '@/hooks/use-mobile'
import { Text } from '@/components/ui/text'

const Navbar = () => {
  const [ isOpen, setIsOpen ] = useState(false);
  const [ isScrolled, setIsScrolled ] = useState(false);
  const isMobile = useIsMobile();

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
                className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-neutral-900 cursor-pointer outline-none'
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
                    <DropdownMenuLabel>
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
        <div className='hidden lg:flex lg:flex-1 lg:justify-end'>
          <NavigationMenu className='hidden lg:flex' viewport={isMobile}>
            <NavigationMenuList className='flex-wrap'>
              {navConfig.map((group) => (
                <NavigationMenuItem key={group.title}>
                  <NavigationMenuTrigger className='flex items-center cursor-pointer outline-none'>
                    <Text size='content' weight='semibold'>
                      {group.title}
                    </Text>
                  </NavigationMenuTrigger>
                  
                  <NavigationMenuContent className='w-auto'>
                    <ul className='grid w-auto gap-1'>
                      {group.children?.map((item) => (
                        <li key={item.title}>
                          <NavigationMenuLink asChild>
                            <Link 
                              href={item.href ?? '#'} 
                              className='block select-none space-y-1 rounded-md leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground'
                            >
                              <Text size='content'>
                                {item.title}
                              </Text>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
          <Button className='ml-5'>
            <Text size='content' weight='semibold' variant='dark'>
              预约访问
            </Text>
          </Button>
        </div>
      </nav>
    </header>
  )
}

export default Navbar