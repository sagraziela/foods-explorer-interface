import styled from "styled-components";
import px2vw from "../../utils/px2vw";

export const Container = styled.section`
    width: 100%;
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
        width: 100%;
        position: relative;

        > .arrowBtn {
            width: 68px;
            height: 100%;
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            //background: linear-gradient(90deg, rgba(2,0,36,0) 10%, rgba(0,10,15,1) 100%);

            display: flex;
            align-items: center;
            z-index: 1;

            > button {
                background: transparent;
                border: none;
                outline: none;
                height: 40px;
                width: 40px;
                cursor: pointer;

                > img {
                    height: 36px;
                    width: 28px;
                }

                > :hover {
                    border: 1px solid ${({ theme }) => theme.COLORS.BLUE_200};
                    border-radius: 4px;
                }
            }
        }

        > :first-child {
            left: -23px;
            background: rgb(0,0,0);
            background: linear-gradient(270deg, rgba(0,0,0,0) 0%, rgba(0,10,15,0.5) 20%, rgba(0,10,15,1) 100%);             
        }

        > :last-child {
            right: -23px;
            background: rgb(0,0,0);
            background: linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(0,10,15,0.5) 20%, rgba(0,10,15,1) 100%);
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