'use client'

import React from 'react'
import { headerData } from '@/constants/data'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const HeaderMenu = () => {
  const pathName = usePathname()

  return (
    <div className="hidden md:inline-flex w-1/3 items-center justify-center gap-7 text-sm capitalize font-semibold text-lightColor">
      {headerData.map((item) => {
        const isActive = pathName === item?.href
        return (
          <Link
            key={item?.title}
            href={item?.href}
            className={`hover:text-shop_btn_light_green hoverEffect relative group ${
              isActive ? 'text-shop_btn_light_green' : ''
            }`} // group all item in Link for hover effects
          >
            {item?.title}
            <span
              className={`absolute -bottom-0.5 left-1/2 w-0 h-0.5 bg-shop_btn_light_green group-hover:w-1/2 hoverEffect group-hover:left-0 ${
                isActive ? 'w-1/2' : ''
              }`}
            />
            <span
              className={`absolute -bottom-0.5 right-1/2 w-0 h-0.5 bg-shop_btn_light_green group-hover:w-1/2 hoverEffect group-hover:right-0 ${
                isActive ? 'w-1/2' : ''
              }`}
            />
          </Link>
        )
      })}
    </div>
  )
}

export default HeaderMenu
