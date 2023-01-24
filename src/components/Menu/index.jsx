import { Container } from "./styles";
import { useAuth } from "../../hooks/auth";
import { Link } from "react-router-dom";

export function Menu({ handleSignOut }) {
    const { user } = useAuth();

    return (
        <Container>
            <div>
                <div></div>
                <div></div>
                <div></div>
            </div>

            <ul>
                <li>
                    { user.admin === 0 &&
                    <Link to={"#"}>Dados pessoais</Link>
                    }

                    { user.admin === 1 &&
                    <Link to={"#"}>Dados do restaurante</Link>
                    }
                </li>
                { user.admin === 1 &&
                    <li>
                    <Link to={"/new-food"}>Novo prato</Link>
                    </li>
                }
                <li>
                    { user.admin === 0 &&
                    <Link to={"/favorites"}>Meus favoritos</Link>
                    }

                    { user.admin === 1 &&
                    <Link to={"/orders"}>Pedidos</Link>
                    }
                </li>
                <li>
                    <a href="/" onClick={handleSignOut}>
                    Sair
                    </a>
                </li>
            </ul>
        </Container>
    )
}