import React, { PureComponent } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

class Write extends PureComponent {
	render() {
		const { loginStatus } = this.props

		return loginStatus ? <div>写文章</div> : <Redirect to="/login" />
	}
}

const mapState = state => ({
	loginStatus: state.getIn(['login', 'login'])
})

export default connect(
	mapState,
	null
)(Write)
