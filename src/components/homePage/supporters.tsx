import joeyLogoImg from '../../images/supporters/joey.png';
import loveLeedsParksImg from '../../images/supporters/love_leeds_parks.png';
import heritageFundImg from '../../images/supporters/heritage_fund.png';
import vacShackImg from '../../images/supporters/vac_shack_pudsey.png';
import laneEndImg from '../../images/supporters/lane_end_garages.png';
import floorGuysImg from '../../images/supporters/the_floor_guys.png';
import leedsElectricalImg from '../../images/supporters/leeds_electrical.png';
import howdenInsuranceImg from '../../images/supporters/howden_insurance.png';
import jugAndBarrelImg from '../../images/supporters/jug_and_barrel.png';
import howdensImg from '../../images/supporters/howdens.png';

function Supporters() {
    return (
        <div id="supporters">
            <h1>supporters</h1>
            <a target="_blank" href="https://www.joeysportsmassage.co.uk">
                <img className="supporters-logos" src={joeyLogoImg} />
            </a>
            <a target="_blank" href="https://www.laneendgarage.uk">
                <img className="supporters-logos" src={laneEndImg} />
            </a>
            <a target="_blank" href="https://loveleedsparks.org.uk">
                <img className="supporters-logos" src={loveLeedsParksImg} />
            </a>
            <a target="_blank" href="https://www.heritagefund.org.uk">
                <img className="supporters-logos" src={heritageFundImg} />
            </a>
            <a target="_blank" href="http://www.vacshack.co.uk">
                <img className="supporters-logos" src={vacShackImg} />
            </a>
            <a target="_blank" href="https://www.thefloorguys.net">
                <img className="supporters-logos" src={floorGuysImg} />
            </a>
            <a target="_blank" href="https://leedselectrical.com">
                <img className="supporters-logos" src={leedsElectricalImg} />
            </a>
            <a target="_blank" href="https://www.howdeninsurance.co.uk">
                <img className="supporters-logos" src={howdenInsuranceImg} />
            </a>
            <a
                target="_blank"
                href="https://www.howdens.com/find-a-depot/stanningley"
            >
                <img className="supporters-logos" src={howdensImg} />
            </a>
            <a target="_blank" href="https://www.facebook.com/groups/106305562724232">
                <img className="supporters-logos" src={jugAndBarrelImg} />
            </a>
        </div>
    );
}

export default Supporters;
