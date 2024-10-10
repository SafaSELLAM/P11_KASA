import star from "../../assets/star_full.png"
import starNull from "../../assets/star_empty.png"
import "./rating.scss"

export const Ratings = ({ scaleValue }) => {
    const range = [1, 2, 3, 4, 5];

    return (
        <div className="ratings around">
            <span key={scaleValue.toString()}>
                {range.map(starRange => scaleValue >= starRange
                    ? <img className="ratingStar" src={star} alt="ratings" />
                    : <img className="ratingStar" src={starNull} alt="ratings" />
                )}

            </span>
        </div>
    )
}