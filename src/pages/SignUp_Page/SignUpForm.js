import React from 'react';
import LabelFormItem from '../../global-components/LabelFormItem';
import FilledTextBox from '../../global-components/FilledTextBox';
import OptFilledTextBox from '../../global-components/OptFilledTextBox';
import MultiLineTextBox from '../../global-components/MultiLineTextBox';
import Dropdown from '../../global-components/Dropdown';
import ClickButton from '../../global-components/ClickButton';
import {useForm} from 'react-hook-form'
import { DevTool } from '@hookform/devtools';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

// import axios from 'axios'
import { useNavigate } from 'react-router-dom';

function SignUpForm({categories, sectors}) {

    // const form = useForm();
    const {register, handleSubmit, control, formState} = useForm();
    const {errors} = formState;
    const navigate = useNavigate();
    const handleFormSubmit = async (data)=>{

      try{
        console.log(data);

        if(data.pocAltEmail=="") delete data.pocAltEmail;
        if(data.pocAltPhone=="") delete data.pocAltPhone;

        const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data)
        } ;
        console.log(requestOptions.body);
        const response = await fetch('/recruiter/apply', requestOptions);
        const responseData = await response.json();

        console.log(responseData);

        if(responseData.success===false){
          toast.error(responseData.message, {
              position: toast.POSITION.BOTTOM_CENTER,
              theme: 'colored'
          });
        }
        else{
            toast.success(responseData.message, {
                position:toast.POSITION.BOTTOM_CENTER,
                theme:'colored'
            })

            navigate('/thankyou');

            
        }

      }
      catch(error){
        console.log("Error is : ", error);
      }

    }


  return (
    <div>
      <form action="#" onSubmit={handleSubmit(handleFormSubmit)} noValidate>
        <LabelFormItem color='#6F7482' value="Company's Name"/>
            <FilledTextBox placeholder='Text' margin="15px 0" required={true} register={register} msg={"Company's Name is Required"} name={"companyName"} errors={errors}/>

            <LabelFormItem color='#6F7482' value="Company's Website" />
            <FilledTextBox placeholder='Text' margin="15px 0" required={true} register={register} msg={"Company's Website is Required"} name={'website'} errors={errors}/>

            <LabelFormItem color='#6F7482' value="Company's Description"/>
            <MultiLineTextBox placeholder='Text' rows='4' margin="15px 0" required={true} register={register} msg={"Company's Description is Required"} name={'about'} errors={errors}/>

            <LabelFormItem color='#6F7482' value="Company's POC Name"/>
            <FilledTextBox placeholder='Text' margin="15px 0" required={true} register={register} msg={"Company's POC Name is Required"} name={'pocName'} errors={errors}/>

            <LabelFormItem color='#6F7482' value="Company's POC Email"/>
            <FilledTextBox placeholder='Text' margin="15px 0" required={true} register={register} msg={"Company's POC Email is Required"} name={'pocEmail'} errors={errors}/>

            <LabelFormItem color='#6F7482' value="Alternate Email" required={false} />
            <OptFilledTextBox placeholder='Text' margin="15px 0" register={register} name={'pocAltEmail'} required={false}/>

            <LabelFormItem color='#6F7482' value="Category"  />
            <Dropdown sectors={categories}  margin="15px 0" errors={errors} msg={"Please select one Category"} name={'category'} register={register} required={true} control={control}/>

            <LabelFormItem color='#6F7482' value="Sector" />
            <Dropdown sectors={sectors}  margin="15px 0" errors={errors} msg={"Please select one sector"} register={register} name={'sector'} required={true} control={control} />

            <LabelFormItem color='#6F7482' value="Company's POC Contact Number"/>
            <FilledTextBox placeholder='Text' margin="15px 0" required={true} register={register} msg={"POC Contact Number is required"} name={'pocPhone'} errors={errors}/>

            <LabelFormItem color='#6F7482' value="Alternate Phone Number" required={false}/>
            <OptFilledTextBox placeholder='Text' margin="15px 0" register={register} name={'pocAltPhone'} required={false}/>

            <ClickButton height='65px' width='280px' value='SIGN UP' fs='1.2rem' margin='30px 0 60px 0' js={true} />

            
            <ToastContainer  />

        </form>
        <DevTool control={control}/>
    </div>
  );
}

export default SignUpForm;
