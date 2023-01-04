import { Container, ItemRequest } from "./styles";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { PayBox } from "../../components/PayBox";
import saladaRavanelloImg from "../../assets/foods/salada-ravanelo.png";

export function Payment() {
    return (
        <Container>
            <Header />

            <main>
                <section>
                    <h2>Meu pedido</h2>

                    <ul>
                        <ItemRequest>
                            <img src={saladaRavanelloImg} alt="Imagem Salada Ravanello" />

                            <div>
                                <p>1x Salada Ravanello -
                                    <span> R$ 28,90</span>
                                </p>

                                <button>Excluir</button>
                            </div>
                        </ItemRequest>
                    </ul>
                </section>

                <div>
                    <h2>Pagamento</h2>

                    <PayBox />
                </div>
            </main>

            <Footer />
        </Container>
    )
}