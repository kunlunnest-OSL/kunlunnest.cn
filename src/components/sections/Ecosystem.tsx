import Image from 'next/image'

import { Text } from '@/components/ui/text'
import { ecosystemPartners } from '@/config/ecosystem'

export function EcosystemSection() {
  return (
    <section id='ecosystem' className='py-15'>
      <div className='max-w-7xl mx-auto px-6 lg:px-8 pt-8 pb-12'>
        <div className='text-center max-w-3xl mx-auto'>
          <Text variant='accent' weight='semibold'>
            生态合作伙伴
          </Text>
        </div>
        <div className='mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5'>
          {ecosystemPartners.map((partner) => (
            <Image
              key={partner.name}
              src={partner.imgSrc}
              alt={partner.name}
              width={partner.width}
              height={partner.height}
              className='col-span-2 max-h-6 w-full object-contain lg:col-span-1'
            />
          ))}
        </div>
      </div>
    </section>
  )
}