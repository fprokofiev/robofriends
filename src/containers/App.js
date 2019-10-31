import React, {Component} from 'react';
import SearchBox from '../components/SearchBox';
import CardList from '../components/CardList';
import Scroll from '../components/Scroll';
import './App.css';

class App extends Component {
	constructor() {
		super();
		this.state = {
			robots: [],
			searchfield: ''
		}
	}

	onSearchChange = (event) => {
		this.setState({ searchfield: event.target.value })
	}

	render() {
		const {robots, searchfield} = this.state;
		const filteredRobots = robots.filter(robot => {
			return robot.name.toLowerCase().includes(searchfield.toLowerCase())
		})
		return (!robots.length) ?
		<><h1>Loading</h1></> :
		(
			<>
				<header className='tc'>
					<><header><h1 className="f2">RoboFriends</h1></header></>
					<SearchBox searchChange={this.onSearchChange} />
				</header>
				<main>
					<Scroll>
						<CardList robots={filteredRobots} />
					</Scroll>
				</main>
			</>
		);
	}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response => response.json())
			.then(users => {this.setState({ robots: users })})
	}
}

export default App;