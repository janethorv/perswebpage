import Linkedin from '../images/linkedin.svg';
import Github from '../images/github.svg';

export default function ContactLinks() {
    return (
        <div className='contact-links'>
            <div className="github">
                <h3>GitHub</h3>
                <img src={Github} alt="GitHub Icon"></img>
                <a href="https://github.com/janethorv" target="_blank" rel="noreferrer">Min Github</a>
            </div>
            <div className="linkedin">
                <h3>LinkedIn</h3>
                <img src={Linkedin} alt="LinkedIn Icon"></img>
                <a href="https://www.linkedin.com/in/jan-einar-thorvaldsen/" target="_blank" rel="noreferrer">Min LinkedIn</a>
            </div>
        </div>
    )
}