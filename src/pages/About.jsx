import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'

function About() {
  return (
    <div className="page">
      <Navbar />
      <main className="about__main">
        <section className="about__photo-section">
          <div
            className="about__photo"
            role="img"
            aria-label="Photo de profil"
          ></div>
        </section>

        <section className="about__description">
          <h1>À propos</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.
          </p>
        </section>

        <section className="about__skills">
          <h2>Mes connaissances</h2>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default About
