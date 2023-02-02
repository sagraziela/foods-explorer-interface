import styled from "styled-components";
import px2vw from "../../utils/px2vw";

export const Container = styled.div`
    grid-area: counter;
    display: flex;
    gap: 18px;
    align-items: center;
    justify-content: center;

    > p {
        font-size: 16px;
        color: ${({ theme }) => theme.COLORS.WHITE};
    }

    > button {
        background-color: transparent;
        border: none;
        color: ${({ theme }) => theme.COLORS.BLUE_200};
        cursor: pointer;       
    }

    @media (max-width: 770px) {
        gap: 12px;

        > button {
            > img {
                width: 16px;
                height: 16px;
            }
        }

        > p {
            font-size: 14px;
        }
    }

    @media (max-width: 770px) {
        > p {
            font-size: 12px;
        }
    }
`;