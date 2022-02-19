import React, { useEffect, useRef, useState } from "react";
import "./lore.css";
import greenGhoul from "../../assets/img/green-ghoulie.png";
import pvpArena from "../../assets/img/pvp_arena.png";
import chestMage from "../../assets/img/chest_mage.png";
import phylactery from "../../assets/img/phylactery.png";
import howTo from "../../assets/img/how_to_play.png";
import guardPhysical from "../../assets/img/guard_physical.png";
import ability from "../../assets/img/ability.png";

const Lore = () => {

    return (
        <div className="void-pass" id="void-pass">
            <h2><u>SOL Mage Arena: PvP/PvE Battles For Leaderboard</u></h2>
            <h2><u>Rankings, Loot Boxes, and Tokens</u></h2>

            <div className="pvp">
                <h2>PvP Arena</h2>
                <p>Unique combat mechanics anticipating your opponents offensive and defensive choices can lead to victory!</p>
                <p className="pvp-text">Battle in the Sol Mage PvP Arena to increase your leaderboard rankings to win monthly prizes</p>
                <img className="pvp-img" src={pvpArena}></img>
            </div>

            <div className="raid">
                <h2>PvE Raid Boss Fights</h2>
                <div className="raid-text">
                    <p>The Sol Mage Arena metaverse features an array of high powered Raid Boss monsters that only Sol Mages can defeat.</p>
                    <p>Boss fights will be epic battles featuring either a grand monster from the Sol Mage metaverse or even a pixelated monster from one of our partner projects.</p>
                    <p>These battles give utility to all Sol Mage holders where every participant will be given a loot box at the end and the more mages you hold the more damage you can inflict.</p>
                    <p>The more damage you do, the higher probability of winning one of the grand prizes!</p>
                    <p>Every mage will be able to attack once with the server time reset reschedule.</p>
                    <p>At the end of the battle, a loot box will be awarded to all participants.</p>
                    <p>Some of the items can include a Poap (Proof of Attendance Protocol) NFT commemorating the experience, $SMAGE tokens which can be used for item upgrades, pet NFTs, $SOL, and even grand prizes where a lucky winner will be able to claim a valuable partner project NFT.</p>
                </div>
                <img className="raid-img" src={greenGhoul}></img>
            </div>

            {/* (GIF of BOSS MONSTERS CREATED BY JOSH FOR IMAGE) */}

            <div className="crawler">
                <h2 className="crawler-heading1">Infinite Dungeon Crawl Mode</h2>
                <p className="crawler-text">Climb up Sol Mage Tower levels in the Infinite Dungeon Crawl Mode. This mode will allow you to craft a diverse team of mages based on the set of parameters dictated by the Dungeon Crawl settings. Players that have an extensive collection of Sol Mages will have the upper hand as monsters will be weak to certain elements so crafting the optimal team will be crucial to get to the highest levels where the best prizes are awarded. </p>
            </div>

            <h2 className=""><u>Lich Mages & The Lich Dao: Exclusive Revenue Sharing & Whitelist Opportunities</u></h2>
            <div className="chestMage">
                <h2>Chest Mages</h2>
                <div className="chestMage-text">
                    <p>Out of the 666 total supply of Sol Mages, 66 NFTs will include a rare treasure chest.</p>
                    {/* <br /> */}
                    <p>Help shape the future of Sol Mage Society by being granted access to the exclusive Lich Dao discord channel where your feedback will impact upcoming changes by holding a treasure chest mage! </p>
                </div>                
                <img className="chestMage-image"src={chestMage}></img>
            </div>

            <div className="phylactery">
                <h2>Phylacteries</h2>
                <img className="phylactery-img" src={phylactery}></img>
                <div className="phalactery-text">
                    <p>These chests give the holder free drops, more access, and a special Phylactery to transform your mage into a powerful Lich Mage. </p>
                    <p>Holding a treasure chest will grant whitelist opportunities and airdrops to GEN 1 releases in addition to revenue sharing for all future collections. Treasure chests will grant access to future projects created in the Sol Mage Metaverse and are highly sought after.</p>
                </div>
            </div>

            <div className="howTo">
                <h2 className="howTo-title"><u>How To Play</u></h2>
                <p className="howTo-caption1">Sol Mage Arena is a strategic game of chance with magical spells, unique visuals, and heart pounding choices.</p>
                <img className="howTo-img" src={howTo}></img>
                <p className="howTo-caption2">The gameplay mechanics take inspiration from Yomi, Japanese for “reading” meaning to read your opponent or anticipate their next action. </p>
            </div>

            <div className="battle">
                <h2>Mechanics</h2>
                <img className="battle-img" src={guardPhysical}></img>
                <div className="battle-text">
                    <p>Sol Mage battles involve attacking and defending three aspects. </p>
                    <p>Resolve, Physical, and Spirit.</p>
                    <p>It’s impossible to defend all aspects at once, so anticipating your opponents defense and attack choices is the true key to victory.</p>
                </div>
            </div>

            <div className="abilities">
                <h2>Abilities</h2>
                <div className="abilities-text">
                    <p>Unique spells combine into unique spellbooks built by your personal NFT’s attributes.</p>
                    <p>Each decision is meaningful, every outcome decided by skill alone.</p>
                    <p>Will your Sol Mage conquer the opposition and rise in the Sol Mage Society?</p>
                </div>
                <div className="abilities-img">
                    <img src={ability}></img>
                </div>
            </div>
        </div>
    );
}

export default Lore;
