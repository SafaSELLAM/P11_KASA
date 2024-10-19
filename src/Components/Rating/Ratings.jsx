import { Star } from "../Star/Star"
import "./rating.scss"

export const Ratings = ({ scaleValue }) => {
    const range = [1, 2, 3, 4, 5];

    return (
        <div className="ratings">
            {range.map(starRange => (
                <Star key={starRange} isFilled={scaleValue >= starRange} />
            ))}
        </div>
    )
}