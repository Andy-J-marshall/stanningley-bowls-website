import { useEffect } from 'react';
import { Image } from 'react-bootstrap';
import joeyLogoImg from '../images/supporters/joey.png';
import vacShackImg from '../images/supporters/vac_shack_pudsey.png';
import loveLeedsParksImg from '../images/supporters/loveLeedsParks.png';
import heritageFundImg from '../images/supporters/heritageFund.png';
import easyFundraisingImg from '../images/supporters/easyFundraising.png';
import { config } from '../config';

const { emailUrl } = config.socialLinks;

function Sponsors() {
    useEffect(() => {
        window.scrollTo(0, 0);
    });

    return (
        <div
            id="sponsors-page"
            className="center info-component page-component"
        >
            <h1>sponsors</h1>
            <p>
                If you are interested in a sponsorship package, please{' '}
                <a className="link" href={emailUrl}>
                    contact us
                </a>{' '}
                for more information.
            </p>
            <hr />

            <h3>joey sports massage therapy</h3>
            <p>
                If you're suffering due to a sports injury, or your body just
                needs a little TLC, then it's time to get in touch with the team
                at Joey Sports Massage Therapy.
            </p>
            <a target="_blank" href="https://www.joeysportsmassage.co.uk">
                <Image
                    className="sponsors-logos"
                    rounded
                    src={joeyLogoImg}
                    fluid
                ></Image>
            </a>

            <hr />

            <h3>vac shack</h3>
            <p>
                Vac Shack are dedicated to providing high class products and
                after sale service, with 20 years experience supplying quality
                appliances and our installation services.
            </p>
            <a target="_blank" href="http://www.vacshack.co.uk">
                <Image
                    className="sponsors-logos"
                    rounded
                    src={vacShackImg}
                    fluid
                ></Image>
            </a>

            <hr />

            <h3>love leeds parks</h3>
            <p>
                Love Leeds Parks is part of a growing network of UK parks
                foundations. As a registered charity they support improvements
                to public parks and green spaces in Leeds, for the benefit of
                all residents and visitors to the city.
            </p>
            <a target="_blank" href="https://loveleedsparks.org.uk">
                <Image
                    className="sponsors-logos"
                    rounded
                    src={loveLeedsParksImg}
                    fluid
                ></Image>
            </a>
            <a target="_blank" href="https://www.heritagefund.org.uk">
                <Image
                    className="sponsors-logos"
                    rounded
                    src={heritageFundImg}
                    fluid
                ></Image>
            </a>
            <hr />

            <h3>easy fundraising</h3>
            <p>
                You can support the club by shopping through Easy Fundraising.
            </p>
            <a
                target="_blank"
                href="https://www.easyfundraising.org.uk/support-a-good-cause/step-1/?char=362452&invite=7sk19t&referral-campaign=s2s&utm_campaign=web-referral"
            >
                <Image
                    className="sponsors-logos"
                    rounded
                    src={easyFundraisingImg}
                    fluid
                ></Image>
            </a>
        </div>
    );
}

export default Sponsors;
