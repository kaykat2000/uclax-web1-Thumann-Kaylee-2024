import styled from "styled-components";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

//data
import { pslidesData } from "./pslidesData";

//Components
import PSlide from "./PSlide";

const PSlideshow = () => {
    return (
        <PSlideshowStyled>
            <Carousel infiniteLoop={true} autoPlay={true}>
                {pslidesData.map((slide) => {
                    return <PSlide key={slide.id} slide={slide} />;
                })}
            </Carousel>
        </PSlideshowStyled>
    );
};

export default PSlideshow;

const PSlideshowStyled = styled.div``;
