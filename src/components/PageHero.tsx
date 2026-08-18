import { SITE } from '../site'
import { CtaButton } from './CtaButton'

type PageHeroProps = {
  kicker: string
  title: string
  lead: string
  image: string
  imageAlt: string
  width?: number
  height?: number
}

export function PageHero({
  kicker,
  title,
  lead,
  image,
  imageAlt,
  width = 1600,
  height = 900,
}: PageHeroProps) {
  return (
    <section className="page-hero">
      <img
        src={image}
        alt={imageAlt}
        width={width}
        height={height}
        fetchPriority="high"
      />
      <div className="page-hero-copy">
        <p className="hero-kicker">{kicker}</p>
        <h1>{title}</h1>
        <p>{lead}</p>
      </div>
    </section>
  )
}

export function DonateToday() {
  return (
    <section className="donate-today">
      <div className="container">
        <p className="hero-kicker">Give Hope</p>
        <h2>Donate today</h2>
        <p>
          A gift becomes a classroom, a clinic visit, or a year in school. Plant the next seed with
          children in Uganda and Kenya.
        </p>
        <div className="hero-actions">
          <CtaButton href={SITE.donateUrl}>Donate Today</CtaButton>
          <CtaButton variant="outline" to="/donations" onMedia>
            How gifts are used
          </CtaButton>
        </div>
      </div>
    </section>
  )
}

export function DonateBand() {
  return (
    <section className="donate-band">
      <div className="container donate-band-inner">
        <div>
          <p className="hero-kicker">Plant the next seed</p>
          <h2>A gift today becomes a classroom, a clinic visit, or a year in school.</h2>
        </div>
        <div className="hero-actions">
          <CtaButton href={SITE.donateUrl}>Give Hope</CtaButton>
          <CtaButton variant="outline" to="/contact" onMedia>
            Start a Conversation
          </CtaButton>
        </div>
      </div>
    </section>
  )
}
