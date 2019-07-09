import React from 'react'

const Sidebar = () => (
  <div className="h-auto lg:inline lg:fixed lg:w-80 lg:h-screen bg-black-opacity-25 z-10 p-3 lg:p-6">
    <div className="font-bold text-white tracking-wide uppercase text-xl text-center lg:mb-6">
      Actor <span className="text-indigo-400">Overlap</span>
    </div>
    <div className="hidden lg:inline">
      <div className="text-2xl text-white leading-tight mb-6">
        Who was in this movie <br />
        and also that movie?
      </div>
      <div className="text-white">Lorem Ipsum dolor simet</div>
    </div>
  </div>
)

export default Sidebar
