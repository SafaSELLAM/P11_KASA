import logo_footer from "../../assets/logo-footer.svg";
import './footer.scss'

export const Footer = () =>{
return(
    <footer>
        <div className="footer column around backTertiary">
        <img src={logo_footer} alt="Logo footer kasa " />
        <div className="text_footer colorWhite">@ 2020 Kasa. All rights reserved</div>
        </div>
    </footer>
)
}