import styled from "styled-components";
import { NavLink } from "react-router-dom";

/* Components ---------------------------*/
import Inset from "../Inset.jsx";
import SiteLogo from "../SiteLogo/SiteLogo.jsx";
import MainMenu from "./MainMenu.jsx";

{
    /* <template>
   <div v-bind:class="{color: navBarColor}">
   </div>
</template> */
}

const MediumLarge = () => {
    // export default {
    //     computed: {
    //        navBarColor() {
    //           if (this.$route.path === "/phome") { // if it is a dark route
    //             <MediumLargeStyled className="MediumLarge">
    //             <Inset>
    //                 <div className="inset">
    //                     <div className="logo">
    //                         <SiteLogo />
    //                     </div>
    //                     <nav2 className="menus">
    //                         <MainMenu />
    //                     </nav2>
    //                 </div>
    //             </Inset>
    //         </MediumLargeStyled>
    //           }

    return (
        <MediumLargeStyled className="MediumLarge">
            <Inset>
                <div className="inset">
                    <div className="logo">
                        <SiteLogo />
                    </div>
                    <div className="menus">
                        <MainMenu />
                    </div>
                </div>
            </Inset>
        </MediumLargeStyled>
    );
};
// }
// }
// }
export default MediumLarge;

const MediumLargeStyled = styled.header`
    color: white;

    .logo {
        .SiteLogo {
            width: 25%;
            margin: auto;
            padding: 20px 0px;
        }
    }

    .nav2 {
        text-align: center;
        a {
            width: 80px;
            display: block;

            line-height: 30px;
            margin: 0px 0px 20px 5px;
            //border-bottom: solid 3px #84d4d4;

            text-align: center;
            font-family: Mencken;
            font-size: 20px;
            opacity: 0.8;
            color: #84d4d4;
            font-weight: bold;
            text-decoration: none;
            text-transform: uppercase;
        }
    }

    nav {
        text-align: center;
        a {
            width: 80px;
            display: inline-block;

            line-height: 30px;
            margin: 0px 0px 20px 5px;
            border-bottom: solid 3px #168a92;

            text-align: center;
            font-family: Mencken;
            font-size: 12px;
            opacity: 0.8;
            color: #168a92;
            font-weight: bold;
            text-decoration: none;
            text-transform: uppercase;

            &:hover,
            &:active,
            &:focus {
                opacity: 1;
            }

            &.active {
                color: white;
                border-bottom-color: white;
            }
        }
    }
`;
