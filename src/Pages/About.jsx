import aboutBanner from '../assets/about_banner.jpg'
import Banner from '../Components/Banner/Banner';
import { Collapse } from '../Components/Collapse/Collapse';
import { aboutDatas } from '../datas/aboutDatas';

const About = () => {
  return (
    <div className="about">
      <div className="bannerAbout">
        <Banner image={aboutBanner} alt="bannière à propos" />
      </div>
      <div className=" column center ">
        {aboutDatas.map((abouts) => (
          <div className='collapse_about' key={abouts.id}>
            <Collapse title={abouts.title} type="about">
              <p>{abouts.text}</p>
            </Collapse>
          </div>
        ))}
      </div>
    </div>
  )
}

export default About;
