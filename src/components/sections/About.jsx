import './About.css';

import React from 'react';


export default function About() {
    return (
        <section id="about" className="about" aria-label="about">
            <div className="grid">
                <span className="section-header-1 reveal-wrapper">
                  <div className="reveal-mask">
                    <h2 className="reveal-text" aria-hidden="true">(01)</h2>
                  </div>
                </span>
                <span className="section-header-2 reveal-wrapper">
                  <div className="reveal-mask">
                    <h2 className="reveal-text">WHO AM I?</h2>
                  </div>
                </span>
                <span className="about-title reveal-wrapper">
                  <div className="reveal-mask">
                    <h3 className="reveal-text">JOHNNY PHAN</h3>
                  </div>
                </span>
                <span className="about-subtitle-1 reveal-wrapper">
                  <div className="reveal-mask">
                    <h3 className="reveal-text">/'dʒɒni fæn/ - [john·ny phan]</h3>
                  </div>
                </span>
                <span className="about-subtitle-2 reveal-wrapper">
                  <div className="reveal-mask">
                    <h3 className="reveal-text">(noun)</h3>
                  </div>
                </span>
                <span className="about-desc about-desc-num-1 fade-in">1</span>
                <span className="about-desc about-desc-content-1 fade-in">
                    I'm a software engineer with a passion for artificial intelligence, machine learning, 
                    and web development. I love being challenged with creative problems, but above all else, 
                    I am committed to using my skills to make a meaningful impact on the world.
                </span>
                <span className="about-desc about-desc-num-2 fade-in">2</span>
                <span className="about-desc about-desc-content-2 fade-in">
                    Beyond programming, you can always find me doing one of the following: gaming, rock 
                    climbing, cooking, or spending time with friends!
                </span>
            </div>
        </section>
    );
}