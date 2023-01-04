import { Container } from "./styles";

export function Button({ title, icon, grayBg, ...rest }) {
    return (
        <Container 
        grayBg={grayBg} 
        {...rest}
        >
            {icon && 
                <img src={icon} alt="ícone" />
            }
            {title}
        </Container>
    )
}