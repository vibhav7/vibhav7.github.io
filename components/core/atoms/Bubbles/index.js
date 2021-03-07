import React from 'react'

export default function Bubbles(props) {
  return (
    <div className="absolute top-0 left-0 transform translate-x-6 translate-y-6">
      <div className="absolute w-20 h-20 rounded-full opacity-50 lg:w-64 lg:h-64 bg-gradient-to-br from-blue-100 to-blue-200"></div>
      <div className="absolute w-16 h-16 mt-8 ml-10 rounded-full opacity-50 lg:w-56 lg:h-56 lg:mt-24 lg:ml-12 bg-gradient-to-br from-purple-100 to-purple-200"></div>
      <div className="absolute w-20 h-20 ml-24 rounded-full opacity-50 lg:w-64 lg:h-64 bg-gradient-to-br from-red-100 to-red-200"></div>
      {/* <div className="absolute w-20 h-20 rounded-full opacity-50 lg:w-64 lg:h-64 bg-gradient-to-br from-teal-100 to-teal-200"></div> */}
    </div>
  )
}
