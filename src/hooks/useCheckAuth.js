import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FirebaseAuth } from '../firebase/config';
import { onAuthStateChanged } from 'firebase/auth';
import { login, logout } from '../store/auth/authSlice';
import { getColectionsByUid } from '../store';

export const useCheckAuth = () => {
	const {status} = useSelector(state => state.auth);
	const { album } = useSelector( (state) => state.albums );
	const dispatch = useDispatch();
  
	useEffect(() => {
		onAuthStateChanged(FirebaseAuth, async(user) => {
			if (!user) return dispatch( logout() );

			const {uid, email, displayName, photoURL} = user;
			dispatch( login({uid, email, displayName, photoURL}) );

			if (album.length === 0) {
				dispatch(getColectionsByUid(uid));
			}
		});
	}, []);

	return {
		status
	};
};
