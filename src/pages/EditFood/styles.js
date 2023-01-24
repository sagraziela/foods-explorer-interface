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
    display: flex;
    flex-direction: column;
    gap: 32px;
    margin-bottom: 24px;

    > section {
        display: flex;
        gap: ${px2vw(32)};
    }

    .sectionOne {
        > :first-child {
            width: 230px;
            height: 76px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            font-size: 16px;
            gap: 8px;
        }
    }

    .sectionThree {
        > :first-child {
            width: 100%;
            height: fit-content;
            display: flex;
            flex-direction: column;
            gap: 8px;

            > select {
                width: 100%;
                padding: ${px2vw(16)};
                border: 1px solid ${({ theme }) => theme.COLORS.GRAY_100};
                border-radius: 8px;
                background-color: ${({ theme }) => theme.COLORS.GRAY_900};

                font-size: 16px;
                color: ${({ theme }) => theme.COLORS.GRAY_100};
            }
        }

        > :last-child {
            width: 250px;
        }
    }

    .sectionFour {
        flex-direction: column;
        gap: 8px;
    }

    > button {
        width: 357px;
        align-self: flex-end;
    }

    @media (max-width: 430px) {
        gap: 14px;

        > h1 {
            font-size: 20px;
        }

        > .sectionOne {
            flex-direction: column-reverse;
            gap: 16px;
        }

        > .sectionThree {
            > :first-child {
                > select {
                    padding: ${px2vw(16, 430)};
                    font-size: 14px;
                    line-height: 14px;
                }
            }

            > :last-child {
                width: 130px;
            }
        }

        > button {
        width: 180px;
        align-self: flex-end;
    }
    }
`;

export const ImageUpload = styled.label`
    height: 48px;
    width: 230px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 16px;

    padding: ${px2vw(16)};;
    border: 1px solid ${({ theme }) => theme.COLORS.GRAY_100};
    border-radius: 6px;

    font-size: 16px;
    color: ${({ theme }) => theme.COLORS.GRAY_100};

    > img {
        width: 24px;
        height: 24px;
    }

    > span {
        overflow: hidden;
    }

    > input {
        display: none;
    }    

    :hover {
        filter: brightness(.9);
    }

    @media (max-width: 770px) {
        width: ${px2vw(200, 770)};

        > img {
            width: 18px;
            height: 18px;
        }

        > span {
            font-size: 14px;
        }

        > input {
            height: ${px2vw(48, 770)};
            padding: ${px2vw(16, 770)};;
            font-size: ${px2vw(16, 770)};
        }
    }

    @media (max-width: 430px) {
        height: 54px;
        width: 170px;
        white-space: nowrap;
        overflow: hidden;

        > img {
            width: 14px;
            height: 14px;
        }

        > span {
            font-size: 12px;
        }

        > input {
            height: ${px2vw(48, 500)};
            padding: ${px2vw(16, 500)};;
            font-size: ${px2vw(16, 500)};

        }
    }
`;

export const Textarea = styled.textarea`
    width: 100%;
    height: 172px;
    background-color: transparent;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    font-size: 16px;
    font-family: 'Roboto', sans-serif;

    padding: ${px2vw(16)};
    border: 1px solid ${({ theme }) => theme.COLORS.GRAY_100};
    border-radius: 6px;

    resize: none;

    ::placeholder {
        color: ${({ theme }) => theme.COLORS.GRAY_300};
    }
`;

export const Ingredients = styled.div`
    width: 100%;
    min-height: 76px;
    display: flex;
    flex-direction: column;
    gap: 8px;

    > p {
        font-size: 16px;
    }

    > div {
        display: flex;
        flex-direction: column;
        height: fit-content;
        width: 100%;
        display: flex;
        align-items: center;
        gap: 8px;
        padding: 8px;
        border: 1px solid ${({ theme }) => theme.COLORS.GRAY_100};
        border-radius: 6px;
    }
`;