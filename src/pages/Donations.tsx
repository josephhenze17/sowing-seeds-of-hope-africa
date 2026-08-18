import { SITE } from '../site'
import { usePageMeta } from '../usePageMeta'

export function Donations() {
  usePageMeta({
    title: 'Donations | Sowing Seeds of Hope Africa',
    description:
      'Give toward schools, medical care, and school-fee support. Sowing Seeds of Hope Africa is 501(c)(3) pending.',
    path: '/donations',
  })

  return (
    <>
      <section className="page-hero">
        <img
          src="/images/uganda/papa-joe-seedlings.png"
          alt="Children holding seedlings in front of Papa Joe Kindergarten School"
          width={1600}
          height={1067}
        />
        <div className="page-hero-copy">
          <p className="hero-kicker">Donations</p>
          <h1>Give a seed a place to grow.</h1>
          <p>Your gift reaches classrooms, clinics, and families on the ground.</p>
        </div>
      </section>

      <section className="section status-section">
        <div className="container">
          <article className="status-card">
            <p className="section-kicker">Donation status</p>
            <p className="status-badge">{SITE.taxStatus}</p>
            <h2>Gifts are welcome. Tax-exempt status is on the way.</h2>
            <p>
              We are a volunteer nonprofit. Our IRS 501(c)(3) application is pending. Your support
              still reaches children and families today. Once the determination is complete,
              qualifying gifts can be tax-deductible under U.S. law.
            </p>
            <a className="btn btn-primary" href={SITE.donateUrl}>
              Give Hope
            </a>
          </article>
        </div>
      </section>
    </>
  )
}
