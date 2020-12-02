import React, { useContext, useRef } from 'react'
// import { Link, useHistory } from 'react-router-dom'
import { Link } from 'react-router-dom'
import AppContext from '../context/AppContext'

import '../styles/components/Information.css'

function Information({ history }) {
    const { state, addToBuyer } = useContext(AppContext)
    const { cart } = state
    const form = useRef(null)

    // const history = useHistory()


    const handleSubmit = () => {
        const formData = new FormData(form.current)
        const buyer = {
            'name': formData.get('name'),
            'email': formData.get('email'),
            'address': formData.get('address'),
            'apto': formData.get('apto'),
            'city': formData.get('city'),
            'country': formData.get('country'),
            'state': formData.get('state'),
            'cp': formData.get('cp'),
            'phone': formData.get('phone'),
        }
        addToBuyer(buyer)
        history.push('/checkout/payment')
    }



    return (
        <div className='Information'>
            <div className="Information-content">
                <div className="Information-head">
                    <h2>Información de contacto:</h2>
                </div>
                <div className="Information-form">
                    <form ref={form}>
                        <input type="text" placeholder="Nombre completo" name='name' />
                        <input type="text" placeholder="Correo electrónico" name='email' />
                        <input type="text" placeholder="Dirección" name='address' />
                        <input type="text" placeholder="Departamento" name='apto' />
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
                        {/* <Link to='/checkout/payment'>
                            Pagar
                        </Link> */}
                        <button type='button' onClick={handleSubmit}>Pagar</button>
                    </div>
                </div>
            </div>
            <div className="Information-sidebar">
                <h3>Pedido:</h3>
                <div className="Information-item">
                    {cart.map(item => (
                        <div className="Information-element" key={item.title}>
                            <h4>{item.title}</h4>
                            <span>{item.price}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Information
