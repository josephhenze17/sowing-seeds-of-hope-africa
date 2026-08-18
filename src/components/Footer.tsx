import { Link } from 'react-router-dom'
import { SITE } from '../site'
import { Separator } from '@/components/ui/separator'

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <img
            className="footer-logo"
            src="/images/logo.png"
            alt="Sowing Seeds of Hope Africa"
            width={1133}
            height={521}
          />
          <p className="footer-lead">
            Education, care, and opportunity taking root in Uganda and Kenya.
          </p>
        </div>
        <div>
          <p className="footer-kicker">Visit</p>
          <ul>
            <li>
              <Link to="/uganda/schools">Uganda schools</Link>
            </li>
            <li>
              <Link to="/uganda/medical-center">Medical center</Link>
            </li>
            <li>
              <Link to="/kenya/school-fees">Kenya school fees</Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="footer-kicker">Give</p>
          <ul>
            <li>
              <Link to="/donations">Donations</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
            </li>
          </ul>
        </div>
      </div>
      <Separator className="bg-white/20" />
      <p className="footer-copy">
        © {new Date().getFullYear()} Sowing Seeds of Hope Africa · {SITE.taxStatus}
      </p>
    </footer>
  )
}
