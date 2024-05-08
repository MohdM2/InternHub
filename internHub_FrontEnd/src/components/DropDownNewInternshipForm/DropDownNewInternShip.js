import MenuItem from "@mui/material/MenuItem";

import TextField from "@mui/material/TextField";
export default function DropDownNewInternShip({ details }) {
  return (
    <>
      <TextField
        select
        size="small"
        fullWidth
        variant="outlined"
        label={details.labelName}
        required
      >
        {details.myArr.map((choice, index) => {
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
