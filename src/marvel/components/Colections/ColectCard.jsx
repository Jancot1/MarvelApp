import { useContext, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { Card, CardActionArea, CardContent, CardMedia, Grid, IconButton, ListItemIcon, Menu, MenuItem, Typography } from "@mui/material";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

import { deleteAlbum, onOpenTypeModal, onSetActiveAlbum } from "../../../store";
import { SnackbarContext } from "../../../context/SnackbarContext";

export const ColectCard = ({ album }) => {

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const { setAlert } = useContext(SnackbarContext);

  const onClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClick = () => {
    navigate(`/colection/${album._id}`);
  }

  const handleClose = () => {
    setAnchorEl(null); 
  };

  const handleEdit = () => {
    dispatch(onSetActiveAlbum(album));
    dispatch(onOpenTypeModal());
    handleClose();
  }

  return (
    <>
      <Card 
        sx={{ 
          maxWidth: 400,
          minWidth: 200
        }} 
        className="animate__animated animate__fadeIn"
      >
        <CardActionArea onDoubleClick={handleClick}>
          <CardMedia
            component="img"
            image={
              album.type === 'Characters'
              ? "../Characters.jpg" 
              : "../Comics.jpg"
            }
            height="250"
          />
          <CardContent>
            <Grid container direction="row" justifyContent="space-between">
              <Grid item marginLeft={1}>
                <Typography variant="h6" component="div">
                  {album.title}
                </Typography>
                <Typography variant="body">
                  {album.type}
                </Typography>
              </Grid>  
              <Grid item>
                <IconButton
                  aria-label="more"
                  id="long-button"
                  aria-controls={open ? 'long-menu' : undefined}
                  aria-expanded={open ? 'true' : undefined}
                  aria-haspopup="true"
                  onClick={onClick}
                >
                  <MoreVertIcon />
                </IconButton>
              </Grid>  
            </Grid>
          </CardContent>
        </CardActionArea>
        <Menu
          id="long-menu"
          MenuListProps={{
            'aria-labelledby': 'long-button',
          }}
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          PaperProps={{
            style: {
              maxHeight: 48 * 4.5,
              width: '20ch',
            },
          }}
        >
          <MenuItem onClick={handleEdit}>
            <ListItemIcon>
              <EditIcon fontSize="small"/>
            </ListItemIcon>
            Edit
          </MenuItem>
          <MenuItem onClick={ () => {
            handleClose();
            dispatch(deleteAlbum(album));
            setAlert({
              type: 'error',
              message: 'The colection has been deleted'
            })
          }} 
            sx={{ ':hover': { color: '#ef5350'} }}>
            <ListItemIcon>
              <DeleteIcon color="error" fontSize="small"/>
            </ListItemIcon>
              Delete
          </MenuItem>
        </Menu>
      </Card>
    </>
  )
}
