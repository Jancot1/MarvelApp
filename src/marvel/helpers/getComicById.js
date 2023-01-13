import { useSelector } from 'react-redux';

export const getComicById = (id) => {

	const { comics } = useSelector(state => state.comics);

	return comics.find(comics => comics.id === parseInt(id));

};