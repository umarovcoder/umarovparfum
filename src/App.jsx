import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Products from './pages/Products/Products'
import ProductDetail from './pages/Products/ProductDetail'
import About from './pages/About/About'
import Contact from './pages/Contact/Contact'
import HowToOrder from './pages/HowToOrder/HowToOrder'
import Brands from './pages/Brands/Brands'
import FAQ from './pages/FAQ/FAQ'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/products" element={<Products/>} />
        <Route path="/products/:id" element={<ProductDetail/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/how-to-order" element={<HowToOrder/>} />
        <Route path="/brands" element={<Brands/>} />
        <Route path="/faq" element={<FAQ/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App