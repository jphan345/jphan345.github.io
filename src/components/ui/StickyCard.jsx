import './StickyCard.css';

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import React, { useRef, useState, useEffect } from 'react';


export default function StickyCard(props) {
    const [isOverlayOpen, setIsOverlayOpen] = useState(false);

    const setOverlayTrue = () => {
        setIsOverlayOpen(true);
    };
    const setOverlayFalse = () => {
        setIsOverlayOpen(false);
    };

    useEffect(() => {
        if (isOverlayOpen) {
            document.body.style.overflow = 'hidden';
            document.body.style.height = '100%';
        } else {
            document.body.style.overflow = 'unset';
            document.body.style.height = 'auto';
        }
    
        // Cleanup
        return () => {
            document.body.style.overflow = 'unset';
            document.body.style.height = 'auto';
        };
    }, [isOverlayOpen]);

    // GSAP
    let menuOpen = false;

    const container = useRef();
    const overlay = useRef();
    const button = useRef();
    const closeButton = useRef();
    
    useGSAP((context, contextSafe) => {// safe, wrapped in contextSafe() function
        gsap.set(overlay.current, {scaleY: 0});
        gsap.set(".overlay-content-item", {yPercent: 100});

        const tl = gsap.timeline({
            defaults: {
                ease: 'power4.inOut',
                duration: 1
            }
        });

        tl
            .to(overlay.current, {
                scaleY: 1, 
            })
            .to(".overlay-content-item", {
                yPercent: 0,
                // stagger: 0.1,
                duration: 2
            }, "-=1")
            .to(".overlay-container", {
                visibility: "visible"
            }, "-=2");
        tl.pause();

        const playTimeline = () => {
            if (!menuOpen) {
                tl.play();
                menuOpen = true;
            }
            else {
                tl.reverse();
                menuOpen = false;
            }
        };

        const onClickOverlay = contextSafe(() => {
          gsap.to(overlay.current, { playTimeline });
        });
      
        button.current.addEventListener("click", onClickOverlay);
        closeButton.current.addEventListener("click", onClickOverlay);
      
        // cleanup function to remove the event listener
        return () => {
            button.current.removeEventListener("click", onClickOverlay);
            closeButton.current.removeEventListener("click", onClickOverlay);
        };
      
      }, {scope: container});


    return (
        <span ref={container}>
            <div className="card interactable" data-type="see-more" 
            style={{ backgroundColor: props.backgroundColor, color: props.textColor }} ref={button} onClick={setOverlayTrue}>
                <div className="card-title-container">
                    <h2 className="card-title">{props.title}</h2>
                    <span className="show-mobile mobile-click-instructions">(Click to see project details)</span>
                </div>
                <div className="card-render">
                    {props.render}
                </div>
            </div>
            <div className="overlay-container">
                <div className="overlay" style={{ backgroundColor: props.overlayColor }} ref={overlay}></div>
                <div className="grid overlay-content">
                    <div className="overlay-header-title">
                        <div className="mask">
                            <h3 className="overlay-content-item">
                                {props.subtitle}
                            </h3>
                        </div>
                    </div>
                    <div className="overlay-header-link">
                        <div className="mask">
                            <h3 className="overlay-content-item interactable-button">
                                <a href={props.githubLink} target="_blank" rel="noreferrer">Link</a>
                            </h3>
                        </div>
                    </div>
                    <div className="overlay-header-back">
                        <div className="mask">
                            <h3 className="overlay-content-item interactable-button" ref={closeButton} onClick={setOverlayFalse}>
                                Back
                            </h3>
                        </div>
                    </div>
                    <div className="overlay-desc-container">
                        <div className="overlay-desc">
                            <div className="overlay-desc-main">
                                <div className="mask">
                                    {props.overlayDesc}
                                </div>
                            </div>
                        </div>
                        <div className="overlay-img">
                            <div className="mask">
                                <img className="overlay-content-item" src={props.img} alt={props.alt}></img>
                            </div>
                        </div>
                    </div>
                    <div className="overlay-title-container">
                        <div className="overlay-title">
                            <div className="mask">
                                <h2 className="overlay-content-item">{props.overlayTitle}</h2>
                            </div>
                        </div>
                        <div className="overlay-title-desc">
                            <div className="mask">
                                <h3 className="overlay-content-item">{props.overlayTitleDesc}</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </span>
    );
}