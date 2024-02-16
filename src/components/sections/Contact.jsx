import "./Contact.css";

import { useLenis } from '@studio-freight/react-lenis'


export default function Contact() {
    const lenis = useLenis(({ scroll }) => {});

    const scrollToTop = (e) => {
        e.preventDefault();
        lenis.scrollTo(0);
      };

      function copyEmail() {
        navigator.clipboard.writeText("jphan345@gmail.com");
      }
      
    return (
        <section id="contact" className="contact" aria-label="contact">
            <div className="contact-header grid">
                <span className="section-header-1 reveal-wrapper">
                  <div className="reveal-mask">
                    <h2 className="reveal-text" aria-hidden="true">(03)</h2>
                  </div>
                </span>
                <span className="section-header-2 reveal-wrapper">
                  <div className="reveal-mask">
                    <h2 className="reveal-text">SAY HELLO</h2>
                  </div>
                </span>
                <span className="contact-email reveal-wrapper">
                  <div className="reveal-mask">
                    <h3 className="hide-mobile reveal-text interactable" data-type="email" onClick={copyEmail}>
                      JPHAN345<br/>@GMAIL.COM
                    </h3>
                    <a href="mailto:jphan345@gmail.com" className="show-mobile reveal-text interactable" data-type="send-email">
                      JPHAN345<br/>@GMAIL.COM
                    </a>
                  </div>
                </span>
                <div className="hide-mobile contact-back-to-top interactable" data-type="back-to-top" onClick={scrollToTop}>
                    <div>
                        ↑
                    </div>
                </div>
            </div>
        </section>
    );
}