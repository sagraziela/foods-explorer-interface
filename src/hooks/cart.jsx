import { createContext, useContext, useState, useEffect } from "react";
import { useAuth } from "./auth";

const CartContext = createContext({});

function CartProvider({ children }) {
    const [cart, setCart] = useState([]);

    const { user } = useAuth();

    const userIsLoggedIn = localStorage.getItem("foods-explorer:user");

    function handleAddItemToCart({ food, quantity }) {
        const itemAlreadyExists = cart.find(item => item.id === food.id);

        if (itemAlreadyExists) {
            const newQuantity = String(Number(itemAlreadyExists.quantity) + Number(quantity)).padStart(2, "0");
            console.log(newQuantity)
                
            const newCart = cart.map(item => {
                if (item.id === itemAlreadyExists.id) {
                    return {... item, quantity: newQuantity};
                } 

                return item;
            })

            localStorage.setItem("foods-explorer:cart", JSON.stringify(newCart));

            setCart(newCart)
        } else {
            const newItem = {...food, quantity };
            localStorage.setItem("foods-explorer:cart", JSON.stringify([...cart, newItem]));
            setCart([...cart, newItem]);
        }
    }

    function handleRemoveItemFromCart(deletedItem) {
        const filteredCart = cart.filter(item => item.id !== deletedItem.id);
        localStorage.setItem("foods-explorer:cart", JSON.stringify(filteredCart));
        setCart(filteredCart);
    }

    function clearCart() {
        localStorage.removeItem("foods-explorer:cart");
        setCart([]);
    }

    useEffect(() => {
        const userCart = localStorage.getItem("foods-explorer:cart");

        if ( userCart ) {          
            setCart(JSON.parse(userCart));
        }
    }, [])

    return (
        <CartContext.Provider value={{
            handleAddItemToCart,
            handleRemoveItemFromCart,
            clearCart,
            cart
        }}>
            {children}
        </CartContext.Provider>
    )
}

function useCart() {
    const context = useContext(CartContext);
    return context;
}

export { CartProvider, useCart }