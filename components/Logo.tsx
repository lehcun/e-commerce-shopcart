import { cn } from '@/lib/utils'
import Link from 'next/link'
import React from 'react'

// Lam logo nhu PhimFox
const Logo = ({
  className,
  spanDesign,
}: {
  className?: React.ReactNode
  spanDesign?: React.ReactNode
}) => {
  return (
    <Link href={'/'}>
      <h2
        className={cn(
          'text-2xl text-shop_btn_dark_green font-black tracking-wider uppercase hover:text-shop_btn_light_green group hoverEffect font-sans',
          className
        )}
      >
        Shop
        <span
          className={cn(
            'text-shop_btn_light_green group-hover:text-shop_btn_dark_green hoverEffect',
            spanDesign
          )}
        >
          cart
        </span>
      </h2>
    </Link>
  )
}

export default Logo
