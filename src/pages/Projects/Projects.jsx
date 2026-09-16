import Navbar from '../../components/Navbar/Navbar.jsx'
import Footer from '../../components/Footer/Footer.jsx'
import './Projects.css'

import kyotoImage from '../../assets/Kyoto.png'
import ninaImage from '../../assets/Carducci.png'
import kasaImage from '../../assets/Kasa.png'

function Projects() {
  return (
    <div className="page">
      <Navbar />

      <main className="projects__main">
        <h1 className="projects__title">Mes projets</h1>

        <div className="projects__list">

          {/* Kyoto */}
          <section className="project">
            <div
              className="project-card project-card-kyoto"
              style={{ backgroundImage: `url(${kyotoImage})` }}
            >
              

              <div className="project-buttons">
                <a
                  href="https://azad-hay.github.io/Kyoto_Project/#home"
                  className="button project-card__link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Voir le projet
                </a>

                <a
                  href="https://github.com/Azad-hay/Kyoto_Project"
                  className="button project-card__link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Voir le code
                </a>
              </div>
            </div>

            <div className="project-description">
              <h2 className="project-card__title">
                Kyoto Project
              </h2>
              <p>
                Mise en pratique des bases d’HTML et CSS avec plusieurs
                techniques de mise en page et de pagination. Projet personnel
                visant à créer un site présentant différentes pages.
              </p>
            </div>
          </section>

          {/* Nina Carducci */}
          <section className="project">
            <div
              className="project-card project-card-nina"
              style={{ backgroundImage: `url(${ninaImage})` }}
            >
              

              <div className="project-buttons">
                <a
                  href="https://azad-hay.github.io/OP_SEO/"
                  className="button project-card__link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Voir le projet
                </a>

                <a
                  href="https://github.com/Azad-hay/OP_SEO"
                  className="button project-card__link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Voir le code
                </a>
              </div>
            </div>

            <div className="project-description">
              <h2 className="project-card__title">
                Nina Carducci
              </h2>
              <p>
                Mise en œuvre des bonnes pratiques de SEO ainsi que correction
                de quelques bugs JavaScript afin d’améliorer le référencement
                et les performances. Projet réalisé durant la formation
                Développeur Web d’OpenClassrooms.
              </p>
            </div>
          </section>

          {/* KASA */}
          <section className="project">
            <div
              className="project-card project-card-kasa"
              style={{ backgroundImage: `url(${kasaImage})` }}
            >
              

              <div className="project-buttons">
                <a
                  href="https://azad-hay.github.io/React_project/"
                  className="button project-card__link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Voir le projet
                </a>

                <a
                  href="https://github.com/Azad-hay/React_project"
                  className="button project-card__link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Voir le code
                </a>
              </div>
            </div>

            <div className="project-description">
              <h2 className="project-card__title">
                KASA
              </h2>
              <p>
                Projet essentiellement basé sur React, Sass et Vite.
                Utilisation des composants, des props et du routage pour
                développer une application de réservation immobilière.
                Projet réalisé durant la formation Développeur Web
                d’OpenClassrooms.
              </p>
            </div>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  )
}

export default Projects
