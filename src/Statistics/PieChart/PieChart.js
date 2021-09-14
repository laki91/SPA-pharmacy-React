import uniq from 'lodash.uniq';
import React from 'react'
import { Pie } from 'react-chartjs-2'
import './PieChart.css'

export default function PieChart({products}) {

    //console.log(products);

    const randColor =() => {
        for (var i=0, col=''; i<6; i++) {
            col += (Math.random()*16|0).toString(16);
        }
        return '#'+col;
    }

    const all = []
    products.forEach(prod => all.push(prod.manufacturer.name))
    
    
    var count = [];
    all.forEach((el) => {
     count[el] = (count[el]||0) + 1;
    });
    //console.log(Object.values(count));

    
    //console.log(all);

    const state = {
        // labels: products.map(prod => prod.manufacturer.name),
        labels: uniq(all).map(el => {
            return el
        }),
        datasets: [
            {
                label: 'Rainfall',
                backgroundColor: randColor,
                borderColor: 'rgba(0,0,0,1)',
                borderWidth: 2,
                data: Object.values(count)
            }
        ]
    }

    return (
        <div>

            <div className="piechart">
                <Pie data={state} />
            </div>
        </div>
    )
}
