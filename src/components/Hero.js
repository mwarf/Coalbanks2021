import React from 'react'
import ThemeToggle from './themToggle'

 const Hero = () => {
    return (
    <div className="pt-10 bg-gray-100 dark:bg-gray-900 sm:pt-16 lg:pt-8 lg:pb-14 lg:overflow-hidden">
<div className="mx-auto max-w-7xl lg:px-8">
  <div className="lg:grid lg:grid-cols-2 lg:gap-8">
    <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center">
      <div className="lg:py-14">
        <h1 className="mt-4 text-4xl tracking-tight font-bold text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl">
          <span className="block">Great stories, beautifully told by</span>
          <span className="pb-3 block bg-clip-text text-transparent bg-gradient-to-r from-teal-200 to-cyan-400 sm:pb-5">
          Coalbanks Creative.

          </span>
        </h1>
        <p className="text-base text-gray-300 sm:text-xl lg:text-lg xl:text-xl">
          We produce video and photo content from our studio in Lethbridge, Alberta.
        </p>
      </div>
    </div>
    <div className="mt-12 -mb-16 sm:-mb-48 lg:m-0 lg:relative">
      <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0">
        {/* Illustration taken from Lucid Illustrations: https://lucid.pixsellz.io/ */}
        <img
          className="w-full lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
          src="https://tailwindui.com/img/component-images/cloud-illustration-teal-cyan.svg"
          alt=""
        />
      </div>
    </div>
  </div>
</div>
</div>
)
}

export default Hero