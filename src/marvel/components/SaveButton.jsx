import { useState } from "react";
import { ColectItem } from "./Colections/ColectItem";


import { Button } from "@mui/material"
import SaveAsIcon from '@mui/icons-material/SaveAs';

export const SaveButton = ({album, item}) => {

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <>
      <Button
        onClick={handleOpen}
        className="box-shadow-button"
        sx={{
          color: 'white',
          backgroundColor: 'green',
          ':hover': {backgroundColor: 'green', opacity: 0.8},
          position: 'absolute',
          right: 90,
          top: 90,
          
        }}
      >
        <SaveAsIcon /> &nbsp; Save
      </Button>
      <ColectItem open={open} setOpen={setOpen} album={album} item={item}/>
    </>
  )
}
