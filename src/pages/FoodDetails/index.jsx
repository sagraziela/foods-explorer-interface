import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { 
    Container, 
    Content, 
    FoodDescription, 
    List, 
    Price, 
    PriceAndQuantitySection 
} from "./styles";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Counter } from "../../components/Counter";
import { Button } from "../../components/Button";
import { Ingredient } from "../../components/Ingredient";
import foodImgPlaceholder from "../../assets/foods/placeholder.png";
import arrowLeft from "../../assets/icons/arrow_left.svg"
import alfaceImg from "../../assets/ingredients/alface.png";
import tomateImg from "../../assets/ingredients/tomate.png";
import rabaneteImg from "../../assets/ingredients/rabanete.png";
import paoNaanImg from "../../assets/ingredients/pao-naan.png";
import receiptImg from "../../assets/icons/receipt.svg";
import { api } from "../../services/api";
import { keyHandler } from "react-slick/lib/utils/innerSliderUtils";

export function FoodDetails() {

    const [food, setFood] = useState({});
    const [ingredientTags, setIngredientTags] = useState([]);

    const pictureURL = food.picture ? `${api.defaults.baseURL}/foodimg/${food.picture}` : foodImgPlaceholder;

    const params = useParams();

    useEffect(() => {
        async function fetchFood() {
            const response = await api.get(`/foods/${params.id}`);
            console.log(response.data)
            setFood(response.data[0])
            setIngredientTags(response.data['ingredients'])
        }

        console.log(ingredientTags)

        fetchFood()
    }, []);
    return (
        <Container>
            <Header />

            <a href="/">
                <img src={arrowLeft} alt="seta para esquerda" />
                voltar
            </a>

            <Content>
                
                <div>
                    <img src={pictureURL} alt={`Foto ilustrativa do/da ${food.title}`} />

                    <section>
                        <FoodDescription>
                            <h1> {food.title} </h1>

                            <p> {food.description} </p>
                        </FoodDescription>

                        <List>
                            { ingredientTags[0] &&
                                ingredientTags.map(ingredient => (
                                    <Ingredient 
                                    name={ingredient.name}
                                    picture={alfaceImg}
                                    />
                                ))
                            }
                        </List>

                        <PriceAndQuantitySection>
                            <Price>R$ {food.price} </Price>
                            
                            <div>
                                <Counter />

                                <Button 
                                title="Incluir"
                                icon={receiptImg}
                                />
                            </div>
                        </PriceAndQuantitySection>
                    </section>
                </div>
            </Content>

            <Footer />
        </Container>
    )
}