import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route, NavLink, Redirect} from 'react-router-dom'
import DummyList from './tabs/dummyList';
import DummyTable from './tabs/dummyTable';
import DummyChart from './tabs/dummyChart';
import NotFound from './NotFound';
import AllTabs from './AllTabs';
import {Tabs} from './tabs/tabs.js';
import Button from 'material-ui/Button';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});


class App extends Component {
  constructor() {
      super();
      this.state = {
          notes:Tabs
      };
  }
  render() {
    return (
      <div className="App">
        <Router>
            <div>
                <div>
                    <h2>Main menu</h2>
                    <NavLink activeStyle = {{color: 'red'}} to="/dummyList"><Button variant="raised">DummyList</Button></NavLink>
                    <NavLink activeStyle = {{color: 'red'}} to="/dummyTable"><Button variant="raised">DummyTable</Button></NavLink>
                    <NavLink activeStyle = {{color: 'red'}} to="/dummyChart"><Button variant="raised">DummyChart</Button></NavLink>
                </div>
                <Switch>
                    <Route path = "/" exact component = {DummyList} />
                    <Route path = "/dummyList" component = {DummyList} />
                    <Route path = "/dummyTable" component = {DummyTable} />
                    <Route path = "/dummyChart" component = {DummyChart} />
                    <Route path = "*" component = {NotFound}/>
                </Switch>
            </div>
        </Router>
        <AllTabs tabs={this.state.notes} />
      </div>
    );
  }
}

export default App;
