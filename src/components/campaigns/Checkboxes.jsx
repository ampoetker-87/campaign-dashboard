import React from "react";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

export default function CheckboxesGroup() {
  const [checkbox, setCheckbox] = React.useState({
    Email: false,
    Direct: false,
    Social: false,
    Outbound: false
  });

  const handleCheckboxes = (event) => {
    setCheckbox({ ...checkbox, [event.target.name]: event.target.checked });
  };

  const { Email, Direct, Social, Outbound } = checkbox;

  return (
    <div>
      <FormGroup className="checkboxes">
        <FormControlLabel
          control={
            <Checkbox
              checked={Email}
              onChange={handleCheckboxes}
              name="Email"
            />
          }
          label="Email"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={Direct}
              onChange={handleCheckboxes}
              name="Direct"
            />
          }
          label="Direct"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={Social}
              onChange={handleCheckboxes}
              name="Social"
            />
          }
          label="Social"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={Outbound}
              onChange={handleCheckboxes}
              name="Outbound"
            />
          }
          label="Outbound"
        />
      </FormGroup>
    </div>
  );
}
