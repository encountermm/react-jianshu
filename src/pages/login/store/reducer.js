import * as actionTypes from './actionTypes'
import { fromJS } from 'immutable'

const defaultSate = fromJS({
	login: true
})

export default (state = defaultSate, action) => {
	switch (action.type) {
		case actionTypes.CHANGE_LOGIN:
			return state.set('login', action.value)
		case actionTypes.LOGOUT:
			return state.set('login', action.value)
		default:
			return state
	}
}
