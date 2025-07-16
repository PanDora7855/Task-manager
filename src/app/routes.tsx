import { createBrowserRouter } from 'react-router';
import TaskDetails from '../widgets/TaskDetails/TaskDetails';
import TaskList from '../widgets/TaskList/TaskList';
import MainLayout from '../shared/ui/layout/MainLayout/MainLayout';

export const routes = createBrowserRouter([
	{
		path: '/',
		element: <MainLayout />,
		children: [
			{
				index: true,
				element: <TaskList />
			},

			{
				path: '/tasks/:id',
				element: <TaskDetails />
			}
		]
	}
]);
