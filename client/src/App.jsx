import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ProductListing from './Pages/ProductListing/index.jsx'
import Home from './Pages/Home/index.jsx'
import ProductDetails from './Pages/ProductDetails/index.jsx'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
        <Route path={'/'} exact={true} element={<Home />} />
        <Route path={'/productListing'} exact={true} element={<ProductListing />} />
        <Route path={'/product/:id'} exact={true} element={<ProductDetails />} />

      </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
