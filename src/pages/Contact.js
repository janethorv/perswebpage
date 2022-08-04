import '../css/Contact.scss';
import ContactIntro from '../components/ContactIntro';
import ContactMail from '../components/ContactMail';
import ContactLinks from '../components/ContactLinks';

export default function Contact() {
    return (
        <div className='contact'>
            <ContactIntro />
            <ContactMail />
            <ContactLinks />
        </div>
    

    )
}