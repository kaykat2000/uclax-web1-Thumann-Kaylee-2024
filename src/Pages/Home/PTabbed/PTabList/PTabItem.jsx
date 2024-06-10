import styled from "styled-components";
import PropTypes from "prop-types";

const PTabItem = ({ ptab, curPTab, curPTabUpdate }) => {
    const handleClick = () => {
        curPTabUpdate(ptab);
    };
    const theClassName = ptab.id === curPTab.id ? "selected" : "";
    return (
        <PTabItemStyled className={theClassName} onClick={handleClick}>
            {ptab.title}
        </PTabItemStyled>
    );
};

export default PTabItem;

// prop-types
PTabItem.propTypes = {
    ptab: PropTypes.object.isRequired,
};

const PTabItemStyled = styled.div`
    background-color: #085b5e;
    color: #168a92;
    text-align: center;
    cursor: pointer;
    border-radius: 5px 5px 0px 0px;
    line-height: 40px;
    margin-right: 5px;
    font-family: Mencken;

    display: inline-block;
    width: clamp(75px, 20%, 150px);

    &.selected {
        background-color: #168a92;
        color: white;
    }
`;
