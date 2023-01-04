import styled from "styled-components";
import px2vw from "../../utils/px2vw";

export const Container = styled.div`
    grid-area: counter;
    display: flex;
    gap: 18px;
    align-items: center;
    justify-content: center;

    > button {
        background-color: transparent;
        border: none;
        color: ${({ theme }) => theme.COLORS.BLUE_200};
        cursor: pointer;       
    }
`;