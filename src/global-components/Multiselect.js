import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete, {
  createFilterOptions
} from "@material-ui/lab/Autocomplete";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import { Checkbox } from "@material-ui/core";

const inputStyle = {height:'7.61vh', width:'28.59vw',marginBottom:'20px',backgroundColor:'#FFFFFF', };
  
const MultiSelect = ({
  items,
  label,
  placeholder,
  noOptionsText,
  limitTags,
  onChange
}) => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const allSelected = items.length === selectedOptions.length;
  const handleToggleOption = selectedOptions =>
    setSelectedOptions(selectedOptions);
  const handleClearOptions = () => setSelectedOptions([]);
  const getOptionLabel = option => `${option.label}`;
  const handleSelectAll = isSelected => {
    if (isSelected) {
      setSelectedOptions(items);
    } else {
      handleClearOptions();
    }
  };

  const handleToggleSelectAll = () => {
    handleSelectAll && handleSelectAll(!allSelected);
  };

  const handleChange = (event, selectedOptions, reason) => {
    if (reason === "select-option" || reason === "remove-option") {
      if (selectedOptions.find(option => option.value === "select-all")) {
        handleToggleSelectAll();
        let result = [];
        result = items.filter(el => el.value !== "select-all");
        return onChange(result);
      } else {
        handleToggleOption && handleToggleOption(selectedOptions);
        return onChange(selectedOptions);
      }
    } else if (reason === "clear") {
      handleClearOptions && handleClearOptions();
    }
  };
  const optionRenderer = (option, { selected }) => {
    const selectAllProps =
      option.value === "select-all" // To control the state of 'select-all' checkbox
        ? { checked: allSelected }
        : {};
    return (
      <>
        <Checkbox 
          color="primary"
          icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
          checkedIcon={<CheckBoxIcon fontSize="small" />}
          style={{ marginRight: 8 }}
          checked={selected}
          {...selectAllProps}
        />
        {getOptionLabel(option)}
      </>
    );
  };
  const inputRenderer = params => (
    <TextField {...params} multiline variant="outlined" style={inputStyle} label={label} placeholder={placeholder} />
  );
  const getOptionSelected = (option, anotherOption) =>
    option.value === anotherOption.value;
  const filter = createFilterOptions();
  return (
    <Autocomplete
      multiple
      limitTags={limitTags}
      options={items}
      value={selectedOptions}
      disableCloseOnSelect
      getOptionLabel={getOptionLabel}
      getOptionSelected={getOptionSelected}
      noOptionsText={noOptionsText}
      filterOptions={(options, params) => {
        const filtered = filter(options, params);
        return [ ...filtered];
      }}
      onChange={handleChange}
      renderOption={optionRenderer}
      renderInput={inputRenderer}
    />
  );
};

MultiSelect.defaultProps = {
  limitTags: 5,
  items: [],
  selectedValues: [],
  getOptionLabel: value => value
};

export default MultiSelect;
