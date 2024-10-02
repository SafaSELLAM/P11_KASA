import './card.scss'
export const Card = ({ item }) => {
    return (
        <div className="card">
            <img src={item.cover} alt="image" />
            <h2 className="colorWhite">{item.title}</h2>
        </div>
    )

}