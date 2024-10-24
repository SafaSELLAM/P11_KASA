import { NavLink } from "react-router-dom";
import { datas } from "../../datas/datas.js"
import { Card } from "../Card/Card";
import './cards.scss'
export const Cards = () => {
  return (
    <div className="cards backSecondary">
      {datas.map((item) => (
        <NavLink key={item.id} to={`Housing/${item.id}`}>
          <Card item={item} />
        </NavLink>
      ))
      }
    </div>
  )
}