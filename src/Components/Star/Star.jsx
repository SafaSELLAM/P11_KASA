import './star.scss'
export const Star = ({ isFilled }) => {
    const filled = isFilled ? 'full' : 'empty';
    return (
        <i
            className={`fa-solid fa-star ratingStar ${filled}`}
        ></i>
    )
}