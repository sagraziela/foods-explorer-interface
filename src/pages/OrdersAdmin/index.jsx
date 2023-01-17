import { useState, useEffect } from "react";
import { Container, Table, StatusSelect } from "./styles";
import { useAuth } from "../../hooks/auth";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { api } from "../../services/api";

export function OrdersAdmin() {
    const [orders, setOrders] = useState([]);

    const { user } = useAuth();

    useEffect(() => {
        async function fetchOrders() {
            const response = await api.get("/orders");

            const userOrders = response.data.filter(order => order.user_id === user.id);

            setOrders(userOrders);
        }

        fetchOrders()
    }, []);

    console.log(orders)

    return (
        <Container>
            <Header />

            <main>
                <h1>Pedidos</h1>

                <Table>
                    <thead>
                        <tr>
                            <th>Status</th>
                            <th>Código</th>
                            <th>Detalhamento</th>
                            <th>Data e hora</th>
                        </tr>
                    </thead>

                    <tbody>
                        { orders[0] &&
                            orders.map(order => (
                                <tr>
                                    <td>                          
                                        <StatusSelect name="status" id="status" >
                                            <option value="Pendente">Pendente</option>
                                            <option value="Preparando">Preparando</option>
                                            <option value="Entregue">Entregue</option>
                                        </StatusSelect>
                                    </td>
                                    <td>{String(order.id).padStart(4, "0")}</td>
                                    <td>{order.items}</td>
                                    <td>{order.updated_at}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </Table>
            </main>

            <Footer />
        </Container>
    )
}