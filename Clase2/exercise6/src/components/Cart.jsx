import { useContext } from "react";
import CartContext from "../context/cart";
import { List } from "@mui/material";
import CartItem from "./CartItem";

function Cart() {
    const { cartItems } = useContext(CartContext);
    return (
        <>
            <h1 style={{margin:'20px'}}>Cart</h1>
            <List>
                {cartItems.map((item) => (
                    <CartItem key={item.id} item={item}></CartItem>)
                )}
            </List>
        </>
    );
}
export default Cart