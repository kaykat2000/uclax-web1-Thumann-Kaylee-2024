import styled from "styled-components";
import Inset from "@/Common/PagesLayout/Inset.jsx";
import GalleryList from "./GalleryList/GalleryList";
const Gallery = () => {
    return (
        <GalleryStyled>
            <Inset>
                <h1>My Work</h1>
                <GalleryList />
            </Inset>
        </GalleryStyled>
    );
};

export default Gallery;

const GalleryStyled = styled.div`
    h1 {
        color: #085b5e;
        font-family: Mencken;
    }
`;
