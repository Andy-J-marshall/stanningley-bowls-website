import { useEffect } from 'react';
import facebookImg from '../images/socials/facebook_blue.png';
import instagramImg from '../images/socials/insta_blue.png';
import emailImg from '../images/socials/email_blue.png';
import { config } from '../config';

const { instagramUrl, facebookUrl, emailUrl, googleMapsIframeUrl } =
    config.socialLinks;

const facebookEventsUrl = `${facebookUrl}/events`;
const emailAddress = emailUrl.split('mailto:')[1];

function Contact() {
    useEffect(() => {
        window.scrollTo(0, 0);
    });

    return (
        <div id="contact-page" className="page-component info-component center">
            <h1>contact us</h1>
            <p>
                Get in touch via email:{' '}
                <a className="link" href={emailUrl}>
                    <img className="logos" src={emailImg} alt="Email link" />
                    {emailAddress}
                </a>
            </p>
            <p>
                See our upcoming{' '}
                <a target="_blank" className="link" href={facebookEventsUrl}>
                    events
                </a>{' '}
                on Facebook and keep up to date with the latest news via our
                social media pages:
            </p>
            <a className="link" target="_blank" href={instagramUrl}>
                <img
                    className="logos"
                    src={instagramImg}
                    alt="Instagram link"
                />
            </a>
            <a className="link" target="_blank" href={facebookUrl}>
                <img className="logos" src={facebookImg} alt="Facebook link" />
            </a>
            <div>
                <h2>location</h2>
                <p>
                    {config.teamNames.fullName} is situated within Stanningley
                    Park. Follow the footpath round and the entrance is between
                    the rose garden and the rugby pitch. Access is on foot only.
                </p>
                <p>
                    The Park has a small, free car park which is located just
                    off Half Mile Lane. If you are coming via Stanningley Road
                    (B6157) then take the turning by Tesco Express; you'll find
                    the entrance on the right after you pass the park house.
                </p>
                <p>
                    The nearest bus stops are only a short walk away, with the
                    number 16 stopping on Intake Lane and the 72 on Stanningley
                    Road.
                </p>
            </div>
            <iframe
                src={googleMapsIframeUrl}
                width="90%"
                height="450"
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
        </div>
    );
}
export default Contact;
