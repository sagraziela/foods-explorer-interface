import { useState, useEffect } from "react";
import { Container } from "./styles";
import plusBtn from "../../assets/icons/plus.svg";
import minusBtn from "../../assets/icons/minus.svg";

export function Counter() {
    const [state, setState] = useState("01");

    function handleIncrease() {
        const plusOne = Number(state) + 1;

        plusOne < 10 ? setState(0 + String(plusOne)) : setState(plusOne);
    }

    function handleDecrease() {
        if (state == "01") {
            return;
        };

        const minusOne = Number(state) - 1;

        minusOne < 10 ? setState(0 + String(minusOne)) : setState(minusOne);
    }

    return (
        <Container>
            <button
            onClick={handleDecrease}
            >
                <img src={minusBtn} alt="" />
            </button>

            <p>{state}</p>
            
            <button
            onClick={handleIncrease}
            >
                <img src={plusBtn} alt="" />
            </button>
        </Container>
    )
}