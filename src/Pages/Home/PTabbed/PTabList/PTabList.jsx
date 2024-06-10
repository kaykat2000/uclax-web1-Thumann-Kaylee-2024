import styled from "styled-components";
import PropTypes from "prop-types";

import PTabItem from "./PTabItem";

const PTabList = ({ ptabs, curPTab, curPTabUpdate }) => {
    console.log({ ptabs });

    return (
        <PTabListStyled>
            {ptabs.map((ptab) => {
                return (
                    <PTabItem
                        key={ptab.id}
                        ptab={ptab}
                        curPTab={curPTab}
                        curPTabUpdate={curPTabUpdate}
                    />
                );
            })}
        </PTabListStyled>
    );
};

export default PTabList;

// prop-types
PTabList.propTypes = {
    ptabs: PropTypes.array.isRequired,
};

const PTabListStyled = styled.div``;
