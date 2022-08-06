import '../css/Home.scss';
import HomeHeader from "../components/HomeHeader";
import { Spring } from 'react-spring';
import { animated } from 'react-spring';
import { useEffect } from 'react';
import HomeIngress from '../components/HomeIngress';
import HomeTypewriter from '../components/HomeTypewriter';

export default function Home() {
    var runAnimation = localStorage.getItem('show_intro_animation');

    useEffect(()=>{
        localStorage.setItem('show_intro_animation', 1);
        window.onbeforeunload = () => {
            localStorage.removeItem("show_intro_animation");
        }
    })

    if (runAnimation === null) {

        return (
            <div className='home'>
                <div>
                <Spring 
                    from={{ opacity: 0, marginTop: -500}}
                    to={{opacity: 1, marginTop: 0}}
                    config={{duration: 2000}}
                >
                    {props => (
                        <animated.div style={props}>
                            <HomeHeader />
                        </animated.div>
                    )}
                </Spring>
                </div>
                <div>
                <Spring 
                    from={{ opacity: 0, marginTop: 0}}
                    to={{opacity: 1}}
                    config={{delay: 7000, duration: 4000}}
            >
                {props => (
                    <animated.div style={props}>
                        <HomeIngress />
                    </animated.div>
                )}
                </Spring>
                </div>
                <HomeTypewriter/>
            </div>
        )
    }

   else {
        return (
            <div className='home'>
                <HomeHeader />
                <HomeTypewriter />
            </div>
        )
   }    
}

