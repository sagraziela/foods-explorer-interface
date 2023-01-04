import styled from "styled-components";
import px2vw from "../../utils/px2vw";

export const Container = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;

    @media (max-width: 500px) {
        height: auto;
        width: ${px2vw(500, 500)};
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
    padding: ${px2vw(48)};
    display: flex;
    flex-direction: column;
    gap: ${px2vw(32)};

    background-color: ${({ theme }) => theme.COLORS.GRAY_700};
    border-radius: ${px2vw(12)};

    > p {
        font-size: ${px2vw(32)};
        font-family: 'Poppins', sans-sefif;
        text-align: center;
        color: ${({ theme }) => theme.COLORS.WHITE};
    }

    > a {
        text-decoration: none;
        text-align: center;
        font-size: ${px2vw(14)};
        color: ${({ theme }) => theme.COLORS.WHITE};

        :hover {
            opacity: .8;
        }
    }

    @media (max-width: 770px) {
        width: ${px2vw(340, 770)};
        padding: ${px2vw(28, 770)};
        gap: ${px2vw(20, 770)};
        border-radius: ${px2vw(12, 770)};

        > p {
            font-size: ${px2vw(32, 770)};
        }

        > a {
            font-size: ${px2vw(14, 770)};
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