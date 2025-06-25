'use client' 

import React, { useState } from 'react'
import LiveClass from './LiveClass'
import Recorded from './Recorded'

const Page = () => {
      const [activeTab, setActiveTab] = useState('live')
  return (
    <div className="max-w-7xl mx-auto min-h-screen px-4 sm:px-8 py-6">
      <div className="bg-white">
        <h1 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-2">
          Live Class
        </h1>
        <p className="text-[#525454] text-lg sm:text-xl font-normal">
          Here you can join your live section, see what's next, or replay what you missed
        </p>

        <div className="mt-10 w-full">
          <div className="w-full mb-6">
            <article className="flex gap-6 sm:gap-10 border-b border-gray-200">
              <button
                className={`pb-2 font-medium cursor-pointer ${
                  activeTab === 'live'
                    ? 'text-[#FB8500] border-b-2 border-[#FB8500]'
                    : 'text-[#A4A5A6]'
                }`}
                onClick={() => setActiveTab('live')}
              >
                Live Class
              </button>
              <button
                className={`pb-2 font-medium cursor-pointer ${
                  activeTab === 'recorded'
                    ? 'text-[#FB8500] border-b-2 border-[#FB8500]'
                    : 'text-[#A4A5A6]'
                }`}
                onClick={() => setActiveTab('recorded')}
              >
                Recorded
              </button>
            </article>
             <p className="text-[#7A7B7C] text-base sm:text-lg mt-4">
              {activeTab === 'live'
                ? 'Interact with educators in live classes.'
                : 'Access your old classes here.'}
             </p>
          </div>

            {
                 activeTab === 'live' ? <LiveClass /> : 
                 activeTab === 'recorded' ? <Recorded /> : null
            }
          
        </div>
      </div>
    </div>
  )
}

export default Page
