import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import "./styles.scss";

export function GitButton() {
  return (
    <>
      <button type="button" className="signInButton">
        <FontAwesomeIcon className="fa-lg" icon={faGithub} />
        Contribua com a aplicação
      </button>
    </>
  );
}
