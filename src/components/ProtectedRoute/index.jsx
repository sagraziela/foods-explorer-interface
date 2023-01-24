import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/auth";

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