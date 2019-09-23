import React from 'react';
import PropTypes from 'prop-types';

import Deck from '../Deck/Deck';
import Card from '../Card/Card';

const Page = (props) => {
  const content = props.content || [];

  return (
    <>
      {content.map((deck, deckIndex) => (
        <Deck deck={deck} key={deckIndex}>
          {deck.records.map((card, cardIndex) => (
            <Card card={card} key={cardIndex} />
          ))}
        </Deck>
      ))}
    </>
  );
};

Page.propTypes = {
  content: PropTypes.array,
};

export default Page;
