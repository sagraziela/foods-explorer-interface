import { useState, useEffect } from "react";
import { useAuth } from "../../hooks/auth";
import { useCart } from "../../hooks/cart";
import { useParams, useNavigate, Link } from "react-router-dom";
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
import receiptImg from "../../assets/icons/receipt.svg";
import editIcon from "../../assets/icons/icons8-edit-24.png";
import { api } from "../../services/api";

export function FoodDetails() {

    const [food, setFood] = useState({});

    const [quantity, setQuantity] = useState(1)

    const { user } = useAuth()

    const { handleAddItemToCart } = useCart();

    const pictureURL = food.picture ? `${api.defaults.baseURL}/foodimg/${food.picture}` : foodImgPlaceholder;

    const params = useParams();

    const navigate = useNavigate();

    async function handleRemoveFood() {
        const confirmRemove = confirm(`Tem certeza que deseja remover ${food.title} do seu cardápio?`)

        if (confirmRemove) {
            await api.delete(`/foods/${food.id}`);

            navigate("/")
        }
    }

    useEffect(() => {
        async function fetchFood() {
            const response = await api.get(`/foods/${params.id}`);
            setFood(response.data)
        }

        fetchFood()
    }, []);

    return (
        <Container>
            <Header />

            <Link to="/">
                <img src={arrowLeft} alt="seta para esquerda" />
                voltar
            </Link>

            <Content>
                
                <div>
                    <img src={pictureURL} alt={`Foto ilustrativa do/da ${food.title}`} />

                    <section>
                        <FoodDescription>
                            <h1> {food.title} </h1>

                            <p> {food.description} </p>
                        </FoodDescription>

                        <List>
                            { food.ingredients &&
                                food.ingredients.map((ingredient, index) => (
                                    <Ingredient 
                                    key={String(index)}
                                    name={ingredient.name}
                                    picture={`${api.defaults.baseURL}/foodimg/${ingredient.picture}`}
                                    />
                                ))
                            }
                        </List>

                        <PriceAndQuantitySection>
                            <Price>R$ {food.price} </Price>
                            
                            { user.admin === 0 &&
                                <div>
                                    <Counter setQuantity={setQuantity} />

                                    <Button 
                                    title="Incluir"
                                    icon={receiptImg}
                                    onClick={() => handleAddItemToCart({food, quantity})}
                                    />
                                </div>
                            }

                            { user.admin === 1 &&
                                <div>
                                    <Button 
                                    title="Editar"
                                    icon={editIcon}
                                    onClick={() => navigate(`/edit-food/${food.id}`)}
                                    />

                                    <Button 
                                    title="Remover"
                                    grayBg
                                    onClick={() => handleRemoveFood()}
                                    />
                                </div>
                            }
                        </PriceAndQuantitySection>
                    </section>
                </div>
            </Content>

            <Footer />
        </Container>
    )
}