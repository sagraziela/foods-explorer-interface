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

        > main {
            > a {
                font-size: 16px;
                > img {
                    height: 24px;
                    width: 16px;
                }
            }
        }
    }
    
    @media (max-width: 430px) {
        grid-template-rows: 60px auto 48px;

        > main {
            > a {
                font-size: 14px;
                > img {
                    height: 20px;
                    width: 14px;
                }
            }
        }
    }

`;

export const Form = styled.form`
    width: 100%;
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
            height: fit-content;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            gap: 8px;
        }
    }

    .sectionThree {
        > :first-child {
            width: 100%;
            height: 76px;
            display: flex;
            flex-direction: column;
            gap: 8px;

            > select {
                width: 100%;
                height: 48px;
                padding: 0 12px;
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

    @media (max-width: 770px) {
        .sectionOne {
            height: 64px;
        }
    }

    @media (max-width: 430px) {
        gap: 16px;

        > h1 {
            font-size: 24px;
        }

        .sectionOne {
            flex-direction: column;
            gap: 16px;
            height: fit-content;
            width: 260px;

            > :first-child {
                height: ${px2vw(76, 430)};
                display: flex;
            }
        }

        .sectionThree {
            > :first-child {
                width: 100%;
                height: fit-content;
                box-sizing: border-box;

                > select {
                    font-size: 14px;
                    height: fit-content;
                    padding: ${px2vw(12, 430)};
                }
            }

            > :last-child {
                width: 130px;
            }
        }

        > button {
            font-size: 14px;
        }
    }
`;

export const ImageUpload = styled.label`
    height: 100%;
    width: 230px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 16px;

    padding: ${px2vw(16)};
    border: 1px solid ${({ theme }) => theme.COLORS.GRAY_100};
    border-radius: 6px;

    font-size: 16px;
    color: ${({ theme }) => theme.COLORS.GRAY_100};

    > img {
        width: 16px;
        height: 16px;
    }

    > input {
        display: none;
    }    

    :hover {
        filter: brightness(.9);
    }

    @media (max-width: 770px) {
        width: ${px2vw(200, 770)};
        font-size: 14px;
        padding: ${px2vw(12, 770)};

    }

    @media (max-width: 430px) {
        height: 100%;
        width: ${px2vw(212, 430)};
        font-size: 14px;
        padding: ${px2vw(8, 430)};

        > img {
            height: 14px;
            width: 14px;
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

    @media (max-width: 430px) {
        font-size: 14px;
        padding: 8px;
    }
`;

export const Ingredients = styled.div`
    width: 100%;
    min-height: 76px;
    height: fit-content;
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

    @media (max-width: 770px) {
        > p {
            font-size: 14px;
        }
    }
`;