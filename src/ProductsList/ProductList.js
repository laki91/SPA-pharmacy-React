import React from 'react'
import Product from '../Product/Product';

export default function ProductList({products}) {

    console.log(products);

    const all = products.map(product=> {
        return (
            <div className="col-4" key={product.id}>
                <Product product={product} />
            </div>
        )
    })

    return (
        <div className="container">
            <div className="row">
                <div className="col-10 offset-1">
                    <h3 className='display-4 m-4 text-center' >Products</h3>
                    <div className="row">
                        {all}
                    </div>
                </div>
            </div>
        </div>
    )
}
