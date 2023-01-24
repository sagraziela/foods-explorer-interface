import styled from "styled-components";
import px2vw from "../../utils/px2vw";

export const Container = styled.section`
    width: 80%;
    display: flex;
    flex-direction: column;
    margin-bottom: 56px;

    > h2 {
        margin-bottom: 40px;
        font-size: 32px;
        font-family: 'Poppins', sans-serif;
        font-weight: 500;
    }

    > div {
        width: 100%;
        height: 515px;
        display: flex;
        gap: 28px;
        position: relative;
        overflow: hidden;

        > button {
            z-index: 5;
            background-color: beige;
        }
    }

    @media (max-width: 770px) {
        > h2 {
            font-size: 20px;
            margin-bottom: 24px;
        }

        > div {
            height: 380px;
            gap: 28px;
        }
    }

    @media (max-width: 430px) {
        > h2 {
            font-size: 16px;
            margin-bottom: 12px;
        }

        > div {
            height: 260px;
            gap: 28px;
        }
    }
`;