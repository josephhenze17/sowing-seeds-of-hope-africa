import { usePageMeta } from '../usePageMeta'
import { CtaButton } from '../components/CtaButton'

export function NotFound() {
  usePageMeta({
    title: 'Page not found | Sowing Seeds of Hope Africa',
    description: 'This page is not on the Sowing Seeds of Hope Africa website.',
    path: '/',
  })

  return (
    <section className="section">
      <div className="container mission-copy">
        <p className="section-kicker">404</p>
        <h1>This path is not planted yet.</h1>
        <p>The page you asked for is not here. Start from home, or go where the work is growing.</p>
        <div className="hero-actions" style={{ justifyContent: 'center', marginTop: '1.5rem' }}>
          <CtaButton to="/">Home</CtaButton>
          <CtaButton variant="outline" to="/uganda">
            Uganda
          </CtaButton>
        </div>
      </div>
    </section>
  )
}
