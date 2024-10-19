import star from "../../assets/star_full.png"
import starNull from "../../assets/star_empty.png"
import './star.scss'
export const Star = ({ isFilled }) => {
    return (
        <img
            className="ratingStar"
            src={isFilled ? star : starNull}
            alt="ratings"
        />
    )
}