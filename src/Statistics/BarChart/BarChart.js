import React from 'react'
import { Bar } from 'react-chartjs-2'
import './BarChart.css'

export default function BarChart({products}) {

    //console.log(products);

    const randColor =() => {
        for (var i=0, col=''; i<6; i++) {
            col += (Math.random()*16|0).toString(16);
        }
        return '#'+col;
    }

    const arr = []
    products.forEach(prod => arr.push(prod.price))
    
    const state = {
        labels: products.map(prod => prod.name).slice(0,5),

        datasets: [
            {
                label: 'Rainfall',
                backgroundColor: randColor,
                borderColor: 'rgba(0,0,0,1)',
                borderWidth: 2,
                data: arr
            }
        ]
    }

    return (
        <div>

            <div className="barchart">
                <Bar data={state} />
            </div>
        </div>
    )
}
