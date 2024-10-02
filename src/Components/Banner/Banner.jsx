import './Banner.scss'
const Banner = ({ image, text }) => {
  return (
    <div className="bannerContainer">
      <img className="banner" src={image} alt="bannière" />
      <span className="textBanner colorWhite">{text}</span>
    </div>
  );
};

export default Banner;