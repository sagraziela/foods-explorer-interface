import styled from "styled-components";
import px2vw from "../../utils/px2vw";

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
                width: 15%;
            }

            > :nth-child(2) {
                width: 15%;
            }

            > :nth-child(3) {
                width: auto;
            }

            > :nth-child(4) {
                width: 15%;
            }
        }
    }
    
    > tbody {
         > tr {
            > td {
                padding: 21px 24px;
                border: 1px solid ${({ theme }) => theme.COLORS.GRAY_300};
            }
        }
    }
`;