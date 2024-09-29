
import { Box, Button, FormControl, FormControlLabel, FormLabel, Input, InputLabel, MenuItem, Modal, OutlinedInput, Radio, RadioGroup, Select, Stack, TextField, Typography } from '@mui/material'
import './App.css'
import bg from './assets/bg.webp'
import React, { useState } from 'react'



// date picker

import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';




function App() {
  const [fname, setFname] = useState(0)
  const [lname, setLname] = useState(0)
  const [gender, setGender] = useState(0)
  const [Qualification, setQualification] = useState(0)
  const [mbNo, setMobileNumber] = useState(0)
  const [isMobileInvalid, setIsMobileNumberInvalid] = useState(false)
  let date = Date()
  const [dob, setDob] = React.useState(dayjs(date))
  let selectDob = `${dob.$D}/${dob.$M + 1}/${dob.$y}`
  const [email, setEmail] = useState(0)
  const [isEmailInvalid, setIsEmailInvalid] = useState(false)
  const [pwd ,setPwd] = useState(0)

  const handleChange = (qualification) => {

    setQualification(qualification)
  }

  document.body.style.backgroundImage = `url(${bg})`

  const userIputValidation = (inputTag) => {
    const { name, value } = inputTag
    console.log(name, value);
    console.log(!!value.match(/^[1-9]\d{9}$/));
    if (name == "Mobile") {
      setMobileNumber(value)
      !!value.match(/^[1-9]\d{9}$/) ? setIsMobileNumberInvalid(false) : setIsMobileNumberInvalid(true)
    } else if (name == "email") {
      setEmail(value)
      !!value.match(/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/) ? setIsEmailInvalid(false) : setIsEmailInvalid(true)
    }
  }

  // Modal
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  const [open, setOpen] = useState(false);
  const showdetails = () => {
    if(fname && lname && gender && Qualification && mbNo && dob && email && pwd){
      setOpen(true);
    }else{
      alert("Please fill the form completely!!")
    }

  }
  const handleClose = () => setOpen(false);

  // clear funtion

  const hancleClear = () =>
  {
    setFname(0)
    setLname(0)
    setGender(0)
    setQualification(0)
    setMobileNumber(0)
    setIsEmailInvalid(false)
    setDob(dayjs(date))
    setEmail(0)
    setIsEmailInvalid(false)
    setPwd(0)
  }




  return (
    <>
      <div className="bg-transparent m-5 border  rounded p-3">
        <h1 className="text-center">Registration Form</h1>

        {/* name */}
        <Stack className='ms-5 py-3' direction="row" spacing={20} >
          <div>
            <label htmlFor="firstName" className='ms-5 mt-3 me-2 fw-bolder'>First Name : </label>
            <TextField value={fname || ""} onChange={e => setFname(e.target.value)} id="firstName" label="First Name" variant="outlined" />
          </div>
          <div>
            <label className='ms-5 mt-3 me-2 fw-bolder' htmlFor="lastName">Last Name : </label>
            <TextField value={lname || ""} onChange={e => setLname(e.target.value)} id="lastName" label="Last Name" variant="outlined" />
          </div>
        </Stack>

        {/* gender */}
        <FormControl className='ms-5 mt-2 px-5' style={{ marginTop: "-4%" }}>
          <FormLabel id="demo-radio-buttons-group-gender" className='fw-bolder text-dark'>Gender</FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-gender"
            defaultValue="female"
            name="radio-buttons-group"
            value={gender || ""}
          >
            <Stack direction="row" spacing={20}>
              <FormControlLabel onClick={e => setGender(e.target.value)} value="Female" control={<Radio />} label="Female" />
              <FormControlLabel onClick={e => setGender(e.target.value)} value="Male" control={<Radio />} label="Male" />
              <FormControlLabel onClick={e => setGender(e.target.value)} value="Other" control={<Radio />} label="Other" />
            </Stack>
          </RadioGroup>
        </FormControl>

        {/* qualification */}
        <FormLabel id="demo-radio-buttons-group-qualification" className='fw-bolder text-black' style={{ marginLeft: "-39rem", marginTop: "8rem" }}>Qualification : </FormLabel>
        <FormControl className='w-25 ms-2' style={{ marginTop: "7rem" }} >
          <InputLabel id="demo-simple-select-label">Qualification</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={Qualification || ""}
            label="Age"
            onChange={e => handleChange(e.target.value)}
          >
            <MenuItem value="Graduate">Graduate</MenuItem>
            <MenuItem value="Post Graduate">Post Graduate</MenuItem>
            <MenuItem value="PHD">PHD</MenuItem>
          </Select>
        </FormControl><br />

        {/* Mobile number */}
        <label htmlFor="mbno" className='ms-5 mt-5 px-5 text-black fw-bolder' >Mobile Number : </label>
        <TextField value={mbNo || ""} onChange={e => userIputValidation(e.target)} name='Mobile' className='mt-4' id="mbno" label="Mobile Number" variant="outlined" style={{ marginLeft: "-35px" }} />
        {
          isMobileInvalid &&
          <div className='mt-1 text-danger fw-bolder ' style={{ marginLeft: "14rem" }}>
            *Invalid Mobile Number
          </div>
        }

        {/* dob */}
        <br />
        <label htmlFor="DOB" className='ms-5 mt-5 px-5  text-black  fw-bolder' >Date Of Birth : </label>
        <div style={{ marginTop: "-4rem", marginLeft: "13rem" }}>
          <LocalizationProvider dateAdapter={AdapterDayjs} >
            <DatePicker label="Date Of Birth"
              className='mt-4'
              value={dob}
              onChange={(newValue) => setDob(newValue)}
            />

          </LocalizationProvider>
        </div>

        {/* email id */}
        <br />
        <label htmlFor="email" className='  text-black  fw-bolder' style={{ marginLeft: "8rem" }}>Email ID : </label>
        <TextField value={email || ""} onChange={e => userIputValidation(e.target)} name='email' id="email" label="Email ID" variant="outlined" style={{ marginLeft: "16px", marginTop: "-11px" }} />
        {
          isEmailInvalid &&
          <div className='mt-1 text-danger fw-bolder ' style={{ marginLeft: "14rem" }}>
            *Invalid Email Id
          </div>
        }

        {/* password */}

        <label htmlFor="Password" className='  text-black  fw-bolder' style={{ marginLeft: "8rem" }}>Password : </label>

        <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          value={pwd || ""}
          autoComplete="current-password"
          onChange={e=>setPwd(e.target.value)}
          style={{ marginTop: "-12px", marginLeft: "5px" }}
        />
        

        {/*  button */}
        <div className='d-flex align-item-center justify-content-center position-relative gap-5  m-4'>
          <Button onClick={showdetails} variant="contained" className='bg-black'>Submit</Button>
          <Modal
            open={open}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography id="modal-modal-title" className='text-center fw-bolder text-black' variant="h6" component="h2">
                User Details
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                Name          : {fname} {lname}
                <br /><br />
                Gender        : {gender}
                <br /><br />
                Qualification : {Qualification}
                <br /><br />
                Mobile Number : {mbNo}
                <br /><br />
                Date of Birth : {selectDob}
                <br /><br />
                Email ID      : {email}

                <div className=' mt-3 d-flex justify-content-center align-item-center'>
                  <Button onClick={handleClose} variant="contained" className='bg-info ' >ok</Button>

                </div>


              </Typography>
            </Box>
          </Modal>
          <Button onClick={hancleClear} variant="outlined" className='border-black text-black'>Clear</Button>
        </div>
      </div>
    </>
  )
}

export default App
