import { Route, Routes } from "react-router-dom";
import { CartProvider } from "../hooks/cart";
import { Home } from "../pages/Home";
import { FoodDetails } from "../pages/FoodDetails";
import { OrdersUser } from "../pages/OrdersUser";
import { OrdersAdmin } from "../pages/OrdersAdmin";
import { NewFood } from "../pages/NewFood";
import { EditFood } from "../pages/EditFood";
import { Payment } from "../pages/Payment";
import { Favorites } from "../pages/Favorites";

export function AppRoutes() {
    return (
        <CartProvider>
            <Routes>
                <Route path="/" element={ <Home /> } />
                <Route path="/food-details/:id" element={ <FoodDetails /> } />
                <Route path="/orders" element={ <OrdersUser /> } />
                <Route path="/orders-admin" element={ <OrdersAdmin /> } />
                <Route path="/new-food" element={ <NewFood /> } />
                <Route path="/edit-food/:id" element={ <EditFood /> } />
                <Route path="/payment" element={ <Payment /> } />
                <Route path="/favorites" element={ <Favorites /> } />
            </Routes>
        </CartProvider>
    )
}