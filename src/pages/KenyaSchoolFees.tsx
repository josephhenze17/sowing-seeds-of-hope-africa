import { Link } from 'react-router-dom'
import { DonateBand } from '../components/PageHero'
import { SITE } from '../site'
import { usePageMeta } from '../usePageMeta'

export function KenyaSchoolFees() {
  usePageMeta({
    title: 'Kenya School Fees | Sowing Seeds of Hope Africa',
    description:
      'Help a student in Kenya stay in school by supporting tuition and related fees through Sowing Seeds of Hope Africa.',
    path: '/kenya/school-fees',
  })

  return (
    <>
      <section className="page-hero">
        <img
          src="/images/home/planting.jpg"
          alt="Hands gathering around a seedling, a picture of school-fee support taking root"
          width={1920}
          height={720}
        />
        <div className="page-hero-copy">
          <p className="hero-kicker">Kenya · School fees</p>
          <h1>A paid term is a kept promise.</h1>
          <p>When fees are covered, a child can keep the desk, the uniform, and the year ahead.</p>
        </div>
      </section>

      <section className="section">
        <div className="container mission-copy">
          <p className="section-kicker">Why fees matter</p>
          <h2>
            Distance and cost still send students home. Fee support is a direct way to keep learning
            in motion.
          </h2>
        </div>
      </section>

      <section className="section">
        <div className="container card-grid three text-cards">
          <article className="text-card">
            <h3>Stay enrolled</h3>
            <p>Cover a term so a student does not drop out mid-year.</p>
          </article>
          <article className="text-card">
            <h3>Finish the path</h3>
            <p>Help a learner move from one grade to the next without a gap.</p>
          </article>
          <article className="text-card">
            <h3>Walk with a family</h3>
            <p>Gifts can be one-time or ongoing. We match support to real need.</p>
          </article>
        </div>
      </section>

      <section className="section cta-row">
        <div className="container">
          <a className="btn btn-primary" href={SITE.donateUrl}>
            Support school fees
          </a>
          <Link className="btn btn-ghost" to="/contact">
            Ask about a student
          </Link>
        </div>
      </section>

      <DonateBand />
    </>
  )
}
