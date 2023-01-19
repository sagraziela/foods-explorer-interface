import { useState, useEffect } from "react";
import { Container, Content, Heading } from "./styles";
import { useAuth } from "../../hooks/auth";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Card } from "../../components/Card";
import { Section } from "../../components/Section";
import { api } from "../../services/api";
import homeImg from "../../assets/home-macarons-img.png";
import foodImgPlaceholder from "../../assets/foods/placeholder.png";

export function Home() {

    const [ foods, setFoods ] = useState([]);
    
    const [ search, setSearch ] = useState("");
    
    const { user } = useAuth();

    const mainDishes = foods.filter(food => food.category === "prato principal");
    const deserts = foods.filter(food => food.category === "sobremesa");
    const drinks = foods.filter(food => food.category === "bebida");

    useEffect(() => {
        async function fetchFoods() {
            try {
                const responseFoods = await api.get(`/foods?userSearch=${search}`);

                const userFavs = await api.get(`/favorites/${user.id}`);

                const updatedFoods = responseFoods.data.map(food => {
                    const foodIsFav = userFavs.data.find(fav => fav.fav_food === food.title)

                    return foodIsFav ? {...food, isFav: 1} : food;
                })
                
                setFoods(updatedFoods)

            } catch (error) {
                return error.response ? error.response.data.message : "Não foi possível conectar com o banco de dados."
            }
        }

        fetchFoods();
    }, [search]);

    return (
        <Container>
            <Header setSearch={setSearch}/>

            { !search &&
                <Content>
                    <Heading>
                        <img src={homeImg} alt="Imagem de macarons e frutas vermelhas" />

                        <div>
                            <h2>Sabores inigualáveis</h2>
                            <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
                        </div>
                    </Heading>                

                    { mainDishes[0] &&
                        <Section title="Pratos Principais" >
                            {mainDishes.map(food => (
                                <Card
                                key={food.id}
                                id={food.id}
                                title={food.title}
                                description={food.description}
                                picture={food.picture ? `${api.defaults.baseURL}/foodimg/${food.picture}` : foodImgPlaceholder}
                                price={food.price}
                                isFav={food.isFav === 1 ? true : false}
                                /> 
                            ))}                
                        </Section>
                    }

                    { deserts[0] &&
                        <Section title="Sobremesas" >
                            {deserts.map(food => (
                                <Card
                                key={food.id}
                                id={food.id}
                                title={food.title}
                                description={food.description}
                                picture={food.picture ? `${api.defaults.baseURL}/foodimg/${food.picture}` : foodImgPlaceholder}
                                price={food.price}
                                isFav={food.isFav === 1 ? true : false}
                                /> 
                            ))}
                        </Section>
                    }

                    { drinks[0] &&
                        <Section title="Bebidas" >
                            {drinks.map(food => (
                                <Card
                                key={food.id}
                                id={food.id}
                                title={food.title}
                                description={food.description}
                                picture={food.picture ? `${api.defaults.baseURL}/foodimg/${food.picture}` : foodImgPlaceholder}
                                price={food.price}
                                isFav={food.isFav === 1 ? true : false}
                                /> 
                            ))} 
                    </Section>
                    }
                </Content>
            }

            { search &&
                <Content>
                    <Section title={`Busca: "${search}"`} >
                        { foods[0] &&
                                foods.map(food => (
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

                        { !foods[0] &&
                            <p>Não foi encontrado nenhum prato com o parâmetro pesquisado.</p>
                        }           
                    </Section>
                </Content>
            }

            <Footer/>

        </Container>
    )
}