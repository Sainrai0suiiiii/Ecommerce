import { Route, Routes } from 'react-router-dom'
import Hero from './components/Hero'
import NavBar from './components/NavBar'
import About from './pages/About'
import Cart from './pages/Cart'
import Collection from './pages/Collection'
import Contact from './pages/Contact'
import Home from './pages/Home'
import * as LoginModule from './pages/Login'

import Orders from './pages/Orders'

import Footer from './components/Footer'
import SearchBar from './components/SearchBar'
import PlaceOrder from './pages/PlaceOrder'
import Product from './pages/Product'

const App = () => {
  return (
    <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
      <NavBar />
      <SearchBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<LoginModule.default />} />

        <Route path="/product/:productID" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/PlaceOrder" element={<PlaceOrder />} />
        <Route path ="/Hero" element = {<Hero/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
