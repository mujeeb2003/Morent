'use client'

import { useState } from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'

interface ImageGalleryProps {
  images: {
    src: string
    alt: string
  }[]
}

export function ImageGallery({ images }: ImageGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(0)

  return (
    <div className="space-y-4">
      <div className="overflow-hidden rounded-lg bg-primary-500">
        <div className="relative aspect-[16/9] md:aspect-[2/1] lg:aspect-[3/1]">
          <div className="absolute inset-0 p-6 text-white">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">Sports car with the best design and acceleration</h2>
            <p className="text-sm md:text-base text-primary-100">
              Safety and comfort while driving a futuristic and elegant sports car
            </p>
          </div>
          <Image
            src={images[selectedImage].src}
            alt={images[selectedImage].alt}
            fill
            className="object-contain"
          />
        </div>
      </div>
      <div className="flex gap-4 overflow-auto pb-2">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setSelectedImage(index)}
            className={cn(
              "relative flex-shrink-0 cursor-pointer rounded-lg overflow-hidden border-2",
              selectedImage === index ? "border-primary-500" : "border-transparent"
            )}
          >
            <div className="relative aspect-[4/3] h-20">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
              />
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}

