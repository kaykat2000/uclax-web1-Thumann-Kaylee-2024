import { useState } from "react";

import styled from "styled-components";

//data
import { ptabbedData } from "./ptabbedData";

//components
import PTabbedContent from "./PTabbedContent";
import PTabList from "./PTabList/PTabList";

const PTabbed = () => {
    const [curPTab, curPTabUpdate] = useState(ptabbedData[0]);

    return (
        <PTabbedStyled>
            <PTabList
                ptabs={ptabbedData}
                curPTab={curPTab}
                curPTabUpdate={curPTabUpdate}
            />
            <PTabbedContent curPTab={curPTab} />
        </PTabbedStyled>
    );
};

export default PTabbed;

const PTabbedStyled = styled.div`
    display: block;
    margin-top: 100px;
    /* position: absolute; */
`;
