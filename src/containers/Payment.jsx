import React, { useContext } from 'react'
import { PayPalButton } from 'react-paypal-button'
import AppContext from '../context/AppContext'

import '../styles/components/Payment.css'

function Payment({ history }) {
    const { state, addNewOrder } = useContext(AppContext)
    const { cart, buyer } = state

    const paypalOptions = {
        clientId: 'Aae7Y-wQ1Q2T6FxRQcfn5p3SQG0e5T6oDMdYwIkriARkUV_C2KP-4rVQV70I9L6c16Ob-XdQOFQOgNrd',
        intent: 'capture',
        currency: 'USD'
    }

    const buttonStyles = {
        layout: 'vertical',
        shape: 'rect'
    }

    const handlePaymentSuccess = (data) => {
        console.log(data)
        if (data.status === 'COMPLETED') {
            const newOrder = {
                buyer,
                product: cart,
                payment: data
            }
            addNewOrder(newOrder)
            history.push('/checkout/success')
        }
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
                {cart.map(item => (
                    <div className='Payment-item' key={item.id}>
                        <div className='Payment-element'>
                            <h4>{item.title}</h4>
                            <span>${item.price}</span>
                        </div>
                    </div>
                ))}
                <div className="Payment-button">
                    <PayPalButton
                        paypalOptions={paypalOptions}
                        buttonStyles={buttonStyles}
                        amount={handleSumTotal()}
                        onPaymentStart={() => console.log('Start Payment')}
                        onPaymentSuccess={data => handlePaymentSuccess(data)}
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
