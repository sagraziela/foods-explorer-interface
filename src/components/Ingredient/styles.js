import styled from "styled-components";
import px2vw from "../../utils/px2vw";

export const Container = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 8px;

    > img {
        height: auto;
        max-width: 60px;
        object-fit: contain;
    }

    > p {
        font-family: "Poppins", sans-serif;
        font-size: 18px;
    }

    @media (max-width: 770px) {
        > img {
            height: 50px;
            width: 50px;
        }

        > p {
            font-family: "Poppins", sans-serif;
            font-size: 16px;
        }
    }

    @media (max-width: 430px) {
        > img {
            height: 32px;
            width: 32px;
        }

        > p {
            font-size: 12px;
        }
    }
`;