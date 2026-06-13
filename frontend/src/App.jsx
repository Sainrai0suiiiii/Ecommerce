import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Collection from './pages/Collection'
import About from './pages/About'
import Cart from './pages/Cart'
import Orders from './pages/Orders'
import PlaceOrder from './pages/PlaceOrder'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Product from './pages/Product'

const App = () => {
  return (
    <div className ='px-4 sm:px-[5vw] md:px-[7vw] lg:px -[9vw]'>
    <NavBar/>
    <Routes>
      < Route path = '/' element={<Home/>}/ >
      <Route path = '/collection'element={<Collection/>}/>
      <Route path = '/about' element = {<About/>}/>
      <Route path = '/contact' element = {<Contact/>}/>
      <Route path = '/login' element = {<login/>}/>
      <Route path = '/product/ :productID' element = {<Product/>}/>
      <Route path = '/cart' element = {<Cart/>}/>
      <Route path = '/orders' element = {<Orders/>}/>
      <Route path = '/PlaceOrder' element = {<PlaceOrder/>}/>
    </Routes>
    </div>
  )
}

export default App