import logo from "../../assets/kasa_logo.svg";
import { Navigation } from "../Navigation/Navigation";
import './header.scss';

export const Header = () =>{
        return (
          <header className="Header between center">
            <img className="logo_kasa" src={logo} alt="Logo Kasa" />
            <Navigation />
          </header>
        );
      };
      

