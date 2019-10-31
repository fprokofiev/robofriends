import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchBox from '../components/SearchBox';
import CardList from '../components/CardList';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import './App.css';

import { setSearchField, requestUsers } from '../actions'

const mapStateToProps = state => {
	return {
		searchField: state.searchUsers.searchField,
		users: state.requestUsers.users,
		isPending: state.requestUsers.isPending,
		error: state.requestUsers.error
	}
}

const mapDispatchToProps = dispatch => {
	return {
		onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
		onRequestUsers: () => dispatch(requestUsers())
	}
}

class App extends Component {

	render() {
		const { searchField, onSearchChange, users, isPending } = this.props;
		const filteredUsers = users.filter( user => {
			return user.name.toLowerCase().includes(searchField.toLowerCase());
		})
		return isPending ?
		<><h1 className='tc'>Loading</h1></> :
		(
			<>
				<header className='tc'>
					<><header><h1 className="f2">RoboFriends</h1></header></>
					<SearchBox searchChange={onSearchChange} />
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
		this.props.onRequestUsers();
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);