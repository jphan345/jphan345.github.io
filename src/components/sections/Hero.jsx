import './Hero.css';

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import React, { useRef } from 'react';

export default function Hero() {
  const container = useRef();

  useGSAP(() => {
    const tl = gsap.timeline();

    tl
      .to(".hero-row > .mask > h1", 2, {
        top: 0,
        ease: "power3.inOut",
        stagger: {
          amount: 0.3
        }
      }, "+=5");

  }, {scope: container});

  return (
    <section id="hero" className="hero-section" aria-label="hero" ref={container}>
      <div className="hero hide-mobile">
        <span className="hero-row">
          <div className="mask">
            <h1>Hi,</h1>
          </div>
        </span>
        <span className="hero-row">
          <div className="mask">
            <h1>I'm</h1>
            <span className="hero-nbsp">&nbsp;</span>
            <h1 className="hero-title-fill interactable-img" data-text="JOHNNY">Johnny</h1>
          </div>
        </span>
        <span className="hero-row">
          <div className="mask">
            <h1 className="hero-title-fill interactable-img" data-text="PHAN">Phan</h1>
            <h1>,</h1>
            <span className="hero-nbsp">&nbsp;</span>
            <h1>nice to</h1>
          </div>
        </span>
        <span className="hero-row">
          <div className="mask">
            <h1>meet you.</h1>
          </div>
        </span>
        <span className="hero-row">
          <div className="mask">
            <h1 className="hero-title-fill hero-arrow" data-text="↓">↓</h1>
          </div>
        </span>
      </div>

      <div className="hero show-mobile">
        <span className="hero-row">
          <div className="mask">
            <h1>Hi, I'm</h1>
          </div>
        </span>
        <span className="hero-row">
          <div className="mask">
            <h1 className="hero-title-fill" data-text="JOHNNY">Johnny</h1>
          </div>
        </span>
        <span className="hero-row">
          <div className="mask">
            <h1 className="hero-title-fill" data-text="PHAN">Phan</h1>
            <h1>,</h1>
            <span className="hero-nbsp">&nbsp;</span>
            <h1>nice</h1>
          </div>
        </span>
        <span className="hero-row">
          <div className="mask">
            <h1>to meet</h1>
          </div>
        </span>
        <span className="hero-row">
          <div className="mask">
            <h1>you.</h1>
          </div>
        </span>
        <span className="hero-row">
          <div className="mask">
            <h1 className="hero-title-fill hero-arrow" data-text="↓">↓</h1>
          </div>
        </span>
      </div>
    </section>
  );
}