import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '../../assets/logo.png'
import './Header.css'

const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link to="/" className="brand" onClick={() => setIsOpen(false)}>
          <img src={logo} alt="logo" style={{ height: 14, width: 'auto' }} />
        </Link>
        <nav className={`nav ${isOpen ? 'open' : ''}`}>
          <NavLink to="/products" onClick={() => setIsOpen(false)}>Mahsulotlar</NavLink>
          <NavLink to="/how-to-order" onClick={() => setIsOpen(false)}>Buyurtma qilish</NavLink>
          <NavLink to="/about" onClick={() => setIsOpen(false)}>Biz haqimizda</NavLink>
          <NavLink to="/contact" onClick={() => setIsOpen(false)}>Aloqa</NavLink>
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