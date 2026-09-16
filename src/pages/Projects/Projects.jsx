import Navbar from '../../components/Navbar/Navbar.jsx'
import Footer from '../../components/Footer/Footer.jsx'
import './Projects.css'

function Projects() {
  return (
    <div className="page">
      <Navbar />
      <main className="projects__main">
        <h1 className="projects__title">Mes projets</h1>

        <div className="projects__list">
          <section className="project-card">
            <div className="project-card__image" role="img" aria-label="Aperçu du projet 1"></div>
            <h2 className="project-card__title">Kyoto Project</h2>
            <p className="project-card__description">
              Projet personnel, mise en pratique de HTML et CSS avec plusieurs techniques de mise en pages et de paginations.
            </p>
            <a href="https://azad-hay.github.io/Kyoto_Project/#home" className="button project-card__link">Voir le projet</a>
            <a href="https://github.com/Azad-hay/Kyoto_Project" >Voir le code</a>
          </section>

          <section className="project-card">
            <div className="project-card__image" role="img" aria-label="Aperçu du projet 2"></div>
            <h2 className="project-card__title">Nina Carducci</h2>
            <p className="project-card__description">
              Mise en oeuvres des bonnes pratiques de SEO ainsi que correctif de quelques bug sur le dynamisme du site. Projet réalisé durant la formation Développeur Web  Openclassrooms.
            </p>
            <a href="https://azad-hay.github.io/OP_SEO/" >Voir le projet</a>
            <a href="https://github.com/Azad-hay/OP_SEO" >Voir le code</a>
          </section>

          <section className="project-card">
            <div className="project-card__image" role="img" aria-label="Aperçu du projet 3"></div>
            <h2 className="project-card__title">KASA</h2>
            <p className="project-card__description">
              Projet essentillement basé sur React et Vite. Utilisation des components, des props et du routage. Projet réalisé durant la formation Développeur Web  Openclassrooms.
            </p>
            <a href="https://azad-hay.github.io/" >Voir le projet</a>
            <a href="https://github.com/Azad-hay/React_project" >Voir le code</a>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Projects