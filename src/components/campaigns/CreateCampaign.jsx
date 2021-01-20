import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";
import Picker from "../drive/Picker";
// import FormControlLabel from "@material-ui/core/FormControlLabel";
// import Checkbox from "@material-ui/core/Checkbox";
// import FormControl from "@material-ui/core/FormControl";
// import TextField from "@material-ui/core/TextField";
// import FormGroup from "@material-ui/core/FormGroup";
// import DatePickers from "./Date";

function CreateCampaign(props) {
  // Create campaign handling
  const [campaign, setCampaign] = useState({
    name: "",
    summary: "",
    channels: "",
    due: "",
    folder: ""
  });

  const [isExpanded, setExpanded] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;
    setCampaign((prevCampaign) => {
      return {
        ...prevCampaign,
        [name]: value
      };
    });
  }

  function submitCampaign(event) {
    props.onAdd(campaign);
    event.preventDefault();
    setCampaign({
      name: "",
      summary: "",
      channels: "",
      due: "",
      folder: ""
    });
  }

  function expand() {
    setExpanded(true);
  }

  return (
    <div>
      <form className="create-campaign">
        {isExpanded ? (
          <div className="campaign-div">
          <input
            type="text"
            onChange={handleChange}
            name="name"
            placeholder="Campaign Name"
            value={campaign.name}
          />
          </div>
        ) : null}
        
        {isExpanded ? (
          <div className="campaign-div">
            <label for="channels" className="campaign-heading">Choose a campaign type:</label>
            <select name="channels" id="channels" onChange={handleChange}>
              <option value="Email">Email</option>
              <option value="Social">Social</option>
              <option value="Direct">Direct</option>
              <option value="Tradeshow">Tradeshow</option>
              <option value="Other (explain in summary)">Other</option>
            </select>
          </div>
        ) : null}
        <div className="campaign-div">
        <textarea
          onClick={expand}
          onChange={handleChange}
          name="summary"
          placeholder="Write your campaign summary"
          rows={isExpanded ? 3 : 1}
          value={campaign.summary}
        />
        </div>
        {isExpanded ? (
          <div className="campaign-div">
            <p className="campaign-heading">Campaign Kickoff</p>
            <input
              label="Project Due"
              type="date"
              onChange={handleChange}
              name="due"
              value={campaign.due}
            />
          </div>
        ) : null}
        {isExpanded ? (
          <div className="campaign-div">
            <Picker 
            />
          </div>
        ) : null}
        <Zoom in={isExpanded}>
          <Fab onClick={submitCampaign}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateCampaign;
