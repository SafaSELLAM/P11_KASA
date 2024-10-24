import { Navigate, useParams } from "react-router-dom"
import { datas } from "../../datas/datas"
import { Carousel } from "../../Components/Carousel/Carousel"
import { Ratings } from "../../Components/Rating/Ratings"
import { Collapse } from "../../Components/Collapse/Collapse"
import './housings.scss'

export const Housings = () => {
    const id = useParams()
    const item = datas.find((housing) => housing.id === id.id)
    if (!item || !item.id) {
        return <Navigate to='/error' replace={true} />
    }
    return (
        <div className="center">
            <div className="pageHousing">
                <Carousel pictures={item.pictures} />
                <div className="block_infoHousing">
                    <div className="infosHousings">
                        <h2 className="colorPrimary">{item.title}</h2>
                        <h3 className="colorBlack">{item.location}</h3>
                        <ul className="tags row">
                            {item.tags.map((tag, index) => (
                                <li className="backPrimary colorWhite" key={index}>
                                    {tag}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="hostInfos">
                        <div className="host">
                            <h4 className="colorPrimary">{item.host.name}</h4>
                            <img
                                src={item.host.picture}
                                alt={item.host.picture}
                                className="photo_host"
                            />
                        </div>
                        {/* convertir la valeur de la propriété rating de l'objet en un nombre entier. */}
                        <Ratings scaleValue={parseInt(item.rating)} />
                    </div>
                </div>
                <div className="collapse_block">
                    <div className="collapse_housing">
                        <Collapse title="Description">
                            <p>{item.description}</p>
                        </Collapse>
                    </div>
                    <div className="collapse_housing">
                        <Collapse title="Équipements">
                            <ul className="infosList column">
                                {item.equipments.map((equipment, index) => (
                                    <li key={index}>{equipment}</li>
                                ))}
                            </ul>
                        </Collapse>
                    </div>
                </div>
            </div>
        </div>
    )
}