import styled from "styled-components";

export const Container = styled.div`
    min-width: 300px;
    min-height: 512px;
    padding: 32px 24px;
    margin-right: 28px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 24px;
    border-radius: 8px;
    position: relative;

    background-color: ${({ theme }) => theme.COLORS.BLACK_TRANSPARENT};

    > button {
        position: absolute;
        top: 20px;
        right: 20px;
        width: 32px;
        height: 32px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: transparent;
        border: none;
        cursor: pointer;

        transition: .3s;

        > img {
            width: 26px;
            height: 22px;
            margin: auto;
        }

        :hover {
            border: 2px solid ${({ theme }) => theme.COLORS.BLUE_200};
            border-radius: 4px;
        }
    }

    > img {
        width: 200px;
        height: 200px;
    }
`;

export const FoodDescription = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    justify-content: center;
    align-items: center;
    margin: 18px auto 16px;

    > a {
        text-decoration: none;
        display: flex;
        
        > h1 {
            font-family: 'Poppins', sans-serif;
            font-size: 24px;
            line-height: 32px;
            color: ${({ theme }) => theme.COLORS.GRAY_100};
        }

        :hover {
            opacity: .9;
        }
    }

    > p {
        font-size: 14px;
        line-height: 18px;
        text-align: center;
        color: ${({ theme }) => theme.COLORS.GRAY_200};
    }
`;

export const PriceAndQuantitySection = styled.div`
    display: flex;
    gap: 18px;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    > div {
        display: flex;
        gap: 24px;

        > button {
        margin: auto;
        width: 92px;
        }
    }
`;

export const Price = styled.p`
    font-size: 32px;
    width: fit-content;
    color: ${({ theme }) => theme.COLORS.BLUE_200};
    display: flex;
`;