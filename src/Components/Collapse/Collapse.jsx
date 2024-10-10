import { useState } from "react"
import ArrowUp from "../../assets/arrow_up.png";
import ArrowDown from "../../assets/arrow_down.png";
import './collapse.scss'
export const Collapse = ({ about, collapse_about, collapse_housing }) => {
    const [open, setOpen] = useState(false)

    const toggle = () => {
        setOpen(!open)
    }
    return (
        <div className={`${collapse_about} ${collapse_housing}`}>
            <div
                className="collapseTitle between center backPrimaire"
                onClick={toggle}
            >
                <h2 className="infosTitle colorWhite">{about.title}</h2>
                <img src={open ? ArrowUp : ArrowDown} alt="flèche" className="arrows" />
            </div>
            {open && (
                <div className="collapseText colorBlack">
                    {about.list === true ? (
                        <ul className="infosList column">
                            {about.text.map((item) => (
                                <li key={item}>{item}</li>
                            ))}
                        </ul>
                    ) : (
                        <p>{about.text}</p>
                    )}
                </div>
            )}
        </div>
    );
};