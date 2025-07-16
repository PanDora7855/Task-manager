import { Chip, Divider, Typography } from '@mui/material';
import type { ITask } from '../../entities/task/lib/types';
import styles from './TaskItem.module.css';
import { getCategoryColor, getPriorityColor, getStatusColor } from '@entities/task/lib/taskStyle';
import { useNavigate } from 'react-router';

const TaskItem = ({ task }: { task: ITask }) => {
	const navigate = useNavigate();
	const handleClick = () => {
		navigate(`/tasks/${task.id}`);
	};

	return (
		<div className={styles.card} onClick={handleClick}>
			<Typography component='h6' gutterBottom sx={{ fontWeight: 'bold', fontSize: '20px' }}>
				{task.title}
			</Typography>
			<Typography
				variant='body2'
				color='text.secondary'
				sx={{
					maxHeight: '80px',
					fontSize: '16px',
					overflow: 'hidden',
					textOverflow: 'ellipsis',
					display: '-webkit-box',
					WebkitLineClamp: 3,
					WebkitBoxOrient: 'vertical'
				}}
			>
				{task.description}
			</Typography>
			<div className={styles.chips}>
				<Chip
					label={task.category}
					size='small'
					sx={{
						fontSize: '12px',
						fontWeight: 'bold',
						padding: '15px 7px',
						textTransform: 'uppercase',
						bgcolor: getCategoryColor(task.category).backgroundColor,
						color: getCategoryColor(task.category).color
					}}
				/>
				<Chip
					label={task.status}
					size='small'
					sx={{
						fontSize: '12px',
						fontWeight: 'bold',
						padding: '15px 7px',
						textTransform: 'uppercase',
						bgcolor: getStatusColor(task.status).backgroundColor,
						color: getStatusColor(task.status).color
					}}
				/>
				<Chip
					label={task.priority}
					size='small'
					sx={{
						fontSize: '12px',
						fontWeight: 'bold',
						padding: '15px 7px',
						textTransform: 'uppercase',
						bgcolor: getPriorityColor(task.priority).backgroundColor,
						color: getPriorityColor(task.priority).color
					}}
				/>
			</div>
			<Divider />
			<Typography
				variant='body2'
				sx={{ fontSize: '14px', mt: '10px', textTransform: 'uppercase', color: '#afb3b8ff' }}
				gutterBottom
			>
				Click to edit
			</Typography>
		</div>
	);
};
export default TaskItem;
