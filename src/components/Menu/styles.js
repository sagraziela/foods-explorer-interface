import styled from "styled-components";
import px2vw from "../../utils/px2vw";

export const Container = styled.section`
    width: ${px2vw(180)};
    display: flex;
    justify-items: left;
    margin-right: 8px;
    position: relative;
    
    > div {
        width: 40px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: auto 0;
        padding-left: 8px;
        min-height: 40px;
        gap: 8px;
        position: relative;

        cursor: pointer;
        transition: 0.5s ease-in-out;
      
        > div {
          width: 100%;
          height: 2px;
          background-color: ${({ theme }) => theme.COLORS.GRAY_100};
          border-radius: 4px;
          transition: 0.5s ease-in-out;
          position: absolute;
        }

        > :nth-child(1) {
          top: 10px;
          transform: rotate(0);
        }

        > :nth-child(2) {
            top: 20px;
            transform: rotate(0);
        }

        > :nth-child(3) {
            top: 30px;
            transform: rotate(0);
        }
    }

    ul {
      display: none;
      opacity: 0;
      transition: 0.5s ease-in-out;
    }

    :hover {
      height: 70px;
      width: ${px2vw(180)};
      background-color: ${({ theme }) => theme.COLORS.GRAY_500};
      border-radius: 8px 8px 0 0;
      gap: 24px;

      z-index: 1;

      > div {
        > :nth-child(1) {
          transform: rotate(45deg);
          top: 20px;
        }

        > :nth-child(2) {
          transform: translateX(40px);
          visibility: hidden;
          opacity: 0;
        }

        > :nth-child(3) {
          transform: rotate(-45deg);
          top: 20px;
        }
      }

      > ul {
        position: absolute;
        top: 60px;
        width: ${px2vw(180)};
        display: flex;
        flex-direction: column;
        opacity: 1;
        gap: 16px;
        text-align: right;

        background-color: ${({ theme }) => theme.COLORS.GRAY_500};
        border-radius: 0 0 8px 8px;
        padding: 8px;

        > li {
          list-style: none;
          font-size: ${px2vw(20)};
        
          > a {
            text-decoration: none;
            color: ${({ theme }) => theme.COLORS.GRAY_100};

            :hover {
              color: ${({ theme }) => theme.COLORS.BLUE_200};
            }
          }
        }
      }
    }

    @media (max-width: 770px) {
        > div {
            width: 32px;
        }

        :hover {
            height: 60px;

            > ul {
                > li {
                    font-size: 14px;
                }
            }
        }
        
    }

    @media (max-width: 430px) {
        width: 40px;

        > div {
            width: 24px;
        }

        :hover {
            width: 110px;
            height: 50px;
            
            > ul {
                width: 110px;
                top: 50px;
                justify-items: right;

                > li {
                    font-size: 14px;
                }
            }
        }
    }
`;