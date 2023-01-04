import { Container, FoodDescription, PriceAndQuantitySection, Price} from "./styles";
import { Counter } from "../Counter";
import { Button } from "../Button";
import heartImg from "../../assets/icons/heart.svg";
import receiptImg from "../../assets/icons/receipt.svg";

export function Card({ id, title, description, picture, price}) {
    return (
        <Container>
            <div>
                <img src={heartImg} alt="ícone de coração" />
            </div>
            <img src={picture} alt={`Foto ilustrativa do/da "${title}".`} />

            <section>
                <FoodDescription>
                    <a href={`/food-details/${id}`}>
                        <h1>{title} &#62; </h1>
                    </a>

                    <p>{description}</p>
                </FoodDescription>

                <PriceAndQuantitySection>
                    <Price>R$ {price}</Price>
                    
                    <div>
                        <Counter />

                        <Button 
                        title="Incluir"
                        icon={receiptImg}
                        />
                    </div>
                </PriceAndQuantitySection>
            </section>
        </Container>
    )
}