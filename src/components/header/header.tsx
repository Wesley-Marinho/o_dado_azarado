import {
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import { Home } from "../pages/Home/home";
import { Master } from "../pages/master";
import { Player } from "../pages/player/player";
import { GitButton } from "../github-button/git-button";
import "./style.scss";

export function Header() {
  let location = useLocation();

  return (
    <>
      <header className="headercontainer">
        <div className="headercontent">
         <h1>O dado azarado</h1>
          <nav>
            <Link to={"/o_dado_azarado/"} className={location.pathname==="/o_dado_azarado" ? "active":""}>
              Home
            </Link>
            <Link to={"/o_dado_azarado/master"} className={location.pathname==="/o_dado_azarado/master" ? "active":""}>Mestre</Link>
            <Link to={"/o_dado_azarado/player"} className={location.pathname==="/o_dado_azarado/player" ? "active":""}>Jogador</Link>
          </nav>
          <GitButton />
        </div>
      </header>
      <Routes>
        <Route path="/o_dado_azarado/" element={<Home />} />
        <Route path="/o_dado_azarado/master" element={<Master />} />
        <Route path="/o_dado_azarado/player" element={<Player />} />
      </Routes>
    </>
  );
}
