import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'

function NotFound() {
  return (
    <div className="page">
      <Navbar />
      <main className="not-found__main">
        <p className="not-found__code">404</p>
        <p className="not-found__text">
          La page que vous cherchez n'existe pas.
        </p>
        <Link to="/" className="not-found__link">
          Retour à l'accueil
        </Link>
      </main>
      <Footer />
    </div>
  )
}

export default NotFound
