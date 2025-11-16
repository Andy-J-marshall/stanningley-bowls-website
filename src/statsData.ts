import { returnPlayerStatsForAllYears } from './helpers/allYearPlayerStatsHelper';
import clubStats13 from './data/stanningleyStats2013.json';
import clubStats14 from './data/stanningleyStats2014.json';
import clubStats15 from './data/stanningleyStats2015.json';
import clubStats16 from './data/stanningleyStats2016.json';
import clubStats17 from './data/stanningleyStats2017.json';
import clubStats18 from './data/stanningleyStats2018.json';
import clubStats19 from './data/stanningleyStats2019.json';
import clubStats21 from './data/stanningleyStats2021.json';
import clubStats22 from './data/stanningleyStats2022.json';
import clubStats23 from './data/stanningleyStats2023.json';
import clubStats24 from './data/stanningleyStats2024.json';
import clubStats25 from './data/stanningleyStats2025.json';
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

const clubStatsForEveryYearArray = [
    clubStats13,
    clubStats14,
    clubStats15,
    clubStats16,
    clubStats17,
    clubStats18,
    clubStats19,
    clubStats21,
    clubStats22,
    clubStats23,
    clubStats24,
    clubStats25,
];

const allYearClubStats = {
    year2013: clubStats13,
    year2014: clubStats14,
    year2015: clubStats15,
    year2016: clubStats16,
    year2017: clubStats17,
    year2018: clubStats18,
    year2019: clubStats19,
    year2021: clubStats21,
    year2022: clubStats22,
    year2023: clubStats23,
    year2024: clubStats24,
    year2025: clubStats25,
    allYears: returnPlayerStatsForAllYears(clubStatsForEveryYearArray),
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
    allYearClubStats,
};
