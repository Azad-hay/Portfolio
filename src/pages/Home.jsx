import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'

function Home() {
  return (
    <div className="page">
      <Navbar />
      <main className="home__main">
        <section className="home__intro">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident,
            sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </section>

        <section className="home__cta">
          <p className="home__cta-text">Vous souhaitez en savoir plus ?</p>
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
