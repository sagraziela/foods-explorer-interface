import styled from "styled-components";
import px2vw from "../../utils/px2vw";

export const Container = styled.div`
    display: flex;
    height: fit-content;
    gap: ${(props) => props.className==='lg' ? '20px' : '12px'};
    white-space: nowrap;

    > img {
        height: ${(props) => props.className==='lg' ? '49px' : '28px'};
    }

    > h2 {
        font-size: ${( props ) => props.className==='lg' ? '42px' : '24px'};
        color: ${({ isFaded, theme}) => isFaded ? theme.COLORS.GRAY_300 : theme.COLORS.GRAY_100};
    }

    @media (max-width: 770px) {
        gap: ${(props) => props.className==='lg' ? px2vw(16, 770) : px2vw(8, 770)};

        > img {
            height: ${(props) => props.className==='lg' ? px2vw(40, 770) : px2vw(20, 770)};
        }

        > h2 {
            font-size: ${( props ) => props.className==='lg' ? px2vw(32, 770) : px2vw(18, 770)};
        }
    }

    @media (max-width: 430px) {
        gap: ${(props) => props.className==='lg' ? px2vw(20, 430) : px2vw(8, 430)};

        > img {
            height: ${(props) => props.className==='lg' ? px2vw(49, 430) : px2vw(20, 430)};
        }

        > h2 {
            font-size: ${( props ) => props.className==='lg' ? px2vw(42, 430) : px2vw(18, 430)};
        }
    }
    
`;