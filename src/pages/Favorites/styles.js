import styled from "styled-components";
import px2vw from "../../utils/px2vw";

export const Container = styled.div`
    width: 100vw;
    grid-template-rows: 104px auto 77px;
    grid-template-areas: "header"
    "content"
    "footer";

`;

export const Content = styled.div`
    grid-area: content;
    padding: 32px 123px 98px;

    > img {
        margin: 30px auto 48px;
    }
`;

export const Heading = styled.div`
    width: ${px2vw(1120)};
    height: 260px;
    background-color: ${({ theme }) => theme.COLORS.GRAY_700};
    position: relative;
    margin: ${px2vw(100)} auto 64px;
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
        left: ${px2vw(-56)};
    }

    > div {
        grid-area: message;
        width: ${px2vw(500)};
        margin: auto;
        text-align: center;
        font-family: 'Poppins', sans-serif;

        > h2 {
            font-size: 40px;
            line-height: 56px;
            font-weight: 500;
        }

        > p {
            font-size: 16px;
            line-height: 22px;
        }
    }
`;
