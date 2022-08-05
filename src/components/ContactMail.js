import Envelope from '../images/envelope.svg'

export default function ContactMail() {
    return (
        <div className='contact-mail'>
            <p className='contact-info-text'>Send meg gjerne en mail!</p>
            <div className='contact-mail-link'>
                <img src={Envelope} alt="Mail Icon"></img>
                <a href="mailto:janeinartho@hotmail.no">janeinartho at hotmail.no</a>
            </div>
            <p className='caviat'>(Erstatt " at " med "@" uten mellomrom)</p>
        </div>
    

    )
}