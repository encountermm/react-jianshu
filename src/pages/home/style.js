import styled from 'styled-components'

export const HomeWrapper = styled.div`
	width: 960px;
	margin: 0 auto;
	height: 300px;
`

export const HomeLeft = styled.div`
	float: left;
	margin-left: 15px;
	padding-top: 30px;
	width: 625px;
	.banner-img {
		width: 625px;
		height: 270px;
	}
`
export const HomeRight = styled.div`
	float: right;
	width: 280px;
`

// topic
export const TopicWrapper = styled.div`
	overflow: hidden;
	paddin: 20px 0 10px 0;
	margin-top: 10px;
`

export const TopicItem = styled.div`
	float: left;
	height: 32px;
	line-height: 32px;
	margin-right: 18px;
	margin-bottom: 18px;
	padding-right: 10px
	background: #f7f7f7;
	color: #000;
	border: 1px solid #dcdcdc;
	border-radius: 4px;
	cursor:pointer;
	.topic-pic {
		display: block;
		float: left;
		width: 32px;
		height: 32px;
		margin-right: 10px;
	}
`
// list
export const ListItem = styled.div`
	overflow: hidden;
	padding: 20px 0;
	border-bottom: 1px solid #dcdcdc;
	.pic {
		display: block;
		width: 125px;
		height: 100px;
		float: right;
		border-radius: 10px;
	}
`

export const ListInfo = styled.div`
	width: 500px;
	float: left;
	.title {
		line-height: 27px;
		font-size: 18px;
		font-weight: bold;
		color: #333;
	}
	.desc {
		line-height: 24px;
		font-size: 13px;
		color: #999;
	}
`

export const LoadMore = styled.div`
	width: 100%;
	height: 40px;
	line-height: 40px;
	margin: 30px 0;
	background: #a5a5a5;
	text-align: center;
	border-radius: 20px;
	color: #fff;
	cursor: pointer;
`

// Recommend
export const RecommendWrapper = styled.div`
	margin: 30px 0;
	width: 280px;
`

export const RecommendItem = styled.div`
	width: 280px;
	height: 50px;
	background: url(${props => props.imgUrl});
	background-size: contain;
`

// WriterWrapper
export const WriterWrapper = styled.div`
	width: 278px;
	border: 1px solid #dcdcdc;
	border-radius: 3px;
	height: 300px;
	line-height: 300px;
	text-align: center;
	cursor: pointer;
	.qr-img {
		width: 80%;
		height: 80%;
		margin-top: 10%;
	}
`

// BackTop
export const BackTop = styled.div`
	position: fixed;
	right: 30px;
	bottom: 30px;
	width: 60px;
	height: 60px;
	line-height: 60px;
	text-align: center;
	border: 1px solid #ccc;
	font-size: 14px;
	cursor: pointer;
`
