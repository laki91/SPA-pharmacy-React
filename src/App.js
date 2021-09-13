import React, { useState } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Header from './Header/Header'
import ProductList from './ProductsList/ProductList'
import './App.css'

export default function App() {

  const [products, setProducts] = useState([
    {id: 1, name: 'Panklav', manufacturer: {id: 1, name: 'Hemofarm'}, price: '30', expiryDate: '01.05.2022' },
    {id: 2, name: 'Panklav', manufacturer: {id: 1, name: 'Hemofarm'}, price: '30', expiryDate: '01.05.2022' },
    {id: 3, name: 'Panklav', manufacturer: {id: 1, name: 'Hemofarm'}, price: '30', expiryDate: '01.05.2022' },
    {id: 4, name: 'Panklav', manufacturer: {id: 1, name: 'Hemofarm'}, price: '30', expiryDate: '01.05.2022' }
  ])
  

  return (
    <BrowserRouter>
      <Header />
      <Route path='/' exact>
        <ProductList products={products} />
      </Route>     
    </BrowserRouter>
  )
}
