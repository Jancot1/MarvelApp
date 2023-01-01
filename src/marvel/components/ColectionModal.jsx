import Modal from "react-modal";

import { Button, Divider, Grid, TextField, Typography } from "@mui/material";
import { ComboBoxType } from "./";
import { initialColectState, useColectModal } from "../../hooks";
import { useDispatch, useSelector } from "react-redux";
import { onClearCurrentAlbum } from "../../store";

Modal.setAppElement("#root");

export const ColectionModal = () => {

  const dispatch = useDispatch();

  const { activeAlbum } = useSelector( (state) => state.albums );

  const { 
    formValues, setFormValues, isModalOpen, closeTypeModal, onImputChange,
    onSubmit, onTypeChanged
  } = useColectModal();

  return (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={() => {
        closeTypeModal();
        setFormValues(initialColectState);
        dispatch(onClearCurrentAlbum());
      }}
      className="modal"
      overlayClassName="modal-fondo"
      closeTimeoutMS={200}
    >
      <Typography variant="h4" sx={{ mb: 1, padding: 2 }}>
        { activeAlbum ? "Edit Colection" : "Create Colection" }
      </Typography>
      <Divider />
      <form className="container" onSubmit={onSubmit}>
        <Grid container>
          <Grid item xs={10} sx={{ mt: 2, marginLeft: 2 }}>
            <TextField
              label="Title"
              type="text"
              name="title"
              value={formValues.title}
              onChange={onImputChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 2, marginLeft: 2 }}>
            <ComboBoxType
              value={formValues.type}
              onTypeChanged={onTypeChanged}
            />
          </Grid>
          <Grid container spacing={2} sx={{ mb: 3, mt: 1 }}>
            <Grid item xs={10} sm={10} sx={{ ml: 5 }}>
              <Button type="submit" variant="contained" fullWidth>
                Save
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </form>
    </Modal>
  );
};
