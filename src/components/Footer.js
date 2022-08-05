import Linkedin from '../images/linkedin.svg';
import Github from '../images/github.svg';
import Envelope from '../images/envelope.svg'

export default function Footer() {
    return (
        <div className="footer">
            <div className="footer-links">
                
                    <div className='footer-link'>
                        <img src={Envelope} alt=""></img>
                        <a href="mailto:janeinartho@hotmail.no" target="_blank" rel="noreferrer">Epost</a>
                    </div>
                    <div className='footer-link'>
                        <img src={Github} alt=""></img>
                        <a href="https://github.com/janethorv" target="_blank" rel="noreferrer">Github</a>
                    </div>
                    <div className='footer-link'>
                        <img src={Linkedin} alt=""></img>
                        <a href="https://www.linkedin.com/in/jan-einar-thorvaldsen/" target="_blank" rel="noreferrer">LinkedIn</a>
                    </div>
                
            </div>
            <div className="footer-trademark">
                <p className='trademark-tekst'>© Jan Einar Thorvaldsen 2022</p>
            </div>
        </div>
    )
}