import { useEffect } from 'react';
import trophiesImg from '../images/websiteImages/trophies_2024.png';
import { config } from '../config';

function About() {
    useEffect(() => {
        window.scrollTo(0, 0);
    });

    return (
        <div id="about-page" className="page-component info-component center">
            <h1>about us</h1>
            <p>
                {config.teamNames.fullName} has been has been an integral part
                of Stanningley Park since the early 1900s. For decades it has
                been a popular and well-loved green with many local residents
                having memories of playing there as children, some even
                remembering the putting green that ran alongside until the
                1980s. It is a fantastic community asset that has spanned
                generations of families in West Leeds and been host to a number
                of competitive leagues and competitions in its time.
            </p>
            <p>
                The club is affiliated to the Yorkshire County Crown Green
                Bowling Association and we currently have 9 teams in 8 leagues
                and are part of the Leeds and District Association, the Airedale
                and Wharfedale Association and the Leeds Ladies Association.
                2025 will see the club enter a ladies only team for the first
                time on a Thursday evening. Tuesday and Thursday afternoons are
                for players over 55 but all other teams are open age and gender.
                The Wednesday evening team is played in pairs and is a great way
                to introduce newer players to competitive bowling.
            </p>
            <p>
                Last season the teams had great success winning 3 leagues and a
                cup, and coming a very close second in 4 others, with several of
                our players featuring in the top 10 of the averages in the
                leagues.
            </p>
            <img
                style={{ width: '98%', paddingBottom: '1rem' }}
                src={trophiesImg}
            ></img>
            <p>
                The green is the third largest in Leeds measuring approximately
                45 yards square with many visiting bowlers commenting on how
                they see it as a challenge to reach the 60 yard corners! It is a
                fantastic home green with plenty of space for running social
                bowling sessions and club competitions.
            </p>
            <p>
                Currently the club has nearly 40 bowling members and many more
                social members and regular visitors during the season. It is
                open to the public on match days and during social bowling
                sessions for refreshments so anyone is welcome to come in if the
                gate is open. There are regular social sessions throughout the
                season so you are invited to come along and try out crown green
                bowling for yourself, there are bowls suitable to borrow for
                adults and children from 8 years old.
            </p>
            <p>
                The club has a very dedicated group of volunteers who help out
                with committee duties, running the league bowling and community
                events as well as ongoing maintenance and improvements. Members
                have given up their time to build benches and shelters, kept the
                clubhouse clean and tidy, cleared paths and areas around the
                green, made refreshments and donated items for the benefit of
                the club. Over winter we have been running fortnightly volunteer
                sessions and we have recently been rewarded for our efforts with
                a generous grant through Love Leeds Parks from The Heritage Fund
                so we can continue these in 2025 with the purchase of new
                equipment. The volunteer sessions are open to the public so if
                you would like to get involved look out for the upcoming dates
                on our Facebook page.
            </p>
            <p>
                The clubhouse is in process of regeneration but it currently
                comprises of a kitchenette for making refreshments, a meeting
                room with a second hand book sale and recently refurbished
                toilet facilities. The green is accessible by wheelchair but the
                clubhouse is not currently wheelchair friendly.
            </p>
        </div>
    );
}
export default About;
