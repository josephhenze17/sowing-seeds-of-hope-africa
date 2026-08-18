import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { cn } from '@/lib/utils'

type Photo = {
  src: string
  alt: string
  width: number
  height: number
}

type ProgramCardProps = {
  to: string
  image: Photo
  title: string
  body: string
  cta: string
}

export function ProgramCard({ to, image, title, body, cta }: ProgramCardProps) {
  return (
    <Link
      to={to}
      className="block h-full rounded-xl outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
    >
      <Card className="h-full gap-0 py-0 transition-[transform,box-shadow,border-color] duration-200 hover:-translate-y-1 hover:shadow-[var(--shadow)]">
        <img
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          className="h-60 w-full object-cover"
          loading="lazy"
        />
        <CardHeader>
          <CardTitle className="font-heading text-[1.65rem] leading-tight">
            <h3 className="m-0 font-inherit text-inherit">{title}</h3>
          </CardTitle>
          <CardDescription className="text-base leading-relaxed">{body}</CardDescription>
        </CardHeader>
        <CardFooter className="mt-auto border-0 bg-transparent font-semibold text-secondary">
          {cta}
        </CardFooter>
      </Card>
    </Link>
  )
}

type TextCardProps = {
  title: string
  children: ReactNode
  cta?: string
  to?: string
  href?: string
}

export function TextCard({ title, children, cta, to, href }: TextCardProps) {
  const card = (
    <Card
      className={cn(
        'h-full gap-3',
        (to || href) && 'transition-[transform,box-shadow] duration-200 hover:-translate-y-1 hover:shadow-[var(--shadow)]',
      )}
    >
      <CardHeader>
        <CardTitle className="font-heading text-[1.65rem] leading-tight">
          <h3 className="m-0 font-inherit text-inherit">{title}</h3>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3 text-base leading-relaxed text-muted-foreground">
        {children}
      </CardContent>
      {cta ? (
        <CardFooter className="mt-auto border-0 bg-transparent font-semibold text-secondary">
          {cta}
        </CardFooter>
      ) : null}
    </Card>
  )

  if (to) {
    return (
      <Link
        to={to}
        className="block h-full rounded-xl outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
      >
        {card}
      </Link>
    )
  }

  if (href) {
    return (
      <a
        href={href}
        className="block h-full rounded-xl outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
      >
        {card}
      </a>
    )
  }

  return card
}

type StoryCardProps = {
  image: Photo
  title: string
  children: ReactNode
}

export function StoryCard({ image, title, children }: StoryCardProps) {
  return (
    <Card className="h-full gap-0 py-0">
      <img
        src={image.src}
        alt={image.alt}
        width={image.width}
        height={image.height}
        className="h-60 w-full object-cover"
        loading="lazy"
      />
      <CardHeader>
        <CardTitle className="font-heading text-[1.65rem] leading-tight">
          <h2 className="m-0 font-inherit text-inherit">{title}</h2>
        </CardTitle>
        <CardDescription className="text-base leading-relaxed">{children}</CardDescription>
      </CardHeader>
    </Card>
  )
}
