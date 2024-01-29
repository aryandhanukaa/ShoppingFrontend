import { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import {PRODUCTS} from "../../products";
import {CartItem} from "../cart/cart-item"
import {useNavigate} from "react-router-dom"
export const Checkout = () => {
  const { cartItems, getTotalCartAmount, checkout } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();
  const navigate=useNavigate()
  return(
    <div className="checkout">
        <div>
            <h1>Your Final Purchase</h1>
        </div>
        <div className="cart">
            {PRODUCTS.map((product)=>{
                if(cartItems[product.id]!==0){
                    return <CartItem data={product}/>;
                }
            })}
        </div>
            <div className="checkout">
                <p>Subtotal: ${totalAmount}</p>
                <button onClick={()=>navigate("/cart")}>Back to cart</button>
                <button onClick={()=>{
                   checkout();
                   navigate("/");
                }}>Pay invoice</button>
            </div>
    </div>
  );
};