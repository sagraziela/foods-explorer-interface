import { Route, Routes } from "react-router-dom";
import { CartProvider } from "../hooks/cart";
import { Home } from "../pages/Home";
import { FoodDetails } from "../pages/FoodDetails";
import { RequestsUser } from "../pages/RequestsUser";
import { RequestsAdmin } from "../pages/RequestsAdmin";
import { NewFood } from "../pages/NewFood";
import { Payment } from "../pages/Payment";

export function AppRoutes() {
    return (
        <CartProvider>
            <Routes>
                <Route path="/" element={ <Home /> } />
                <Route path="/food-details/:id" element={ <FoodDetails /> } />
                <Route path="/requests-user" element={ <RequestsUser /> } />
                <Route path="/requests-admin" element={ <RequestsAdmin /> } />
                <Route path="/new-food" element={ <NewFood /> } />
                <Route path="/payment" element={ <Payment /> } />
            </Routes>
        </CartProvider>
    )
}