import axios from 'axios'
import * as actionTypes from './actionTypes'
import { fromJS } from 'immutable'

const changHomeData = data => ({
	type: actionTypes.CHANGE_HOME_DATA,
	topicList: data.topicList,
	recommendList: data.recommendList,
	articleList: data.articleList
})

const addHomeList = (list, nextPage) => ({
	type: actionTypes.ADD_ARTICLE_LIST,
	list: fromJS(list),
	nextPage
})

export const getHomeInfo = page => {
	return dispatch => {
		axios.get('/api/home.json').then(res => {
			const result = res.data.data
			dispatch(changHomeData(result))
		})
	}
}

export const getMoreList = page => {
	return dispatch => {
		axios.get('/api/homeList.json?page=' + page).then(res => {
			const result = res.data.data
			dispatch(addHomeList(result, page + 1))
		})
	}
}

export const toggleTopShow = show => ({
	type: actionTypes.TOGGLE_SCROLL_TOP,
	show
})
