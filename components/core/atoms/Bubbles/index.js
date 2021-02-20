import React from 'react'

export default function Bubbles(props) {
  return (
    <div className="absolute top-0 left-0 transform translate-x-6 translate-y-6">
      <div className="absolute w-20 h-20 lg:w-64 lg:h-64 rounded-full bg-gradient-to-br from-blue-100 to-blue-200 opacity-50"></div>
      <div className="absolute w-16 h-16 lg:w-56 lg:h-56 mt-8 ml-10 lg:mt-24 lg:ml-12 rounded-full bg-gradient-to-br from-purple-100 to-purple-200 opacity-50"></div>
      <div className="absolute w-20 h-20 lg:w-64 lg:h-64 ml-24 rounded-full bg-gradient-to-br from-red-100 to-red-200 opacity-50"></div>
      {/* <div className="absolute w-20 h-20 lg:w-64 lg:h-64 rounded-full bg-gradient-to-br from-teal-100 to-teal-200 opacity-50"></div> */}
    </div>
  )
}
