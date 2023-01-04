import { Container, Table, StatusSelect } from "./styles";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";

export function RequestsAdmin() {
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
                        <tr>
                            <td>                          
                                <StatusSelect name="status" id="status" >
                                    <option value="Pendente">Pendente</option>
                                    <option value="Preparando">Preparando</option>
                                    <option value="Entregue">Entregue</option>
                                </StatusSelect>
                            </td>
                            <td>0000001</td>
                            <td>2x Carbonara</td>
                            <td>15/12/22, às 10:30h</td>
                        </tr>
                    </tbody>
                </Table>
            </main>

            <Footer />
        </Container>
    )
}