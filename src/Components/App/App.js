import React from 'react';
import { Switch, Route } from 'react-router-dom';

import About from '../About/About';
import Nav from '../Nav/Nav';
import Page from '../Page/Page';
import content from '../../content';

const App = () => {
  return (
    <>
      <Nav />
      <Switch>
        <Route exact path='/' render={() => <Page content={content} />} />
        <Route exact path='/about' component={About} />
      </Switch>
    </>
  );
};

export default App;
