import { createContext, useContext, useState, useEffect } from "react";
import { api } from "../services/api";

const AuthContext = createContext({});

function AuthProvider({ children }) {
    const [data, setData] = useState({});

    async function signIn({ email, password }) {
        try {
            const response = await api.post("/sessions", { email, password });
            const { user, token } = response.data;
            
            localStorage.setItem("foods-explorer:user", JSON.stringify(user));
            localStorage.setItem("foods-explorer:token", token);

            api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

            setData({ user, token });

        } catch(error) {
            if(error.response) {
                alert(error.response.data.message);
            } else {
                alert("Não foi possível fazer login");
            }
        }
    }

    function signOut() {
        localStorage.removeItem("foods-explorer:user");
        localStorage.removeItem("foods-explorer:token");

        setData({})
    }

    async function pictureUpload({ food, ingredient, imageFile }) {
        try {
            const fileUploadForm = new FormData();
            fileUploadForm.append("picture", imageFile);

            if (food) {
                const response = await api.patch(`/foods/picture/${food.id}`, fileUploadForm);
                food.picture = response.data.picture;
            } else {
                const response = await api.patch(`/ingredients/picture/${ingredient.id}`, fileUploadForm);

                ingredient.picture = response.data.picture;
            }

        } catch (error) {
            if (error.response) {
                return error.response.data.message;
            } else {
                return alert("Não foi possível fazer o upload da imagem.");
            }
        }
    }

    useEffect(() => {
        const user = localStorage.getItem("foods-explorer:user");
        const token = localStorage.getItem("foods-explorer:token");

        if ( user && token ) {

            api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
            
            setData({
                user: JSON.parse(user),
                token
            })
        }
    }, [])

    return (
        <AuthContext.Provider value={{
            signIn,
            signOut,
            pictureUpload,
            user: data.user
        }}>
            {children}
        </AuthContext.Provider>
    )
}

function useAuth() {
    const context = useContext(AuthContext);
    return context;
}

export { AuthProvider, useAuth };