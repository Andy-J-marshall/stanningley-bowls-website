import joeyLogoImg from '../../images/supporters/joey.png';
import asdaLogoImg from '../../images/supporters/asda_foundation.png';
import loveLeedsParksImg from '../../images/supporters/loveLeedsParks.png';
import arnoldClarkLogoImg from '../../images/supporters/arnold_clark_grant.png';
import heyNeighbourLogoImg from '../../images/supporters/hey_neighbour_grant.png';
import heritageFundImg from '../../images/supporters/heritageFund.png';
import easyFundraisingImg from '../../images/supporters/easyFundraising.png';

function Supporters() {
    return (
        <div id="supporters">
            <h1>supporters</h1>
            <a target="_blank" href="https://www.joeysportsmassage.co.uk">
                <img
                    className="supporters-logos"
                    src={joeyLogoImg}
                    alt="support-logo0"
                />
            </a>
            <a target="_blank" href="https://www.asdafoundation.org">
                <img
                    className="supporters-logos"
                    src={asdaLogoImg}
                    alt="support-logo1"
                />
            </a>
            <a target="_blank" href="https://loveleedsparks.org.uk">
                <img
                    className="supporters-logos"
                    src={loveLeedsParksImg}
                    alt="support-logo2"
                />
            </a>
            <a
                target="_blank"
                href="https://www.arnoldclark.com/community-fund"
            >
                <img
                    className="supporters-logos"
                    src={arnoldClarkLogoImg}
                    alt="support-logo3"
                />
            </a>
            <a target="_blank" href="https://www.heyneighbour.org.uk">
                <img
                    className="supporters-logos"
                    src={heyNeighbourLogoImg}
                    alt="support-logo4"
                />
            </a>
            <a target="_blank" href="https://www.heritagefund.org.uk">
                <img
                    className="supporters-logos"
                    src={heritageFundImg}
                    alt="support-logo5"
                />
            </a>
            <a
                target="_blank"
                href="https://www.easyfundraising.org.uk/support-a-good-cause/step-1/?char=370321&invite=7sk19t&referral-campaign=c2s&utm_campaign=web-referral"
            >
                <img
                    className="supporters-logos"
                    src={easyFundraisingImg}
                    alt="support-logo7"
                />
            </a>
        </div>
    );
}

export default Supporters;