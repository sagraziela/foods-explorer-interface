import { useState, useEffect } from "react";
import { Container } from "./styles";
import plusBtn from "../../assets/icons/plus.svg";
import minusBtn from "../../assets/icons/minus.svg";

export function Counter({ setQuantity }) {
    const [state, setState] = useState("01");

    function handleIncrease() {
        const plusOne = String(Number(state) + 1).padStart(2, "0");

        return setState(plusOne);
    }

    function handleDecrease() {
        if (state == "01") {
            return;
        };

        const minusOne = String(Number(state) - 1).padStart(2, "0");

        return setState(minusOne);
    }

    useEffect(() => {
        if (state !== "01") {
            setQuantity(state)
        }
    }, [state])

    return (
        <Container>
            <button
            onClick={handleDecrease}
            >
                <img src={minusBtn} alt="minus" />
            </button>

            <p>{state}</p>
            
            <button
            onClick={handleIncrease}
            >
                <img src={plusBtn} alt="plus" />
            </button>
        </Container>
    )
}