import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'

function Home() {
  return (
    <div className="page">
      <Navbar />
      <main className="home__main">
        <section className="home__intro">
          <h1 className="home__title">Azad Guiraud</h1>
          <p className="home__description">
            Venez à la découverte d'une partie de mon monde.
          </p>
        </section>

        <section className="home__cta">
          <p className="home__cta-text">Souhaitez-vous en savoir plus ?</p>
          <Link to="/contact" className="button">
            Me contacter
          </Link>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default Home
