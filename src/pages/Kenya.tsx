import { FadeGallery } from '../components/FadeGallery'
import { DonateBand } from '../components/PageHero'
import { ProgramCard } from '../components/SiteCards'
import { kenyaGallery } from '../site'
import { usePageMeta } from '../usePageMeta'

export function Kenya() {
  usePageMeta({
    title: 'Kenya | Sowing Seeds of Hope Africa',
    description:
      'School-fee support and other opportunities for children and families with Sowing Seeds of Hope Africa in Kenya.',
    path: '/kenya',
  })

  return (
    <>
      <section className="split-hero kenya-flag-hero">
        <div className="split-hero-copy">
          <p className="hero-kicker hero-kicker-with-flag">
            <svg className="country-flag" viewBox="0 0 60 40" aria-hidden="true">
              <rect width="60" height="12" fill="#000" />
              <rect y="12" width="60" height="1.6" fill="#fff" />
              <rect y="13.6" width="60" height="12.8" fill="#be1028" />
              <rect y="26.4" width="60" height="1.6" fill="#fff" />
              <rect y="28" width="60" height="12" fill="#006a32" />
              <line x1="21" y1="8" x2="39" y2="32" stroke="#d8d8d8" strokeWidth="1.35" />
              <line x1="39" y1="8" x2="21" y2="32" stroke="#d8d8d8" strokeWidth="1.35" />
              <ellipse cx="30" cy="20" rx="6.1" ry="8.4" fill="#be1028" stroke="#1a1a1a" strokeWidth="0.7" />
              <ellipse cx="30" cy="20" rx="4" ry="6" fill="#fff" />
              <ellipse cx="30" cy="20" rx="2.2" ry="3.4" fill="#1a1a1a" />
              <rect x="27.7" y="13.8" width="4.6" height="12.4" fill="#be1028" />
            </svg>
            Kenya
          </p>
          <h1>Keep a child in class.</h1>
        </div>
        <FadeGallery images={kenyaGallery} priority />
      </section>

      <section className="section">
        <div className="container">
          <p className="section-kicker">Choose a path</p>
          <h2 className="section-title">See the work on the ground.</h2>
          <div className="card-grid two">
            <ProgramCard
              to="/kenya/school-fees"
              title="Supporting school fees"
              body="A year of tuition can be the difference between staying enrolled and leaving early."
              cta="See fee support"
              image={{
                src: '/images/home/planting.jpg',
                alt: 'Hands planting a seedling, a picture of school-fee support taking root in Kenya',
                width: 1920,
                height: 720,
              }}
            />
            <ProgramCard
              to="/kenya/other"
              title="Other opportunities"
              body="Supplies, mentoring, and community partnerships that keep learning possible."
              cta="See other ways"
              image={{
                src: '/images/home/welcome.jpg',
                alt: 'Partners gathered together, standing in for Kenya community opportunities',
                width: 1200,
                height: 1000,
              }}
            />
          </div>
        </div>
      </section>

      <DonateBand />
    </>
  )
}
