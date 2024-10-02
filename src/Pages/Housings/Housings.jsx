import { Navigate, useParams } from "react-router-dom"
import { datas } from "../../datas/datas"
import { Carousel } from "../../Components/Carousel/Carousel"

export const Housings = ()=>{
    const id = useParams()
    const item = datas.find((housing)=> housing.id === id.id)
    if(!item || !item.id){
        return <Navigate to ='/error' replace={true}/>
    }
return(
    <div>
        <Carousel pictures={item.pictures}/>
    </div>
)
}