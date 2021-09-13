import React from 'react'
import { Link } from 'react-router-dom'

export default function Product({product, deleteProduct}) {
    return (
        <div>
            <div className="card m-3">
                <div className="card-header">
                    <h5 className='text-center ' >{product.name}</h5>
                </div>
                <div className="card-body">
                    <p className='lead'>Manufacturer: <b>{product.manufacturer.name}</b></p>
                    <p className='lead'>Expiry Date: <b>{product.expiryDate}</b> </p>
                    <p className='lead'>Price: <b>{product.price} eura</b></p>
                </div>
                
                <div className="card-body">
                    <div className="row">
                        <div className="col-6">
                            <Link to={'/edit/' + product.id} className='btn btn-info btn-sm'> Edit product </Link>
                        </div>
                        <div className="col-6 text-end">
                            <button onClick={()=>{deleteProduct(product.id)}} className='btn btn-danger btn-sm '>Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
