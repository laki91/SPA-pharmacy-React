import React, { useState } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Header from './Header/Header'
import ProductList from './ProductsList/ProductList'
import './App.css'
import AddProduct from './AddProduct/AddProduct'
import EditProduct from './EditProduct/EditProduct'
import Statistics from './Statistics/Statistics'
import AboutApp from './AboutApp/AboutApp'

export default function App() {

  const [products, setProducts] = useState([
    {id: 1, name: 'Panklav', manufacturer: {id: 1, name: 'Hemofarm'}, price: '130', expiryDate: '01-05-2022' },
    {id: 2, name: 'Strepsils', manufacturer: {id: 2, name: 'Bayer'}, price: '20', expiryDate: '12-09-2023' },
    {id: 3, name: 'Probiotik', manufacturer: {id: 3, name: 'Torlak'}, price: '10', expiryDate: '05-07-2026' },
    {id: 4, name: 'Smecta', manufacturer: {id: 4, name: 'Pfizer'}, price: '15', expiryDate: '08-04-2027' },
    {id: 5, name: 'Penicilin', manufacturer: {id: 5, name: 'Hemofarm'}, price: '24', expiryDate: '01-05-2022' },
    {id: 6, name: 'Ovarzil', manufacturer: {id: 6, name: 'Hemofarm'}, price: '53', expiryDate: '01-08-2022' },
    {id: 7, name: 'Propolis', manufacturer: {id: 7, name: 'Moderna'}, price: '23', expiryDate: '11-08-2024' },


  ])
  
  const deleteProduct = (id) => {
    //console.log(id);
    const del = products.filter(product => {
      return product.id !== id
    })
    setProducts(del)
  }

  const addProduct = (prod) => {
    //console.log(prod);
    setProducts([...products, prod])
  }

  const editProductToState = (arg) => {
    //console.log(arg);
    let possition = products.map(prod => prod.id).indexOf(arg.id)
    products[possition] = arg
    setProducts(products)
  }

  return (
    <BrowserRouter>
      <Header />
      <Switch>
      <Route path='/' exact>
        <ProductList products={products} deleteProduct={deleteProduct} />
      </Route>
      <Route path='/about'>
        <AboutApp />  
      </Route>    
      <Route path='/add'>
        <AddProduct addProduct={addProduct} />
      </Route>
      <Route path='/edit/:id'>
        <EditProduct products={products} editProductToState={editProductToState} />
      </Route>
      <Route path='/statistics'>
        <Statistics products={products} />
      </Route>
      </Switch>
      
    </BrowserRouter>
  )
}
