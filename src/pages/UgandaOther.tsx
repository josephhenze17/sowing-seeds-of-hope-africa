import { FadeGallery } from '../components/FadeGallery'
import { DonateBand } from '../components/PageHero'
import { StoryCard } from '../components/SiteCards'
import { CtaButton } from '../components/CtaButton'
import { usePageMeta } from '../usePageMeta'
import type { Photo } from '../site'

const otherPhotos: Photo[] = [
  {
    src: '/images/uganda/laudato-si.png',
    alt: 'Partners in purple Laudato Si shirts standing with schoolchildren on a hillside',
    width: 1600,
    height: 1067,
  },
  {
    src: '/images/uganda/construction.png',
    alt: 'Wooden buildings going up beside a banana plantation',
    width: 900,
    height: 1200,
  },
  {
    src: '/images/uganda/administrator.png',
    alt: 'A local administrator working at a wooden desk in a rural school building',
    width: 900,
    height: 1200,
  },
  {
    src: '/images/uganda/papa-joe-seedlings.png',
    alt: 'Children holding seedlings in front of Papa Joe Kindergarten School',
    width: 1600,
    height: 1067,
  },
]

export function UgandaOther() {
  usePageMeta({
    title: 'Uganda Community Work | Sowing Seeds of Hope Africa',
    description:
      'Construction, environmental stewardship, and community partnerships that support Sowing Seeds of Hope Africa in Uganda.',
    path: '/uganda/other',
  })

  return (
    <>
      <section className="split-hero">
        <div className="split-hero-copy">
          <p className="hero-kicker">Uganda · Other</p>
          <h1>Buildings, gardens, and the people who hold them.</h1>
          <p>
            Not every gift is a textbook. Some are timber, seedlings, and the quiet work of showing
            up.
          </p>
        </div>
        <FadeGallery images={otherPhotos} priority />
      </section>

      <section className="section">
        <div className="container card-grid two">
          <StoryCard
            title="Care for our common home"
            image={{
              src: '/images/uganda/laudato-si.png',
              alt: 'Community members in matching shirts with children against a lush green hill',
              width: 1600,
              height: 1067,
            }}
          >
            Students and partners plant, tend, and protect the land around their schools — a
            living classroom beside the lesson on the wall.
          </StoryCard>
          <StoryCard
            title="Local hands, lasting work"
            image={{
              src: '/images/uganda/administrator.png',
              alt: 'A local leader reviewing notes at a wooden desk',
              width: 900,
              height: 1200,
            }}
          >
            Classrooms and clinics are led by people who live the work. Support from afar is meant
            to strengthen what is already growing.
          </StoryCard>
        </div>
      </section>

      <section className="section cta-row">
        <div className="container">
          <CtaButton to="/contact">Partner with us</CtaButton>
          <CtaButton variant="outline" to="/uganda/schools">
            Back to schools
          </CtaButton>
        </div>
      </section>

      <DonateBand />
    </>
  )
}
