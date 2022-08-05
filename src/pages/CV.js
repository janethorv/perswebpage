import '../css/CV.scss';
import CVButton from '../components/CVButton';
import CVIntro from '../components/CVIntro';
import CVSummary from '../components/CVSummary';

export default function CV() {
    return (
        <div className="CV">
            <div className='CV-intro-container'>
                <CVIntro />
                <CVButton />
            </div>
            <CVSummary />
        </div>
    )
}