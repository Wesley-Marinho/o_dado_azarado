import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import "./styles.scss";

export function GitButton() {
  return (
    <>
      <a type="button" className="signInButton" href="https://github.com/Wesley-Marinho/o_dado_azarado">
        <FontAwesomeIcon className="fa-lg" icon={faGithub} />
        Contribua com a aplicação
      </a>
    </>
  );
}
