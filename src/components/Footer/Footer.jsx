import { Link } from 'react-router-dom'
import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__spacer" aria-hidden="true"></div>
      <Link to="/contact" className="footer__link">
        Contacts
      </Link>
      <p className="footer__copyright">© 2026 Guiraud Azad</p>
    </footer>
  )
}

export default Footer
