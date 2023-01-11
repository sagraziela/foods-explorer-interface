import { useState, useEffect } from "react";
import { useCart } from "../../hooks/cart";
import { Container, ItemRequest } from "./styles";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { PayBox } from "../../components/PayBox";
import placeholderImg from "../../assets/foods/placeholder.png"

export function Payment() {

    const [totalPrice, setTotalPrice] = useState();

    const { cart, handleRemoveItemFromCart } = useCart();

    useEffect(() => {
        if (cart[0]) {
            let pricesArray = []

            cart.map(item => {
                const numberPrice = Number(item.price.replace(",", "."));
                pricesArray.push(numberPrice * Number(item.quantity));
            })

            const total = pricesArray.reduce((sum, i) => {
                return sum + i
            })

            const totalFloat = String(total.toFixed(2)).replace(".", ",");

            setTotalPrice(totalFloat)
        }
    }, [cart])

    return (
        <Container>
            <Header />

            <main>
                <section>
                    <h2>Meu pedido</h2>

                    <ul>
                        { cart[0] && 
                            cart.map(item => (
                                <ItemRequest key={item.id}>
                                    <img 
                                    src={item.picture ? item.picture : placeholderImg} 
                                    alt={`Imagem ${item.title}`} />

                                    <div>
                                        <p> {`${item.quantity} x ${item.title}`}
                                            <span> R$ {item.price}</span>
                                        </p>

                                        <button
                                        onClick={() => handleRemoveItemFromCart(item)}
                                        >
                                            Excluir
                                        </button>
                                    </div>
                                </ItemRequest>
                            ))
                        }
                    </ul>

                    {cart[0] && 
                        <p> {`Total: R$ ${totalPrice}`} </p>
                    }
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