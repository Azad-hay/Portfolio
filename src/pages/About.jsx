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
            Jeune développeur web, cuisinier reconverti, je suis passionné par la création d'applications et le côté ludique du code. Une forte appétence pour les nouvelles façons de coder m'ouvre des possibilités multiples de créer de nouvelles choses. 
          </p>
        </section>

        <section className="about__skills">
          <h2>Mes connaissances</h2>
          <p>
           En voie de maîtrise sur des frameworks comme React, je suis tout aussi à l'aise en HTML, CSS, JS et NoSQL. Je suis également dans l'apprentissage d'Angular et de PHP. Je suis toujours en recherche de nouvelles connaissances et de nouvelles technologies à apprendre, que ce soit en termes de langages de programmation, de sécurité ou de design.
          </p>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default About
