import * as React from 'react';
import {Radio,RadioGroup,FormControl,FormControlLabel,Stack,Grid} from '@mui/material';
import { useForm } from "react-hook-form";


export default function RowRadioButtonsGroup(props) {
  const [selectedValue, setSelectedValue] = React.useState("a");
  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const { register, handleSubmit, control, formState } = useForm();
  const { errors } = formState;

  const controlProps = (item) => ({
    checked: selectedValue === item,
    onChange: handleChange,
    value: item,
    name: 'size-radio-button-demo',
    inputProps: { 'aria-label': item },
  });
  return (
    <Stack  direction={'row'} alignItems={'center'} mt={2}>
    <FormControl>
    <RadioGroup name={props.name}  aria-labelledby="demo-row-radio-buttons-group-label"value={selectedValue} row {...register(props.name, { required: "Please select Yes or No for PPT" })}><Grid item style={{position:'relative',marginRight:'20px',color:'#6F7482'}}>{props.content}</Grid>
        <FormControlLabel value="Yes"  control={<Radio {...controlProps('Yes')} size="small"/>} label="Yes"/>
        <FormControlLabel value="No"  control={<Radio {...controlProps('No')} size="small"/>} label="No" />
      </RadioGroup>
    </FormControl>

  </Stack>);
}
