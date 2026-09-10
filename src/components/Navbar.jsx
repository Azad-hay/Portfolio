import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <header className="navbar">
      <nav className="navbar__nav" aria-label="Navigation principale">
        <ul className="navbar__list">
          <li>
            <NavLink to="/a-propos" className="navbar__link">
              À propos
            </NavLink>
          </li>
          <li>
            <NavLink to="/" end className="navbar__link">
              Accueil
            </NavLink>
          </li>
          <li>
            <NavLink to="/projets" className="navbar__link">
              Mes projets
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
