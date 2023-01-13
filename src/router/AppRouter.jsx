import { Navigate, Route, Routes } from 'react-router-dom';
import { AuthRoutes } from '../auth';
import { MarvelRoutes } from '../marvel';
import { useCheckAuth } from '../hooks';
import { LoadingScreen } from '../ui';

export const AppRouter = () => {

	const { status } = useCheckAuth();

	if (status === 'checking') {
		return <LoadingScreen />;
	}

	return (
		<Routes>
			{
				(status === 'not-authenticated') 
					? <Route path="/auth/*" element={<AuthRoutes />} />
					: <Route path="/*" element={<MarvelRoutes />} />
			}

			<Route path="/*" element={<Navigate to="/auth/login" />} />
			<Route />
		</Routes>
	);
};
