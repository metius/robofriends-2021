import React, {useState, useEffect} from 'react'; 

import CardList from './CardList';
import SearchBox from './SearchBox';
import Scroll from './Scroll';

import './App.css';

const App = () => {
  const [robots, setRobots] = useState([]);
  const [searchField, setSearchField] = useState('');

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(resp => resp.json())
      .then(data => setRobots(data));
  },[]);

  const onSearchRobots = (e) => setSearchField(e.target.value);

  const filteredRobots = robots.filter( robot => robot.name.toLowerCase().includes(searchField.toLowerCase()));
  
  return !robots.length ? <h1>Loading...</h1> :
  (
    <div className="tc">
      <h1 className="f1">RoboFriends</h1>
      <SearchBox searchChanged={onSearchRobots}/>
      <Scroll>
        <CardList robots={filteredRobots} />
      </Scroll>
    </div>
  )
}

export default App;