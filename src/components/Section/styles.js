import styled from "styled-components";
import px2vw from "../../utils/px2vw";

export const Container = styled.section`
    width: 80%;
    display: flex;
    flex-direction: column;
    margin-bottom: 56px;

    > h2 {
        margin-bottom: 40px;
        font-size: 32px;
        font-family: 'Poppins', sans-serif;
        font-weight: 500;
    }

    > .wrapper {
        max-width: 1200px;
        position: relative;

        > button {
            background: transparent;
            border: none;
            outline: none;
            height: 30px;
            width: 30px;
            position: absolute;
            top: 50%;
            cursor: pointer;

            transform: translateY(-50%);

            > img {
                height: 24px;
                width: 20px;
            }

            > :hover {
                border: 1px solid ${({ theme }) => theme.COLORS.BLUE_200};
                border-radius: 4px;
            }
        }

        > :first-child {
            left: -23px;
        }

        > :last-child {
            right: -23px;
        }

        > .carousel {
            font-size: 0;
            overflow: hidden;
            cursor: grab;
            display: flex;
            scroll-behavior: smooth;
        }
    }

    @media (max-width: 770px) {
        > h2 {
            font-size: 20px;
            margin-bottom: 24px;
        }

        > div {
            height: 380px;
            gap: 28px;
        }
    }

    @media (max-width: 430px) {
        > h2 {
            font-size: 16px;
            margin-bottom: 12px;
        }

        > div {
            height: 260px;
            gap: 28px;
        }
    }
`;