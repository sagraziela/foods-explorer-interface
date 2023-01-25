import { Container } from "./styles";
import arrowLeftImg from "../../assets/icons/arrow_left.svg";
import arrowRightImg from "../../assets/icons/arrow_right.svg";
import { useEffect, useState, useRef } from "react";

export function Section({ title, children }) {

    let ref = useRef();

    const [carousel, setCarousel] = useState({
        isDragStart: false, 
        prevPageX: 0, 
        prevScrollLeft: 0,
    });

    function handleScrollBtn(e) {
        const iconId = e.target.id;
        const scrollLength = ref.current.children[0].clientWidth + 28;
        ref.current.scrollLeft += iconId === "left" ? -scrollLength : scrollLength;
    }

    function dragStart(e) {
        setCarousel({
            isDragStart: true,
            prevPageX: e.clientX,
            prevScrollLeft: e.target.scrollLeft,
        })
    }

    function dragging(e) {
        if (!carousel.isDragStart) return;
        e.preventDefault();
        let positionChange = e.clientX - carousel.prevPageX;
        e.target.scrollLeft = carousel.prevScrollLeft - positionChange;
    }

    function dragStop() {
        setCarousel({...carousel, isDragStart: false})
    }

    return (
        <Container>
            <h2>{title}</h2>

            <div className="wrapper">
                <button
                id="left"
                onClick={e => handleScrollBtn(e)}
                >
                    <img src={arrowLeftImg} id="left" />
                </button>

                <div 
                className="carousel"
                ref={ref}
                onMouseDown={e => dragStart(e)}
                onMouseMove={e => dragging(e)}
                onMouseUp={() => dragStop()}
                >
                    {children}
                </div>

                <button 
                id="right"
                onClick={e => handleScrollBtn(e)}
                >
                    <img src={arrowRightImg} id="right" />
                </button>
            </div>
        </Container>
    )
}