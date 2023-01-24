import { useState, useEffect } from "react";
import { useAuth } from "../../hooks/auth";
import { Container, Table, StatusSelect } from "./styles";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { api } from "../../services/api";

export function Orders() {

    const [orders, setOrders] = useState([]);

    const { user } = useAuth();

    async function handleUpdateStatus(e, order) {
        const confirmNewStatus = confirm(`Tem certeza que deseja alrerar o status do pedido nº ${String(order.id).padStart(4, "0")}?`);

        if (confirmNewStatus) {
            await api.put(`/orders/${order.id}`, { status: e.target.value });
        
            const updatedOrders = await api.get("/orders");
            setOrders(updatedOrders.data);
        }
    }

    useEffect(() => {
        async function fetchOrders() {
            let response;

            if (user.admin === 0) {
                response = await api.get(`/orders/${user.id}`);
            } else {
                response = await api.get(`/orders`);
            }

            setOrders(response.data);
        }

        fetchOrders()
    }, []);
    
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
                    { orders[0] && user.admin === 0 &&
                        orders.map(order => (
                            <tr key={order.id}>
                                <td>{order.status}</td>
                                <td>{String(order.id).padStart(4, "0")}</td>
                                <td>{order.items}</td>
                                <td>{order.created_at}</td>
                            </tr>
                        ))
                    }

                    { orders[0] && user.admin === 1 && 
                        orders.map(order => (
                            <tr key={order.id}>
                                <td>                          
                                    <StatusSelect 
                                    name="status" 
                                    id="status"
                                    value={order.status}
                                    onChange={e => handleUpdateStatus(e, order)}
                                    >
                                        <option value="Pendente">Pendente</option>
                                        <option value="Preparando">Preparando</option>
                                        <option value="Entregue">Entregue</option>
                                    </StatusSelect>
                                </td>
                                <td>{String(order.id).padStart(4, "0")}</td>
                                <td>{order.items}</td>
                                <td>{order.created_at}</td>
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