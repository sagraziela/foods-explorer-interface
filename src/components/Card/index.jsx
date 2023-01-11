import { useState } from "react";
import { useCart } from "../../hooks/cart";
import { Container, FoodDescription, PriceAndQuantitySection, Price} from "./styles";
import { Counter } from "../Counter";
import { Button } from "../Button";
import { Link } from "react-router-dom";
import heartImg from "../../assets/icons/heart.svg";
import receiptImg from "../../assets/icons/receipt.svg";

export function Card({ id, title, description, picture, price }) {

    const [quantity, setQuantity] = useState("01");

    const { handleAddItemToCart } = useCart();

    const food = { id, title, description, picture, price }

    return (
        <Container>
            <div>
                <img src={heartImg} alt="ícone de coração" />
            </div>
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