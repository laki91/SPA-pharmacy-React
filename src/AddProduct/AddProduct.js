import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

export default function AddProduct({addProduct}) {

    const [newProduct, setNewProduct] = useState({id:'', name: '', manufacturer:{id:'', name:''}, price:'', expiryDate: ''})

    const history = useHistory()

    const addNewProduct = () => {
        addProduct(newProduct)
        history.push('/')
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-10 offset-1">
                    <h3 className='display-4 m-4'>Add Product</h3>
                    <div className="row">
                        <div className="col-10 offset-1">
                            <input onChange={e=> {setNewProduct({...newProduct, id: e.target.value})}} type="text" placeholder='id' className='form-control' /><br />
                            <input onChange={e=> {setNewProduct({...newProduct, name: e.target.value})}} type="text" placeholder='name' className='form-control' /><br />
                            <input onChange={e=> {setNewProduct({...newProduct, manufacturer: {name: e.target.value}})}} type="text" placeholder='manufacturer' className='form-control' /><br />
                            <input onChange={e=> {setNewProduct({...newProduct, price: e.target.value})}} type="number" placeholder='price' className='form-control' /><br />
                            <input onChange={e=> {setNewProduct({...newProduct, expiryDate: e.target.value})}} type="date" placeholder='expiry day' className='form-control' /><br />
                            <button onClick={addNewProduct} className='btn btn-info form-control'>Save</button>
                        </div>
                    </div> 
                </div>
            </div>
        </div>
    )
}
