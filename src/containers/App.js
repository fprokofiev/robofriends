import React, {Component} from 'react';
import SearchBox from '../components/SearchBox';
import CardList from '../components/CardList';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import './App.css';

class App extends Component {
	constructor() {
		super();
		this.state = {
			users: [],
			searchfield: ''
		}
	}

	onSearchChange = (event) => {
		this.setState({ searchfield: event.target.value })
	}

	render() {
		const {users, searchfield} = this.state;
		const filteredUsers = users.filter(user => {
			return user.name.toLowerCase().includes(searchfield.toLowerCase())
		})
		return (!users.length) ?
		<><h1 className='tc'>Loading</h1></> :
		(
			<>
				<header className='tc'>
					<><header><h1 className="f2">RoboFriends</h1></header></>
					<SearchBox searchChange={this.onSearchChange} />
				</header>
				<main className='tc'>
					<Scroll>
						<ErrorBoundary>
							<CardList users={filteredUsers} />
						</ErrorBoundary>
					</Scroll>
				</main>
			</>
		);
	}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response => response.json())
			.then(users => {this.setState({ users: users })})
	}
}

export default App;