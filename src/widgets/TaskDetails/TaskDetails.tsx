import Input from '@shared/ui/Input/Input';
import InputTitle from '@shared/ui/InputTitle/InputTitle';
import styles from './TaskDetails.module.css';
import Select from '@shared/ui/Select/Select';
import { Button } from '@mui/material';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';

const TaskDetails = () => {
	const navigate = useNavigate();
	const { id } = useParams();
	const [inputs, setInputs] = useState({
		id: '',
		title: '',
		description: '',
		category: '',
		status: '',
		priority: ''
	});

	const fetchData = (id: string) => {
		fetch(`http://localhost:3000/tasks/${id}`)
			.then((res) => res.json())
			.then((data) => {
				setInputs(data);
			});
	};

	useEffect(() => {
		fetchData(id as string);
	}, [id]);

	const onChange = (value: string, option: string) => {
		setInputs((prev) => ({ ...prev, [option]: value }));
	};

	const handleClick = () => {
		fetch(`http://localhost:3000/tasks/${id}`, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(inputs)
		});
		navigate(-1);
	};

	return (
		<div className={styles.details}>
			<h1>Edit task</h1>
			<InputTitle title='Title' required />
			<Input onChange={onChange} category='title' value={inputs.title} />
			<InputTitle title='Description' />
			<Input onChange={onChange} category='description' value={inputs.description} />
			<InputTitle title='Category' required />
			<Select
				items={['Bug', 'Feature', 'Documentation', 'Refactor', 'Test']}
				category='category'
				onChange={onChange}
				value={inputs.category}
			/>
			<InputTitle title='Status' required />
			<Select
				items={['To Do', 'In Progress', 'Done']}
				category='status'
				onChange={onChange}
				value={inputs.status}
			/>
			<InputTitle title='Priority' required />
			<Select items={['Low', 'Medium', 'High']} category='priority' onChange={onChange} value={inputs.priority} />
			<div className={styles.btns}>
				<Button variant='contained' color='inherit' onClick={() => navigate(-1)}>
					Cancel
				</Button>
				<Button variant='contained' color='success' onClick={handleClick}>
					Save
				</Button>
			</div>
		</div>
	);
};
export default TaskDetails;
