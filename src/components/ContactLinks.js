import Linkedin from '../images/linkedin.svg';
import Github from '../images/github.svg';

export default function ContactLinks() {
    return (
        <div className='contact-links'>
            <div className="github">
                <a href="https://github.com/janethorv" target="_blank" rel="noreferrer">
                    <img src={Github} alt="GitHub Icon"></img>
                    <h3>GitHub</h3>
                </a>
            </div>
            <div className="linkedin">
                <a href="https://www.linkedin.com/in/jan-einar-thorvaldsen/" target="_blank" rel="noreferrer">
                    <img src={Linkedin} alt="LinkedIn Icon"></img>
                    <h3>LinkedIn</h3>    
                </a>
            </div>
        </div>
    )
}