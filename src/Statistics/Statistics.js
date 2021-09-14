import React from 'react'
import BarChart from './BarChart/BarChart'
import PieChart from './PieChart/PieChart'

export default function Statistics({products}) {
    return (
        <div className="container">
            <div className="row text-center">
                <div className="col-6">
                    <PieChart products={products} />
                </div>
                <div className="col-6">
                    <BarChart products={products} />
                </div>
            </div>
        </div>
    )
}
