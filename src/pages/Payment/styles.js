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
        justify-content: left;
        gap: ${px2vw(196)};
        margin: 34px ${px2vw(123)};

        > section {
            width: ${px2vw(400)};

            > h2 {
                font-size: 36px;
                font-weight: 400;
                margin-bottom: 18px;
            }

            > span {
                font-size: 16px;
            }

            > p {
                font-size: 24px;
                margin-top: 24px;
            }
        }

        > div {
            > h2 {
                font-size: 36px;
                font-weight: 400;
                margin-bottom: 18px;
            }
        }
    }

    @media (max-width: 770px) {
        grid-template-rows: 82px auto 64px;

        > main {
            justify-content: space-between;
            gap: 26px;

            > section {
                width: 340px;

                > h2 {
                    font-size: 24px;
                }

                > p {
                    font-size: 18px;
                    margin-top: 18px;
                }
            }

            > div {
                > h2 {
                    font-size: 24px;
                }
            }
        }
    }

    @media (max-width: 430px) {
        grid-template-rows: 60px auto 48px;

        > main {
            flex-direction: column;
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

    @media (max-width: 770px) {
        width: 100%;

        > div {
            > p {
                font-size: 18px;
            }
        }
    }

    @media (max-width: 430px) {

        > div {
            > p {
                font-size: 14px;
                
                > span {
                    font-size: 10px;
                }
            }

            > button {
                font-size: 10px;
            }
        }
    }
`;