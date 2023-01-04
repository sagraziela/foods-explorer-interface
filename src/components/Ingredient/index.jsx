import { Container } from "./styles";

export function Ingredient({ picture, name }) {
    return (
        <Container>
            <img src={picture} alt={`Foto ${name}`} />
            <p>{name}</p>
        </Container>
    )
}