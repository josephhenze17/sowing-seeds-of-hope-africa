import { Link } from 'react-router-dom'
import { ScrollGallery } from '../components/ScrollGallery'
import { DonateBand } from '../components/PageHero'
import { schoolGallery, SITE } from '../site'
import { usePageMeta } from '../usePageMeta'

export function UgandaSchools() {
  usePageMeta({
    title: 'Uganda Schools | Sowing Seeds of Hope Africa',
    description:
      'St. Florence Memorial School and Papa Joe Academy — classrooms, uniforms, and a path to stay in school in Uganda.',
    path: '/uganda/schools',
  })

  return (
    <>
      <section className="page-hero">
        <img
          src="/images/uganda/classroom-lesson.png"
          alt="A teacher helping students with worksheets in a rustic Uganda classroom"
          width={900}
          height={1200}
        />
        <div className="page-hero-copy">
          <p className="hero-kicker">Uganda · Schools</p>
          <h1>Where a desk is a doorway.</h1>
          <p>Two schools. Hundreds of children. Breaking cycles of poverty and creating opportunity.</p>
        </div>
      </section>

      <section className="section">
        <div className="container school-stack">
          <article className="callout">
            <img
              src="/images/uganda/graduation.png"
              alt="Papa Joe Academy graduates in navy and orange gowns celebrating outdoors"
              width={900}
              height={1200}
            />
            <div>
              <h2>
                Papa Joe Academy <span className="school-place">— Omukidandari</span>
              </h2>
              <blockquote>“Love God and love people.”</blockquote>
              <p>
                A grade school that began as a kindergarten. Children learn their letters, and they
                learn to care for the ground under their feet.
              </p>
              <p className="stat">
                <strong>57</strong> pupils at the start. <strong>189</strong> today.
              </p>
            </div>
          </article>

          <article className="callout reverse">
            <img
              src="/images/uganda/st-florence.jpg"
              alt="St. Florence Memorial School students standing with teachers under the Ugandan flag"
              width={800}
              height={1067}
            />
            <div>
              <h2>
                St. Florence Memorial School <span className="school-place">— Bushenyi</span>
              </h2>
              <blockquote>“When you educate a girl child you have educated the nation.”</blockquote>
              <p>
                A village kindergarten built in memory of Florence Asiimwe, who became the first
                girl in her town to finish college. Her example still opens the door for girls who
                might otherwise leave school at 18.
              </p>
              <p className="stat">
                <strong>67</strong> pupils, with room to grow when resources allow.
              </p>
            </div>
          </article>
        </div>

        <div className="container school-goals">
          <p className="section-kicker">Future goals</p>
          <h2 className="section-title">What these schools are growing toward next.</h2>
          <div className="card-grid three text-cards">
            <article className="text-card">
              <h3>Expanding classrooms</h3>
              <p>
                Every year enrollment at Papa Joe Academy continues to grow, and we add the
                classrooms and learning spaces needed to serve more students. This work builds new
                rooms, improves facilities, and provides desks, books, and learning materials.
              </p>
              <p>
                Expanding the school lets more children from surrounding communities access quality
                education in a safe, supportive environment.
              </p>
            </article>
            <article className="text-card">
              <h3>Girls’ education</h3>
              <p>
                Education for girls remains a central focus. This initiative supports St. Florence
                Memorial School with school supplies, uniforms, and resources that help girls stay
                in school and continue their education.
              </p>
              <p>
                Investing in girls’ education empowers young women and strengthens families and
                communities for generations to come.
              </p>
            </article>
            <article className="text-card">
              <h3>School nutrition</h3>
              <p>
                Proper nutrition plays a critical role in a child’s ability to learn and grow. This
                project provides nutritious meals and food support for students at Sowing Seeds of
                Hope schools.
              </p>
              <p>
                Healthy meals during the school day help concentration, attendance, and overall
                well-being.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="classroom-strip">
        <div className="container">
          <p className="section-kicker">In the classroom</p>
        </div>
        <ScrollGallery images={schoolGallery} label="Classroom photos" />
      </section>

      <section className="section cta-row">
        <div className="container">
          <a className="btn btn-primary" href={SITE.donateUrl}>
            Support a classroom
          </a>
          <Link className="btn btn-ghost" to="/uganda/medical-center">
            See the medical center
          </Link>
        </div>
      </section>

      <DonateBand />
    </>
  )
}
