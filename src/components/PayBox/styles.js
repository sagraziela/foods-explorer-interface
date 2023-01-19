import styled from "styled-components";
import px2vw from "../../utils/px2vw";

export const Container = styled.div`
    width: ${px2vw(530)};
    display: flex;
    flex-direction: column;
    border: 1px solid ${({ theme }) => theme.COLORS.GRAY_300};
    border-collapse: collapse;

    > :first-child {
        height: 81px;
        display: flex;
        border-collapse: collapse;

        > button {
            height: 100%;
            width: 100%;
            background-color: transparent;
            color: ${({ theme }) => theme.COLORS.GRAY_100};
            border: 1px solid ${({ theme }) => theme.COLORS.GRAY_300};
            border-collapse: collapse;

            display: flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
            cursor: pointer;
        }
    }

    > .qrCode {
        height: 364px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    > .creditCard {
        width: 100%;
        padding: ${px2vw(32)} ${px2vw(60)};
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 24px;

        > :nth-child(2) {
            width: 100%;
            display: flex;
            gap: ${px2vw(24)};

            > div {
               width: 50%;
               overflow: hidden;
            }
        }
    }

    .hide {
        display: none;
    }

    @media (max-width: 770px) {
        > :first-child {
            height: 64px;
        }
    }

    @media (max-width: 430px) {
        width: 360px;

        > :first-child {
            height: 48px;

            > button {
                font-size: 12px;

                > img {
                    width: 14px;
                    height: 14px;
                }
            }
        }
    }
`;