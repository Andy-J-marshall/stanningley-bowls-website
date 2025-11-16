import { returnPlayerStatsForAllYears } from './helpers/allYearPlayerStatsHelper';
import stanningleyStats13 from './data/stanningleyStats2013.json';
import stanningleyStats14 from './data/stanningleyStats2014.json';
import stanningleyStats15 from './data/stanningleyStats2015.json';
import stanningleyStats16 from './data/stanningleyStats2016.json';
import stanningleyStats17 from './data/stanningleyStats2017.json';
import stanningleyStats18 from './data/stanningleyStats2018.json';
import stanningleyStats19 from './data/stanningleyStats2019.json';
import stanningleyStats21 from './data/stanningleyStats2021.json';
import stanningleyStats22 from './data/stanningleyStats2022.json';
import stanningleyStats23 from './data/stanningleyStats2023.json';
import stanningleyStats24 from './data/stanningleyStats2024.json';
import stanningleyStats25 from './data/stanningleyStats2025.json';
import allClubsStats13 from './data/allClubsStats2013.json';
import allClubsStats14 from './data/allClubsStats2014.json';
import allClubsStats15 from './data/allClubsStats2015.json';
import allClubsStats16 from './data/allClubsStats2016.json';
import allClubsStats17 from './data/allClubsStats2017.json';
import allClubsStats18 from './data/allClubsStats2018.json';
import allClubsStats19 from './data/allClubsStats2019.json';
import allClubsStats21 from './data/allClubsStats2021.json';
import allClubsStats22 from './data/allClubsStats2022.json';
import allClubsStats23 from './data/allClubsStats2023.json';
import allClubsStats24 from './data/allClubsStats2024.json';
import allClubsStats25 from './data/allClubsStats2025.json';

// Stats for future years need to be updated here

const stanningleyStatsForEveryYearArray = [
    stanningleyStats13,
    stanningleyStats14,
    stanningleyStats15,
    stanningleyStats16,
    stanningleyStats17,
    stanningleyStats18,
    stanningleyStats19,
    stanningleyStats21,
    stanningleyStats22,
    stanningleyStats23,
    stanningleyStats24,
    stanningleyStats25,
];

const allYearStanningleyStats = {
    year2013: stanningleyStats13,
    year2014: stanningleyStats14,
    year2015: stanningleyStats15,
    year2016: stanningleyStats16,
    year2017: stanningleyStats17,
    year2018: stanningleyStats18,
    year2019: stanningleyStats19,
    year2021: stanningleyStats21,
    year2022: stanningleyStats22,
    year2023: stanningleyStats23,
    year2024: stanningleyStats24,
    year2025: stanningleyStats25,
    allYears: returnPlayerStatsForAllYears(stanningleyStatsForEveryYearArray),
};

const allClubsStatsForEveryYearArray = [
    allClubsStats13,
    allClubsStats14,
    allClubsStats15,
    allClubsStats16,
    allClubsStats17,
    allClubsStats18,
    allClubsStats19,
    allClubsStats21,
    allClubsStats22,
    allClubsStats23,
    allClubsStats24,
    allClubsStats25,
];

const allYearAllClubsStats = {
    year2013: allClubsStats13,
    year2014: allClubsStats14,
    year2015: allClubsStats15,
    year2016: allClubsStats16,
    year2017: allClubsStats17,
    year2018: allClubsStats18,
    year2019: allClubsStats19,
    year2021: allClubsStats21,
    year2022: allClubsStats22,
    year2023: allClubsStats23,
    year2024: allClubsStats24,
    year2025: allClubsStats25,
    allYears: returnPlayerStatsForAllYears(allClubsStatsForEveryYearArray),
};

export default {
    allYearAllClubsStats,
    allYearStanningleyStats,
};
