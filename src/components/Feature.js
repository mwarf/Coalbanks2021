import React from 'react'
import {
    CloudUploadIcon,
    CogIcon,
    LockClosedIcon,
    MenuIcon,
    RefreshIcon,
    ServerIcon,
    ShieldCheckIcon,
    XIcon,
  } from '@heroicons/react/outline'

const features = [
    {
      name: 'Corporate Video',
      description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi vitae lobortis.',
      icon: CloudUploadIcon,
    },
    {
      name: 'Photography',
      description: 'Qui aut temporibus nesciunt vitae dicta repellat sit dolores pariatur. Temporibus qui illum aut.',
      icon: LockClosedIcon,
    },
    {
      name: 'Drones',
      description: 'Rerum quas incidunt deleniti quaerat suscipit mollitia. Amet repellendus ut odit dolores qui.',
      icon: RefreshIcon,
    },
    {
      name: 'Social Content',
      description: 'Ullam laboriosam est voluptatem maxime ut mollitia commodi. Et dignissimos suscipit perspiciatis.',
      icon: ShieldCheckIcon,
    },
    {
      name: 'Design',
      description:
        'Ab a facere voluptatem in quia corrupti veritatis aliquam. Veritatis labore quaerat ipsum quaerat id.',
      icon: CogIcon,
    },
    {
      name: 'Web',
      description: 'Quia qui et est officia cupiditate qui consectetur. Ratione similique et impedit ea ipsum et.',
      icon: ServerIcon,
    },
  ]

 const Feature = () => {
    return (
 <div className="relative bg-white py-16 sm:py-24 lg:py-32">
 <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
   <h2 className="text-base font-semibold tracking-wider text-cyan-600 uppercase">Our Services</h2>
   <p className="mt-2 text-3xl font-bold text-gray-900 tracking-tight sm:text-4xl">
     Feature video and photography
   </p>
   <p className="mt-5 max-w-prose mx-auto text-xl text-gray-500">
     Phasellus lorem quam molestie id quisque diam aenean nulla in. Accumsan in quis quis nunc, ullamcorper
     malesuada. Eleifend condimentum id viverra nulla.
   </p>
   <div className="mt-12">
     <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
       {features.map((feature) => (
         <div key={feature.name} className="pt-6">
           <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
             <div className="-mt-6">
               <div>
                 <span className="inline-flex items-center justify-center p-3 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-md shadow-lg">
                   <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                 </span>
               </div>
               <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">{feature.name}</h3>
               <p className="mt-5 text-base text-gray-500">{feature.description}</p>
             </div>
           </div>
         </div>
       ))}
     </div>
   </div>
 </div>
</div>
 )
}

 export default Feature