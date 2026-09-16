import Navbar from '../../components/Navbar/Navbar.jsx'
import Footer from '../../components/Footer/Footer.jsx'
import './Contact.css'

function Contact() {
  return (
    <div className="page">
      <Navbar />
      <main className="contact__main">
        <h1 className="contact__title">Contactez Moi ! :</h1>

        <ul className="contact__list">
          <li className="contact__item item_email">
            <span className="contact__icon-square">
              <svg
                className="contact__icon"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-label="Mail" alt='mail'
              >
                <path d="M2 5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5Zm2.2.3 7.35 5.6a.75.75 0 0 0 .9 0L19.8 5.3a.9.9 0 0 0-.55-1.1.9.9 0 0 0-.35-.07H5.1a.9.9 0 0 0-.9.9c0 .1.01.19.03.27Zm15.6 1.66-7.02 5.35a2.75 2.75 0 0 1-3.36 0L2.4 6.96A1 1 0 0 0 2 7.8V19a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V7.8a1 1 0 0 0-.4-.84Z" />
              </svg>
            </span>
            : azud@hotmail.fr
          </li>

          <li className="contact__item item_discord">
            <span className="contact__icon-square">
              <svg
                className="contact__icon"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-label="Discord" alt='coordonnées discord'
              >
                <path d="M9 11a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Zm6 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Z" />
                <path d="M18.9 5.7A17 17 0 0 0 15 4.5l-.2.4a13 13 0 0 1 3.4 1.3 15 15 0 0 0-12.4 0 13 13 0 0 1 3.4-1.3L9 4.5a17 17 0 0 0-3.9 1.2C2.9 9 2.3 12.2 2.5 15.4a17 17 0 0 0 5.1 2.6l.7-1.1a11 11 0 0 1-1.7-.8l.4-.3a12.2 12.2 0 0 0 9.9 0l.4.3c-.5.3-1.1.6-1.7.8l.7 1.1a17 17 0 0 0 5.1-2.6c.3-3.5-.6-6.7-2.5-9.7ZM9 14.9c-1 0-1.9-.9-1.9-2.1S8 10.7 9 10.7s1.9.9 1.9 2.1S10 14.9 9 14.9Zm6 0c-1 0-1.9-.9-1.9-2.1s.8-2.1 1.9-2.1 1.9.9 1.9 2.1-.8 2.1-1.9 2.1Z" />
              </svg>
            </span>
            : azudkahnhay#3620
          </li>

          <li className="contact__item item_phone">
            <span className="contact__icon-square">
              <svg
                className="contact__icon"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-label="Téléphone" alt='coordonnées téléphonique'
              >
                <path d="M6.6 10.8a15.6 15.6 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25 11 11 0 0 0 3.5.56 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1 11 11 0 0 0 .56 3.5 1 1 0 0 1-.25 1L6.6 10.8Z" />
              </svg>
            </span>
            : 07 82 50 51 48
          </li>
        </ul>
      </main>
      <Footer />
    </div>
  )
}

export default Contact