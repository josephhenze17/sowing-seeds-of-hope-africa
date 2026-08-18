import { Link } from 'react-router-dom'
import { DonateToday } from '../components/PageHero'
import { usePageMeta } from '../usePageMeta'
import { SITE } from '../site'

const values = [
  {
    title: 'Faith and Compassion',
    body: 'Our work is inspired by faith and a deep commitment to serving others with kindness, dignity, and respect.',
  },
  {
    title: 'Human Dignity',
    body: 'Every person deserves opportunities that allow them to live with purpose, hope, and dignity.',
  },
  {
    title: 'Community Partnership',
    body: 'We believe lasting change happens when communities work together to create solutions and support one another.',
  },
  {
    title: 'Education and Empowerment',
    body: 'Education is one of the most powerful tools for breaking cycles of poverty and creating opportunity.',
  },
  {
    title: 'Hope for the Future',
    body: 'Every project, partnership, and act of service is a seed planted for a better tomorrow.',
  },
]

export function Home() {
  usePageMeta({
    title: SITE.title,
    description: SITE.description,
    path: '/',
  })

  return (
    <>
      <section className="home-hero">
        <img
          src="/images/home/planting.jpg"
          alt="Young hands gathering around a seedling being planted in dark soil"
          width={1920}
          height={720}
        />
        <div className="home-hero-copy">
          <p className="hero-kicker">Uganda · Kenya</p>
          <h1>
            Sowing Seeds
            <span>of Hope</span>
          </h1>
          <p>We serve communities across Africa with healthcare, education, nutrition, and the basics they need to thrive.</p>
          <div className="hero-actions">
            <a className="btn btn-primary" href={SITE.donateUrl}>
              Give Hope
            </a>
            <Link className="btn btn-ghost" to="/uganda">
              See Our Work
            </Link>
          </div>
        </div>
      </section>

      <section className="section mission">
        <div className="container mission-copy">
          <h2 className="mission-heading">Our Mission</h2>
          <p className="mission-lead">
            We are committed to building communities where hope, faith, and opportunity empower
            individuals to reach their full potential.
          </p>
          <ul>
            <li>Every child has access to education</li>
            <li>Every family has access to quality healthcare</li>
            <li>Communities have the resources necessary to grow and thrive</li>
          </ul>
        </div>
      </section>

      <section className="welcome">
        <div className="welcome-photo">
          <img
            src="/images/home/welcome.jpg"
            alt="Friends and supporters of Sowing Seeds of Hope Africa gathered together"
            width={1200}
            height={1000}
          />
        </div>
        <div className="welcome-copy">
          <h2>Our Values</h2>
          <dl className="value-list">
            {values.map((value) => (
              <div key={value.title}>
                <dt>{value.title}</dt>
                <dd>{value.body}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="section places">
        <div className="container">
          <p className="section-kicker">Where we work</p>
          <h2 className="section-title">Two countries. One invitation to grow.</h2>
          <div className="card-grid two">
            <Link className="program-card" to="/uganda">
              <img
                src="/images/uganda/uniforms-plaid.png"
                alt="Students in yellow and plaid uniforms outside a wooden school in Uganda"
                width={1200}
                height={800}
              />
              <div className="program-card-copy">
                <h3>Uganda</h3>
                <p>Schools, a medical center underway, and community work from classrooms to hillsides.</p>
                <span>Explore Uganda</span>
              </div>
            </Link>
            <Link className="program-card" to="/kenya">
              <img
                src="/images/home/planting.jpg"
                alt="Hands planting a seedling, a symbol of school-fee support taking root in Kenya"
                width={1200}
                height={800}
              />
              <div className="program-card-copy">
                <h3>Kenya</h3>
                <p>School-fee support and other chances for children to stay in class and finish the year.</p>
                <span>Explore Kenya</span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <DonateToday />
    </>
  )
}
