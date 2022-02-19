import React from "react";
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
            <h1 className="main-heading-1">SOL Mage Arena: PvP/PvE Battles For Leaderboard</h1>
            <h1 className="main-heading-2">Rankings, Loot Boxes, and Tokens</h1>

            <div className="pvp">
                <h1 className="pvp-header">PvP Arena</h1>
                <p className="pvp-text">Unique combat mechanics anticipating your opponents offensive and defensive choices can lead to victory!</p>
                <img className="pvp-img" src={pvpArena}></img>
                <p className="pvp-text">Battle in the Sol Mage PvP Arena to increase your leaderboard rankings to win monthly prizes</p>
            </div>

            <div className="raid">
                <h1 className="raid-header">PvE Raid Boss Fights</h1>
                <div className="raid-inner">
                    <img className="raid-img" src={greenGhoul}></img>
                    <div className="raid-text">
                        <p>The Sol Mage Arena metaverse features an array of high powered Raid Boss monsters that only Sol Mages can defeat.</p>
                        <p>Boss fights will be epic battles featuring either a grand monster from the Sol Mage metaverse or even a pixelated monster from one of our partner projects.</p>
                        <p>These battles give utility to all Sol Mage holders where every participant will be given a loot box at the end and the more mages you hold the more damage you can inflict.</p>
                        <p>The more damage you do, the higher probability of winning one of the grand prizes!</p>
                        <p>Every mage will be able to attack once with the server time reset reschedule.</p>
                        <p>At the end of the battle, a loot box will be awarded to all participants.</p>
                        <p>Some of the items can include a Poap (Proof of Attendance Protocol) NFT commemorating the experience, $SMAGE tokens which can be used for item upgrades, pet NFTs, $SOL, and even grand prizes where a lucky winner will be able to claim a valuable partner project NFT.</p>
                    </div>
                </div>
            </div>

            {/* (GIF of BOSS MONSTERS CREATED BY JOSH FOR IMAGE) */}

            <div className="crawler">
                <h1 className="crawler-heading-1">Infinite Dungeon Crawl Mode</h1>
                <p className="crawler-text">Climb up Sol Mage Tower levels in the Infinite Dungeon Crawl Mode. This mode will allow you to craft a diverse team of mages based on the set of parameters dictated by the Dungeon Crawl settings. Players that have an extensive collection of Sol Mages will have the upper hand as monsters will be weak to certain elements so crafting the optimal team will be crucial to get to the highest levels where the best prizes are awarded. </p>
            </div>

            <h1 className="main-heading-3">Lich Mages & The Lich Dao:</h1>
            <h1 className="main-heading-4">Exclusive Revenue Sharing & Whitelist Opportunities</h1>

            <div className="chestMage">
                <h1 className="chestMage-heading">Chest Mages</h1>
                <div className="chestMage-textbox">
                    <div className="chestMage-text">
                        <p>Out of the 666 total supply of Sol Mages, 66 NFTs will include a rare treasure chest.</p>
                        <p>Help shape the future of Sol Mage Society by being granted access to the exclusive Lich Dao discord channel where your feedback will impact upcoming changes by holding a treasure chest mage! </p>
                    </div>                
                    <img className="chestMage-image"src={chestMage}></img>
                </div>
            </div>

            <div className="phylactery">
                <h1 className="phylactery-heading">Phylacteries</h1>
                <div className="phylactery-box">
                    <img className="phylactery-img" src={phylactery}></img>
                    <div className="phylactery-text">
                        <p>These chests give the holder free drops, more access, and a special Phylactery to transform your mage into a powerful Lich Mage. </p>
                        <p>Holding a treasure chest will grant whitelist opportunities and airdrops to GEN 1 releases in addition to revenue sharing for all future collections. Treasure chests will grant access to future projects created in the Sol Mage Metaverse and are highly sought after.</p>
                    </div>
                </div>
            </div>

            <div className="howTo">
                <h1 className="howTo-heading">How To Play</h1>
                <p className="howTo-caption1">Sol Mage Arena is a strategic game of chance with magical spells, unique visuals, and heart pounding choices.</p>
                <img className="howTo-img" src={howTo}></img>
                <p className="howTo-caption2">The gameplay mechanics take inspiration from Yomi, Japanese for “reading” meaning to read your opponent or anticipate their next action. </p>
            </div>

            <div className="battle">
                <h1 className="battle-heading">Mechanics</h1>
                <div className="battle-box">
                    <img className="battle-img" src={guardPhysical}></img>
                    <div className="battle-text">
                        <p>Sol Mage battles involve attacking and defending three aspects. </p>
                        <p>Resolve, Physical, and Spirit.</p>
                        <p>It’s impossible to defend all aspects at once, so anticipating your opponents defense and attack choices is the true key to victory.</p>
                    </div>
                </div>
            </div>

            <div className="abilities">
                <h1 className="abilities-heading">Abilities</h1>
                <div className="abilities-box">
                    <div className="abilities-text">
                        <p>Unique spells combine into unique spellbooks built by your personal NFT’s attributes.</p>
                        <p>Each decision is meaningful, every outcome decided by skill alone.</p>
                        <p>Will your Sol Mage conquer the opposition and rise in the Sol Mage Society?</p>
                    </div>
                    <img className="abilities-img" src={ability}></img>
                </div>
            </div>
        </div>
    );
}

export default Lore;
