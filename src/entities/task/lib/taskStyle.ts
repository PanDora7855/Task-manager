import type { TaskCategory, TaskPriority, TaskStatus } from './types';

export const getCategoryColor = (category: TaskCategory): { backgroundColor: string; color: string } => {
	switch (category) {
		case 'Bug':
			return {
				backgroundColor: '#fed7d7',
				color: '#c53030'
			};
		case 'Feature':
			return {
				backgroundColor: '#c6f6d5',
				color: '#38a169'
			};
		case 'Documentation':
			return {
				backgroundColor: '#bee3f8',
				color: '#3182ce'
			};
		case 'Refactor':
			return {
				backgroundColor: '#fbb6ce',
				color: '#d53f8c'
			};
		case 'Test':
			return {
				backgroundColor: '#faf089',
				color: '#d69e2e'
			};
		default:
			return {
				backgroundColor: 'default',
				color: 'default'
			};
	}
};
export const getStatusColor = (status: TaskStatus): { backgroundColor: string; color: string } => {
	switch (status) {
		case 'To Do':
			return {
				backgroundColor: '#e2e8f0',
				color: '#4a5568'
			};
		case 'In Progress':
			return {
				backgroundColor: '#fef4e6',
				color: '#dd6b20'
			};
		case 'Done':
			return {
				backgroundColor: '#c6f6d5',
				color: '#38a169'
			};
		default:
			return {
				backgroundColor: 'default',
				color: 'default'
			};
	}
};
export const getPriorityColor = (priority: TaskPriority): { backgroundColor: string; color: string } => {
	switch (priority) {
		case 'Low':
			return {
				backgroundColor: '#f0fff4',
				color: '#38a169'
			};
		case 'Medium':
			return {
				backgroundColor: '#fffbeb',
				color: '#d69e2e'
			};
		case 'High':
			return {
				backgroundColor: '#fed7d7',
				color: '#e53e3e'
			};
		default:
			return {
				backgroundColor: 'default',
				color: 'default'
			};
	}
};
