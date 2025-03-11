import joeyLogoImg from '../../images/supporters/joey.png';
import loveLeedsParksImg from '../../images/supporters/love_leeds_parks.png';
import heritageFundImg from '../../images/supporters/heritage_fund.png';
import vacShackImg from '../../images/supporters/vac_shack_pudsey.png';
import laneEndImg from '../../images/supporters/lane_end_garages.png';
import floorGuysImg from '../../images/supporters/the_floor_guys.png';
import leedsElectricalImg from '../../images/supporters/leeds_electrical.png';
import howdenInsuranceImg from '../../images/supporters/howden_insurance.png';

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
            <a target="_blank" href="https://leedselectrical.com">
                <img
                    className="supporters-logos"
                    src={leedsElectricalImg}
                    alt="support-logo7"
                />
            </a>
            <a target="_blank" href="https://www.howdeninsurance.co.uk">
                <img
                    className="supporters-logos"
                    src={howdenInsuranceImg}
                    alt="support-logo6"
                />
            </a>
        </div>
    );
}

export default Supporters;
