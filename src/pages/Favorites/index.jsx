import { useState, useEffect } from "react";
import { Container, Content } from "./styles";
import { useAuth } from "../../hooks/auth";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Card } from "../../components/Card";
import { Section } from "../../components/Section";
import { api } from "../../services/api";
import foodImgPlaceholder from "../../assets/foods/placeholder.png";

export function Favorites() {

    const { user } = useAuth();

    const [ favorites, setFavorites ] = useState([]);

    useEffect(() => {
        async function fetchFavorites() {
            try {
                const userFavs = await api.get(`/favorites/${user.id}`);

                const foods = await api.get(`/foods`);

                const favoritesDetailsList = userFavs.data.map(fav => {
                    const foodDetails = foods.data.find(food => food.title === fav.fav_food)

                    return (foodDetails);
                })

                setFavorites(...favorites, favoritesDetailsList);

            } catch (error) {
                return error.response ? error.response.data.message : "Não foi possível conectar com o banco de dados."
            }
        }

        fetchFavorites();
    }, []);

    return (
        <Container>
            <Header />
                <Content>
                    <Section title={"Meus favoritos"} >
                        { favorites[0] &&
                            favorites.map(food => (
                                <Card
                                key={food.id}
                                id={food.id}
                                title={food.title}
                                description={food.description}
                                picture={food.picture ? `${api.defaults.baseURL}/foodimg/${food.picture}` : foodImgPlaceholder}
                                price={food.price}
                                isFav
                                /> 
                            ))
                        }  

                        { !favorites[0] &&
                            <p>Você ainda não adicionou nenhum prato à sua lsita de favoritos.</p>
                        }              
                    </Section>
                </Content>


            <Footer/>

        </Container>
    )
}