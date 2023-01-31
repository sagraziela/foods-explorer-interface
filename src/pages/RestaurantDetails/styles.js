import styled from "styled-components";
import px2vw from "../../utils/px2vw";

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: grid;
    grid-template-rows: 104px auto 77px;
    grid-template-areas: "header"
    "content"
    "footer";

    > main {
        grid-area: content;
        margin: 32px ${px2vw(123)};

        > a {
            text-decoration: none;
            font-size: 24px;
            font-family: 'Poppins', sans-serif;
            font-weight: 500;
            color: ${({ theme }) => theme.COLORS.GRAY_100};

            display: flex;
            align-items: center;
            margin-bottom: 24px;
        }

        > h1 {
            font-family: 'Poppins', sans-sefif;
            margin-bottom: 16px;
        }
    }

    @media (max-width: 770px) {
        grid-template-rows: 82px auto 64px;
    }

    @media (max-width: 430px) {
        grid-template-rows: 60px auto 48px;

        > main {
            margin-top: 24px;
            
            > a {
                font-size: 12px;

                > img {
                    height: 14px;
                    width: 14px;
                }
            }
        }
    }
`;

export const Form = styled.form`
    width: ${px2vw(476)};
    display: flex;
    flex-direction: column;
    gap: ${px2vw(32)};

    @media (max-width: 770px) {
        width: ${px2vw(340, 770)};
        padding: ${px2vw(28, 770)};
        gap: ${px2vw(20, 770)};
        border-radius: ${px2vw(12, 770)};
    }

    @media (max-width: 500px) {
        width: ${px2vw(430, 500)};
        padding: ${px2vw(48, 500)};
        gap: ${px2vw(32, 500)};
        border-radius: ${px2vw(12, 500)};
    }
`;