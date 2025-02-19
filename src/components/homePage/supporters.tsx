import joeyLogoImg from '../../images/supporters/joey.png';
import loveLeedsParksImg from '../../images/supporters/love_leeds_parks.png';
import heritageFundImg from '../../images/supporters/heritage_fund.png';
import easyFundraisingImg from '../../images/supporters/easy_fundraising.png';
import vacShackImg from '../../images/supporters/vac_shack_pudsey.png';
import laneEndImg from '../../images/supporters/lane_end_garages.png';
import floorGuysImg from '../../images/supporters/the_floor_guys.png';

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
            <a target="_blank" href="https://www.laneendgarage.uk">
                <img
                    className="supporters-logos"
                    src={laneEndImg}
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
            <a target="_blank" href="https://www.heritagefund.org.uk">
                <img
                    className="supporters-logos"
                    src={heritageFundImg}
                    alt="support-logo5"
                />
            </a>
            <a target="_blank" href="http://www.vacshack.co.uk">
                <img
                    className="supporters-logos"
                    src={vacShackImg}
                    alt="support-logo3"
                />
            </a>
            <a target="_blank" href="https://www.thefloorguys.net">
                <img
                    className="supporters-logos"
                    src={floorGuysImg}
                    alt="support-logo4"
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
