import React, { useState } from 'react';
import { Box, Link, Typography, FormControl, Select, MenuItem, Checkbox, ListItemText, Button, TextField, Avatar, useMediaQuery} from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import { useTheme } from '@mui/material/styles';

const StudentApplicationsForm = () => {
  const [role, setRole] = useState('');
  const [program, setProgram] = useState([]);
  const [branch, setBranch] = useState([]);
  const [cpi, setCpi] = useState('');
  const [filteredStudents, setFilteredStudents] = useState([]);

  const students = [
    { id: 1, name: 'Praisy', role: 'Software Developer', program: 'BTech', branch: 'Computer Science', cpi: 9.8 },
    { id: 2, name: 'Sindhu', role: 'Data Analyst', program: 'MTech', branch: 'Mathematics and Computing', cpi: 9.5 },
    { id: 3, name: 'Dolly', role: 'Software Developer', program: 'BTech', branch: 'Computer Science', cpi: 8.6 },
    { id: 4, name: 'Hindu', role: 'Software Developer', program: 'BTech', branch: 'Mathematics and Computing', cpi: 8.7 },
    { id: 5, name: 'Amrutha', role: 'Software Developer', program: 'BTech', branch: 'Electrical', cpi: 8.8 },
    { id: 6, name: 'Akarsh', role: 'Software Developer', program: 'MTech', branch: 'Computer Science', cpi: 9.0},
    { id: 7, name: 'Sruthi', role: 'Software Developer', program: 'BTech', branch: 'Computer Science', cpi: 9.2 },
    { id: 8, name: 'Anwitha', role: 'Software Developer', program: 'BTech', branch: 'Computer Science', cpi: 9.6 },
    { id: 9, name: 'Surya', role: 'Software Developer', program: 'BTech', branch: 'Computer Science', cpi: 9.76 },
    { id: 10, name: 'Harsha', role: 'Software Developer', program: 'BTech', branch: 'Computer Science', cpi: 9.4 },
    { id: 11, name: 'Sathvik', role: 'Software Developer', program: 'BTech', branch: 'Computer Science', cpi: 8.61 },
    { id: 12, name: 'Jaya', role: 'Software Developer', program: 'BTech', branch: 'Computer Science', cpi: 8.3 },
    { id: 13, name: 'Shivam', role: 'Software Developer', program: 'BTech', branch: 'Computer Science', cpi: 8.9},
  ];

  const theme = useTheme();
  let width = '0%';
  const Desk = useMediaQuery(theme.breakpoints.up('md'));
  const Tab = useMediaQuery(theme.breakpoints.down('md'));
  if (Tab){ width = '100%';}else if(Desk){ width = '91%';}
  const handleSearch = () => {
    const filteredList = students.filter(
      (student) =>
        (role === '' || student.role === role) &&
        (program.length === 0 || program.includes(student.program)) &&
        (branch.length === 0 || branch.includes(student.branch)) &&
        (cpi === '' || parseFloat(student.cpi) >= parseFloat(cpi))
    );
    setFilteredStudents(filteredList);
  };

  return (
      <Box sx={{ paddingTop: 5,paddingLeft:2, width: '100%', overflowY: 'hidden',  }} marginLeft={{md:'20px'}} marginTop={{md:'30px'}}>
      <Link underline="hover" color={"blue"} sx={{ cursor: "pointer" }}> Applications </Link>
        <Typography variant="h4" mb={2}> Student Applications</Typography>
        <Box sx={{ display: 'flex', gap: 2, mt: 2, alignItems: 'flex-end' }}>
          <Box sx={{ flex: 1 }}>
            <Typography variant="body1" mb={0}>Role</Typography>
            <FormControl variant="outlined" size="small" fullWidth>
              <Select value={role} onChange={(e) => setRole(e.target.value)}>
                <MenuItem value="">Select Role</MenuItem>
                <MenuItem value="Software Developer">Software Developer</MenuItem>
                <MenuItem value="Data Analyst">Data Analyst</MenuItem>
                <MenuItem value="Data Scientist">Data Scientist</MenuItem>
                <MenuItem value="Research Scientist">Research Scientist</MenuItem>
              </Select>
            </FormControl>
          </Box>

          <Box sx={{ flex: 1 }}>
            <Typography variant="body1" mb={0}> Program</Typography>
            <FormControl variant="outlined" size="small" fullWidth>
              <Select
                multiple
                value={program}
                onChange={(e) => setProgram(e.target.value)}
                renderValue={(selected) => selected.join(', ')}>
                <MenuItem value="BTech">
                  <Checkbox checked={program.includes('BTech')} />
                  <ListItemText primary="BTech" />
                </MenuItem>
                <MenuItem value="MTech">
                  <Checkbox checked={program.includes('MTech')} />
                  <ListItemText primary="MTech" />
                </MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Box sx={{ flex: 1 }}>
            <Typography variant="body1" mb={0}>Branch</Typography>
            <FormControl variant="outlined" size="small" fullWidth>
              <Select
                multiple
                value={branch}
                onChange={(e) => setBranch(e.target.value)}
                renderValue={(selected) => selected.join(', ')}>
                <MenuItem value="Computer Science">
                  <Checkbox checked={branch.includes('Computer Science')} />
                  <ListItemText primary="Computer Science" />
                </MenuItem>
                <MenuItem value="Mathematics and Computing">
                  <Checkbox checked={branch.includes('Mathematics and Computing')} />
                  <ListItemText primary="Mathematics and Computing" />
                </MenuItem>
                <MenuItem value="Electrical">
                  <Checkbox checked={branch.includes('Electrical')} />
                  <ListItemText primary="Electrical" />
                </MenuItem>
                <MenuItem value="Mechanical">
                  <Checkbox checked={branch.includes('Mechanical')} />
                  <ListItemText primary="Mechanical" />
                </MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Box sx={{ flex: 1 }}>
            <Typography variant="body1" mb={0}>CPI</Typography>
            <TextField variant="outlined" value={cpi} onChange={(e) => setCpi(e.target.value)} type="number" size="small"/>
          </Box>
        </Box>

        <Box sx={{ mt: 2, display: 'flex', justifyContent: 'center' }}>
          <Button
            variant="contained"
            color="primary"
            sx={{ minWidth: '150px', fontSize: '0.95rem' }}
            onClick={handleSearch}>Search</Button>
        </Box>

        <hr style={{ margin: '40px 0', border: 'none', height: '2px', backgroundColor: 'black',width:width }} />
        {/* Display filtered list in tabular form */}
        {filteredStudents.length > 0 && (
        <Box>
            <Box sx={{ backgroundColor: 'lightblue', display: 'flex',alignContent:'center', justifyContent: 'space-between',width:width, overflow:'initial' }}>
            <Box style={{ padding: '5px', fontSize: '1rem', color: 'blue',}} paddingLeft={{md:'55px'}}>NAME</Box>
            <Box style={{ padding: '5px', fontSize: '1rem', color: 'blue',}} paddingLeft={{md:'85px'}}>ROLE</Box>
            <Box style={{ padding: '5px', fontSize: '1rem', color: 'blue',}} paddingLeft={{md:'-55px'}}>PROGRAM</Box>
            <Box style={{ padding: '5px', fontSize: '1rem', color: 'blue',}} alignContent={{md:'left'}}>BRANCH</Box>
            <Box style={{ padding: '5px', fontSize: '1rem', color: 'blue',}} paddingLeft={{md:-10}}>CPI</Box>
        </Box>
            <table style={{ width: width, textAlign: 'center', fontSize: '1.2rem',overflow:'hidden' }}>    
            <tbody>
              {filteredStudents.map((student) => (
                  <React.Fragment key={student.id}>
                    <tr>
                    <td style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Avatar sx={{ backgroundColor: 'lightgrey', color: 'black', marginRight: '10px' }}><PersonIcon /></Avatar>
                      {student.name}
                    </td>
                    <td style={{ color: 'blue' }}>{student.role}</td>
                    <td >{student.program}</td>
                    <td >{student.branch}</td>
                    <td style={{ fontWeight: 'bold'}}>{student.cpi}</td>
                  </tr>
                  <tr>
                    <td colSpan="5">
                      <hr style={{ border: 'none', height: '1px', backgroundColor: 'black', margin: '5px' }} />
                    </td>
                  </tr>
                </React.Fragment>              
                ))}
              </tbody>
            </table>
          </Box>
        )}
      </Box>
); 
}

export default StudentApplicationsForm;