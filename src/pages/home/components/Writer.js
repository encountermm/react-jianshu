import React, { PureComponent } from 'react'
import { WriterWrapper } from '../style'

class Writer extends PureComponent {
	render() {
		return (
			<WriterWrapper>
				<img
					alt=""
					className="qr-img"
					src="https://jianshu.io/assets/web/download-index-side-qrcode-cb13fc9106a478795f8d10f9f632fccf.png"
				/>
			</WriterWrapper>
		)
	}
}

export default Writer
