import Link from 'next/link'
import React from 'react'

import { productType } from '@/constants/data'

interface Props {
  selectedTab: string
  onSelectedTab: (tab: string) => void
}

const HomeTabBar = ({ selectedTab, onSelectedTab }: Props) => {
  return (
    <div className="flex items-center justify-between flex-wrap gap-5">
      <div className="flex items-center gap-1.5 text-sm font-semibold ">
        {productType?.map((item) => (
          <button
            key={item?.title}
            className={`border border-shop_btn_light_green/20 px-4 py-1.5 md:px-6 md:py-2 rounded-full  hover:bg-shop_btn_light_green hover:text-white hoverEffect transition-all duration-300 
              ${selectedTab === item?.title ? 'bg-shop_btn_light_green text-white border-shop_btn_light_green' : 'bg-shop_btn_light_green/10'}`}
          >
            {item?.title}
          </button>
        ))}
      </div>
      <Link href={'/shop'}>See all</Link>
    </div>
  )
}

export default HomeTabBar
