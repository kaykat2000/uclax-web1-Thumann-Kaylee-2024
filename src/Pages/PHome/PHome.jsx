import styled from "styled-components";
import Inset from "@/Common/PagesLayout/Inset.jsx";
import hpic1 from "./imageshomepage/Asset 1.png";
import hpic2 from "./imageshomepage/Asset 2.png";
import hpic3 from "./imageshomepage/Asset 4.png";
import hpic4 from "./imageshomepage/Asset 5.png";
import hpic5 from "./imageshomepage/dandelion@3x.png";
import hpic6 from "./imageshomepage/Asset 6.png";
import hpic7 from "./imageshomepage/peony@3x.png";
import ModalImage from "react-modal-image";

import PSlideshow from "../Home/PSlideshow/PSlideshow";
import PTabbed from "../Home/PTabbed/PTabbed";
//import Tabbed from "./Tabbed/Tabbed";

const PHome = () => {
    return (
        <HomeStyled>
            <h1>{/* MY PORTFOLIO */}</h1>
            {/* <div className="shared Background my-cover-bg">
                <ModalImage
                    small={hpic7}
                    large={hpic7}
                    alt="Lineart"
                    //alt="Hello World!"
                />
            </div> */}
            <div></div>
            {/* <phome>
                <img id="pone" src="hpic1" />
                <img id="ptwo" src="hpic2" />
                <img id="pthree" src="hpic3" />
            </phome> */}
            {/* <body className="Background">
                <img src={hpic1} alt="bg" />
            </body> */}
            {/* <img src={imgSrc} src2={hpic5} src3={hpic1} /> */}
            <div className="shared Background">
                <img src={hpic4} alt="bg" />
                <div className="shared-two Background">
                    <ModalImage
                        small={hpic6}
                        large={hpic7}
                        alt="Lineart"
                        //alt="Hello World!"
                    />
                </div>
            </div>
            <PSlideshow />;
            <div className="shared Background">
                <Inset>
                    <PTabbed />
                </Inset>
            </div>
        </HomeStyled>
    );
};

export default PHome;

const HomeStyled = styled.div`
    h1 {
        background-color: #abd2cf;
        font-family: Mencken;
    }

    div.shared.my-cover-bg {
        border: solid 3px red;
        height: 500px;
        background-image: url(${hpic4});
        background-repeat: no-repeat;
        background-size: contain;
        background-position: center center;
    }

    div.shared {
        /* display: flex; */
        background-color: #b0cfd8;
        padding: 20px;
        max-width: 100%;
        height: auto;
    }

    div.shared-two {
        /* display: flex; */
        background-color: #b0cfd8;
        padding: 20px;
        max-width: 100%;
        height: auto;
        background-position: right right;
    }

    .flower img {
        /* display: inline; */
        /* position: absolute; */
        right: 30px;
        margin: 30px auto;
        padding: 20px;
        /* border: solid 20px teal; */
        background-color: #abd2cf;
    }

    .phome {
        position: relative;
        background-color: #abd2cf;
    }
    .phome img {
        width: 100%;
        position: absolute;
    }
    .phome img#pone {
        z-index: 10;
        top: 50px;
        left: 50px;
        opacity: 0.5;
    }
    .phome img#ptwo {
        z-index: 9;
    }

    .phome img#pthree {
        /* display: inline; */
        position: absolute;
        right: 30px;
        margin: 30px auto;
        padding: 20px;
        /* border: solid 20px teal; */
        background-color: #abd2cf;
    }
`;
