import styled from "styled-components";
import px2vw from "../../utils/px2vw";

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    @media (max-width: 500px) {
        height: auto;
        flex-direction: column;
        justify-content: center;
        margin: ${px2vw(56, 500)} 0;

        > div {
            margin-bottom: ${px2vw(56, 500)};
        }
    }
`;

export const Form = styled.form`
    width: ${px2vw(476)};
    padding: ${px2vw(64)};
    display: flex;
    flex-direction: column;
    gap: ${px2vw(32)};

    background-color: ${({ theme }) => theme.COLORS.GRAY_700};
    border-radius: 12px;

    > p {
        font-size: 32px;
        font-family: 'Poppins', sans-sefif;
        text-align: center;
        color: ${({ theme }) => theme.COLORS.WHITE};
    }

    > a {
        text-decoration: none;
        text-align: center;
        font-size: 14px;
        color: ${({ theme }) => theme.COLORS.WHITE};

        :hover {
            opacity: .8;
        }
    }

    @media (max-width: 770px) {
        width: ${px2vw(340, 770)};
        padding: ${px2vw(28, 770)};
        gap: ${px2vw(24, 770)};
        border-radius: ${px2vw(12, 770)};

        > p {
            font-size: 26px;
        }

        > a {
            font-size: 12px;
        }
    }

    @media (max-width: 500px) {
        width: ${px2vw(430, 500)};
        padding: ${px2vw(48, 500)};
        gap: ${px2vw(32, 500)};
        border-radius: ${px2vw(12, 500)};

        > p {
            font-size: ${px2vw(32, 500)};
        }

        > a {
            font-size: ${px2vw(14, 500)};
        }
    }
`;