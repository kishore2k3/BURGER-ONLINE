import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { Dropdown } from "../User/user";
export function Guest({ id }) {

    return (
        <div className="headdiv">
        <h1>Welcome hungry man! You arrived at the right place</h1>
        <Dropdown id={id} />
        </div>
    );
}
const PaymentPage = ({ cart, id }) => {
    const [address, setAddress] = useState('');
    const [cardNumber, setCardNumber] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [cvv, setCVV] = useState('');
    const [payment_status, setPaymentStatis] = useState('');
    const [burgers,setBurgers] =useState('');
    const navigate = useNavigate();
    const handlePaymentSubmit = (e) => {
        e.preventDefault();
        const data = {
            address: address,
            burgers: burgers
            payment_status: ,
            phone_no: phone_no
          };
        console.log('Payment successful!');
        navigate(`/success/${id}`); // Redirect to a success page
    };
    
    return (
        <div className="registerdiv">
        <h2>Payment Details</h2>
        <form onSubmit={handlePaymentSubmit}>
        <label htmlFor="address">Address:</label>
        <input
        type="text"
        id="cardNumber"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        required
        /><br/>
        <label htmlFor="cardNumber">Card Number:</label>
        <input
        type="text"
        id="cardNumber"
        value={cardNumber}
        onChange={(e) => setCardNumber(e.target.value)}
        required
        /><br/>
        <label htmlFor="expiryDate">Expiry Date:</label>
        <input
        type="text"
        id="expiryDate"
        value={expiryDate}
        onChange={(e) => setExpiryDate(e.target.value)}
        required
        /><br/>
        <label htmlFor="cvv">CVV:</label>
        <input
        type="text"
        id="cvv"
        value={cvv}
        onChange={(e) => setCVV(e.target.value)}
        required
        /><br/>

            <button type="submit">Pay Now</button>
        </form>
        </div>
    );
};
const CartItems = ({ cart }) => {
    const currentPath = window.location.pathname;
    console.log(currentPath);
    const getTotalPrice = () => {
        if(currentPath.startsWith==='/customize')
        {
            return cart.reduce((total, cartItem) => total + cartItem.burger.price * cartItem.quantity, 100);
        }
        else
        {
            return cart.reduce((total, cartItem) => total + cartItem.burger.price * cartItem.quantity, 0);
        }
    };

    return (
        <div className="cart-items">
        <h2>Your Order</h2>
        <ul>
            {cart.map((cartItem, index) => (
            <li key={index}>
                {cartItem.burger.name} - Quantity: {cartItem.quantity}{' '}<br/>
                <span>Price: Rs. {cartItem.burger.price * cartItem.quantity}</span>
            </li>
            ))}
        </ul>
        <h3>Total: Rs. {getTotalPrice().toFixed(2)}</h3>
        </div>
    );
};


export default function CheckOutPage(){
    const { id } = useParams();
    const { details } = useParams();
    const cart = JSON.parse(decodeURIComponent(details));
    return(
        <div className="userpage">
            <Guest id={id} />
            <CartItems cart={cart}/>
            <PaymentPage cart={cart} id={id} />
        </div>
    );
}