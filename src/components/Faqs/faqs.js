import React from "react";
import "./faqs.css"
import { Accordion, AccordionItem } from 'react-light-accordion';
import 'react-light-accordion/demo/css/index.css';

const Faq = () => (
  <div className="faqs" id="faq">
    <h2>FAQs</h2>
    <div className="section-faq">
      <Accordion atomic={true}>

        <AccordionItem title="How much and when is mint?">
          <DummyContentOne />
        </AccordionItem>

        <AccordionItem title="What is the supply?">
          <DummyContentTwo />
        </AccordionItem>

        <AccordionItem title="What Are The Treasure Chests?">
          <DummyContentThree />
        </AccordionItem>

        <AccordionItem title="What Is The Utility of the Lich Mages?">
          <DummyContentFour />
        </AccordionItem>

        <AccordionItem title="Will There Be Royality Sharing">
          <DummyContentFive />
        </AccordionItem>

        <AccordionItem title="Will There Be A Game & Utility Token?">
          <DummyContentSix />
        </AccordionItem>

        <AccordionItem title="Will There Be A GEN 1 NFT?">
          <DummyContentSeven />
        </AccordionItem>

      </Accordion>
    </div>
  </div>
);

const DummyContentOne = () => (
  <p>
    0.1 Sol and Mint Is Live 1/12/2022 at 6:30 UTC
  </p>
);

const DummyContentTwo = () => (
  <p>
    666 Sol Mage Society NFTs
  </p>
);

const DummyContentThree = () => (
  <p>
    66/666 out of the supply will contain treasure chests on your NFT.
    <br />
    All treasure chest holders will be airdropped a Lich Formula which can be used to transform your NFT into a special Lich Mage NFT
  </p>
);

const DummyContentFour = () => (
  <p>
    Lich Mages will be given access to a special DAO with alpha access to partner projects. In addition, 33% of secondary fees will be airdropped to Lich Mage holders.
  </p>
);

const DummyContentFive = () => (
  <p>
    Yes!
    33% of royalties will be aidropped to Lich Mage Holders
    33% of royalties will be dropped to all Sol Mage Society Holders
    33% of royalties will be sent to the development treasury.
  </p>
);

const DummyContentSix = () => (
  <p>
    Yes!
    A PvP game where you can battle your Sol Mage Society NFT is in development. Early teasers will be shared soon.
    The utility token $SMAGE will be the lifeblood of the SMS ecosystem. More details will be dropped in the next few days.
  </p>
);

const DummyContentSeven = () => (
  <p>
    Yes. More details will be available very soon
  </p>
);


export default Faq;
