import React from 'react';
import PropTypes from 'prop-types';
import { If } from '../If/If';

/**
 * Renders a `Deck` composed of content passed in from `props.children`.
 */
const Deck = (props) => {
  const deck = props.deck || [];

  return (
    <div className="deck">
      <If condition={deck.title}>
        <header><h2>{deck.title}</h2></header>
      </If>

      { props.children }
    </div>
  );
};

Deck.propTypes = {
  deck: PropTypes.array,
  children: PropTypes.array,
};

export default Deck;
