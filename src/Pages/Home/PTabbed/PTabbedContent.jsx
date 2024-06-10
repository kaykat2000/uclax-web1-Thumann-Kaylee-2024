import styled from "styled-components";
import PropTypes from "prop-types";

import { breakpoints } from "@/Common/useMediaQuery";

const PTabbedContent = ({ curPTab }) => {
    const { title, image, text } = curPTab;

    return (
        <PTabbedContentStyled>
            <div className="column1">
                <img src={image} alt={title} />
            </div>
            <div className="column2">
                <h3>{title}</h3>
                <div dangerouslySetInnerHTML={{ __html: text }} />
            </div>
        </PTabbedContentStyled>
    );
};

export default PTabbedContent;

// prop-types
PTabbedContent.propTypes = {
    curPTab: PropTypes.object.isRequired,
};

const PTabbedContentStyled = styled.div`
    padding: 20px;
    background-color: #168a92;

    @media ${breakpoints.isMediumAndUp} {
        display: grid;
        grid-template-columns: 1fr 2fr;
        gap: 1rem;
    }

    img {
        max-width: 100%;
        display: block;
        margin: 0px auto 15px;
    }

    h3 {
        font-size: 30px;
        font-family: Mencken;
        color: white;
    }

    p {
        font-size: 18px;
        font-family: Mencken;
        color: #8cc6c6;
        margin-bottom: 20px;
        line-height: 150%;
    }
`;
