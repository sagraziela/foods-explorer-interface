import styled from "styled-components";
import px2vw from "../../utils/px2vw";

export const Container = styled.div`
  grid-area: header;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px 0 24px ${px2vw(120)};

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
    min-width: 140px;
    height: 52px;

    > img {
      width: 26px;
      height: 22px;
    }
  }

  @media (max-width: 770px) {
    height: 82px;

    > button {
      width: 140px;
      padding: 8px;
    }
  }

  @media (max-width: 430px) {
    padding: 14px;
    height: 60px;

    > button {
      position: fixed;
      z-index: 1;
      bottom: 12px;
      right: 12px;
      min-width: 56px;
      width: 56px;
      height: 56px;
      border-radius: 50%;
      padding: 8px;

      > img {
        display: none;
      }
    }
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

  @media (max-width: 770px) {
    padding: 4px 8px;
    width: 180px;
    height: 36px;
  }

  @media (max-width: 430px) {
    padding: 4px 8px;
    width: 120px;

    > img {
      height: 16px;
      width: 16px;
    }

    > input {
      font-size: 12px;
    }
  }
`;