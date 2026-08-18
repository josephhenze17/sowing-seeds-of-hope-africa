import { useEffect, useState } from 'react'
import { PauseIcon, PlayIcon } from 'lucide-react'
import type { Photo } from '../site'
import { Button } from '@/components/ui/button'

type FadeGalleryProps = {
  images: Photo[]
  intervalMs?: number
  className?: string
  priority?: boolean
}

export function FadeGallery({
  images,
  intervalMs = 2000,
  className = '',
  priority = false,
}: FadeGalleryProps) {
  const [index, setIndex] = useState(0)
  const [reduceMotion, setReduceMotion] = useState(false)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)')
    const sync = () => setReduceMotion(media.matches)
    sync()
    media.addEventListener('change', sync)
    return () => media.removeEventListener('change', sync)
  }, [])

  useEffect(() => {
    if (reduceMotion || paused || images.length < 2) return undefined
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % images.length)
    }, intervalMs)
    return () => window.clearInterval(timer)
  }, [images.length, intervalMs, paused, reduceMotion])

  const showPause = !reduceMotion && images.length > 1

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
          fetchPriority={priority && imageIndex === 0 ? 'high' : undefined}
        />
      ))}
      {showPause ? (
        <Button
          type="button"
          variant="secondary"
          size="icon-sm"
          className="gallery-pause"
          aria-label={paused ? 'Play photos' : 'Pause photos'}
          aria-pressed={paused}
          onClick={() => setPaused((current) => !current)}
        >
          {paused ? <PlayIcon aria-hidden="true" /> : <PauseIcon aria-hidden="true" />}
        </Button>
      ) : null}
    </div>
  )
}
