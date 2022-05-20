import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import React from "react";
import flower from '../../resources/static/flower.jpg';
import leaf from '../../resources/static/leaf.jpg';
import water from '../../resources/static/water.jpg';
import "../css/global.css";
import "../css/home.css";

// all images from pexel and unsplash

const Home = () => {
    return(
        <div>
            <Parallax pages={3}>
                <ParallaxLayer
                    factor={1}
                    style={{
                        backgroundImage: `url(${flower})`,
                        backgroundSize: '100vw 100vh',
                    }}
                >
                    {/* <img src={flower} className="flower"></img> */}
                </ParallaxLayer>
                <ParallaxLayer offset={1}
                factor={1}
                style={{
                    backgroundImage: `url(${leaf})`,
                    backgroundSize: '100vw 100vh'
                }}
                >
                    {/* <img src={leaf} className="leaf"></img> */}
                </ParallaxLayer>
                <ParallaxLayer offset={2}
                factor={1}
                style={{
                    backgroundImage: `url(${water})`,
                    backgroundSize: 'contain'
                }}
                >
                   {/* <img src={water} className="water"></img>  */}
                </ParallaxLayer>
                {/* <ParallaxLayer offset={3}>
                    
                </ParallaxLayer> */}
            </Parallax>
        </div>
    )
}

export default Home;