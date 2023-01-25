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
    border-radius: 8px;
    position: relative;

    background-color: ${({ theme }) => theme.COLORS.BLACK_TRANSPARENT};
    user-select: none;

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

    @media (max-width: 770px) {
        min-width: 240px;
        min-height: 370px;
        padding: 32px 24px;
        margin-right: 28px;

        > button {
            top: 12px;
            right: 12px;
            width: 24px;
            height: 24px;
        }

        > img {
            width: 150px;
            height: 150px;
        }
    }

    @media (max-width: 430px) {
        min-width: 130px;
        min-height: 180px;
        height: 210px;
        padding: 16px 8px;
        margin-right: 16px;
        gap: 12px;

        > button {
            top: 12px;
            right: 12px;
            width: 16px;
            height: 16px;
        }

        > img {
            width: 80px;
            height: 80px;
        }
    }
`;

export const FoodDescription = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    justify-content: center;
    align-items: center;
    margin: 12px auto;

    > a {
        text-decoration: none;
        height: 36px;
        display: flex;
        margin: 12px auto;
        
        > h1 {
            font-family: 'Poppins', sans-serif;
            font-size: 24px;
            line-height: 32px;
            color: ${({ theme }) => theme.COLORS.GRAY_100};
        }

        :hover {
            opacity: .9;
            border-bottom: 2px solid ${({ theme }) => theme.COLORS.GRAY_100};
        }
    }

    > p {
        font-size: 14px;
        line-height: 18px;
        text-align: center;
        padding: auto 12px;
        color: ${({ theme }) => theme.COLORS.GRAY_200};
    }

    @media (max-width: 770px) {
        margin: 0 auto 12px;

        > a {
            > h1 {
                font-size: 18px;
                line-height: 24px;
            }
        }

        > p {
            font-size: 12px;
            line-height: 14px;
        }
    }

    @media (max-width: 430px) {
        > a {
            height: 36px;
            
            > h1 {
                font-size: 14px;
                line-height: 18px;
                text-align: center;
            }
        }

        > p {
            display: none;
        }
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

    @media (max-width: 770px) {
        gap: 12px;

        > div {
            gap: 16px;

            > button {
                width: 70px;
                font-size: 12px;
                gap: 4px;
            }
        }
    }

    @media (max-width: 430px) {
        > div {
            display: none;
        }
    }
`;

export const Price = styled.p`
    font-size: 32px;
    width: fit-content;
    color: ${({ theme }) => theme.COLORS.BLUE_200};
    display: flex;

    @media (max-width: 770px) {
        font-size: 24px;
    }

    @media (max-width: 430px) {
        font-size: 14px;
    }
`;