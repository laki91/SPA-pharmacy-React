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

    const enf = []
    products.forEach(prod => enf.push(prod.name))
    //console.log(enf);

    const arr = []
    products.forEach(prod => arr.push(prod.price))
    //console.log(arr);

    // const brg = []
    // enf.forEach((key, i)=> brg[key] = arr[i])
    // console.log(brg);
    
    const state = {
        labels: enf,
        // labels: Object.keys(brg),
        datasets: [
            {
                label: 'Rainfall',
                backgroundColor: randColor,
                borderColor: 'rgba(0,0,0,1)',
                borderWidth: 2,
                data: arr
                // data: Object.values(brg)
                
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
