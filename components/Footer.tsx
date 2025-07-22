import React from 'react'
import Container from './Container'
import FooterTop from './FooterTop'
import Logo from './Logo'
import SocialMedia from './SocialMedia'
import Link from 'next/link'
import { Button } from './ui/button'
import { Catagories, QuickLinks } from '@/constants/data'
import { SubTitle } from './ui/text'

const Footer = () => {
  return (
    <footer className="border-t">
      <Container>
        <FooterTop />
        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-8">
          <div>
            <Logo />
            <p className="text-sm text-gray-600 mt-4 mb-4">
              Discover curated furniture collections at Shopcart, blending style
              and comfort to elevate your living spaces.
            </p>
            <SocialMedia className="text-gray-600" />
          </div>
          <div>
            <SubTitle className="mb-4">Quick Links</SubTitle>
            <ul className="space-y-3 mt-4">
              {QuickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link?.param}
                    className="block text-sm text-gray-600 hover:text-shop_btn_dark_green mb-3"
                  >
                    {link?.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <SubTitle className="font-semibold">Categories</SubTitle>
            <ul className="space-y-3 mt-4">
              {Catagories.map((link, index) => (
                <li key={index}>
                  <Link
                    href={`/category${link?.param}`}
                    className="block text-sm text-gray-600 hover:text-shop_btn_dark_green mb-3"
                  >
                    {link?.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-4">
            <SubTitle>Newletter</SubTitle>
            <p className=" text-gray-600 mb-4">
              Subscribe to our newsletter to receive updates and exclusive
              offers.
            </p>
            <input
              type="email"
              placeholder="Enter your email"
              className="space-y-2 w-full px-4 py-2 border border-gray-300 rounded-md"
              required
            ></input>
            <Button className="w-full bg-gray-900 hover:bg-gray-900/90 text-lg py-5 text-white">
              Subcribe
            </Button>
          </div>
        </div>
        {/* Footer Bottom*/}
        <div className="py-6 border-t text-center text-sm text-gray-600">
          <div>
            &copy; {new Date().getFullYear()}{' '}
            <Logo className="text-sm inline-block" />. All rights reserved.
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
