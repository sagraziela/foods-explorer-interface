import styled from "styled-components";
import px2vw from "../../utils/px2vw";

export const Container = styled.div`
    width: 100vw;
    grid-template-rows: 104px auto 77px;
    grid-template-areas: "header"
    "content"
    "footer";

    @media (max-width: 770px) {
        grid-template-rows: 82px auto 64px;
    }
    @media (max-width: 430px) {
        grid-template-rows: 60px auto 48px;
    }

`;

export const Content = styled.div`
    grid-area: content;
    padding: 32px ${px2vw(123)};

    @media (max-width: 770px) {
        > section {
            margin: 0 0 32px;
        }
    }

    @media (max-width: 430px) {
        > section {
            margin: 0 0 16px;
        }
    }
`;

export const Heading = styled.div`
    width: 100%;
    height: ${px2vw(260)};
    background-color: ${({ theme }) => theme.COLORS.GRAY_700};
    position: relative;
    margin: ${px2vw(160)} 0 64px;
    border-radius: 8px;

    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-areas: "image message";

    > img {
        grid-area: image;
        position: absolute;
        width: ${px2vw(632)};
        height: ${px2vw(406)};
        bottom: 0px;
        left: ${px2vw(-58)};
    }

    > div {
        grid-area: message;
        width: ${px2vw(500)};
        margin: auto;
        text-align: center;
        font-family: 'Poppins', sans-serif;

        > h2 {
            font-size: ${px2vw(40)};
            line-height: ${px2vw(56)};
            font-weight: 500;
        }

        > p {
            font-size: ${px2vw(16)};
            line-height: ${px2vw(30)};
        }
    }

    @media (max-width: 430px) {
        height: ${px2vw(120, 430)};
        margin: ${px2vw(16)} 0 32px 0;

        > img {
            width: ${px2vw(200, 430)};
            height: ${px2vw(140, 430)};
        }

        > div {
            width: ${px2vw(170, 430)};
            > h2 {
                font-size: 16px;
                line-height: 20px;
            }

            > p {
                font-size: 7px;
                line-height: 12px;
            }
        }
    }
`;
