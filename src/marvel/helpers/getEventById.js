import { useSelector } from 'react-redux';

export const getEventById = (id) => {

	const { events } = useSelector(state => state.events);

	return events.find(event => event.id === parseInt(id));

};