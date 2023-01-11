import styled from "styled-components";
import px2vw from "../../utils/px2vw";

export const Container = styled.div`
    width: 100%;
    height: 76px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    font-size: 16px;

    > input {
        height: 48px;
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
        height: ${px2vw(76, 770)};
        font-size: ${px2vw(16, 770)};

        > input {
            height: ${px2vw(48, 770)};
            padding: ${px2vw(16, 770)};;
            font-size: ${px2vw(16, 770)};
            border-radius: ${px2vw(6, 770)};

        }
    }

    @media (max-width: 430px) {
        height: ${px2vw(76, 500)};
        font-size: ${px2vw(16, 500)};

        > input {
            height: ${px2vw(48, 500)};
            padding: ${px2vw(16, 500)};;
            font-size: ${px2vw(16, 500)};
            border-radius: ${px2vw(6, 500)};

        }
    }
`;