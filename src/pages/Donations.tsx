import { SITE } from '../site'
import { usePageMeta } from '../usePageMeta'
import { CtaButton } from '../components/CtaButton'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader } from '@/components/ui/card'

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
          fetchPriority="high"
        />
        <div className="page-hero-copy">
          <p className="hero-kicker">Donations</p>
          <h1>Give a seed a place to grow.</h1>
          <p>Your gift reaches classrooms, clinics, and families on the ground.</p>
        </div>
      </section>

      <section className="section status-section">
        <div className="container">
          <Card className="status-card mx-auto w-full max-w-xl text-center">
            <CardHeader className="items-center">
              <p className="section-kicker">Donation status</p>
              <Badge className="h-auto px-3 py-1.5 text-[0.78rem] font-bold tracking-[0.1em] uppercase">
                {SITE.taxStatus}
              </Badge>
              <h2 className="font-heading text-[clamp(1.7rem,3vw,2.3rem)] leading-tight">
                Gifts are welcome. Tax-exempt status is on the way.
              </h2>
              <CardDescription className="mx-auto max-w-[38ch] text-base leading-relaxed">
                We are a volunteer nonprofit. Our IRS 501(c)(3) application is pending. Your support
                still reaches children and families today. Once the determination is complete,
                qualifying gifts can be tax-deductible under U.S. law.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <CtaButton href={SITE.donateUrl}>Give Hope</CtaButton>
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  )
}
