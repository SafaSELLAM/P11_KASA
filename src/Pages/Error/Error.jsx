import { NavLink } from "react-router-dom";
import "./error.scss"

export const Error = () => {
  return (
    <div className="error_container">
      <div className="text_error_container center column">
        <p className="error_text colorPrimary">404</p>
        <p className="msg_error colorPrimary">
          Oups! La page que vous demandez n'existe pas.
        </p>
      </div>
      <div className="link_error">
        <NavLink to="/"> Retourner sur la page d'Accueil</NavLink>
      </div>
    </div>
  );
};