import React from 'react'
import { Heart } from 'lucide-react'
import Link from 'next/link'
const FavoriteIcon = () => {
  return (
    <Link
      href={'/cart'}
      className="relative w-5 h-5 hover:text-shop_btn_light_green hoverEffect"
    >
      <Heart className="w-5 h-5 hover:text-shop_btn_light_green" />
      <span className="absolute -top-1 -right-1 bg-shop_btn_dark_green text-white h-3.5 w-3.5 rounded-full flex items-center justify-center text-xs font-semibold">
        0
      </span>
    </Link>
  )
}

export default FavoriteIcon
