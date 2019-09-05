import styled from 'styled-components'
import logoPic from '../../statics/logo.png'

export const HeaderWrapper = styled.div`
	position: relative;
	height: 58px;
	border-bottom: 1px solid #f0f0f0;
`
export const Logo = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	display: block;
	width: 100px;
	height: 58px;
	background: url(${logoPic});
	background-size: contain;
`

export const Nav = styled.div`
	width: 960px;
	height: 100%;
	margin: 0 auto;
`
export const NavItem = styled.div`
	line-height: 56px;
	padding: 0 15px;
	font-size: 17px;
	color: #333;
	cursor: pointer;
	&.active {
		color: #ea6f5a;
	}
	&.left {
		float: left;
	}
	&.right {
		float: right;
	}
`
// 搜索
export const SearchWrapper = styled.div`
	float: left;
	position: relative;
	.zoom {
		position: absolute;
		right: 5px;
		bottom: 5px;
		width: 30px;
		line-height: 30px;
		text-align: center;
		border-radius: 15px;
		&.focused {
			background: #777;
			color: #fff;
		}
	}
`

export const NavSearch = styled.input.attrs({
	placeholder: '搜索'
})`
	width: 160px;
	height: 38px;
	margin-top: 9px;
	margin-left: 20px;
	padding: 0 30px 0 20px;
	color: #666;
	font-size: 14px;
	box-sizing: border-box;
	border: none;
	outline: none;
	border-radius: 19px;
	background: #eee;
	&.slide-enter {
		transition: all 0.2s ease-out;
	}
	&.slide-enter-active {
		width: 240px;
	}
	&.slide-exit {
		transition: all 0.2s ease-out;
	}
	&.slide-exit-active {
		width: 160px;
	}
	&::placeholder {
		color: #999;
	}
	&.focused {
		width: 240px;
	}
`
// 热门搜索
export const SearchInfo = styled.div`
	position: absolute;
	left: 0;
	top: 56px;
	width: 240px;
	padding: 0 20px;
	background: #fff;
	box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
`

export const SearchInfoTitle = styled.div`
	margin: 20px;
	margin-bottom: 15px;
	font-size: 14px;
	line-height: 20px;
	color: #969696;
`

export const SearchInfoSwitch = styled.div`
	float: right;
	font-size: 13px;
	cursor: pointer;
	.spin {
		display: block;
		float: left;
		font-size: 12px;
		margin-right: 2px;
		transition: all 0.2s ease-in;
		transform-origin: center center;
	}
`
export const SearchInfoList = styled.div`
	overflow: hidden;
`

export const SearchInfoItem = styled.a`
	display: block;
	float: left;
	line-height: 20px;
	padding: 0 5px;
	margin-right: 10px;
	margin-bottom: 15px;
	font-size: 12px;
	border: 1px solid #ddd;
	color: #787878;
	border-radius: 3px;
	cursor: pointer;
`

// 注册、写文章
export const Addition = styled.div`
	position: absolute;
	right: 0;
	top: 0;
	height: 56px;
`
export const Button = styled.div`
	float: right;
	margin-top: 9px;
	margin-right: 15px;
	padding: 0 20px;
	line-height: 38px;
	border: 1px solid #ec6149;
	line-heiht: 38px;
	border-radius: 19px;
	font-size: 14px;
	cursor: pointer;
	&.reg {
		color: #ec6149;
	}
	&.writting {
		color: #fff;
		background: #ec6149;
	}
`
