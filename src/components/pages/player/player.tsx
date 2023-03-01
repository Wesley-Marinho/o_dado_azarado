import "./style.scss";
import { SideBar } from "../../side-bar/sideBar";
export function Player() {
  return (
    <div className="wraper">
        <div className="wrapper">
         <SideBar></SideBar>
          <div id="content">
           
          </div>
        </div>
    </div>
  );
}
