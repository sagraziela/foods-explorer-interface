import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/auth";
import { Container, Form } from "./styles";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { api } from "../../services/api";
import arrowLeftImg from "../../assets/icons/arrow_left.svg";
import { useEffect } from "react";

export function RestaurantDetails() {
    
    const [restaurant, setRestaurant] = useState({});

    const { user } = useAuth();

    const navigate = new useNavigate();

    function handleChange(e) {
        setRestaurant({...restaurant, [e.target.name]: e.target.value});
    }
    
    async function handleSaveData(e) {
        e.preventDefault();
        
        if (!restaurant.name) {
            return alert("É necessário definir o nome do restaurante.")
        }
        
        if (restaurant.id) {
            try {
                await api.put(`/restaurant/${restaurant.id}`, restaurant);

                alert(`Restaurante atualizado com sucesso!`);
                navigate("/");

            } catch(error) {
                if(error.response) {
                    return error.response.data.message;
                } else {
                    return console.log(error)
                }
            }
        } else {
            try {
                console.log(restaurant)
                await api.post(`/restaurant`, restaurant)
                .then(() => {
                    alert(`Os dados do restaurante foram salvos com sucesso!`);
                    navigate("/");
                });

            } catch(error) {
                if(error.response) {
                    return error.response.data.message;
                } else {
                    return console.log(error)
                }
            }
        }
    }

    useEffect(() => {
        async function fetchRestaurantData() {
            const response = await api.get(`/restaurant/${user.id}`);            
            response.data ? setRestaurant(response.data) : null;
        }

        fetchRestaurantData();
    }, []);

    return (
        <Container>
            <Header />

            <main>
                <Link to={"/"}>
                    <img src={arrowLeftImg} alt="seta para esquerda" />
                    voltar
                </Link>

                <h1>Meu restaurante</h1>

                <Form>
                    <Input
                    label="Nome do restaurante"
                    placeholder="Foods Explorer"
                    value={restaurant.name ? restaurant.name : null}
                    name="name"
                    onChange={handleChange}
                    />

                    <Input
                    label="Endereço"
                    placeholder="Rua xxxxxxx"
                    value={restaurant.address ? restaurant.address : null}
                    name="address"
                    onChange={handleChange}
                    />

                    <Input
                    type="number"
                    label="Telefone (DDD + num)"
                    placeholder="(xx) xxxxx-xxxx"
                    value={restaurant.phone_number ? restaurant.phone_number : null}
                    name="phone_number"
                    onChange={handleChange}
                    />

                    <Button
                    title="Salvar" 
                    onClick={e => handleSaveData(e)}
                    />
                </Form>
            </main>
            <Footer />
        </Container>
    )
}