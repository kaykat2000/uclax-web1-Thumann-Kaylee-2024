import styled from "styled-components";

import { galleryData } from "../galleryData";

import GalleryInfo from "./GalleryInfo.jsx";
import ModalImage from "react-modal-image";

const GalleryList = () => {
    //console.log({ galleryData });

    return (
        <GalleryListStyled>
            {galleryData.map((member) => {
                return <GalleryInfo key={member.id} member={member} />;
            })}
        </GalleryListStyled>
    );
};

export default GalleryList;

const GalleryListStyled = styled.div`
    display: grid;
    //min = 250px wide; max = 1fr (fractional unit of layout)
    grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
    gap: 1rem;
`;
