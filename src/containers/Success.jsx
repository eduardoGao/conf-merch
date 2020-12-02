import React, { useContext } from 'react'
import AppContext from '../context/AppContext'
import Map from '../components/Map'

import '../styles/components/Success.css'

function Success() {
    const { state } = useContext(AppContext)
    const { buyer } = state

    return (
        <div className="Success">
            <div className="Success-content">
                <h2>{`Gracias por tu compra, ${buyer.name}`}</h2>
                <span>Tu pedido llegara en 3 dias a tu dirección:</span>
                <div className="Success-map">
                    <Map />
                </div>
            </div>
        </div>
    )
}

export default Success
