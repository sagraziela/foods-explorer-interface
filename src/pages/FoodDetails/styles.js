import styled from "styled-components";
import px2vw from "../../utils/px2vw";

export const Container = styled.div`
    height: 100vh;
    display: grid;
    grid-template-rows: 104px 104px auto 77px;
    grid-template-areas: "header"
    "back"
    "content"
    "footer";
    position: relative;
    overflow-y: auto;
    
    ::-webkit-scrollbar {
        width: 8px;
    }

    ::-webkit-scrollbar-thumb {
        background-color: ${({ theme }) => theme.COLORS.GRAY_700};
        border: .5px solid ${({ theme }) => theme.COLORS.GRAY_500};
        border-radius: 3px;
    }

    ::-webkit-scrollbar-track {
        background-color: ${({ theme }) => theme.COLORS.GRAY_900};
    }

    > a {
        grid-area: back;
        text-decoration: none;
        color: ${({ theme }) => theme.COLORS.GRAY_100};
        font-size: 24px;
        font-family: "Poppins", sans-serif;

        display: flex;
        align-items: center;
        justify-content: left;
        gap: ${px2vw(8)};
        margin: 24px 0 24px ${px2vw(120)};
    }

    > footer {
        position: absolute;
        bottom: 0;
    }

    @media (max-width: 770px) {
        grid-template-rows: 82px auto 64px;
    }

    @media (max-width: 430px) {
        grid-template-rows: 60px 60px auto 48px;

        > a { 
            font-size: 16px;
            margin-left: 20px;

            > img {
                width: 16px;
                height: 16px;
            }
        }
    }
`;

export const Content = styled.main`
    grid-area: content;
    margin: 24px auto 48px 120px;

    > div {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: left;
        gap: ${px2vw(32)};

        > img {
            width: 390px;
            height: 390px;
        }

        > section {
            width: ${px2vw(603)};
            display: flex;
            flex-direction: column;
            justify-content: left;
            gap: 42px;
            font-family: "Poppins", sans-serif;
        }
    }

    @media (max-width: 770px) {
        > img {
            width: 24px;
            height: 24px;
        }

        > div {
            > img {
                width: 320px;
                height: 320px;
            }

            > section {
                gap: 32px;
            }
        }
    }

    @media (max-width: 430px) {
        width: 350px;
        margin: 14px auto 48px;
        justify-content: center;

        > div {
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 24px;

            > img {
                width: 280px;
                height: 280px;
            }

            > section {
                width: 100%;
            }
        }
    }
`;

export const FoodDescription = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;

    > h1 {
        font-size: 40px;
        line-height: 56px;
    }

    > p {
        font-size: 24px;
        line-height: 32px;
    }

    @media (max-width: 430px) {
        justify-content: center;
        align-items: center;

        > h1 {
            font-size: 24px;
            line-height: 32px;
        }

        > p {
            font-size: 14px;
            line-height: 18px;
            text-align: center;
        }
    }
`;

export const List = styled.ul`
    display: flex;
    align-items: flex-end;
    justify-content: flex-start;
    gap: ${px2vw(24)};
    list-style: none;

    @media (max-width: 430px) {
        position: absolute;
        top: 0;
        right: 0;
        gap: 16px;
        flex-direction: column;
        align-items: center;
        padding: 16px 8px;
        border-radius: 8px;
        background-color: ${({ theme }) => theme.COLORS.BLACK_TRANSPARENT};
    }
`;

export const PriceAndQuantitySection = styled.div`
    display: flex;
    gap: 24px;

    > div {
        display: flex;
        gap: 24px;

        > button {
        margin: auto;
        width: 92px;
        }
    }

    @media (max-width: 430px) {
        gap: 18px;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
`;

export const Price = styled.p`
    font-size: 32px;
    width: fit-content;
    white-space: nowrap;
    color: ${({ theme }) => theme.COLORS.BLUE_200};
    display: flex;
`;