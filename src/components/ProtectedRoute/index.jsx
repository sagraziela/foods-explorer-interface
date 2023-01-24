import { useEffect } from "react";
import { useAuth } from "../../hooks/auth";
import { useNavigate } from "react-router-dom";

export function ProtectedRoute({ Page }) {

    const { user } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (user.admin === 0) {
            navigate("/")
        }
    }, [])

    return <Page />
}