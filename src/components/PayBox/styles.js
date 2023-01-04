import styled from "styled-components";

export const Container = styled.div`
    width: 530px;
    display: flex;
    flex-direction: column;
    gap: 32px;
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

    > :nth-child(2) {
        height: 364px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    > :nth-child(3) {
        padding: 48px 91px;
        display: flex;
        flex-direction: column;
        gap: 24px;

        > :nth-child(2) {
            display: flex;
            gap: 24px;
        }
    }

    .hide {
        display: none;
    }
`;