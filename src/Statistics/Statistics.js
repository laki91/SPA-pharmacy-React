import React from 'react'
import BarChart from './BarChart/BarChart'
import PieChart from './PieChart/PieChart'

export default function Statistics({products}) {
    return (
        <div className="container">
            <div className="row text-center">
                <div className="col-xl-6 col-md-6 col-12">
                    <h1 className='display-4'>Pie Chart</h1>
                    <PieChart products={products} />
                </div>
                <div className="col-xl-6 col-md-6 col-12">
                    <h1 className='display-4'>Bar Chart</h1>
                    <BarChart products={products} />
                </div>
            </div>
        </div>
    )
}
