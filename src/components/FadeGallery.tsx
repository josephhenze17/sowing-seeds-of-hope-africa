import { useEffect, useState } from 'react'
import type { Photo } from '../site'

type FadeGalleryProps = {
  images: Photo[]
  intervalMs?: number
  className?: string
}

export function FadeGallery({ images, intervalMs = 2000, className = '' }: FadeGalleryProps) {
  const [index, setIndex] = useState(0)
  const [reduceMotion, setReduceMotion] = useState(false)

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)')
    const sync = () => setReduceMotion(media.matches)
    sync()
    media.addEventListener('change', sync)
    return () => media.removeEventListener('change', sync)
  }, [])

  useEffect(() => {
    if (reduceMotion || images.length < 2) return undefined
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % images.length)
    }, intervalMs)
    return () => window.clearInterval(timer)
  }, [images.length, intervalMs, reduceMotion])

  return (
    <div className={`fade-gallery ${className}`.trim()} aria-roledescription="carousel">
      {images.map((image, imageIndex) => (
        <img
          key={image.src}
          src={image.src}
          alt={imageIndex === index ? image.alt : ''}
          width={image.width}
          height={image.height}
          className={imageIndex === index ? 'is-active' : ''}
          loading={imageIndex === 0 ? 'eager' : 'lazy'}
        />
      ))}
    </div>
  )
}
