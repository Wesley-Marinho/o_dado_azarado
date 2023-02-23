import "./style.scss";
import { SideBar } from "../../side-bar/sideBar";
import { Carousel } from "../../carousel/carousel";
export function Player() {
  return (
    <>
        <div className="wrapper">
         <SideBar></SideBar>
          <div id="content">
            <Carousel/>
          </div>
        </div>
    </>
  );
}
