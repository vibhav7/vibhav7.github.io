import { useEffect } from 'react'

export default function BackgroundGrid() {
  useEffect(() => {
    // grab everything we need
    const gridItems = document.querySelectorAll(".grid-background > div");

    // loop over grid items and create a random duration + delay for each
    gridItems.forEach((item) => {
      // calculate random number for delay
      const delay = getRandomInt(0, 5);

      // calculate random number for duration
      const duration = getRandomInt(3, 6);

      // set both
      item.style.animationDelay = `${delay}s`;
      item.style.animationDuration = `${duration}s`;
    });

    function getRandomInt(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

  }, [])
  return (
    <div>
      <div class="relative flex items-center justify-center min-h-screen bg-gray-900">

        <div class="absolute inset-0 p-2 grid-background grid grid-cols-12 gap-2 transform -skew-y-12 scale-125">

          <div class="bg-gray-500 rounded col-span-2 animate-pulse"></div>
          <div class="bg-gray-500 rounded col-span-5 animate-pulse"></div>
          <div class="bg-gray-500 rounded col-span-1 animate-pulse"></div>
          <div class="bg-gray-500 rounded col-span-4 animate-pulse"></div>

          <div class="bg-gray-500 rounded col-span-5 animate-pulse"></div>
          <div class="bg-gray-500 rounded col-span-3 animate-pulse"></div>
          <div class="bg-gray-500 rounded col-span-2 animate-pulse"></div>
          <div class="bg-gray-500 rounded col-span-2 animate-pulse"></div>

          <div class="bg-gray-500 rounded col-span-4 animate-pulse"></div>
          <div class="bg-gray-500 rounded col-span-7 animate-pulse"></div>
          <div class="bg-gray-500 rounded col-span-1 animate-pulse"></div>

          <div class="bg-gray-500 rounded col-span-2 animate-pulse"></div>
          <div class="bg-gray-500 rounded col-span-4 animate-pulse"></div>
          <div class="bg-gray-500 rounded col-span-6 animate-pulse"></div>

          <div class="bg-gray-500 rounded col-span-5 animate-pulse"></div>
          <div class="bg-gray-500 rounded col-span-5 animate-pulse"></div>
          <div class="bg-gray-500 rounded col-span-2 animate-pulse"></div>

          <div class="bg-gray-500 rounded col-span-4 animate-pulse"></div>
          <div class="bg-gray-500 rounded col-span-7 animate-pulse"></div>
          <div class="bg-gray-500 rounded col-span-1 animate-pulse"></div>

          <div class="bg-gray-500 rounded col-span-4 animate-pulse"></div>
          <div class="bg-gray-500 rounded col-span-7 animate-pulse"></div>
          <div class="bg-gray-500 rounded col-span-1 animate-pulse"></div>
        </div>

        <div class="relative">
          <h2 class="text-4xl font-extrabold text-white">Welcome <span class="text-purple-500">Grid</span> Background</h2>
        </div>

      </div>
    </div>
  )
}
