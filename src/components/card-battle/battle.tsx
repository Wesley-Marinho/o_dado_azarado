import { Items } from "../card-itens-battle/Items";
import { Magic } from "../card-magic-battle/magic";
import { Weapons } from "../card-weapons-battle/weapons";
import "./style.scss"

export function Battle(){
  return (
    <div className="ficha-container">
      <div className="ficha-column">
        <Weapons />
        <hr />
        <Magic />
        <hr />
        <Items />
      </div>
    </div>
  );
};