import { Title } from '@/components/ui/text'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { banner_1 } from '@/images'

const HomeBanner = () => {
  return (
    <div className="py-16 md:py-0 bg-shop_light_pink rounded-lg px-10 lg:px-24 flex flex-nowrap items-center justify-between">
      <div className="space-y-5">
        <Title className>
          Grab Upto 50% off! <br />
          Selected headphones.
        </Title>
        <Link
          href={'/shop'}
          className="bg-shop_btn_dark_green/90 text-white/80 px-5 py-2.5 text-sm font-semibold rounded-md hover:text-white hover:bg-shop_btn_dark_green hoverEffect"
        >
          Buy Now
        </Link>
      </div>
      <div>
        <Image
          src={banner_1}
          alt="banner_1"
          className="hidden md:inline-flex w-96"
        />
      </div>
    </div>
  )
}

export default HomeBanner
