import { useState, useEffect } from "react";
import { useAuth } from "../../hooks/auth";
import { useCart } from "../../hooks/cart";
import { useNavigate } from "react-router-dom";
import { Container, ItemRequest } from "./styles";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { PayBox } from "../../components/PayBox";
import { api } from "../../services/api";
import placeholderImg from "../../assets/foods/placeholder.png"

export function Payment() {

    const [totalPrice, setTotalPrice] = useState();

    const { cart, handleRemoveItemFromCart, clearCart } = useCart();

    const { user } = useAuth();

    const navigate = useNavigate();

    async function handleConfirmOrder() {
        const arrayItemsBrief = cart.map(item => {
            const itemBrief = `${item.quantity}x ${item.title}`;
            console.log(itemBrief)
            return itemBrief;
        });

        const items = arrayItemsBrief.join(', ');

        const order = {items, user_id: user.id}

        const response = await api.post(`/orders/${user.id}`, order);
        console.log(response)
        
        clearCart()
        alert("Seu pedido foi confirmado!")
        navigate(`/orders/${user.id}`);
    }

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

                    { !cart[0] &&
                        <span>Seu carrinho ainda está vazio.</span>
                    }

                    { cart[0] &&
                        <ul>
                            {cart.map(item => (
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
                            ))}
                        </ul>
                    }

                    {cart[0] && 
                        <p> {`Total: R$ ${totalPrice}`} </p>
                    }
                </section>

                <div>
                    <h2>Pagamento</h2>

                    <PayBox 
                    onClick={handleConfirmOrder}
                    />
                </div>
            </main>

            <Footer />
        </Container>
    )
}