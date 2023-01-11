import { Container } from "./styles";
import pixIcon from "../../assets/icons/pix_symbol.svg";
import { Input } from "../Input";
import { Button } from "../Button";
import cardIcon from "../../assets/icons/credit_card.svg";
import qrcode from "../../assets/icons/qrcode.svg";
import receiptIcon from "../../assets/icons/receipt.svg";

export function PayBox() {

    function changePayMethod(e) {
        console.log(e.target)
    }

    return (
        <Container>
            <div>
                <button
                onClick={changePayMethod}
                >
                    <img src={pixIcon} alt="Ícone PIX" />
                    PIX
                </button>

                <button
                onClick={changePayMethod}
                >
                    <img src={cardIcon} alt="Ícone cartão" />
                    Crédito
                </button>
            </div>

            <div className="qrCode hide">
                <img src={qrcode} alt="qrcode" />
            </div>

            <div className="creditCard">
                <Input
                type="number"
                label="Número do cartão"
                placeholder="0000 0000 0000 0000"
                />

                <div>
                    <Input 
                    type="month"
                    label="Validade"
                    />

                    <Input 
                    type="password"
                    label="CVC"
                    placeholder="XXX"
                    />
                </div>

                <Button
                title="Finalizar pagamento"
                icon={receiptIcon}
                />

            </div>
        </Container>
    )
}