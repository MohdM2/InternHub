import * as React from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";

export default function DropDown({
  multiple = false,
  title,
  data,
  selectedData,
  change,
}) {
  return (
    <Stack spacing={30}>
      <Autocomplete
        multiple={multiple}
        id="tags-standard"
        options={data}
        value={selectedData}
        getOptionLabel={(option) => option.name}
        onChange={(event, value) => change(value)}
        renderInput={(params) => (
          <TextField
            {...params}
            placeholder={title}
            sx={{ minWidth: "200px" }}
          />
        )}
      />
    </Stack>
  );
}
