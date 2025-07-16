import { Typography } from '@mui/material';
import type { ITitle } from './InputTitle.props';

const InputTitle = ({ title, required }: ITitle) => {
	return (
		<Typography
			variant='body2'
			fontSize={16}
			fontWeight={500}
			gutterBottom
			sx={{ marginBottom: '0', marginLeft: '5px' }}
		>
			{title}
			{required && <span style={{ color: 'red' }}> *</span>}
		</Typography>
	);
};
export default InputTitle;
