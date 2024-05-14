import * as React from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";

export default function DropDown({ multiple = false, title, data, change }) {
  return (
    <Stack spacing={30} sx={{ width: 200 }}>
      <Autocomplete
        multiple={multiple}
        id="tags-standard"
        options={data}
        getOptionLabel={(option) => option.name}
        onChange={(event, value) => change(value)}
        renderInput={(params) => (
          <TextField
            {...params}
            // variant="standard"
            // label="Multiple values"
            placeholder={title}
          />
        )}
      />
    </Stack>
  );
}
