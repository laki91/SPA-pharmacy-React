import React from 'react'
import './AboutApp.css'

export default function AboutApp() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-10 offset-1">
                    <h3 className='display-4 m-4'>About Application</h3>
                    <div className="row">
                        <div className="col-10 offset-1 ">
                            <p className='lead '>
                                On this application you can see a list of currently available medicaments.
                                You can also delete, edit some medicament and add on the list.
                            </p>
                            <p className='lead '>
                                Application also have a chart of medicaments. You can see the most expensive products
                                and you can see the company with the most medicaments on the list.
                            </p>
                            <p className='lead '>
                                Version: 2.0 Advanced
                            </p>
                            <p className='lead aca'>
                                Founder: <b>Aleksandar Vuckovic</b> 
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
