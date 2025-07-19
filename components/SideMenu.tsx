import React, { FC, useRef } from 'react'
import Logo from './Logo'
import { X } from 'lucide-react'
import { headerData } from '@/constants/data'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import SocialMedia from './SocialMedia'
import { useOutsideClick, useEscapeKey } from '@/hooks'
interface SideMenuProps {
  isOpen: boolean
  onClose: () => void
}

const SideMenu: FC<SideMenuProps> = ({ isOpen, onClose }) => {
  const pathName = usePathname()
  const SidebarRef = useRef<HTMLDivElement>(null!) // Non-null assertion since we are using it with useOutsideClick and useEscapeKey
  useOutsideClick(SidebarRef, onClose)
  useEscapeKey(SidebarRef, onClose)

  return (
    <div
      className={`fixed inset-y-0 h-screen left-0 z-30 w-full bg-black/50 text-white/70 shadow-xl ${isOpen ? 'translate-x-0' : '-translate-x-full'} hoverEffect`}
    >
      <div
        ref={SidebarRef}
        className="min-w-72 max-w-92 bg-black h-screen p-10 border-r border-r-shop_light_green flex flex-col gap-6 hoverEffect"
      >
        <div className="flex items-center justify-between gap-6">
          <Logo className="text-white" spanDesign="hover:text-white" />
          <button
            className="hover:text-shop_btn_light_green hoverEffect"
            onClick={onClose}
          >
            <X />
          </button>
        </div>
        <div className=" flex flex-col space-y-3.5 fonst tracking-wide font-poppins">
          {headerData?.map((item) => (
            <Link
              key={item?.title}
              href={item?.href}
              className={`hover:text-shop_btn_light_green hoverEffect ${pathName === item?.href ? 'text-shop_btn_light_green' : ''}`}
              onClick={onClose}
            >
              {item?.title}
            </Link>
          ))}
        </div>
        <SocialMedia />
      </div>
    </div>
  )
}

export default SideMenu
