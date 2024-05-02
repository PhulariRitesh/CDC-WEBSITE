import { blueGrey } from '@material-ui/core/colors';
import {Stack,Autocomplete,TextField, Checkbox} from '@mui/material'
import {useState} from 'react'
import React, { useReducer } from "react";
import {CheckBoxOutlineBlankIcon} from "@material-ui/icons";
import {CheckBoxIcon} from "@material-ui/icons/CheckBox";
import { Chip } from "@material-ui/core";


// const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
// const checkedIcon = <CheckBoxIcon fontSize="small" />;

const initialState = { selectedOptions: [] };

function reducer(state, action) {
  switch (action.type) {
    case "SET_SELECTED_OPTIONS":
      return { selectedOptions: action.payload.options };

    case "REMOVE_OPTION":
      return {
        selectedOptions: state.selectedOptions.filter(
          (option) => option.id !== action.payload.id
        )
      };
    default:
      throw new Error();
  }
}

const Combobox = (props) => {
  const Branch = props.array;

  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChange = (event, values) => {
    dispatch({ type: "SET_SELECTED_OPTIONS", payload: { options: values } });
  };

  const removeOption = (id) => {
    dispatch({ type: "REMOVE_OPTION", payload: { id: id } });
  };
  const [value,setValue] = useState(null)
  return(
      <Stack spacing={2} width='250px'>
        <Autocomplete
        multiple
        options={<Checkbox label={Branch}/>}
        disableCloseOnSelect
        getOptionLabel={(option) => option.title}
        value = {state.selectedOptions}
        renderTags={(values) => value.map((value) => (
          <Chip 
          key={value.id}
          label={value.title}
          onDelete={() => {
            removeOption(value.id);
          }}/>
        ))
        }
        getOptionSelected={(option,value) => option.id === value.id}
        renderOption={(option,{selected}) =>(
          <React.Fragment>
           <Checkbox
          //  icon={icon}
          //  checkedIcon={checkedIcon}
           style={{ marginRight: 8 }}
           checked={selected}
         />
         {option.title}
       </React.Fragment>
     )}
     style={{ width: 500 }}
     onChange={handleChange}
     renderInput={(params) => (
       <TextField
         {...params}
         variant="outlined"
         placeholder="Text"
       />
     )} 
        sx={{backgroundColor:"white"}}
        /></Stack>
    );
}

export default Combobox;