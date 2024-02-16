import "./Cursor.css";
import selfPic from "../../assets/img/self-pic.png";

import React, { useEffect } from 'react';


export default function Cursor() {
    const getTrailerContent = (type) => {
        switch(type) {
            case "see-more":
                return "See more";
            case "back-to-top":
                return "Back to top";
            case "email":
                return "Click to copy";
            case "send-email":
                return "Send an email";
            default:
                return "";
        }
    }

    const animateTrailer = (trailer, e, isInteracting, isImg) => {
        trailer.style.opacity = "1";
        trailer.style.filter  = 'alpha(opacity=100)'; // IE fallback

        const x = e.clientX - trailer.offsetWidth / 2;
        const y = e.clientY - trailer.offsetHeight / 2;

        const scaleSize = isImg ? 30 : (isInteracting ? 6 : 1);
        
        const keyframes = {
            transform: `translate(${x}px, ${y}px) scale(${scaleSize})`
        }

        trailer.animate(keyframes, {
            duration: 800,
            fill: "forwards"
        });
    }


    useEffect(() => {
        window.onmousemove = (e) => {
            const trailer = document.getElementById("trailer");

            const interactable = e.target.closest(".interactable");
            const interactableButton = e.target.closest(".interactable-button");
            const interactableImg = e.target.closest(".interactable-img");

            const interacting = interactable !== null;
            const interactingButton = interactableButton !== null;
            const isImg = interactableImg !== null;
            
            const isInteracting = interactable || interactingButton || isImg;

            animateTrailer(trailer, e, isInteracting, isImg);

            const fillKeyframe = {
                backgroundColor: `${interactingButton ? "transparent" : "#C58F53"}`
            }
            trailer.animate(fillKeyframe, {
                duration: 800,
                fill: "forwards"
            });
            
            if (interacting) {
                trailer.textContent = getTrailerContent(interactable.dataset.type);
            } else {
                trailer.textContent = "";
            } 

            if (isImg) {
                trailer.style.backgroundImage = `url(${selfPic})`;
                trailer.style.border = "0px var(--highlight-color) solid";
                trailer.style.mixBlendMode = "difference";
            } else {
                trailer.style.backgroundImage = "";
                trailer.style.border = "1px var(--highlight-color) solid";
                trailer.style.mixBlendMode = "normal";
            }
        }

        window.onmousedown = (e) => {
            const trailer = document.getElementById("trailer");

            const interactable = e.target.closest(".interactable");
            const interacting = interactable !== null;

            if (interacting && interactable.dataset.type === "email") {
                trailer.textContent = "Copied!";
            } 
        }
    }, []);

    return (
        <div id="trailer"></div>
    );
}