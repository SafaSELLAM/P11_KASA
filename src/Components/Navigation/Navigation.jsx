import { NavLink } from "react-router-dom"
import './navigation.scss'

export const Navigation = () =>{
return(
    <div className="navigation">
    <ul>
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? "activeLink" : undefined)}
      >
        <li>Accueil</li>
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive }) => (isActive ? "activeLink" : undefined)}
      >
        <li>A Propos</li>
      </NavLink>
    </ul>
  </div>
)
}