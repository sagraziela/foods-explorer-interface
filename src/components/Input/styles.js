import styled from "styled-components";
import px2vw from "../../utils/px2vw";

export const Container = styled.div`
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    font-size: 16px;
    gap: 8px;

    > input {
        height: 100%;
        background-color: transparent;
        padding: ${px2vw(16)};;
        border: 1px solid ${({ theme }) => theme.COLORS.GRAY_100};
        border-radius: 6px;

        font-size: 16px;
        color: ${({ theme }) => theme.COLORS.GRAY_100};


        ::placeholder {
            color: ${({ theme }) => theme.COLORS.GRAY_300};
        }

        ::-webkit-inner-spin-button {
            -webkit-appearance: none;
            margin: 0;
        }
    }

    @media (max-width: 770px) {
        font-size: 14px;

        > input {
            padding: ${px2vw(16, 770)};
            font-size: 14px;
            border-radius: 6px;

        }
    }

    @media (max-width: 430px) {
        > input {
            padding: ${px2vw(16, 430)};
            border-radius: 6px;
        }
    }
`;