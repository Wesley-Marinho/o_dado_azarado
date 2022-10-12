import {
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import { Home } from "../pages/Home/home";
import { Master } from "../pages/master";
import { Player } from "../pages/player";
import { GitButton } from "../github-button/git-button";
import "./style.scss";

export function Header() {
  let location = useLocation();

  return (
    <>
      <header className="headercontainer">
        <div className="headercontent">
          <img src="/images/brand.svg" alt="ig.news" />
          <nav>
            <Link to={"/"} className={location.pathname==="/" ? "active":""}>
              Home
            </Link>
            <Link to={"/master"} className={location.pathname==="/master" ? "active":""}>Mestre</Link>
            <Link to={"/player"} className={location.pathname==="/player" ? "active":""}>Jogador</Link>
          </nav>
          <GitButton />
        </div>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/master" element={<Master />} />
        <Route path="/player" element={<Player />} />
      </Routes>
    </>
  );
}
