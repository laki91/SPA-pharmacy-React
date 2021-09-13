import React, { useState } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Header from './Header/Header'
import ProductList from './ProductsList/ProductList'
import './App.css'
import AddProduct from './AddProduct/AddProduct'
import EditProduct from './EditProduct/EditProduct'

export default function App() {

  const [products, setProducts] = useState([
    {id: 1, name: 'Panklav', manufacturer: {id: 1, name: 'Hemofarm'}, price: '30', expiryDate: '01-05-2022' },
    {id: 2, name: 'Streptolete', manufacturer: {id: 1, name: 'Bayer'}, price: '30', expiryDate: '12-09-2023' },
    {id: 3, name: 'Probiotik', manufacturer: {id: 1, name: 'Droga Portoroz'}, price: '30', expiryDate: '05-07-2026' },
    {id: 4, name: 'Smecta', manufacturer: {id: 1, name: 'Pfeizer'}, price: '30', expiryDate: '08-04-2027' }
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
    console.log(arg);
    // let possition = products.map(prod => prod.id).indexOf(arg.id)
    // products[possition] = arg
    // setProducts(products)
  }

  return (
    <BrowserRouter>
      <Header />
      <Switch>
      <Route path='/' exact>
        <ProductList products={products} deleteProduct={deleteProduct} />
      </Route>     
      <Route path='/add'>
        <AddProduct addProduct={addProduct} />
      </Route>
      <Route to='/edit/:id'>
        <EditProduct products={products} editProductToState={editProductToState} />
      </Route>
      </Switch>
      
    </BrowserRouter>
  )
}
