import Envelope from '../images/envelope.svg'

export default function ContactMail() {
    return (
        <div className='contact-mail'>
            <img src={Envelope} alt="Mail Icon"></img>
            <a href="mailto:janeinartho@hotmail.no">janeinartho at hotmail.no</a>
            <p>Erstatt " at " med "@" uten mellomrom</p>
            <p>Syntaksen er brukt for å forhindre spam</p>
        </div>
    

    )
}