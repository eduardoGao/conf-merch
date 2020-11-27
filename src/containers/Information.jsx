import React from 'react'
import { Link } from 'react-router-dom'

import '../styles/components/Information.css'

function Information() {
    return (
        <div className='Information'>
            <div className="Information-content">
                <div className="Information-head">
                    <h2>Información de contacto:</h2>
                </div>
                <div className="Information-form">
                    <form action="">
                        <input type="text" placeholder="Nombre completo" name='name' />
                        <input type="text" placeholder="Correo electrónico" name='email' />
                        <input type="text" placeholder="Dirección" name='address' />
                        <input type="text" placeholder="Interior" name='apto' />
                        <input type="text" placeholder="Ciudad" name='city' />
                        <input type="text" placeholder="País" name='country' />
                        <input type="text" placeholder="Estado" name='state' />
                        <input type="text" placeholder="Código Postal" name='cp' />
                        <input type="text" placeholder="Teléfono" name='phone' />
                    </form>
                </div>
                <div className="Informations-buttons">
                    <div className="Information-back">
                        <Link to='/checkout'>
                            Regresar
                        </Link> 
                    </div>
                    <div className="Information next">
                        <Link to='/checkout/payment'>
                            Pagar
                        </Link>
                    </div>
                </div>
            </div>
            <div className="Information-sidebar">
                <h3>Pedido:</h3>
                <div className="Information-item">
                    <div className="Information-element">
                        <h4>ITEM name</h4>
                        <span>$10</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Information
