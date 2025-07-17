import { cn } from '@/lib/utils'
import Link from 'next/link'
import React from 'react'

const Logo = ({ className }: { className?: React.ReactNode }) => {
  return (
    <div className="w-auto md:w-1/3 flex items-center justify-start gap-2.5 md:gap-0">
      <Link href={'/'}>
        <h2
          className={cn(
            'text-2xl text-shop_btn_dark_green font-black tracking-wider uppercase hover:text-shop_btn_light_green group hoverEffect font-sans',
            className
          )}
        >
          Shopcar
          <span
            className={cn(
              'text-shop_btn_light_green group-hover:text-shop_btn_dark_green hoverEffect'
            )}
          >
            t
          </span>
        </h2>
      </Link>
    </div>
  )
}

export default Logo
