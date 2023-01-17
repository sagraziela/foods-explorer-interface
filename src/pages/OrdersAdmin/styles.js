import styled from "styled-components";
import px2vw from "../../utils/px2vw";
import arrowDownImg from "../../assets/icons/arrow_down.svg";
import redDot from "../../assets/icons/redDot.svg";
import greenDot from "../../assets/icons/greenDot.svg";

export const Container = styled.div`
    height: 100vh;
    display: grid;
    grid-template-rows: 104px auto 77px;
    grid-template-areas: "header"
    "content"
    "footer";

    > main {
        grid-area: content;
        margin: 48px ${px2vw(113)} auto ${px2vw(123)};

        > h1 {
            font-family: 'Poppins', sans-serif;
            font-size: 32px;
            font-weight: 500;
            margin-bottom: 32px;
        }
    }
`;

export const Table = styled.table`
    width: 100%;
    border-collapse: collapse;

    > thead {
        
        > tr {
            > th {
                padding: 21px 24px;
                border: 1px solid ${({ theme }) => theme.COLORS.GRAY_300};
            }

            > :nth-child(1) {
                width: 18%;
            }

            > :nth-child(2) {
                width: 18%;
            }

            > :nth-child(3) {
                width: auto;
            }

            > :nth-child(4) {
                width: 18%;
            }
        }
    }
    
    > tbody {
         > tr {
            > td {
                padding: 21px 24px;
                border: 1px solid ${({ theme }) => theme.COLORS.GRAY_300};
            }

            > :first-child {
                //
            }
        }
    }
`;

export const StatusSelect = styled.select`
    width: 100%;
    height: 48px;
    display: inline-block;
    padding: 8px 24px 8px ${px2vw(36)};
   
    background-color: ${({ theme }) => theme.COLORS.GRAY_900};
    background-image: ${({ value }) => value == "Pendente" ? `url(${redDot})` : `url(${greenDot})`}, url(${arrowDownImg});
    background-position: 8%, 92%;
    background-size: 16px 16px;
    background-repeat: no-repeat, no-repeat;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    border: 1px solid ${({ theme }) => theme.COLORS.GRAY_300};
    border-radius: 5px;
    overflow: hidden;

    appearance: none;
    
    :focus {
        outline: 1px solid ${({ theme }) => theme.COLORS.BLUE_200};
    }
`;