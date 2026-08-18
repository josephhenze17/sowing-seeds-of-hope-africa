import { useEffect, useState } from 'react'
import type { Photo } from '../site'

type ScrollGalleryProps = {
  images: Photo[]
  label: string
}

export function ScrollGallery({ images, label }: ScrollGalleryProps) {
  const [reduceMotion, setReduceMotion] = useState(false)

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)')
    const sync = () => setReduceMotion(media.matches)
    sync()
    media.addEventListener('change', sync)
    return () => media.removeEventListener('change', sync)
  }, [])

  const frames = reduceMotion ? images : [...images, ...images]

  return (
    <div className="scroll-gallery" role="region" aria-label={label}>
      <div className={`scroll-gallery-track${reduceMotion ? '' : ' is-moving'}`}>
        {frames.map((image, index) => (
          <img
            key={`${image.src}-${index}`}
            src={image.src}
            alt={index >= images.length ? '' : image.alt}
            width={image.width}
            height={image.height}
            loading={index === 0 ? 'eager' : 'lazy'}
            draggable={false}
          />
        ))}
      </div>
    </div>
  )
}
