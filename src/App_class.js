import React, { Component } from 'react';

import CardList from './CardList';

import SearchBox from './SearchBox';
import Scroll from './Scroll';

import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      robots: [],
      searchField: ''
    }
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(resp => resp.json())
      .then(data => this.setState({robots: data}));
  }

  onSearchRobots = (e) => {
    console.log(e.target.value);
    this.setState({
      searchField: e.target.value
    });
  }
  
  render() {
    const { robots, searchField} = this.state;
    const filteredRobots = robots.filter( robot => robot.name.toLowerCase().includes(searchField.toLowerCase()));

    return(
      <div className="tc">
        <h1 className="f1">RoboFriends</h1>
        <SearchBox searchChanged={this.onSearchRobots}/>
        <Scroll>
          <CardList robots={filteredRobots} />
        </Scroll>
      </div>
    )
  }
}

export default App;