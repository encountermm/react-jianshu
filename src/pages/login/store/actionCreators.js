import axios from 'axios'
import * as actionTypes from './actionTypes'

const checkLogin = () => ({
	type: actionTypes.CHANGE_LOGIN,
	value: true
})
export const logout = () => ({
	type: actionTypes.LOGOUT,
	value: false
})

export const login = (account, password) => {
	return dispatch => {
		if (account !== 'admin' || password !== 'admin') {
			alert('帐号密码不正确,帐号密码为admin')
			return
		}
		axios.get(`/api/login.json?account=${account}&password=${password}`).then(res => {
			const result = res.data.data
			if (result) {
				dispatch(checkLogin())
			} else {
				alert('登录失败')
			}
		})
	}
}
