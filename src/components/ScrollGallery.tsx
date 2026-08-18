import { useEffect, useState } from 'react'
import { PauseIcon, PlayIcon } from 'lucide-react'
import type { Photo } from '../site'
import { Button } from '@/components/ui/button'

type ScrollGalleryProps = {
  images: Photo[]
  label: string
}

export function ScrollGallery({ images, label }: ScrollGalleryProps) {
  const [reduceMotion, setReduceMotion] = useState(false)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)')
    const sync = () => setReduceMotion(media.matches)
    sync()
    media.addEventListener('change', sync)
    return () => media.removeEventListener('change', sync)
  }, [])

  const frames = reduceMotion ? images : [...images, ...images]
  const moving = !reduceMotion

  return (
    <div className="scroll-gallery" role="region" aria-label={label}>
      {moving ? (
        <Button
          type="button"
          variant="secondary"
          size="icon-sm"
          className="gallery-pause"
          aria-label={paused ? 'Play photo gallery' : 'Pause photo gallery'}
          aria-pressed={paused}
          onClick={() => setPaused((current) => !current)}
        >
          {paused ? <PlayIcon aria-hidden="true" /> : <PauseIcon aria-hidden="true" />}
        </Button>
      ) : null}
      <div
        className={`scroll-gallery-track${moving ? ' is-moving' : ''}${paused ? ' is-paused' : ''}`}
      >
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
