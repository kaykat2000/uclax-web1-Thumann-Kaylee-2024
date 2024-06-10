import styled from "styled-components";
import PropTypes from "prop-types";

const PSlide = ({ slide }) => {
    const { title, image } = slide;
    return (
        <PSlideStyled>
            <img src={image} alt={title} />
            <p className="legend">{title}</p>
        </PSlideStyled>
    );
};

export default PSlide;

// prop-types
PSlide.propTypes = {
    pslide: PropTypes.object.isRequired,
};

const PSlideStyled = styled.div`
    font-family: Mencken;
    background-color: #b0cfd8;
`;
