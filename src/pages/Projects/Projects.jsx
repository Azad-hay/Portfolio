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
            <a href="https://azad-hay.github.io/Kyoto_Project/#contact" className="button project-card__link">Voir le projet</a>
          </section>

          <section className="project-card">
            <div className="project-card__image" role="img" aria-label="Aperçu du projet 2"></div>
            <h2 className="project-card__title">Nom du projet 2</h2>
            <p className="project-card__description">
              Courte description du projet : ce qu'il fait, les technologies utilisées et le problème qu'il résout.
            </p>
            <a href="#" className="button project-card__link">Voir le projet</a>
          </section>

          <section className="project-card">
            <div className="project-card__image" role="img" aria-label="Aperçu du projet 3"></div>
            <h2 className="project-card__title">Nom du projet 3</h2>
            <p className="project-card__description">
              Courte description du projet : ce qu'il fait, les technologies utilisées et le problème qu'il résout.
            </p>
            <a href="#" className="button project-card__link">Voir le projet</a>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Projects