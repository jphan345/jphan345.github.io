import './Loader.css';

import { useEffect } from 'react';
import gsap from 'gsap';


export default function Loader() {
    useEffect(() => {
        document.body.style.overflow = 'hidden';  // disable scrolling
        const counter3 = document.querySelector(".counter-3");

        for (let i = 0; i < 2; i++) {
            for (let j = 0; j < 10; j++) {
                const div = document.createElement("div");
                div.className = "num";
                div.textContent = j;
                counter3.appendChild(div);
            }
        }

        const finalDiv = document.createElement("div");
        finalDiv.className = "num";
        finalDiv.textContent = "0";
        counter3.appendChild(finalDiv);

        function animate(counter, duration, delay=0) {
            const numHeight = counter.querySelector(".num").clientHeight;
            const totalDistance = (counter.querySelectorAll(".num").length - 1) * numHeight;

            gsap.to(counter, {
                y: -totalDistance,
                duration: duration,
                delay: delay,
                ease: "power2.inOut"
            });
        }

        animate(counter3, 3);
        animate(document.querySelector(".counter-2"), 3);
        animate(document.querySelector(".counter-1"), 1, 2)

        const tl = gsap.timeline({
            defaults: {
                ease: 'power4.inOut',
                duration: 1
            }
        });

        tl
            .to(".digit", {
                top: "-150px",
                stagger: {
                    amount: 0.25
                },
                delay: 3,
                duration: 1,
                ease: "power4.inOut"
            })
            .to(".loader-header", {
                top: "-200px"
            }, "-=1s")
            .to("#loader", {
                scaleY: 0,
            }
        );
        
        document.body.style.overflow = 'unset';  // reenable scrolling
        
        // Cleanup
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, []);


    return (
        <div id="loader">
            <div className="loader-header">
                <span className="reveal-wrapper">
                    <div className="reveal-mask">
                        <h1 className="reveal-text">Johnny Phan</h1>
                    </div>
                </span>
                <span className="reveal-wrapper">
                    <div className="reveal-mask">
                        <h1 className="reveal-text">Portfolio '24</h1>
                    </div>
                </span>
            </div>
            <div className="counter">
                <div className="counter-1 digit">
                    <div className="num">0</div>
                    <div className="num num1offset1">1</div>
                </div>
                <div className="counter-2 digit">
                    <div className="num">0</div>
                    <div className="num num1offset2">1</div>
                    <div className="num">2</div>
                    <div className="num">3</div>
                    <div className="num">4</div>
                    <div className="num">5</div>
                    <div className="num">6</div>
                    <div className="num">7</div>
                    <div className="num">8</div>
                    <div className="num">9</div>
                    <div className="num">0</div>
                </div>
                <div className="counter-3 digit">
                    <div className="num">0</div>
                    <div className="num">1</div>
                    <div className="num">2</div>
                    <div className="num">3</div>
                    <div className="num">4</div>
                    <div className="num">5</div>
                    <div className="num">6</div>
                    <div className="num">7</div>
                    <div className="num">8</div>
                    <div className="num">9</div>
                </div>
            </div>
        </div>
    );
}