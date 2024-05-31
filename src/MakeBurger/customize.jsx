import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Dropdown } from "../User/user";
import { useState, useEffect } from "react";
import axios from "axios";
function Guest({ id }) {
    return (
      <div className="headdiv">
        <h1>Welcome hungry man! You arrived at the right place</h1>
          <Dropdown id={id} />
      </div>
    );
}
const IngredientList = ({ addToCart }) => {
    const [data, setData] = useState([]);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get(`http://localhost:8080/getIngredientList`);
          setData(response.data);
        } catch (error) {
          console.error(error);
        }
      };
  
      fetchData();
    }, []);
  
    return (
      <div className="burger-list">
        {data.map((burger) => (
          <div key={burger.id} className="burger-item">
            <img src={burger.url} alt={burger.name} />
            <h2>{burger.name}</h2>
            <p>Price: Rs. {burger.price}</p>
            <button onClick={() => addToCart(burger)}>Add to Cart</button>
          </div>
        ))}
      </div>
    );
  };
  
const CustomCart = ({ cart,id, removeFromCart, updateQuantity }) => {
    const navigate = useNavigate();
    const getTotalPrice = () => {
        return cart.reduce((total, cartItem) => total + cartItem.burger.price * cartItem.quantity, 100);
    };
    const checkOutNav = ()=>{
        const objData = cart;
        const queryParams = `/customizecheckout/${id}/${encodeURIComponent(JSON.stringify(objData))}`;;
        navigate(queryParams);
    }
    return (
        <div className="cart">
        <h2>Shopping Cart</h2>
        <ul>
            {cart.map((cartItem, index) => (
            <li key={index}>
                {cartItem.burger.name} - Quantity: {cartItem.quantity}{' '}
                <button onClick={() => removeFromCart(cartItem.burger.id)}>Remove</button>
                <button onClick={() => updateQuantity(cartItem.burger.id, cartItem.quantity - 1)}>-</button>
                <button onClick={() => updateQuantity(cartItem.burger.id, cartItem.quantity + 1)}>+</button>
            </li>
            ))}
        </ul>
        <h3>Total: Rs. {getTotalPrice().toFixed(2)}</h3>
        <button className="checkout-button" onClick={checkOutNav}>Checkout</button>
        </div>
    );
};
export default function CustomizeBurger() {
const { id } = useParams();
const [cart, setCart] = useState([]);

const addToCart = (burger) => {
    const existingCartItem = cart.find((item) => item.burger.id === burger.id);
    if (existingCartItem) {
    // If item already exists in cart, update its quantity
    const updatedCart = cart.map((item) =>
        item.burger.id === burger.id ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCart(updatedCart);
    } else {
    // If item does not exist in cart, add it with quantity 1
    setCart([...cart, { burger: burger, quantity: 1 }]);
    }
};

const removeFromCart = (burgerId) => {
    const updatedCart = cart.filter((item) => item.burger.id !== burgerId);
    setCart(updatedCart);
};

const updateQuantity = (burgerId, newQuantity) => {
    if (newQuantity < 1) {
    // If quantity is less than 1, remove the item from the cart
    const updatedCart = cart.filter((item) => item.burger.id !== burgerId);
    setCart(updatedCart);
    } else {
    // Update the quantity of the item in the cart
    const updatedCart = cart.map((item) =>
        item.burger.id === burgerId ? { ...item, quantity: newQuantity } : item
    );
    setCart(updatedCart);
    }
};

return (
    <div className="userpage">
    <Guest id={id} />
    <IngredientList addToCart={addToCart} />
    <CustomCart cart={cart} removeFromCart={removeFromCart} updateQuantity={updateQuantity} />
    </div>
);
}