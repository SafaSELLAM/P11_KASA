 import aboutBanner from '../assets/about_banner.jpg'
 import Banner from '../Components/Banner/Banner';
 const About = () =>{
    return(
        <div className="about">
        <div className="bannerAbout">
          <Banner image={aboutBanner} alt="bannière à propos" />
        </div>
       
      </div>
    )
}

export default About;
