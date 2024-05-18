import MenuItem from "@mui/material/MenuItem";

import TextField from "@mui/material/TextField";
export default function DropDownNewInternShip({ title, data, value, change }) {
  return (
    <>
      <TextField
        select
        size="small"
        fullWidth
        variant="outlined"
        label={title}
        value={value || data[0]}
        onChange={change}
        required
      >
        {data.map((choice, index) => {
          return (
            <MenuItem key={index} value={choice}>
              {choice}
            </MenuItem>
          );
        })}
      </TextField>
    </>
  );
}
