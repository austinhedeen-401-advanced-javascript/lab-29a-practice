import React from 'react';
import PropTypes from 'prop-types';
import { If } from '../If/If';

const Card = (props) => {
  const card = props.card || [];

  return (
    <div className="card">
      <If condition={card.title}>
        <header><h3>{card.title}</h3></header>
      </If>

      <If condition={card.copy}>
        <div className="content">{card.copy}</div>
      </If>

      <If condition={card.media}>
        <figure>
          <img src={card.media.href} alt={card.media.alt} />
          <figcaption>{card.media.title}</figcaption>
        </figure>
      </If>

      <If condition={card.links}>
        <nav className="links">
          <ul>
            {card.links.map((link, linkIndex) => (
              <li key={linkIndex}>
                <a className={link.type} href={link.href} title={link.title}>
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </If>
    </div>
  );
};

Card.propTypes = {
  card: PropTypes.array,
};

export default Card;
