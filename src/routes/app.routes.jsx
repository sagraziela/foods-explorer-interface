import { Route, Routes } from "react-router-dom";
import { CartProvider } from "../hooks/cart";
import { Home } from "../pages/Home";
import { FoodDetails } from "../pages/FoodDetails";
import { Orders } from "../pages/Orders";
import { NewFood } from "../pages/NewFood";
import { EditFood } from "../pages/EditFood";
import { Payment } from "../pages/Payment";
import { Favorites } from "../pages/Favorites";
import { ProtectedRoute } from "../components/ProtectedRoute";

export function AppRoutes() {
    return (
        <CartProvider>
            <Routes>
                <Route path="/" element={ <Home /> } />
                <Route path="/food-details/:id" element={ <FoodDetails /> } />
                <Route path="/orders" element={ <ProtectedRoute Page={ Orders } />  } />
                <Route path="/orders/:id" element={ <Orders /> } />
                <Route path="/new-food" element={ <ProtectedRoute Page={ NewFood } /> } />
                <Route path="/edit-food/:id" element={ <ProtectedRoute Page={ EditFood } /> } />
                <Route path="/payment" element={ <Payment /> } />
                <Route path="/favorites" element={ <Favorites /> } />
            </Routes>
        </CartProvider>
    )
}