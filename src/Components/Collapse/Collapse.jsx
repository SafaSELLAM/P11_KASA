import { useState } from "react"
import ArrowUp from "../../assets/arrow_up.png";
import ArrowDown from "../../assets/arrow_down.png";
import './collapse.scss'
export const Collapse = ({ title, type, children }) => {
    const [open, setOpen] = useState(false)

    const toggle = () => {
        setOpen(!open)
    }
    return (
        <div className="collapseClass">
            <div className="collapseTitle between center backPrimaire" onClick={toggle}>
                <h2 className="infosTitle colorWhite">{title}</h2>
                <img src={open ? ArrowUp : ArrowDown} alt="flèche" className="arrows" />
            </div>
            {open && (
                <div className="collapseText colorBlack">
                    {children}
                </div>
            )}
        </div>
    );
};