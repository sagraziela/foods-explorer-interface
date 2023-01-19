import styled from "styled-components";
import px2vw from "../../utils/px2vw";

export const Container = styled.footer`
    grid-area: footer;
    width: 100%;
    height: 77px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 24px ${px2vw(123)};

    background-color: ${({ theme }) => theme.COLORS.GRAY_700};
    
    > div {
        display: flex;
        align-items: center;
        gap: 12px;
        color: ${({ theme }) => theme.COLORS.GRAY_300};
        font-size: 26px;
        font-weight: 700;
    }

    > p {
        font-size: 14px;
    }

    @media (max-width: 770px) {
        height: 64px;
        padding: 16px auto;
    }

    @media (max-width: 430px) {
        height: 48px;
        padding: 8px 12px;

        > p {
            font-size: 8px;
        }
    }

`;