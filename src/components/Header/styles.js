import styled from "styled-components";
import px2vw from "../../utils/px2vw";

export const Container = styled.div`
  grid-area: header;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px ${px2vw(120)};

  width: 100%;
  height: 104px;
  background: ${({ theme }) => theme.COLORS.GRAY_700};

  > div {
    display: flex;
    align-items: center;
    gap: ${px2vw(12)};
    font-size: 26px;
    font-weight: 700;
  }

  > a {
    text-decoration: none;
    display: flex;
    align-items: center;

    font-size: 16px;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    
    :hover {
      opacity: .9;
    }

    > img {
      width: 24px;
      height: 24px;
    }
  }

  > button {
    gap: ${px2vw(8)};

    width: ${px2vw(216)};
    min-width: 160px;
    height: 52px;

    > img {
      width: 26px;
      height: 22px;
    }
  }

  @media (max-width: 770px) {
    > a {
      display: none;
      width: 0;
    }

    > button {
      padding: 12px;
    }
  }

  @media (max-width: 430px) {
    display: none;
  }
`;

export const SearchInput = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 12px 14px;
  gap: ${px2vw(14)};
  border-radius: 5px;

  width: ${px2vw(410)};
  height: 48px;
  background: ${({ theme }) => theme.COLORS.GRAY_500};

  > img {
    display: flex;
    align-items: center;
    height: 24px;
    width: 24px;
  }

  > input {
    background: transparent;
    height: 100%;
    width: 100%;
    border: none;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    outline: none;
    font-size: 16px;

    ::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_300};
    }
  }
`;

/*
export const Menu = styled.section`
  display: none;
  width: 0px;

  @media (max-width: 770px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    > div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 40px;
        height: 40px;
        position: relative;

        cursor: pointer;
        transition: 0.5s ease-in-out;
      
        > div {
          width: 100%;
          height: 2px;
          background-color: ${({ theme }) => theme.COLORS.GRAY_100};
          border-radius: 4px;
          position: absolute;
          transition: 0.5s ease-in-out;
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

    > ul {
      display: none;
      transition: 0.5s ease-in-out;
    }

    :hover {
      height: 216px;
      width: 130px;
      margin-top: 160px;
      background-color: ${({ theme }) => theme.COLORS.GRAY_500};
      border-radius: 8px;
      gap: 24px;

      z-index: 1;

      > div {
        > :nth-child(1) {
        transform: rotate(45deg);
        top: 20px;
        }

        > :nth-child(2) {
          transform: translateX(40px);
          width: 30px;
          visibility: hidden;
          opacity: 0;
        }

        > :nth-child(3) {
          transform: rotate(-45deg);
          top: 20px;
        }
      }

      > ul {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 16px;

        > li {
          list-style: none;

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
  } 
`; */