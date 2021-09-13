import React, { useState } from 'react'
import { useHistory, useParams } from 'react-router-dom';


function EditProduct(props) {

    const { id } = useParams() 
    const history = useHistory()
   
    // const [product, setProduct] = useState(props.products.filter(prod => prod.id == props.match.params.id)[0])
    //console.log(props);
    const [product, setProduct] = useState(props.products.filter(prod => prod.id == id)[0])

    const editProduct = () => {
        props.editProductToState(product)
        history.push('/')
    }


    return (
        <div className="container">
            <div className="row">
                <div className="col-10 offset-1">
                    <h3 className='display-4 m-4' >Edit Product</h3>
                    <div className="row">
                        <div className="col-10 offset-1">
                            <input value={product.id} onChange={e=> {setProduct({...product, id: e.target.value})}} type="text" placeholder='edit id' className='form-control' /><br />
                            <input value={product.name} onChange={e=> {setProduct({...product, name: e.target.value})}} id='name' type="text" placeholder='edit name' className='form-control' /><br />
                            <input value={product.manufacturer.name} onChange={e=> {setProduct({...product, manufacturer: {name:e.target.value}})}} type="text" placeholder='edit manufacturer' className='form-control' /><br />
                            <input value={product.price} onChange={e=> {setProduct({...product, price: e.target.value})}} type="number" placeholder='edit price' className='form-control' /><br />
                            <input value={product.expiryDate} onChange={e=> {setProduct({...product, expiryDate: e.target.value})}} type="date" placeholder='edit date' className='form-control' /><br />
                            <button onClick={editProduct} className='btn btn-info form-control'>Edit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditProduct