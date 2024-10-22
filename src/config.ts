export const config = {
    teamNames: {
        fullName: 'Littlemoor Sports & Social Club',
        shortName: 'Littlemoor',
    },
    // TODO do they have all of these?
    socialLinks: {
        instagramUrl: 'https://www.instagram.com/StanningleyParkBowls',
        facebookUrl: 'https://www.facebook.com/StanningleyBowlsClub',
        emailUrl: 'mailto:stanningleybowlsclub@gmail.com',
        teamPhotosUrl:
            'https://photos.google.com/share/AF1QipMmkXau_XJaD1459y7Sdsk7pSoUeAr04SiVP_z07i1u0NzLiVQLBioFHwGF9jHV_A?key=N3VLT0l0VWZEVlNrVm5kQUF3MHl1d2lJNEFDRVNR',
        historicStatsUrl:
            'https://photos.google.com/share/AF1QipOqs9EK2LBhL3uZjas8l1ccFkrkdsY8KpOlajx60sBsUaM_-S4LCr-qLpEj9aRX3Q?key=N1VwMnRwdWlKQU5pcW9lVXk1b09IX3Y1OGxQWlFR',
        googleMapsUrl: 'https://goo.gl/maps/RQ7wemtuHQhXPgmF9',
        googleMapsIframeUrl:
            'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d739.5172794483534!2d-1.6554462674593056!3d53.81026923756449!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48795fb1c49a2601%3A0xe4eb67d3c4eeb88f!2sStanningley%20Park%20Crown%20Green%20Bowling%20Club!5e0!3m2!1sen!2suk!4v1657105300205!5m2!1sen!2suk',
    },
    // TODO this data isn't really correct
    membership: {
        socialPrice: '20',
        bowlingPrice: '35',
        bowlingPriceOnly: '35',
        leedsCouncilFee: '45',
    },
    teams: [
        {
            name: 'Monday Airewharfe',
            age: 'Open Age',
            desc: '10 singles games',
            link: 'https://bowlsnet.uk/AW-Mon',
            startTime: '6:15-6.45pm',
            numberOfGames: 10,
            img: '',
        },
        {
            name: 'Monday Bradford',
            age: 'Open Age',
            desc: '6 singles games',
            link: 'https://bowlsnet.uk/Bradford-Mon',
            startTime: '6:15-6.45pm',
            numberOfGames: 6,
            img: '',
        },
        {
            name: 'Mirfield',
            age: 'Open Age',
            desc: '10 singles games',
            link: 'https://bowlsnet.uk/Mirfield',
            startTime: '7pm',
            numberOfGames: 10,
            img: '',
        },
        {
            name: 'Wednesday Half Holiday',
            age: 'Open Age',
            desc: '6 singles games',
            link: 'https://bowlsnet.uk/Bradford-HalfHol',
            startTime: '1:30pm',
            numberOfGames: 6,
            img: '',
        },
        {
            name: 'Spen Valley',
            age: 'Open Age',
            desc: '8 singles games',
            link: 'https://bowlsnet.uk/WestRiding',
            startTime: '7pm',
            numberOfGames: 8,
            img: '',
        },
        {
            name: 'Thursday Vets',
            age: '60+ year olds',
            desc: '8 singles games',
            link: 'https://bowlsnet.uk/Bradford-Vets',
            startTime: '1:30pm',
            numberOfGames: 8,
            img: '',
        },
        {
            name: 'Saturday',
            age: 'Open Age',
            desc: '10 singles games',
            link: 'https://bowlsnet.uk/Bradford-Sat',
            startTime: '2pm',
            numberOfGames: 10,
            img: '',
        },
    ],
    days: {
        'monday airewharfe': 'Monday Airewharfe',
        'monday bradford': 'Monday Bradford',
        'tuesday mirfield': 'Mirfield',
        'tuesday mirfield (b)': 'Mirfield B',
        'wednesday half holiday bradford': 'Wednesday Half Holiday',
        'wednesday half holiday bradford (b)': 'Wednesday Half Holiday B',
        'wednesday spen valley': 'Spen Valley',
        'wednesday spen valley (b)': 'Spen Valley B',
        'thursday vets bradford': 'Thursday Vets',
        'saturday bradford': 'Saturday',
        'saturday bradford (b)': 'Saturday B',
    },
    allTeamsInLeaguesSince2013: [
        'monday bradford',
        'monday bradford (a)',
        'monday bradford (b)',
        'monday airewharfe',
        'monday airewharfe (a)',
        'monday airewharfe (b)',
        'tuesday mirfield',
        'tuesday mirfield (a)',
        'tuesday mirfield (b)',
        'wednesday half holiday bradford',
        'wednesday half holiday bradford (a)',
        'wednesday half holiday bradford (b)',
        'wednesday spen valley',
        'wednesday spen valley (a)',
        'wednesday spen valley (b)',
        'thursday vets bradford',
        'thursday vets bradford (a)',
        'thursday vets bradford (b)',
        'saturday bradford',
        'saturday bradford (a)',
        'saturday bradford (b)',
    ],
    historicTeamInfo: [
        {
            teamNames: ['monday bradford', 'monday airewharfe'],
            bTeamForLeagueBool: true,
        },
        {
            teamNames: ['tuesday mirfield'],
            bTeamForLeagueBool: true,
        },
        {
            teamNames: ['wednesday half holiday bradford'],
            bTeamForLeagueBool: true,
        },
        {
            teamNames: ['wednesday spen valley'],
            bTeamForLeagueBool: true,
        },
        {
            teamNames: ['thursday vets bradford'],
            bTeamForLeagueBool: true,
        },
        {
            teamNames: ['saturday bradford'],
            bTeamForLeagueBool: true,
        },
    ],
};
