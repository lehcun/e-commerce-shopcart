import { Facebook, Github, Youtube } from 'lucide-react'
import React from 'react'
import {
  Tooltip,
  TooltipTrigger,
  TooltipProvider,
  TooltipContent,
} from './ui/tooltip'
import { cn } from '@/lib/utils'
import Link from 'next/link'
interface Props {
  className?: string
  iconClassName?: string
  tooltipClassName?: string
}

const socialMedia = [
  {
    title: 'Youtube',
    href: 'https://www.youtube.com',
    icon: <Youtube className="w-5 h-5" />,
  },
  {
    title: 'Facebook',
    href: 'https://www.youtube.com',
    icon: <Facebook className="w-5 h-5" />,
  },
  {
    title: 'Github',
    href: 'https://www.youtube.com',
    icon: <Github className="w-5 h-5" />,
  },
]

const SocialMedia = ({ className, iconClassName, tooltipClassName }: Props) => {
  return (
    <TooltipProvider>
      <div className={cn('flex items-center gap-3.5', className)}>
        {socialMedia?.map((item) => (
          <Tooltip key={item?.title}>
            <TooltipTrigger asChild>
              <Link
                href={item.href}
                target="_blank" // open in new tab
                rel="noopener noreferrer" // for security: no access to the previous page
                className={cn(
                  'p-2 border rounded-full hover:text-white hover:border-shop_btn_light_green hoverEffect',
                  iconClassName
                )}
              >
                {item?.icon}
              </Link>
            </TooltipTrigger>
            <TooltipContent
              className={cn('bg-white text-darkColor', tooltipClassName)}
            >
              {item?.title}
            </TooltipContent>
          </Tooltip>
        ))}
      </div>
    </TooltipProvider>
  )
}

export default SocialMedia
