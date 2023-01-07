import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

const typeOfColection = [
  { label: "Comics", value: "Comics" },
  { label: "Characters", value: "Characters" },
];

export const ComboBoxType = ({ value, onTypeChanged, activeAlbum, isDisabled }) => {
  return (
    <FormControl>
      <InputLabel id="demo-simple-select-label">Type of Colections</InputLabel>
      <Select
        disabled={activeAlbum || isDisabled ? true : false}
        id="type-select"
        value={value}
        label="Type of Colection"
        onChange={onTypeChanged}
        sx={{ width: 300 }}
      >
        {typeOfColection.map((type) => (
          <MenuItem key={`type-${type.value}`} value={type.value}>
            {type.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
