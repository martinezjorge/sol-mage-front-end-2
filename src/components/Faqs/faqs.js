import React from "react";
import "./faq.css"
import { Accordion, AccordionItem } from 'react-light-accordion';
import 'react-light-accordion/demo/css/index.css';

const Faq = () => (
  <div id="faq">
    <h1>FAQ</h1>
    <div className="section-faq">
      <Accordion atomic={true}>

        <AccordionItem title="General Info">
          <DummyContentOne />
        </AccordionItem>

        <AccordionItem title="Why Was The Mint Cost So Low?">
          <DummyContentTwo />
        </AccordionItem>

        <AccordionItem title="What Are The Treasure Chests?">
          <DummyContentThree />
        </AccordionItem>

        <AccordionItem title="What Are The Benefits For Treasure Chests?">
          <DummyContentFour />
        </AccordionItem>

        <AccordionItem title="What Are The Lich Mages?">
          <DummyContentFive />
        </AccordionItem>

        <AccordionItem title="Will There Be Royalty Sharing?">
          <DummyContentSix />
        </AccordionItem>

        <AccordionItem title="For The PvP/PvE Game Modes Is There Guides/Move Lists?">
          <DummyContentSeven />
        </AccordionItem>

      </Accordion>
    </div>
  </div>
);

const DummyContentOne = () => (
    <p>
      Mint Date: 1/12/22
      <br />
      Mint Price: 0.1 Sol
      <br />
      Supply: 666 Sol Mages
    </p>
);

const DummyContentTwo = () => (
  <p>
    Sol Mage Society was stealth launched on 1/12/22. We didn’t want a large pre-marketing push and instead took a grassroots approach for the project. 
  </p>
);

const DummyContentThree = () => (
  <p>
    66/666 out of the supply contains treasure chests as a background layer on your Sol Mage NFT. 
  </p>
);

const DummyContentFour = () => (
  <p>
    Help shape the future of Sol Mage Society by being granted access to the exclusive Lich Dao discord channel where your feedback will impact upcoming changes by holding a treasure chest mage! 
    <br/>
    These chests give the holder free drops, more access, and a special Phylactery to transform your mage into a powerful Lich Mage. 
    <br/>
    Holding a treasure chest will grant whitelist opportunities and airdrops to GEN 1 releases in addition to revenue sharing for all future collections. Treasure chests will grant access to future projects created in the Sol Mage Metaverse and are highly sought after.
  </p>
);

const DummyContentFive = () => (
  <p>
    Lich Mages is a special in-game ability that allows you to transform your Sol Mage NFT into a Lich Mage. Doing so unlocks a new list of abilities that are highly powerful but come with a cost being that you are much more vulnerable to damage. To gain this ability you must obtain a Lich Phylactery which will be airdropped to all treasure chest holders or obtain one on the secondary market (Magic Eden.) The airdrop will be announced shortly for treasure chest holders so keep an eye out on the discord server for updates!
  </p>
);

const DummyContentSix = () => (
  <p>
    33% of royalties will be airdropped to Treasure Chest holders
    <br/>
    33% of royalties will be dropped to all Sol Mage Society Holders
    <br/>
    33% of royalties will be sent to the development treasury.
  </p>
);

const DummyContentSeven = () => (
  <p>
    This will be coming soon. Every Sol Mage NFT has a variety of different spells and abilities. Theorycrafting meta abilities and skillsets will be a huge part about climbing the top of the Sol Mage leaderboards and providing the most damage output to get the best prizes in the PvE game modes. 
  </p>
);


export default Faq;
