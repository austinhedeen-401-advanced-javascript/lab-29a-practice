import React from 'react';
import PropTypes from 'prop-types';

const Page = (props) => {
  const content = props.content || [];

  return (
    <>
      {content.map((deck, deckIndex) => (
        <section className="deck" key={deckIndex}>
           <header><h2>{deck.title}</h2></header>
          {deck.records.map((card, cardIndex) => (
            <div className="card" key={cardIndex}>
              <header><h3>{card.title}</h3></header>
              <div className="content">{card.copy}</div>
              <figure>
                <img src={card.media.href} alt={card.media.alt} />
                <figcaption>{card.media.title}</figcaption>
              </figure>
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
            </div>
          ))}
        </section>
      ))}
    </>
  );
};

Page.propTypes = {
  content: PropTypes.array,
};

export default Page;
