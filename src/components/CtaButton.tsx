import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

type CtaButtonProps = {
  children: ReactNode
  href?: string
  to?: string
  variant?: 'default' | 'outline' | 'ghost' | 'secondary'
  className?: string
  type?: 'button' | 'submit'
  disabled?: boolean
  onMedia?: boolean
}

const pill = 'h-12 gap-2 rounded-full px-5 text-base font-semibold'

const onMediaOutline =
  'border-[rgba(251,248,241,0.55)] bg-transparent text-[var(--paper)] hover:bg-[rgba(251,248,241,0.12)] hover:text-[var(--paper)]'

const onLightOutline =
  'border-[var(--leaf)] bg-transparent text-[var(--leaf-deep)] hover:bg-muted hover:text-[var(--leaf-deep)]'

export function CtaButton({
  children,
  href,
  to,
  variant = 'default',
  className,
  type = 'button',
  disabled,
  onMedia = false,
}: CtaButtonProps) {
  const outlineClass =
    variant === 'outline' || variant === 'ghost' ? (onMedia ? onMediaOutline : onLightOutline) : undefined
  const classes = cn(pill, outlineClass, className)
  const resolvedVariant = variant === 'ghost' ? 'outline' : variant

  if (to) {
    return (
      <Button
        nativeButton={false}
        variant={resolvedVariant}
        className={classes}
        render={<Link to={to} />}
      >
        {children}
      </Button>
    )
  }

  if (href) {
    return (
      <Button
        nativeButton={false}
        variant={resolvedVariant}
        className={classes}
        render={<a href={href} />}
      >
        {children}
      </Button>
    )
  }

  return (
    <Button variant={resolvedVariant} className={classes} type={type} disabled={disabled}>
      {children}
    </Button>
  )
}
