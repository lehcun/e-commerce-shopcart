import { Clock, Mail, MapPin, Phone } from 'lucide-react'
import React from 'react'

interface ContactItemData {
  title: string
  subtitle: string
  icon: React.ReactNode
}

const ContactItems: ContactItemData[] = [
  {
    title: 'Visit Us',
    subtitle: '123 Main St, Anytown, USA',
    icon: (
      <MapPin className="h-6 w-6 text-gray-600 group-hover:text-primary transition-colors" />
    ),
  },
  {
    title: 'Call Us',
    subtitle: '+84 123 456 789',
    icon: (
      <Phone className="h-6 w-6 text-gray-600 group-hover:text-primary transition-colors" />
    ),
  },
  {
    title: 'Working Hours',
    subtitle: 'Mon - Sat: 10:00 AM - 7:00 PM',
    icon: (
      <Clock className="h-6 w-6 text-gray-600 group-hover:text-primary transition-colors" />
    ),
  },
  {
    title: 'Email Us',
    subtitle: '123t@gmail.com',
    icon: (
      <Mail className="h-6 w-6 text-gray-600 group-hover:text-primary transition-colors" />
    ),
  },
]

const FooterTop = () => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 border-b">
      {ContactItems?.map((item, index) => (
        <div
          key={index}
          className="p-4 items-center gap-3 flex group hover:bg-gray-50 transition-colors  hoverEffect"
        >
          <div>{item?.icon}</div>
          <div className="font-p">
            <h3 className="font-semibold  text-gray-800 group-hover:text-black">
              {item?.title}
            </h3>
            <p className="mt-1 text-sm text-gray-600 group-hover:text-gray-900">
              {item?.subtitle}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default FooterTop
