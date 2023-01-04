import { Container } from "./styles";
import LogoSvg from "../../assets/icons/polygon1.svg";
import FadedLogoSvg from "../../assets/icons/polygon2.svg"

export function Logo({ className, isFaded }) {
    return (
        <Container 
        className={className}
        isFaded={isFaded}
        >
            <img 
            src={isFaded ? FadedLogoSvg : LogoSvg} 
            alt="Logomarca - polígono azul"
            />

            <h2>foods explorer</h2>
        </Container>

    )
}