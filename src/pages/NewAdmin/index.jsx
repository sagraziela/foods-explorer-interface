import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Container, Form } from "./styles";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { api } from "../../services/api";
import arrowLeftImg from "../../assets/icons/arrow_left.svg"

export function NewAdmin() {
    
    const [state, setState] = useState({ name: "", email: "", password: "", admin: 1 });

    const navigate = useNavigate();

    function handleChange(e) {
        setState({...state, [e.target.name]: e.target.value});
    }

    async function handleSignUp(e) {
        e.preventDefault();

        const confirmNewAdmin = confirm("AVISO: O usuário administrador a ser cadastrado terá acesso à todas as configurações de seu site, podendo adicionar, editar e excluir pratos, além de alterar o status dos pedidos e dados do restaurante. Tem certeza que deseja continuar?");

        if (confirmNewAdmin) {
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
    }

    return (
        <Container>
            <Header />

            <main>
                <Link to={"/"}>
                    <img src={arrowLeftImg} alt="seta para esquerda" />
                    voltar
                </Link>

                <h1>Criar novo administrador</h1>

                <Form>
                    <Input
                    label="Nome"
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
                    title="Criar administrador" 
                    onClick={handleSignUp}
                    />
                </Form>
            </main>
            <Footer />
        </Container>
    )
}