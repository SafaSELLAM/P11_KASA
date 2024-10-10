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
      <div className=" column center">
        {aboutDatas.map((abouts) => (
          <Collapse
            collapse_about="collapse_about"
            key={abouts.id}
            about={{ title: abouts.title, text: abouts.text, list: false }}
          />
        ))}
      </div>
    </div>
  )
}

export default About;
