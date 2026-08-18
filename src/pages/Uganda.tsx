import { Link } from 'react-router-dom'
import { FadeGallery } from '../components/FadeGallery'
import { DonateBand } from '../components/PageHero'
import { ugandaGallery } from '../site'
import { usePageMeta } from '../usePageMeta'

export function Uganda() {
  usePageMeta({
    title: 'Uganda | Sowing Seeds of Hope Africa',
    description:
      'Schools, a medical center, and community programs taking root with Sowing Seeds of Hope Africa in Uganda.',
    path: '/uganda',
  })

  return (
    <>
      <section className="split-hero uganda-hero">
        <div className="split-hero-copy">
          <p className="hero-kicker hero-kicker-with-flag">
            <svg
              className="country-flag"
              viewBox="0 0 60 40"
              aria-hidden="true"
            >
              <rect width="60" height="6.67" fill="#000" />
              <rect y="6.67" width="60" height="6.67" fill="#fcdc04" />
              <rect y="13.34" width="60" height="6.66" fill="#d90000" />
              <rect y="20" width="60" height="6.67" fill="#000" />
              <rect y="26.67" width="60" height="6.67" fill="#fcdc04" />
              <rect y="33.34" width="60" height="6.66" fill="#d90000" />
              <circle cx="30" cy="20" r="8" fill="#fff" />
              <g fill="#5c5c5c">
                <ellipse cx="29.2" cy="22.2" rx="3.4" ry="2.6" />
                <path d="M31.4 20.4c.4-2.6 2.4-4.2 3.6-3.2.3.3-.2 1-.7 1.3.8.7 1.3 1.7 1.3 2.8 0 1.8-1.4 3.2-3 3.4v2.6h-1.3v-2.6c-1.6-.3-2.8-1.6-2.8-3.2 0-.4.1-.8.2-1.1z" />
              </g>
              <circle cx="34.6" cy="16.4" r=".7" fill="#c9a227" />
              <path d="M34.2 15.8l1.8-2" stroke="#c43c3c" strokeWidth="0.7" fill="none" />
            </svg>
            Uganda
          </p>
          <h1>Classrooms, Clinics, &amp; a Reason for Hope.</h1>
          <a className="btn btn-ghost btn-see-work" href="#uganda-work">
            See the work
            <svg viewBox="0 0 20 20" aria-hidden="true">
              <path
                d="M4 7.5 10 13.5 16 7.5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
        <FadeGallery images={ugandaGallery} />
      </section>

      <section className="section" id="uganda-work">
        <div className="container">
          <p className="section-kicker">Choose a path</p>
          <h2 className="section-title">See the work on the ground.</h2>
          <div className="card-grid three">
            <Link className="program-card" to="/uganda/schools">
              <img
                src="/images/uganda/classroom-teacher.png"
                alt="Students writing at wooden benches in a rural Uganda classroom"
                width={900}
                height={1200}
              />
              <div className="program-card-copy">
                <h3>Schools</h3>
                <p>St. Florence Memorial School and Papa Joe Academy — kindergarten through grade school.</p>
                <span>Visit schools</span>
              </div>
            </Link>
            <Link className="program-card" to="/uganda/medical-center">
              <img
                src="/images/uganda/aid-child.png"
                alt="A volunteer offering aid to a young girl in Uganda"
                width={900}
                height={1200}
              />
              <div className="program-card-copy">
                <h3>Medical Center</h3>
                <p>Divine Mercy Medical Center: malaria care, maternity, and nutrition for rural families.</p>
                <span>See the clinic</span>
              </div>
            </Link>
            <Link className="program-card" to="/uganda/other">
              <img
                src="/images/uganda/laudato-si.png"
                alt="Community partners and schoolchildren standing on a green hillside"
                width={1600}
                height={1067}
              />
              <div className="program-card-copy">
                <h3>Other</h3>
                <p>Construction, environmental care, and the everyday partnerships that hold the work together.</p>
                <span>See more</span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <DonateBand />
    </>
  )
}
