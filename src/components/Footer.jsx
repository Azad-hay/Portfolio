import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__spacer" aria-hidden="true"></div>
      <Link to="/contact" className="footer__link">
        Contact
      </Link>
      <p className="footer__copyright">© 2026 Guiraud Azad</p>
    </footer>
  )
}

export default Footer
