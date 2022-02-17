// import React from "react";
import React, { useEffect, useRef, useState } from "react";
import "./void-pass.css"
import Nfts from '../../assets/img/SolMage500500.gif';
import Table from '../../assets/img/table.png';



const VoidPass = () => {

    const [timerDays, setTimerDays] = useState('00');
    const [timerHours, setTimerHours] = useState('00');
    const [timerMinutes, setTimerMinutes] = useState('00');
    const [timerSeconds, setTimerSeconds] = useState('00');

    let interval = useRef();

    const startTimer = () => {
        const countdownDate = new Date('January 17 2022 17:00:00').getTime();

        interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = countdownDate - now;

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            if (distance < 0) {
                //stop our time
                clearInterval(interval.current);
            } else {
                //update our times
                setTimerDays(days);
                setTimerHours(hours);
                setTimerMinutes(minutes);
                setTimerSeconds(seconds);
            }

        }, 1000)
    };

    // componentDidMount
    useEffect(() => {
        startTimer();
        return () => {
            clearInterval(interval.current);
        }
    });

    return (
        <div className="void-pass" id="void-pass">
            <div className="title">
                <h1>Lore</h1>
            </div>

            <h2>SOL Mage Arena: PvP/PvE Battles For Leaderboard Rankings, Loot Boxes, and Tokens</h2>


            <ul>

                <li>Unique combat mechanics anticipating your opponents offensive and defensive choices can lead to victory!</li>
                <br />
                <li>PvP Arena: Battle in the Sol Mage PvP Arena to increase your leaderboard rankings to win monthly prizes</li>
                <br />
                <li>PvE Raid Boss Fights: The Sol Mage Arena metaverse features an array of high powered Raid Boss monsters that only Sol Mages can defeat. Boss fights will be epic battles featuring either a grand monster from the Sol Mage metaverse or even a pixelated monster from one of our partner projects. These battles give utility to all Sol Mage holders where every participant will be given a loot box at the end and the more mages you hold the more damage you can inflict. The more damage you do, the higher probability of winning one of the grand prizes! Every mage will be able to attack once with the server time reset reschedule. At the end of the battle, a loot box will be awarded to all participants. Some of the items can include a Poap (Proof of Attendance Protocol) NFT commemorating the experience, $SMAGE tokens which can be used for item upgrades, pet NFTs, $SOL, and even grand prizes where a lucky winner will be able to claim a valuable partner project NFT.</li>            
                <br />
                <li>(GIF of BOSS MONSTERS CREATED BY JOSH FOR IMAGE) </li>
                <br />
                <li>Infinite Dungeon Crawl Mode: Climb up Sol Mage Tower levels in the Infinite Dungeon Crawl Mode. This mode will allow you to craft a diverse team of mages based on the set of parameters dictated by the Dungeon Crawl settings. Players that have an extensive collection of Sol Mages will have the upper hand as monsters will be weak to certain elements so crafting the optimal team will be crucial to get to the highest levels where the best prizes are awarded. </li>

            </ul>

            <h2>Lich Mages & The Lich Dao: Exclusive Revenue Sharing & Whitelist Opportunities</h2>

            <ul>
                <li>Out of the 666 total supply of Sol Mages, 66 NFTs will include a rare treasure chest.</li>

                <br />

                <li>Help shape the future of Sol Mage Society by being granted access to the exclusive Lich Dao discord channel where your feedback will impact upcoming changes by holding a treasure chest mage! </li>

                <br />

                <li>These chests give the holder free drops, more access, and a special Phylactery to transform your mage into a powerful Lich Mage. </li>
                
                <br />

                <li>Holding a treasure chest will grant whitelist opportunities and airdrops to GEN 1 releases in addition to revenue sharing for all future collections. Treasure chests will grant access to future projects created in the Sol Mage Metaverse and are highly sought after.</li>
            </ul>

            <h2><u>How To Play</u></h2>

            <p>Sol Mage Arena is a strategic game of chance with magical spells, unique visuals, and heart pounding choices.</p>

            {/* <img src={}></img> */}

            {/* <div className="section">
                <div className="left">

                    <div className="video-nft-two">
                        <img src={Nfts}></img>
                    </div>

                    <div className="minting">
                        <h3 className="departure">Departure in</h3>
                        <div className="timer">
                            <div className="days space">
                                <p>{timerDays}</p>
                                <p><small>Days</small></p>
                            </div>
                            <div className="hours space">
                                <p>{timerHours}</p>
                                <p><small>Hours</small></p>
                            </div>
                            <div className="mins space">
                                <p>{timerMinutes}</p>
                                <p><small>Mins</small></p>
                            </div>
                            <div className="secs space">
                                <p>{timerSeconds}</p>
                                <p><small>Secs</small></p>
                            </div>
                        </div>
                    </div>

                </div>



                <div className="right">
                    <h2>WHAT ARE SOL MAGES?</h2>
                    <p>SOL MAGES ARE YOUR ENTRY POINT INTO OUR COMMUNITY</p>
                    <h2>PERKS AND BENEFITS</h2>
                    <p>SOL MAGES ARE YOUR KEY TO UNOCKING SPECIAL FEATURES, REWARDS, GOVERNANCE, PRIVATE ACCESS, AND PERKS FROM THE SOLD MAGE PLATFORM AND ITS PARTNERS.</p>
                    <h2>OTHER PERKS</h2>
                    <ul>
                        <li>FREE AIRDROPS</li>
                        <li>Whitelisting for exclusive projects</li>
                        <li>PRIVATE COMMUNITY ACCESS</li>
                        <li>GOVERNANCE</li>
                        <li>SPECIAL PERKS FROM ECOSYTEM PARTNERS</li>
                        <li>Merchandise</li>
                        <li>EVENT VIP ACCESS</li>
                        <li>UNLOCK SPECIAL CONTENT</li>
                    </ul>
                </div>

            </div> */}

        </div>
    )
}

export default VoidPass
