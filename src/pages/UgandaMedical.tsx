import { DonateBand } from '../components/PageHero'
import { TextCard } from '../components/SiteCards'
import { SITE } from '../site'
import { usePageMeta } from '../usePageMeta'

const services = [
  {
    title: 'Malaria care',
    body: 'Treatment close enough that a fever does not become a day’s walk.',
  },
  {
    title: 'Maternity',
    body: 'Support for mothers in rural communities who need a safe place to be seen.',
  },
  {
    title: 'Nutrition',
    body: 'Nourishment for children and families facing tropical health challenges.',
  },
]

export function UgandaMedical() {
  usePageMeta({
    title: 'Divine Mercy Medical Center | Sowing Seeds of Hope Africa',
    description:
      'Divine Mercy Medical Center is being built in Uganda to offer malaria care, maternity services, and nutrition support.',
    path: '/uganda/medical-center',
  })

  return (
    <>
      <section className="page-hero">
        <img
          src="/images/uganda/construction.png"
          alt="A wooden medical or school building under construction in rural Uganda"
          width={900}
          height={1200}
          fetchPriority="high"
        />
        <div className="page-hero-copy">
          <p className="hero-kicker">Uganda · Medical Center</p>
          <h1>We treat. God heals.</h1>
          <p>Divine Mercy Medical Center — Mary, Mother of the Word — rising for rural Uganda.</p>
        </div>
      </section>

      <section className="section">
        <div className="container mission-copy">
          <p className="section-kicker">Under construction</p>
          <h2>
            Access to care is still too far for many families. This clinic is being built so healing
            can happen close to home.
          </h2>
        </div>
      </section>

      <section className="callout-band">
        <div className="container callout reverse">
          <img
            src="/images/uganda/aid-child.png"
            alt="A volunteer placing a small aid packet into a child's hands"
            width={900}
            height={1200}
          />
          <div>
            <p className="section-kicker">Divine Mercy</p>
            <h2>Care for the rural road, not only the city hospital.</h2>
            <p>
              The center stands under the patronage of Mary, Mother of the Word, and the mercy
              remembered at Kibeho. Its work is practical: malaria, maternity, nutrition, and the
              tropical illnesses that shape daily life.
            </p>
            <a className="text-link" href={SITE.donateUrl}>
              Help finish this clinic
            </a>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="card-grid three text-cards">
            {services.map((service) => (
              <TextCard
                key={service.title}
                title={service.title}
                href={SITE.donateUrl}
                cta="Give toward care"
              >
                <p>{service.body}</p>
              </TextCard>
            ))}
          </div>
        </div>
      </section>

      <DonateBand />
    </>
  )
}
