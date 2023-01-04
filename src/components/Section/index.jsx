import { Container } from "./styles";
import arrowLeftImg from "../../assets/icons/arrow_left.svg";
import arrowRightImg from "../../assets/icons/arrow_right.svg";
import Glider from "react-glider";
import 'glider-js/glider.min.css';

export function Section({ title, children }) {

    return (
        <Container>
            <h2>{title}</h2>

            <div>
                <Glider 
                draggable
                hasArrows
                hasDots
                slidesToShow={4}
                slidesToScroll={1}
                >
                    {children}
                </Glider>

            </div>
        </Container>
    )
}