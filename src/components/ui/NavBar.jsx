import './NavBar.css';

import { useLenis } from '@studio-freight/react-lenis'


export default function NavBar() {
    const lenis = useLenis(({ scroll }) => {});

    const scrollToAnchor = (e) => {
        e.preventDefault();
        lenis.scrollTo("#about");
        window.location.href = "#about";
    }

    const scrollToProjects = (e) => {
        e.preventDefault();
        lenis.scrollTo("#projects");
        window.location.href = "#projects";
    }
    
    const scrollToContact = (e) => {
        e.preventDefault();
        lenis.scrollTo("#contact");
        window.location.href = "#contact";
    }

    return (
        <div className="header">
            <div className="header-logo interactable-button">
                <a className="link-logo" aria-label="Home page" href="/">
                    <svg width="32" height="32" viewBox="0 0 196 205" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="98" cy="98" r="98" fill="currentColor"/>
                        <path d="M15.5 102C8.90328 106.948 6.33292 127.333 6.99959 137.5C27.0006 210.5 135.5 229 171.5 164.5C175.1 148.9 173.5 135.5 170.5 126C169.237 122 161.5 106.5 160.5 103.5C159.5 100.5 158.5 90.5 160 86C165.5 85.5 171 85.5 179 83.5C187.5 81 189 78 192.5 74.5C192.9 72.9 189 61 187.5 59.5C185 59.5 183 60.5 174.5 59.5C168.5 58.5 162.928 52.5 160.5 44C156.5 30 145.833 22.8333 141 21C132.6 16.6 111.5 15.3334 99.4997 20C90.4997 23.5 80.9997 31.5 77.4997 43C74.304 53.5 74.4997 60 77.4997 71C80.9997 81.5 85.9997 86 83.4997 99C83.0189 101.5 80.4519 103.562 78.4997 105C68.9997 112 59.9997 112 49.9997 110.5C43.5636 109.535 31.4997 100.954 27.5003 99.5C22.0003 97.5 17.4997 100.5 15.5 102Z" fill="#000000" stroke="#000000" strokeMiterlimit="4.13357"/>
                        <circle cx="139" cy="60" r="8" fill="currentColor"/>
                        <path d="M141.5 143.5C143.446 132.212 141.833 114.5 140.5 107C140.833 112.833 141 126.4 139 134C135.973 145.5 131 153 121 159.5L120.953 159.531C117.836 161.557 109.281 167.118 91.9998 164.5C75.5 162 67.9998 145 70.9998 152.5C73.9998 160 77 171.5 90.4998 177.5C109.679 186.024 123.784 175.772 128 172C137.5 163.5 138.913 158.5 141.5 143.5Z" fill="currentColor" stroke="currentColor"/>
                    </svg>
                </a>
            </div>
            <nav className="navbar hide-mobile">
                <ul>
                    <li className="navbar-item interactable-button">
                        <a href="#about" onClick={scrollToAnchor} className="navbar-about">
                            About
                        </a>
                    </li>
                    <li className="navbar-item interactable-button">
                        <a href="#projects" onClick={scrollToProjects} className="navbar-projects">
                            Projects
                        </a>
                    </li>
                    <li className="navbar-item interactable-button">
                        <a href="#contact" onClick={scrollToContact} className="navbar-contact">
                            Contact
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}