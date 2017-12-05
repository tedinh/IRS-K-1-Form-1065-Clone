import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';

import Part1 from './components/part_1/part_1';
import Part2 from './components/part_2/part_2';
import Part3 from './components/part_3/part_3';

import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/' component={ Part1 } />
          <Route path='/part2' component={ Part2 } />
          <Route path='/part3' component={ Part3 } />
        </Switch>
      </div>
    );
  }
}

export default App;
