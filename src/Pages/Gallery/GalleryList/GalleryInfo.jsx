import styled from "styled-components";
import PropTypes from "prop-types";
import Accolades from "./Accolades/Accolades";

const GalleryInfo = ({ member }) => {
    //console.log({ member: member.name });

    const { name, image, yearStarted, accolades } = member;

    return (
        <GalleryInfoStyled>
            <img src={image} alt={name} />
            {/* <h3>{name}</h3>
            <div className="bottom">
                <p>
                    <b>Year Started:</b> {yearStarted}
                </p>
                <Accolades accolades={accolades} />
            </div> */}
        </GalleryInfoStyled>
    );
};

export default GalleryInfo;

// prop-types
GalleryInfo.propTypes = {
    member: PropTypes.object.isRequired,
};

const GalleryInfoStyled = styled.div`
    //background-color: #abd2cf;

    img {
        width: 100%;
        display: block;
    }

    .bottom {
        padding: 20px;
    }

    h3 {
        color: white;
        /* background-color: #abd2cf; */
        padding: 5px 10px; // 5px=bottom; 10px = right
        margin: 0px;
    }
`;
