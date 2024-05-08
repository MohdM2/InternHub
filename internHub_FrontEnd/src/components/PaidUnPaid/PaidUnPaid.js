import * as React from "react";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import TextField from "@mui/material/TextField";
export default function PaidUnPaid() {
  const [selectedValue, setSelectedValue] = React.useState("Unpaid");
  const [salary, setSalary] = React.useState(""); // State for salary input

  const handleRadioChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const handleSalaryChange = (event) => {
    setSalary(event.target.value);
  };

  return (
    <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">Salary</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        value={selectedValue}
        onChange={handleRadioChange}
      >
        <FormControlLabel value="Paid" control={<Radio />} label="💰 Paid" />
        <FormControlLabel
          value="Unpaid"
          control={<Radio />}
          label="🚫 Unpaid"
        />
      </RadioGroup>
      {selectedValue === "Paid" && (
        <TextField
          label="Specify Salary"
          variant="outlined"
          fullWidth
          value={salary}
          onChange={handleSalaryChange}
        />
      )}
    </FormControl>
  );
}
