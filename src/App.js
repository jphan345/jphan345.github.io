import './App.css';

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SmoothScroll from './components/ui/SmoothScroll';

import Loader from './components/ui/Loader'
import NavBar from './components/ui/NavBar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact';
import Footer from './components/sections/Footer';

function App() {
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    const revealTexts = document.querySelectorAll(".reveal-wrapper");
    revealTexts.forEach((text) => {
      const revealTexts = text.querySelectorAll(".reveal-text");
      
      revealTexts.forEach((text) => {
        gsap.set(text, {yPercent: 100});
      });

      revealTexts.forEach((text) => {
        ScrollTrigger.create({
          trigger: text,
          start: "top 90%",
          end: "bottom 10%",
          scrub: false,
          markers: false,
          animation: gsap.to(text, {
            yPercent: 0,
            duration: 2,
            ease: "power3.inOut"
          }),

        });
        ScrollTrigger.refresh()
      });
    });

    const fadeInTexts = document.querySelectorAll(".fade-in");
    fadeInTexts.forEach((text) => {
      ScrollTrigger.create({
        trigger: text,
        start: "top 90%",
        end: "bottom 10%",
        scrub: false,
        markers: false,
        animation: gsap.to(text, {
          opacity: 1,
          duration: 1.5,
          ease: "power3.inOut"
        }),

      });
      ScrollTrigger.refresh()
    });
  }, []);

  return (
    <SmoothScroll>
      <div id="app">
        <Loader />
        <NavBar />
        <Hero />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </SmoothScroll>
  );
}

export default App;
