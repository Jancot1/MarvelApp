import { useContext, useState } from 'react';
import { useDispatch } from 'react-redux';
import Modal from 'react-modal';

import { Button, Checkbox, Grid, Typography, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Divider } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { useModal } from '../../../hooks';
import { ColectionModal } from './ColectionModal';
import { deleteItem, startSavingItem } from '../../../store';
import { SnackbarContext } from '../../../context/SnackbarContext';

export const ColectItem = ({open, setOpen, album = [], item}) => {

	const dispatch = useDispatch();
	const { openTypeModal } = useModal();
	const [checked, setChecked] = useState([]);

	const { setAlert } = useContext(SnackbarContext);

	const handleClick = () => {
		openTypeModal();
	};

	const handleClose = () => {
		setOpen(false);
	};
  
	const handleToggle = (value) => () => {
		const currentIndex = checked.indexOf(value);
		const newChecked = [...checked];

		if (currentIndex === -1) {
			newChecked.push(value);
			dispatch(startSavingItem(item, value));
			setAlert({
				type: 'success',
				message: 'The item has been saved successfully!'
			});      
		} else {
			newChecked.splice(currentIndex, 1);
			dispatch(deleteItem(item, value));
		}

		setChecked(newChecked);
	};

	return (
		<>
			<Modal
				isOpen={open}
				onRequestClose={handleClose}
				className="modal"
				overlayClassName="modal-fondo"
				closeTimeoutMS={200}
			>
				<Grid container>
					<Grid item>
						<Typography variant="h5" sx={{ mb: 1, padding: 2 }}>
              Save to...
						</Typography>
						<Divider/>
						<List
							sx={{ width: '100%', maxWidth: 360 }}
						>
							{album.map((value) => {
								const labelId = `checkbox-list-label-${value}`;

								return (
									<ListItem
										key={value}
										disablePadding
									>
										<ListItemButton
											role={undefined}
											onClick={handleToggle(value)}
											dense
										>
											<ListItemIcon>
												<Checkbox
													edge="start"
													disableRipple
													inputProps={{ 'aria-labelledby': labelId }}
												/>
											</ListItemIcon>
											<ListItemText
												id={labelId}
												primary={`${value.title}`}
											/>
										</ListItemButton>
									</ListItem>
                  
								);
							})}
							<Button variant="text" onClick={handleClick}>
								<AddIcon /> Create Colection
							</Button>
							<ColectionModal />
						</List>
					</Grid>
				</Grid>
			</Modal>
		</>
	);
};
