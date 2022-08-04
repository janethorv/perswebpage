import '../css/About.css';
import AboutIntro from '../components/AboutIntro';
import AboutEdu from '../components/AboutEdu';
import AboutProg from '../components/AboutProg';
import AboutSst from '../components/AboutSst';
import AboutWork from '../components/AboutWork';
import AboutHob from '../components/AboutHob';
import AboutVdots from '../components/AboutVdots';

export default function About() {
    return (
        <div className="about">
            <AboutIntro />
            <AboutVdots />
            <AboutEdu />
            <AboutVdots /> 
            <AboutProg />
            <AboutVdots />
            <AboutSst />
            <AboutVdots />
            <AboutWork />
            <AboutVdots />
            <AboutHob />
        </div>
    )
}