import React from 'react'

export default function Product({product}) {
    return (
        <div>
            <div className="card m-3">
                <div className="card-header">
                    <h5 className='text-center ' >{product.name}</h5>
                </div>
                <div className="card-body">
                    <p className='lead'>Manufacturer: {product.manufacturer.name}</p>
                    <p className='lead'>Expiry Date: {product.expiryDate}</p>
                    <p className='lead'>Price: {product.price} eura</p>
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-6">
                            <button className='btn btn-info btn-sm'> Edit product </button>
                        </div>
                        <div className="col-6 text-end">
                            <button className='btn btn-danger btn-sm '>Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
