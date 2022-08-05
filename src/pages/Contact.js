import '../css/Contact.scss';
import ContactMail from '../components/ContactMail';
import ContactLinks from '../components/ContactLinks';

export default function Contact() {
    return (
        <div className='contact'>
            <ContactMail />
            <ContactLinks />
        </div>
    

    )
}