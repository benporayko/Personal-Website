import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import React from "react";
import flower from '../../resources/static/flower.jpg';

const Home = () => {
    return(
        <div>
            <Parallax pages={4}>
                <ParallaxLayer
                    style={{
                        backgroundImage: `url(${flower})`,
                        backgroundSize: 'cover'
                    }}
                >
                    {/* <h1>Test</h1> */}
                </ParallaxLayer>
                <ParallaxLayer offset={1}>
                    
                </ParallaxLayer>
                <ParallaxLayer offset={2}>
                    
                </ParallaxLayer>
                <ParallaxLayer offset={3}>
                    
                </ParallaxLayer>
            </Parallax>
        </div>
    )
}

export default Home;