import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Form } from "./styles";
import { Logo } from "../../components/Logo";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Link, Navigate } from "react-router-dom";
import { api } from "../../services/api";

export function SignUp() {
    const [state, setState] = useState({ name: "", email: "", password: "" });

    const navigate = useNavigate();

    function handleChange(e) {
        setState({...state, [e.target.name]: e.target.value});
    }

    async function handleSignUp(e) {
        e.preventDefault();

        await api.post("/users", state)
        .then(() => {
            alert("Usuário cadastrado com sucesso");

            navigate("/");

        }).catch(error => {
            if(error.response) {
                return alert(error.response.data.message);
            } else {
                return alert("Não foi possível cadastrar usuário");
            }
        })
    }

    return (
        <Container>
            <Logo className="lg" />

            <Form>
                <p>Crie sua conta</p>

                <Input
                label="Seu nome"
                placeholder="Exemplo: Ana Santos"
                value={state.name}
                name="name"
                onChange={handleChange}
                />

                <Input
                label="E-mail"
                placeholder="Exemplo: seuemail@exemplo.com"
                value={state.email}
                name="email"
                onChange={handleChange}
                />

                <Input
                type="password"
                label="Senha"
                placeholder="No mínimo 6 caracteres"
                value={state.password}
                name="password"
                onChange={handleChange}
                />

                <Button 
                title="Criar conta" 
                onClick={handleSignUp}
                />

                <Link to={"/"}>Já tenho uma conta</Link>
            </Form>
            
        </Container>
    )
}