import { Container } from "./styles";
import pixIcon from "../../assets/icons/pix_symbol.svg";
import { Input } from "../Input";
import { Button } from "../Button";
import cardIcon from "../../assets/icons/credit_card.svg";
import qrcode from "../../assets/icons/qrcode.svg";
import receiptIcon from "../../assets/icons/receipt.svg";
import { useState } from "react";

export function PayBox({ onClick }) {

    const [payData, setPayData] = useState({});

    const [payMethod, setPayMethod] = useState({qrCode: "qrCode hide", creditCard: "creditCard"});

    function handleTogglePayMethod() {
        if (payMethod.qrCode === "qrCode hide") {
            setPayMethod({qrCode: "qrCode", creditCard: "creditCard hide"});
        } else {
            setPayMethod({qrCode: "qrCode hide", creditCard: "creditCard"});
        }
    }

    function handleChange(e) {
        setPayData({...payData, [e.target.name]: e.target.value });
    }

    return (
        <Container>
            <div>
                <button
                onClick={handleTogglePayMethod}
                >
                    <img src={pixIcon} alt="Ícone PIX" />
                    PIX
                </button>

                <button
                name="creditCardBtn"
                onClick={handleTogglePayMethod}
                >
                    <img src={cardIcon} alt="Ícone cartão" />
                    Crédito
                </button>
            </div>

            <div 
            className={payMethod.qrCode}
            >
                <img src={qrcode} alt="qrcode" />
            </div>

            <div 
            className={payMethod.creditCard}
            >
                <Input
                type="number"
                label="Número do cartão"
                name="cardNumber"
                placeholder="0000 0000 0000 0000"
                onChange={handleChange}
                />

                <div>
                    <Input 
                    type="month"
                    label="Validade"
                    name="validity"
                    onChange={handleChange}
                    />

                    <Input 
                    type="password"
                    label="CVC"
                    name="CVC"
                    placeholder="xxx"
                    onChange={handleChange}
                    />
                </div>

                <Button
                title="Finalizar pagamento"
                icon={receiptIcon}
                onClick={onClick}
                />

            </div>
        </Container>
    )
}