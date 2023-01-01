import { useState } from "react";
import { useSelector } from "react-redux";
import Modal from "react-modal";
import { useModal } from "../../hooks";

import { Button, Checkbox, Grid, Typography, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Divider } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import { ColectionModal } from "./ColectionModal";

export const ColectItem = ({open, setOpen}) => {

  const { openTypeModal } = useModal();
  const [checked, setChecked] = useState([0]);

  const { album } = useSelector( (state) => state.albums );

  const handleClick = () => {
    openTypeModal();
  }

  const handleClose = () => {
    setOpen(false);
  };

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  return (
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
            sx={{ width: "100%", maxWidth: 360 }}
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
                        inputProps={{ "aria-labelledby": labelId }}
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
  );
}
