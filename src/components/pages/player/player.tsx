import { SideBar } from "../../side-bar/sideBar";
import { Npc } from "../../card-npc/npc";
export function Player() {
  return (
    <>
        <div className="wrapper">
         <SideBar></SideBar>
          <div id="content">
           <Npc/>
           <Npc/>
          </div>
        </div>
    </>
  );
}
