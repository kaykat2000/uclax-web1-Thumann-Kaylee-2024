import { useState } from "react";

import styled from "styled-components";

//data
import { tabbedData } from "./tabbedData";

//components
import TabbedContent from "./TabbedContent";
import TabList from "./TabList/TabList";

const Tabbed = () => {
    const [curTab, curTabUpdate] = useState(tabbedData[0]);

    return (
        <TabbedStyled>
            <TabList
                tabs={tabbedData}
                curTab={curTab}
                curTabUpdate={curTabUpdate}
            />
            <TabbedContent curTab={curTab} />
        </TabbedStyled>
    );
};

export default Tabbed;

const TabbedStyled = styled.div``;
