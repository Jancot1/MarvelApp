import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { deleteItemSelected } from '../../store';
import { Button } from '@mui/material';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

export const DeleteButton = () => {

	const dispatch = useDispatch();
  
	const { id } = useParams();

	const { activeItem, album } = useSelector( (state) => state.albums );

	const onClickDelete = () => {
		dispatch(deleteItemSelected(activeItem, id, album.find((element) => element.id === id)));
	};

	return (
		<Button
			className="fab-danger"
			onClick={onClickDelete}
			style={{
				display: activeItem ? '' : 'none'
			}}
			sx={{
				color: 'white',
				backgroundColor: 'red',
				':hover': {backgroundColor: 'red', opacity: 0.8},
				position: 'fixed',
				right: 110,
				bottom: 90,
          
			}}
		>
			<DeleteOutlineIcon /> 
		</Button>
	);
};
