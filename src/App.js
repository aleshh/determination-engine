import React, { Component } from 'react';

import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';

import Header from './components/Header';
import TabBar from './components/TabBar';
import Overview from './components/Overview';
import Details from './components/Details';

import data from './dataService';

class App extends Component {
  state = {};

  openMenu = () => {
    console.log('Open menu')
  }

  calculate = () => {
    console.log('Calculate')
  }

  addChannel = () => {
    console.log('Add channel')
  }

  loadData = () => {
    this.setState(data);
  }

  componentDidMount() {
    this.loadData();
  }

  render() {
    if (!this.state.gross) {
      return ('Loading data...');
    } else {
      return (
        <React.Fragment>
          <CssBaseline />
          <Paper square>
            <Header onMenu={this.openMenu} onCalculate={this.calculate} />
            <TabBar />
            <Overview state={this.state} onAddChannel={this.addChannel} />
            <Details state={this.state} />
          </Paper>
        </React.Fragment>
      );
    }
  }

}

export default App;
