import styled from "styled-components";
import px2vw from "../../utils/px2vw";

export const Container = styled.section`
    width: ${px2vw(1122)};
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
`;