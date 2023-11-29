import React, { useEffect } from "react"
import Glide from "@glidejs/glide"

export default function DiscountProduct() {
  useEffect(() => {
    const slider = new Glide(".glide-01", {
      type: "carousel",
      focusAt: "center",
      perView: 3,
      autoplay: 3000,
      animationDuration: 700,
      gap: 24,
      classNames: {
        nav: {
          active: "[&>*]:bg-wuiSlate-700",
        },
      },
      breakpoints: {
        1024: {
          perView: 2,
        },
        640: {
          perView: 1,
        },
      },
    }).mount()

    return () => {
      slider.destroy()
    }
  }, [])

  return (
    <div className="mb-24 max-sm:mt-7">
    <h1 className="lg:text-4xl text-3xl ml-3 font-bold lg:ml-9 font-mono">Our New Collections</h1>
      {/*<!-- Component: Carousel with controls inside --> */}
      <div className="glide-01 relative w-full">
        {/*    <!-- Slides --> */}
        <div className="overflow-hidden" data-glide-el="track">
          <ul className="whitespace-no-wrap flex-no-wrap [backface-visibility: hidden] [transform-style: preserve-3d] [touch-action: pan-Y] [will-change: transform] relative flex w-full overflow-hidden p-0">
            <li>
      
<div class="mx-auto mt-11 w-80 transform overflow-hidden rounded-lg bg-white dark:bg-slate-800 shadow-md duration-300 hover:scale-105 hover:shadow-lg">
  <img class="h-48 w-full object-cover object-center" src="https://i.ibb.co/T476P7c/OLVD9J0.jpg" alt="Product Image" />
  <div class="p-4">
    <h2 class="mb-2 text-lg font-medium dark:text-white text-gray-900">SAMSUNG G4</h2>
    <p class="mb-2 text-base dark:text-gray-300 text-gray-700">SMART COLLECTION THIS YEAR.</p>
    <div class="flex items-center">
      <p class="mr-2 text-lg font-semibold text-gray-900 dark:text-white">$40.00</p>
      <p class="text-base  font-medium text-gray-500 line-through dark:text-gray-300">$25.00</p>
      <p class="ml-auto text-base font-medium text-green-500">20% off</p>
    </div>
  </div>
</div>
            </li>
            <li>
<div class="mx-auto mt-11 w-80 transform overflow-hidden rounded-lg bg-white dark:bg-slate-800 shadow-md duration-300 hover:scale-105 hover:shadow-lg">
  <img class="h-48 w-full object-cover object-center" src="https://i.ibb.co/zSz028G/pexels-pixabay-258244.jpg" alt="Product Image" />
  <div class="p-4">
    <h2 class="mb-2 text-lg font-medium dark:text-white text-gray-900">CLASSIQUE</h2>
    <p class="mb-2 text-base dark:text-gray-300 text-gray-700">SMART COLLECTION THIS YEAR.</p>
    <div class="flex items-center">
      <p class="mr-2 text-lg font-semibold text-gray-900 dark:text-white">$10.00</p>
      <p class="text-base  font-medium text-gray-500 line-through dark:text-gray-300">$25.00</p>
      <p class="ml-auto text-base font-medium text-green-500">20% off</p>
    </div>
  </div>
</div>
            </li>
            <li>
<div class="mx-auto mt-11 w-80 transform overflow-hidden rounded-lg bg-white dark:bg-slate-800 shadow-md duration-300 hover:scale-105 hover:shadow-lg">
  <img class="h-48 w-full object-cover object-center" src="https://i.ibb.co/jfCgQDs/theregisti-TUBEp7-DPL9o-unsplash.jpg" alt="Product Image" />
  <div class="p-4">
    <h2 class="mb-2 text-lg font-medium dark:text-white text-gray-900">AIRPODS PRO</h2>
    <p class="mb-2 text-base dark:text-gray-300 text-gray-700">SMART COLLECTION THIS YEAR.</p>
    <div class="flex items-center">
      <p class="mr-2 text-lg font-semibold text-gray-900 dark:text-white">$27.00</p>
      <p class="text-base  font-medium text-gray-500 line-through dark:text-gray-300">$25.00</p>
      <p class="ml-auto text-base font-medium text-green-500">20% off</p>
    </div>
  </div>
</div>
            </li>
            <li>
<div class="mx-auto mt-11 w-80 transform overflow-hidden rounded-lg bg-white dark:bg-slate-800 shadow-md duration-300 hover:scale-105 hover:shadow-lg">
  <img class="h-48 w-full object-cover object-center" src="https://i.ibb.co/pPw93xj/levitating-music-headphones-display.jpg" alt="Product Image" />
  <div class="p-4">
    <h2 class="mb-2 text-lg font-medium dark:text-white text-gray-900">HEADPHONE</h2>
    <p class="mb-2 text-base dark:text-gray-300 text-gray-700">SMART COLLECTION THIS YEAR.</p>
    <div class="flex items-center">
      <p class="mr-2 text-lg font-semibold text-gray-900 dark:text-white">$31.00</p>
      <p class="text-base  font-medium text-gray-500 line-through dark:text-gray-300">$25.00</p>
      <p class="ml-auto text-base font-medium text-green-500">20% off</p>
    </div>
  </div>
</div>
            </li>
            <li>
<div class="mx-auto mt-11 w-80 transform overflow-hidden rounded-lg bg-white dark:bg-slate-800 shadow-md duration-300 hover:scale-105 hover:shadow-lg">
  <img class="h-48 w-full object-cover object-center" src="https://images.unsplash.com/photo-1674296115670-8f0e92b1fddb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="Product Image" />
  <div class="p-4">
    <h2 class="mb-2 text-lg font-medium dark:text-white text-gray-900">SHOES</h2>
    <p class="mb-2 text-base dark:text-gray-300 text-gray-700">SMART COLLECTION THIS YEAR.</p>
    <div class="flex items-center">
      <p class="mr-2 text-lg font-semibold text-gray-900 dark:text-white">$20.00</p>
      <p class="text-base  font-medium text-gray-500 line-through dark:text-gray-300">$9.00</p>
      <p class="ml-auto text-base font-medium text-green-500">5% off</p>
    </div>
  </div>
</div>
            </li>
          </ul>
        </div>
        {/*    <!-- Controls --> */}
        <div
          className="absolute left-0 top-1/2 flex h-0 w-full items-center justify-between px-4 "
          data-glide-el="controls"
        >
          <button
            className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-700 bg-white/20 text-slate-700 transition duration-300 hover:border-slate-900 hover:text-slate-900 focus-visible:outline-none lg:h-12 lg:w-12"
            data-glide-dir="<"
            aria-label="prev slide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-5 w-5"
            >
              <title>prev slide</title>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
              />
            </svg>
          </button>
          <button
            className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-700 bg-white/20 text-slate-700 transition duration-300 hover:border-slate-900 hover:text-slate-900 focus-visible:outline-none lg:h-12 lg:w-12"
            data-glide-dir=">"
            aria-label="next slide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-5 w-5"
            >
              <title>next slide</title>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </button>
        </div>
      </div>

      <script src="https://cdnjs.cloudflare.com/ajax/libs/Glide.js/3.0.2/glide.js"></script>
      {/*<!-- End Carousel with controls inside --> */}
    </div>
  )
}