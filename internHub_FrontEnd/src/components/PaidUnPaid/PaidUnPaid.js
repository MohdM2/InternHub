import * as React from "react";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import TextField from "@mui/material/TextField";
export default function PaidUnPaid({ value, change }) {
  const [selectedValue, setSelectedValue] = React.useState(
    value.paid ? "Paid" : "Unpaid"
  );
  const [salary, setSalary] = React.useState(value.salary);

  React.useEffect(() => {
    change({
      paid: selectedValue === "Paid",
      salary: selectedValue === "Paid" ? salary : 0,
    });
  }, [selectedValue, salary]);

  const handleRadioChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const handleSalaryChange = (event) => {
    setSalary(event.target.value);
  };
  function numberInputOnWheelPreventChange(e) {
    e.target.blur();
    e.stopPropagation();
    setTimeout(() => {
      e.target.focus();
    }, 0);
  }

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
          required
          type="number"
          inputProps={{ min: 50 }}
          label="Specify Salary"
          variant="outlined"
          fullWidth
          value={salary}
          onWheel={numberInputOnWheelPreventChange}
          onChange={handleSalaryChange}
        />
      )}
    </FormControl>
  );
}
