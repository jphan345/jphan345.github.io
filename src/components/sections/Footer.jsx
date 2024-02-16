import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';

import "./Footer.css";


export default function Footer() {
    return (
        <section id="footer" className="footer" aria-label="footer">
          <div className="grid">
            <a href="https://www.linkedin.com/in/jphan345/" target="_blank" rel="noreferrer">
              <FontAwesomeIcon className="footer-icon interactable-button" icon={faLinkedinIn} />
            </a>
            <a href="https://github.com/jphan345" target="_blank" rel="noreferrer">
              <FontAwesomeIcon className="footer-icon interactable-button" icon={faGithub} />
            </a>
            <a href="https://www.instagram.com/jowohnny" target="_blank" rel="noreferrer">
              <FontAwesomeIcon className="footer-icon interactable-button" icon={faInstagram} />
            </a>
          </div>
        </section>
    );
}