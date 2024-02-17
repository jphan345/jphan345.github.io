import React, { Suspense } from 'react';
// import Spline from '@splinetool/react-spline';

import StickyCard from '../ui/StickyCard';

import './Projects.css';
import '../../index.css';

import chessImg from "../../assets/img/chess-overlay.png";
import mcGif from "../../assets/img/mc-optimized.gif";
import movieflixImg from "../../assets/img/movieflix-mock.png";


export default function Projects() {
    const transparent = "#13131300";
    const black = "#131313";
    const white = "#EAE7E2";
    const gray  = "#C6BEAF";
    
    const Spline = React.lazy(() => import('@splinetool/react-spline'));

    const lazyLoad = (scene) => (
        <Suspense fallback={<div>Loading Project...</div>}>
            {scene}
        </Suspense>
    );
    
    const chess3DRender = lazyLoad(<Spline scene="https://prod.spline.design/nRNBEk3iZG64JjwA/scene.splinecode" renderOnDemand={false} />);
    const minecraft3DRender = lazyLoad(<Spline scene="https://prod.spline.design/4YT5wxK2zr0jpHPk/scene.splinecode" renderOnDemand={false} />);
    const movieflix3DRender = lazyLoad(<Spline scene="https://prod.spline.design/ghXM8FMSE1FX-gEU/scene.splinecode" renderOnDemand={false} />);
  
    return (
      <section id="projects" className="projects" aria-label="projects">
        <div className="projects-header grid">
            <span className="section-header-1 reveal-wrapper">
                <div className="reveal-mask">
                    <h2 className="reveal-text" aria-hidden="true">(02)</h2>
                </div>
            </span>
            <span className="section-header-2 reveal-wrapper">
                <div className="reveal-mask">
                    <h2 className="reveal-text">PROJECTS</h2>
                </div>
            </span>
        </div>
        <div className="project-cards">
            <StickyCard 
                title="Chess AI"
                subtitle="AI Project"
                backgroundColor={transparent}
                textColor={white}
                render={chess3DRender}

                overlayColor={"#343F30"}
                overlayDesc={
                    <div className="overlay-content-item">
                        I couldn’t beat my brother in chess so I built an AI.<br/><br/>

                        This project is a culmination of my passion 
                        for both chess and artificial intelligence. It 
                        uses a minimax algorithm, combined with 
                        in-depth evaluation and search algorithms.<br/><br/>

                        <a className="interactable-button" href="/">Play with it on Lichess here.</a>
                    </div>
                    }
                overlayTitle={"Goldfish"}
                overlayTitleDesc={"Chess AI | Python"}
                githubLink={"/"}

                img={chessImg}
                alt={"Chess game between me and my AI"}
            />
            <StickyCard 
                title="Minecraft AI"
                subtitle="AI Project"
                backgroundColor={gray}
                textColor={"#C9C9C9"} 
                render={minecraft3DRender}

                overlayColor={"#222D26"}
                overlayDesc={
                    <div className="overlay-content-item">
                        This project uses the environment of the MineRL Diamond 
                        Competition Research Track in 2021-2022. <br/><br/>

                        The AI uses an Impala-CNN to train itself to find 
                        diamonds. The action and state space is obscured in this 
                        environment, meaning that the AI had to learn to think 
                        completely on its own based off of gameplay footage.
                    </div>
                    }
                overlayTitle={"Stevie"}
                overlayTitleDesc={"Minecraft AI | Python | PyTorch"}
                githubLink={"https://github.com/jphan345/minecraft-ai"}
                    
                img={mcGif}
                alt={"GIF of minecraft AI trying to find diamonds"}
            />
            <StickyCard
                title="Movieflix"
                subtitle="Fullstack App"
                backgroundColor={black}
                textColor={white} 
                render={movieflix3DRender}
                
                overlayColor={"#24282D"}
                overlayDesc={
                    <div className="overlay-content-item">
                        A full-stack web application project for movie shopping 
                        using React, SQL, Spring Boot, and Java. <br/><br/>

                        Features robust security features with JWTs, access 
                        tokens, and refresh tokens to create a login feature, 
                        as well as secure payment processing using Stripe.
                    </div>
                    }
                overlayTitle={"MovieFlix"}
                overlayTitleDesc={"Movie Shopping Website | React | SQL | Spring Boot | Java"}
                githubLink={"https://github.com/jphan345/movie-shopping-site"}

                img={movieflixImg}
                alt={"phone mockups of movie shopping website project"}
            />
        </div>
      </section>
    );
  }