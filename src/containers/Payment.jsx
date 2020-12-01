import React, { useContext } from 'react'
import { PaypalButton } from 'react-paypal-button'
import AppContext from '../context/AppContext'

import '../styles/components/Payment.css'

function Payment() {
    const { state } = useContext(AppContext)
    const { cart } = state

    const paypalOptions = {
        clientId: 'AVxLM8oeCskfEyI2GqshTy8_5LT5F15TkmEW4AIfI8thMv4oWFXPXQlvi0eSqbmZBOXcyQuQ3rA2JLrL',
        intent: 'capture',
        currency: 'USD'
    }

    const buttonStyles = {
        layout: 'vertical',
        shape: 'rect'
    }

    const handleSumTotal = () => {
        const reducer = (accumulator, currentValue) => accumulator + currentValue.price;
        const sum = cart.reduce(reducer, 0);
        return sum;
    }

    return (
        <div className="Payment">
            <div className="Payment-content">
                <h3>Resumen del pedido:</h3>
                {cart.map(item => {
                    <div className='Payment-item' key={item.id}>
                        <div className='Payment-element'>
                            <h4>{item.title}</h4>
                            <span>${item.price}</span>
                        </div>
                    </div>
                })}
                <div className="Payment-button">
                    <PaypalButton
                        paypalOptions={paypalOptions}
                        buttonStyles={buttonStyles}
                        amount={handleSumTotal()}
                        onPaymentStart={() => console.log('Start Payment')}
                        onPaymentSuccess={data => console.log(data)}
                        onPaymentError={error => console.log(error)}
                        onPaymentCancel={data => console.log(data)}
                    />
                </div>
            </div>
            <div>

            </div>
        </div>
    )
}

export default Payment
