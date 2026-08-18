import { Link } from 'react-router-dom'
import { DonateBand } from '../components/PageHero'
import { usePageMeta } from '../usePageMeta'

export function KenyaOther() {
  usePageMeta({
    title: 'Kenya Opportunities | Sowing Seeds of Hope Africa',
    description:
      'Supplies, partnerships, and other ways to support children and communities in Kenya with Sowing Seeds of Hope Africa.',
    path: '/kenya/other',
  })

  return (
    <>
      <section className="page-hero">
        <img
          src="/images/home/planting.jpg"
          alt="A seedling being planted, standing in for Kenya partnership opportunities"
          width={1920}
          height={720}
        />
        <div className="page-hero-copy">
          <p className="hero-kicker">Kenya · Other opportunities</p>
          <h1>More than tuition. Still about the child.</h1>
          <p>Books, uniforms, mentoring, and community partnerships that make school livable.</p>
        </div>
      </section>

      <section className="section">
        <div className="container card-grid two">
          <Link className="text-card" to="/contact">
            <h3>Learning materials</h3>
            <p>Exercise books, uniforms, and the small tools that make a classroom work.</p>
            <span>Offer support</span>
          </Link>
          <Link className="text-card" to="/contact">
            <h3>Walk alongside</h3>
            <p>Visit, pray, mentor, or help connect a family with the right kind of help.</p>
            <span>Start a conversation</span>
          </Link>
        </div>
      </section>

      <DonateBand />
    </>
  )
}
