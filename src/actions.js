import {
	CHANGE_SEARCH_FIELD,
	REQUEST_USERS_PENDING,
	REQUEST_USERS_SUCCESS,
	REQUEST_USERS_FAILED
} from './constants';

export const setSearchField = (text) => ({
	type: CHANGE_SEARCH_FIELD,
	payload: text
})

export const requestUsers = () => {
	return async dispatch => {
		dispatch({ type: REQUEST_USERS_PENDING });
		try {
			const response = await fetch('https://jsonplaceholder.typicode.com/users')
			const data = await response.json()
			return dispatch({ type: REQUEST_USERS_SUCCESS, payload: data })
		} catch(error) {
			dispatch({ type: REQUEST_USERS_FAILED, payload: error });
		}
	}
}