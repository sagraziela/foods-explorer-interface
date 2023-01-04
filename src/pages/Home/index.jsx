import { useState, useEffect } from "react";
import { Container, Content, Heading } from "./styles";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Card } from "../../components/Card";
import { Section } from "../../components/Section";
import { api } from "../../services/api";
import homeImg from "../../assets/home-macarons-img.png";
import foodImgPlaceholder from "../../assets/foods/placeholder.png";

export function Home() {

    const [ foods, setFoods ] = useState([]);

    const mainDishes = foods.filter(food => food.category === "prato principal");
    const deserts = foods.filter(food => food.category === "sobremesa");
    const drinks = foods.filter(food => food.category === "bebida");

    useEffect(() => {
        async function fetchFoods() {
            try {
                const response = await api.get(`/foods?userSearch`);
                setFoods(response.data)
            } catch (error) {
                return error.response ? error.response.data.message : "Não foi possível conectar com o banco de dados."
            }
        }

        fetchFoods();
    }, []);

    return (
        <Container>
            <Header/>

            <Content>
                <Heading>
                    <img src={homeImg} alt="Imagem de macarons e frutas vermelhas" />

                    <div>
                        <h2>Sabores inigualáveis</h2>
                        <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
                    </div>
                </Heading>                

                <Section title="Pratos Principais" >
                    { mainDishes[0] &&
                            mainDishes.map(food => (
                                <Card
                                key={food.id}
                                id={food.id}
                                title={food.title}
                                description={food.description}
                                picture={food.picture ? `${api.defaults.baseURL}/foodimg/${food.picture}` : foodImgPlaceholder}
                                price={food.price}
                                /> 
                            ))
                    }                
                </Section>

                <Section title="Sobremesas" >
                    { deserts[0] &&
                        deserts.map(food => (
                            <Card
                            key={food.id}
                            id={food.id}
                            title={food.title}
                            description={food.description}
                            picture={food.picture ? `${api.defaults.baseURL}/foodimg/${food.picture}` : foodImgPlaceholder}
                            price={food.price}
                            /> 
                        ))
                    } 
                </Section>

                <Section title="Bebidas" >
                    { drinks[0] &&
                        drinks.map(food => (
                            <Card
                            key={food.id}
                            id={food.id}
                            title={food.title}
                            description={food.description}
                            picture={food.picture ? `${api.defaults.baseURL}/foodimg/${food.picture}` : foodImgPlaceholder}
                            price={food.price}
                            /> 
                        ))
                    } 
                </Section>
            </Content>

            <Footer/>

        </Container>
    )
}