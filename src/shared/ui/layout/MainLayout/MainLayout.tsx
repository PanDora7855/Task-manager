import { Outlet } from 'react-router';
import Header from '../../../../widgets/Header/Header';
import Footer from '../../../../widgets/Footer/Footer';
import styles from './MainLayout.module.css';

const MainLayout = () => {
	return (
		<div className={styles.container}>
			<Header />
			<main className={styles.content}>
				<Outlet />
			</main>
			<Footer />
		</div>
	);
};
export default MainLayout;
