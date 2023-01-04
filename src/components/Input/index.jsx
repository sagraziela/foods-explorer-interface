import { Container } from "./styles";

export function Input({ type = "text", label, ...rest }) {
    return (
        <Container>
            <label htmlFor={label}> {label} </label>
            <input 
            type={type}
            {...rest}
            />
        </Container>
    )
}