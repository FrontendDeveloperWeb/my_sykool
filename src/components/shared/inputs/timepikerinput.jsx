// import React from "react";
// import { TimePicker } from 'antd'
// import dayjs from 'dayjs'
// import customParseFormat from 'dayjs/plugin/customParseFormat'
// dayjs.extend(customParseFormat)

// const TimePikerInput = ({ onChange, placeholder }) => {
// 	return (
// 		<TimePicker
// 			onChange={onChange}
// 			defaultOpenValue={dayjs('00:00:00', 'HH:mm:ss')}
// 			placeholder={placeholder}
// 		/>
// 	)
// }

// export default TimePikerInput


import React from "react";
import { TimePicker } from 'antd';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';

dayjs.extend(customParseFormat);

const TimePikerInput = ({ label, onChange, placeholder }) => {
	return (
		<div className="form-items w-100">
			<label>{label}</label>

			<TimePicker
				onChange={onChange}
				defaultOpenValue={dayjs('00:00:00', 'HH:mm:ss')}
				placeholder={placeholder}
				style={{ width: '100%' }}
			/>
		</div >
	);
};

export default TimePikerInput;
