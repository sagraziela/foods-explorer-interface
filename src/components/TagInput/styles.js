import styled from "styled-components";
import px2vw from "../../utils/px2vw";

export const Container = styled.div`
    min-width: 100%;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    outline: 2px ${({ theme }) => theme.COLORS.BLUE_200};

    background-color: ${({ theme, isNew }) => isNew ? "transparent" : theme.COLORS.WHITE_TRANSPARENT};

    border: ${({ theme, isNew }) => isNew ? `2px solid ${theme.COLORS.GRAY_300}` : "none"};

    border-style: ${({ isNew }) => isNew ? "dashed" : "none"};

    > input {
        width: 100%;
        height: 100%;
        padding: 0 12px;
        font-size: 16px;
        color: ${({ theme }) => theme.COLORS.GRAY_100};
        border: none;
        background: transparent;
        outline: none;
    }

    > div {
        display: flex;
        gap: 8px;

        > button {
            background: transparent;
            display: flex;
            justify-content: center;
            align-items: center;
            margin-right: 8px;
            padding: 4px;

            border: 1px solid transparent;

            cursor: pointer;

            > img {
                font-weight: 500;
            }

            :hover {
                border: 1px solid ${({ theme, isNew }) => isNew ? theme.COLORS.BLUE_200 : theme.COLORS.RED_300};
                border-radius: 5px
            }
        }
    }
`;

export const ImageUpload = styled.label`
    height: 16px;
    width: fit-content;
    white-space: nowrap;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 16px;

    padding: 8px;

    font-size: 16px;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    cursor: pointer;

    > img {
        width: 12px;
        height: 12px;
    }

    > input {
        display: none;
    }    

    :hover {
        filter: brightness(.8);
    }
`;