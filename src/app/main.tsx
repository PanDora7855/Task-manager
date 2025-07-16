import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './app.css';
import { routes } from './routes.tsx';
import { RouterProvider } from 'react-router';
import { CssBaseline } from '@mui/material';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<CssBaseline />
		<RouterProvider router={routes} />
	</StrictMode>
);
