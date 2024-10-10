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
                        <h2 className="colorPrimaire">{item.title}</h2>
                        <h3 className="colorPrimaire">{item.location}</h3>
                        <ul className="tags row">
                            {item.tags.map((tag, index) => (
                                <li className="backPrimaire colorWhite" key={index}>
                                    {tag}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="hostInfos">
                        <div className="host row between">
                            <h4 className="colorPrimaire">{item.host.name}</h4>
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
                <div className="collapse_block row ">
                    <Collapse
                        collapse_housing="collapse_housing"
                        about={{
                            title: "Description",
                            text: item.description,
                            list: false,
                        }}
                    />
                    <Collapse
                        collapse_housing="collapse_housing"
                        about={{ title: "Equipements", text: item.equipments, list: true }}
                    />
                </div>
            </div>
        </div>
    )
}