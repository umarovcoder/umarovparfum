import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Header.css'

const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link to="/" className="brand" onClick={() => setIsOpen(false)}>Umarov Parfum</Link>
        <nav className={`nav ${isOpen ? 'open' : ''}`}>
          <NavLink to="/" onClick={() => setIsOpen(false)}>Home</NavLink>
          <NavLink to="/products" onClick={() => setIsOpen(false)}>Products</NavLink>
          <NavLink to="/about" onClick={() => setIsOpen(false)}>About</NavLink>
          <NavLink to="/contact" onClick={() => setIsOpen(false)}>Contact</NavLink>
        </nav>
        <button className="menu-btn" aria-label="Toggle menu" onClick={() => setIsOpen(!isOpen)}>
          <span/>
          <span/>
          <span/>
        </button>
      </div>
    </header>
  )
}


export default Header