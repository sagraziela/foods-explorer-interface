import styled from "styled-components";
import px2vw from "../../utils/px2vw";

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
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
    padding-top: 32px;
    margin: 24px ${px2vw(103)} 24px  ${px2vw(123)};
`;
