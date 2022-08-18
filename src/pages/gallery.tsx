import Image from 'next/image'
import { useState } from 'react'
import fs from "fs";

const imgs = [
 { imgSrc: "/assets/photos/IMG_7819.jpg"},
 { imgSrc: "/assets/photos/IMG_7813.jpg"},
 { imgSrc: "/assets/photos/IMG_7818.jpg"},
 { imgSrc: "/assets/photos/IMG_7817.jpg"},
]

function cn(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

type Image = {
  id?: number
  href?: string
  imageSrc: string
  name?: string
  username?: string
}

export default function Gallery() {
  return (
    <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
      <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        {imgs.map((image) => (
          <BlurImage imageSrc={image.imgSrc} />
        ))}
        <h1 className="border-2 border-rose-500">bruh</h1>
        <h1 className="border-2 border-rose-500">bruh</h1>
        <h1 className="border-2 border-rose-500">bruh</h1>
        <h1 className="border-2 border-rose-500">bruh</h1>
        <h1 className="border-2 border-rose-500">bruh</h1>
        <h1 className="border-2 border-rose-500">bruh</h1>
        <h1 className="border-2 border-rose-500">bruh</h1>
        <h1 className="border-2 border-rose-500">bruh</h1>

      </div>
    </div>
  )
}

function BlurImage(props) {
  const [isLoading, setLoading] = useState(true)

  return (
    // <a href={image.href} className="group">
      <div className="w-full h-full overflow-hidden rounded-lg bg-gray-200 block object-cover object-center">
        {/* <Image
          alt=""
          src={props.imageSrc}
          layout="fill"
          objectFit="contain"
          className={cn(
            'duration-700 ease-in-out group-hover:opacity-75',
            isLoading
              ? 'scale-110 blur-2xl grayscale'
              : 'scale-100 blur-0 grayscale-0'
          )}
          onLoadingComplete={() => setLoading(false)}
        /> */}
        <img src="/assets/photos/IMG_7816.jpg" />
      </div>
   //  </a>
  )
}