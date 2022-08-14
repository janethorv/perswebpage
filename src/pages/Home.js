import '../css/Home.scss';
import HomeHeader from "../components/HomeHeader";
import { Spring } from 'react-spring';
import { animated } from 'react-spring';
import { useEffect } from 'react';
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
                    from={{ opacity: 0}}
                    to={{opacity: 1}}
                    config={{duration: 3000}}
                    
                    
                >
                    {props => (
                        <animated.div style={props}>
                            <HomeHeader />
                        </animated.div>
                    )}
                </Spring>
                </div>
                <Spring 
                    from={{ opacity: 0}}
                    to={{opacity: 1}}
                    config={{duration: 7000}}
                >
                    {props => (
                        <animated.div style={props}>
                            <HomeTypewriter/>
                        </animated.div>
                    )}
                </Spring>
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

