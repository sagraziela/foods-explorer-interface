import { useState } from "react";
import { useCart } from "../../hooks/cart";
import { Container, FoodDescription, PriceAndQuantitySection, Price} from "./styles";
import { Counter } from "../Counter";
import { Button } from "../Button";
import { Link } from "react-router-dom";
import { api } from "../../services/api";
import heartImg from "../../assets/icons/heart.svg";
import selectedHeartImg from "../../assets/icons/heart-selected.svg";
import receiptImg from "../../assets/icons/receipt.svg";
import { useAuth } from "../../hooks/auth";

export function Card({ id, title, description, picture, price, isFav }) {

    const [quantity, setQuantity] = useState("01");

    const { user } = useAuth();

    const { handleAddItemToCart } = useCart();

    const food = { id, title, description, picture, price }

    async function handleAddToFavorites() {

        const userFavs = await api.get(`/favorites/${user.id}`);

        const favAlreadyExists = userFavs.data.find(fav => fav.fav_food === food.title);

        console.log(favAlreadyExists)

        if (favAlreadyExists) {
            return await api.delete(`/favorites/${favAlreadyExists.id}`);
        } else {
            try {
                await api.post(`/favorites/${user.id}`, { fav_food: food.title, user_id: user.id})
                
            } catch (error) {
                return error.response ? error.response.data.message : "Não foi possível adicionar este prato aos seus favoritos."
            }
        }
    }

    return (
        <Container isFav={isFav}>
            
            <button
            onClick={() => handleAddToFavorites()}
            >
                { !isFav &&
                    <img src={heartImg} alt="ícone de coração não selecionado" />
                }
                
                { isFav &&
                    <img src={selectedHeartImg} alt="ícone de coração selecionado" />
                }
            </button>

            <img src={picture} alt={`Foto ilustrativa do/da "${title}".`} />

            <section>
                <FoodDescription>
                    <Link to={`/food-details/${id}`}>
                        <h1>{title} &#62; </h1>
                    </Link>

                    <p>{description}</p>
                </FoodDescription>

                <PriceAndQuantitySection>
                    <Price>R$ {price}</Price>
                    
                    <div>
                        <Counter setQuantity={setQuantity} />

                        <Button 
                        title="Incluir"
                        icon={receiptImg}
                        onClick={() => handleAddItemToCart({food, quantity})}
                        />
                    </div>
                </PriceAndQuantitySection>
            </section>
        </Container>
    )
}