import styled from "styled-components";
import px2vw from "../../utils/px2vw";

export const Container = styled.div`
    height: 100vh;
    display: grid;
    grid-template-rows: 104px auto 77px;
    grid-template-areas: "header"
    "content"
    "footer";

    > main {
        grid-area: content;
        display: flex;
        gap: ${px2vw(196)};
        margin: 34px ${px2vw(196)} auto ${px2vw(120)};
    }
`;

export const ItemRequest = styled.li`
    width: 403px;
    height: 104px;
    display: flex;
    gap: 12px;
    padding: 16px 0;

    > div {
        display: flex;
        flex-direction: column;
        margin: auto 0;

        > p {
            > span {
                font-size: 12px;
            }
        }

        > button {
            width: 36px;
            background: transparent;
            border: none;
            color: ${({ theme }) => theme.COLORS.RED_300};
            cursor: pointer;
        }
    }
`;