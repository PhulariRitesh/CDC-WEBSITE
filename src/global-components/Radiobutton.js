import * as React from 'react';
import {Radio,RadioGroup,FormControl,FormControlLabel,Stack,Grid,Box} from '@mui/material';
import {TextField} from '@mui/material';
import { useForm } from "react-hook-form";


const inputStyle3 = {height:'4.2vh', width:'12.73vw',backgroundColor:'#FFFFFF', };

export default function RowRadioButtonsGroup({name,register,content,variable}) {
  const [selectedValue, setSelectedValue] = React.useState("a");
  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };


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
        <RadioGroup name={name}  aria-labelledby="demo-row-radio-buttons-group-label" value={selectedValue} row             {...register(name)}><Grid item style={{position:'relative',marginRight:'20px',color:'#6F7482'}}>{content}</Grid>
        <FormControlLabel value="Yes"  control={<Radio {...controlProps('Yes')} size="small"/>} label="Yes"/>
        <FormControlLabel value="No"  control={<Radio {...controlProps('No')} size="small"/>} label="No" />
      </RadioGroup>
    </FormControl>

      {selectedValue === "Yes" && (<Box component="span">
    <Box component="span" style={{position:'relative',marginRight:'10px',marginLeft:'100px',color:'#6F7482'}}>Type:</Box>
    <TextField arial-invalid="false" type="text"  placeholder="Text"   InputProps={{style: inputStyle3,}}/> 
      </Box>)}
      </Stack>);
}
