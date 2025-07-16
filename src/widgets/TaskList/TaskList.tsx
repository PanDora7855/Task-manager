import { Grid } from '@mui/material';
import { useEffect, useState } from 'react';
import type { ITask } from '../../entities/task/lib/types';
import TaskItem from '../TaskItem/TaskItem';

const TaskList = () => {
	const [tasks, setTasks] = useState<ITask[]>([]);

	const fetchTasks = async () => {
		fetch('http://localhost:3000/tasks')
			.then((res) => res.json())
			.then((data) => {
				setTasks(data);
			});
	};

	useEffect(() => {
		fetchTasks();
	}, [tasks]);

	return (
		<Grid container spacing={3}>
			{tasks.length > 0 &&
				tasks.map((task) => (
					<Grid size={{ xs: 12, sm: 6, md: 4 }} key={task.id}>
						<TaskItem key={task.id} task={task} />
					</Grid>
				))}
		</Grid>
	);
};
export default TaskList;
