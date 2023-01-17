import { Container } from "./styles";
import { Logo } from "../Logo";

export function Footer() {
    return (
        <Container>
            <Logo isFaded />

            <p>
                &copy;
                2023 - todos os direitos reservados
            </p>
        </Container>
    )
}