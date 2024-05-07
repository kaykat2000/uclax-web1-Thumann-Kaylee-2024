import styled from "styled-components";
import PropTypes from "prop-types";
import AccoladeItem from "./AccoladeItem";
// better to not use index keys because they can change
const Accolades = ({ accolades, idx }) => {
    return (
        <AccoladesStyled>
            {accolades.map((accolade, idx) => {
                return <AccoladeItem key={idx} accolade={accolade} />;
            })}
        </AccoladesStyled>
    );
};

export default Accolades;

// prop-types
Accolades.propTypes = {
    accolades: PropTypes.array.isRequired,
};

const AccoladesStyled = styled.ul`
    padding-left: 20px;
    list-style: disc;
`;
