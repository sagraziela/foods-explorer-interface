import { useState } from "react";
import { useAuth } from "../../hooks/auth";
import { Container, Form } from "./styles";
import { Logo } from "../../components/Logo";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

export function SignIn() {
    const [state, setState] = useState({ email: "", password: "" });

    const { signIn } = useAuth();

    function handleChange(e) {
        setState({...state, [e.target.name]: e.target.value});
    }

    async function handleSignIn(e) {
        e.preventDefault();

        if (!state.email || !state.password ) {
            return alert("É preciso informar email e senha para logar.")
        }

        signIn(state);
    }
    return (
        <Container>
            <Logo className="lg" />

            <Form>
                <p>Faça login</p>

                <Input
                label="E-mail"
                placeholder="Exemplo: seuemail@exemplo.com"
                name="email"
                value={state.email}
                onChange={handleChange}
                />

                <Input
                type="password"
                label="Senha"
                placeholder="No mínimo 6 caracteres"
                name="password"
                value={state.password}
                onChange={handleChange}
                />

                <Button 
                title="Entrar"
                onClick={handleSignIn}
                />

                <a href="/register">Criar uma conta</a>
            </Form>
            
        </Container>
    )
}