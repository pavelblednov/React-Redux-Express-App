import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, IndexRoute } from 'react-router-dom'

import App from './components/App';
import Greetings from './components/Greetings';

render ((
  <Router>
    <div>
        <Route path="/" component={App} />
        <Route exact path="/" component={Greetings}/>
        

    </div>
  </Router>
), document.getElementById('app'));
