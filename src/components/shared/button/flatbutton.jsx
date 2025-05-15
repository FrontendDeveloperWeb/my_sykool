import React from "react";
import { Button , Tooltip} from 'antd'

const FlatButton = ({ title, icon, className, onClick, htmlType, loading, tootlip ,style ,placement }) => {
	return (
		<Tooltip title={tootlip} placement={placement}>
			<Button
				onClick={onClick}
				icon={icon}
				className={className}
				htmlType={htmlType}
				loading={loading}
				style={style}
			>
				<span>{title}</span>
			</Button>
		</Tooltip>
	)
}

export default FlatButton
