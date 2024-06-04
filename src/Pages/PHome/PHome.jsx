import styled from "styled-components";
import Inset from "@/Common/PagesLayout/Inset.jsx";
import Slideshow from "../Home/Slideshow/Slideshow";
//import Tabbed from "./Tabbed/Tabbed";

const PHome = () => {
    return (
        <HomeStyled>
            <h1>Portfolio</h1>
            <Slideshow />
        </HomeStyled>
    );
};

export default PHome;

const HomeStyled = styled.div`
    h1 {
        background-color: lightblue;
        font-family: Mencken;
    }
`;
