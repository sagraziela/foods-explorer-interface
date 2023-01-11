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
        justify-content: center;
        gap: ${px2vw(196)};
        margin: 34px auto;

        h2 {
            font-size: 36px;
            font-weight: 400;
            margin-bottom: 18px;
        }

        > section {
            > p {
                font-size: 24px;
                margin-top: 24px;
            }
        }
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
        gap: 12px;
        margin: auto 0;

        > p {
            font-size: 24px;
            font-weight: 400;
            line-height: 32px;
            display: flex;
            align-items: center;
            gap: 12px;
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