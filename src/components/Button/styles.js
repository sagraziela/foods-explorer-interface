import styled from "styled-components";
import px2vw from "../../utils/px2vw";

export const Container = styled.button`
    width: 100%;
    height: 48px;
    background-color: ${({ theme, grayBg }) => grayBg ? theme.COLORS.WHITE_TRANSPARENT : theme.COLORS.RED_700};
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-family: 'Poppins', sans-serif;
    font-size: 14px;
    opacity: ${({ grayBg }) => grayBg ? 0.8 : 1 };

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;

    border: ${({ theme, grayBg }) => grayBg ? `1px solid ${theme.COLORS.WHITE}` : 'none' };
    border-radius: 5px;

    cursor: pointer;
    transition: .3s;

    > img {
      width: ${px2vw(26)};
      height: ${px2vw(22)};
    }

    :hover {
        filter: ${({ grayBg }) => grayBg ? 'brightness(.8)' : 'brightness(1.2)' };
    }

    @media (max-width: 770px) {
        height: 36px;
        font-size: 12px;

        > img {
            width: 22px;
            height: 18px;
        }
    }

    @media (max-width: 430px) {
        height: 32px;
        font-size: 10px;
    }
`;