import { Battle } from "../../card-battle/battle";
import { SideBar } from "../../side-bar/sideBar";
export function Player() {
  return (
    <>
        <div className="wrapper">
         <SideBar></SideBar>
          <div id="content">
           <Battle/>
          </div>
        </div>
    </>
  );
}
