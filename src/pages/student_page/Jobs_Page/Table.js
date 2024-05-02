import React, { useState,useEffect } from 'react';
import { Box,Stack, Link, Typography, FormControl, Select, MenuItem, Checkbox, ListItemText, Button, TextField, useMediaQuery} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { display } from '@material-ui/system';


const CompanyApplications = () => {
  const [role, setRole] = useState('');
  const [deadline,setDeadline] = useState('');
  const [eligibility,setEligibility] = useState('');
  const [name, setName] = useState('');
  const [filteredStudents, setFilteredStudents] = useState([]);


  const [FilterType, setFilterType] = useState('ALL');
  const [C,setC] = useState("blue");
  const [D,setD] = useState("black");
  const [E,setE] = useState("#F0F4FE");
  const [D1,setD1] = useState("white");
  
  useEffect(() => {
    if (FilterType === 'APPLIED') {
      setFilteredStudents(appliedstudents);
    } else {
      setFilteredStudents(allstudents);
    }
  }, [FilterType]);

  const handleCDModalOpen = () => {
    // setFilterType('ALL');
    setFilterType('ALL');
    setD("black");setE("#F0F4FE");
    setC("blue");setD1("white");
  };
  const handleADModalOpen = () => {
    setC("black");setD1("#F0F4FE");
    setD("blue");setE("white");  
    setFilterType('APPLIED');};
      // setIsCDModalOpen(false);
    // setIsADModalOpen(true);};
    // setFilterType('APPLIED');


  const allstudents = [
    { id: 1, name: 'Google', role: 'Software Developer',eligibility: 'Eligible Criteria:8',  program: 'BTech',Deadline : '26-10-2025'},
    { id: 2, name: 'Microsoft', role: 'Data Analyst',eligibility: 'Eligible Criteria:7',  program: 'MTech',Deadline : '25-9-2024' },
    { id: 3, name: 'BlackRock', role: 'Software Developer',eligibility: 'Eligible Criteria:7.5',  program: 'BTech',Deadline : '26-8-2025' },
    { id: 4, name: 'Microsoft', role: 'Software Developer',eligibility: 'Eligible Criteria:8.4',  program: 'BTech',Deadline : '28-7-2025' },
    { id: 5, name: 'Facebook', role: 'Software Developer',eligibility: 'Eligible Criteria:8.3',  program: 'BTech',Deadline : '29-6-2025' },  
    { id: 6, name: 'Whatsapp', role: 'Software Developer',eligibility: 'Eligible Criteria:8',  program: 'MTech',Deadline : '21-5-2025'},
    { id: 7, name: 'Reliance', role: 'Software Developer',eligibility: 'Eligible Criteria:8',  program: 'BTech',Deadline : '18-4-2025' },
    { id: 8, name: 'Instagram', role: 'Software Developer',eligibility: 'Eligible Criteria:8.2',  program: 'BTech',Deadline : '14-3-2025' },
    { id: 9, name: 'Boat', role: 'Software Developer',eligibility: 'Eligible Criteria:8',  program: 'BTech',Deadline : '14-2-2025'},
    { id: 10, name: 'Tata Communications', role: 'Software Developer',eligibility: 'Eligible Criteria:8',  program: 'BTech',Deadline : '15-10-2025' },
  ];

  const appliedstudents = [
    { id: 1, name: 'Google', role: 'Software Developer',eligibility: 'Eligible Criteria:8',  program: 'BTech',Deadline : '26-10-2025'},
    { id: 2, name: 'Microsoft', role: 'Data Analyst',eligibility: 'Eligible Criteria:7',  program: 'MTech',Deadline : '25-9-2024' },
    { id: 5, name: 'Facebook', role: 'Software Developer',eligibility: 'Eligible Criteria:8.3',  program: 'BTech',Deadline : '29-6-2025' },  
    { id: 6, name: 'Whatsapp', role: 'Software Developer',eligibility: 'Eligible Criteria:8',  program: 'MTech',Deadline : '21-5-2025'},
    { id: 7, name: 'Reliance', role: 'Software Developer',eligibility: 'Eligible Criteria:8',  program: 'BTech',Deadline : '18-4-2025' },
    { id: 9, name: 'Boat', role: 'Software Developer',eligibility: 'Eligible Criteria:8',  program: 'BTech',Deadline : '14-2-2025'},
    { id: 10, name: 'Tata Communications', role: 'Software Developer',eligibility: 'Eligible Criteria:8',  program: 'BTech',Deadline : '15-10-2025' },
  ];

  const theme = useTheme();
  let width = '0%';
  const Desk = useMediaQuery(theme.breakpoints.up('md'));
  const Tab = useMediaQuery(theme.breakpoints.down('md'));
  if (Tab){ width = '100%';}else if(Desk){ width = '91%';}

  const students = FilterType === 'ALL' ? allstudents : appliedstudents;
  const handleSearch = () => {
    const filteredList = students.filter(
      (student) =>
        (role === '' || student.role === role) &&
        (deadline === '' || student.Deadline === deadline) &&
        (eligibility === '' || student.eligibility === eligibility) &&
        (name === '' || student.name === name)
    );
    setFilteredStudents(filteredList);
  };

  return (
      <Box sx={{ paddingTop: 5,paddingLeft:1, width: '100%', overflowY: 'hidden',  }} marginLeft={{md:'20px'}} marginTop={{md:'30px'}}>
      <Link underline="hover" color={"blue"} sx={{ cursor: "pointer" }}> Applications </Link>
        <Typography variant="h4" mb={2}> Applications</Typography>
        <Box sx={{ display: 'flex', gap: 2, mt: 2, alignItems: 'flex-end' }}>

        <Box sx={{ flex: 0.5 }}>
            <Typography variant="body1" mb={0}>Company:</Typography>
            <TextField variant="outlined" value={name} onChange={(e) => setName(e.target.value)} type="text" size="small"/>
          </Box>

          <Box sx={{ flex: 1 }}>
            <Typography variant="body1" mb={0}>Role:</Typography>
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
            <Typography variant="body1" mb={0}>Eligibility:</Typography>
            <TextField variant="outlined"  value={eligibility} onChange={(e) => setEligibility(e.target.value)}  size="small"/>
          </Box>
          <Box sx={{ flex: 1 }}>
            <Typography variant="body1" mb={0}>Deadline:</Typography>
            <TextField variant="outlined"  value={deadline} onChange={(e) => setDeadline(e.target.value)} type="date" size="small"/>
  </Box>
        </Box> 

        <Box sx={{ mt: 2, display: 'flex', justifyContent: 'center' }}>
          <Button
            variant="contained"
            color="primary"
            sx={{ minWidth: '150px', fontSize: '0.95rem' }}
            onClick={handleSearch}>Search</Button>
        </Box>

        <Stack direction={"row"}>
            <Box width={60} borderBottom={2} borderRadius={4} color={C}
              sx={{ bgcolor: E, cursor: "pointer", paddingLeft: "16px", paddingTop: "10px", paddingRight: "16px", paddingBottom: "10px", fontSize: 20,}} onClick={handleCDModalOpen}><b>All</b></Box>
            <Box width={130} borderBottom={2} borderRadius={4} color={D}
              sx={{ bgcolor: D1, cursor: "pointer", paddingLeft: "16px", paddingTop: "10px", paddingRight: "12px", paddingBottom: "10px", fontSize: 20,}} onClick={handleADModalOpen}><b>Applied</b> </Box> 
              </Stack>

        {/* Display filtered list in tabular form */}
        {filteredStudents.length > 0 && (
        <Box>
        <Box
        sx={{
          border: `10px solid #F0F4FE`, // Set border width and color
          borderRadius: '10px',
          overflow: 'hidden',
          marginBottom: '20px', // Add margin to separate from content below
          width: 1300,
        }}
      >
        <table style={{ width: '100%', fontSize: '1.2rem', overflow: 'hidden',textAlign: 'center' }}>
              <tbody>
                <tr style={{color:'black',backgroundColor: 'lightblue'}}>
                  <th>Name</th>
                  <th>Role</th>
                  <th>Eligibility</th>
                  <th>Deadline</th>
                  <th>Application Status</th>
                </tr>
                {filteredStudents.map((student) => (
                  <React.Fragment key={student.id}>
                    <tr style={{backgroundColor: 'white'}}>
                      <td style={{display:'flex',alignItems:'center',marginLeft: '40px'}}>{student.name}</td>
                      <td style={{ color: 'blue' }}>{student.role}</td>
                      <td>{student.eligibility}</td>
                      <td>{student.Deadline}</td>
                      <td>
  {appliedstudents.some(appliedStudent => appliedStudent.id === student.id) ? (
    <Box
      sx={{
        width: 95,
        border: '1px solid #000',
        borderRadius: '10px',
        padding: '2px',
        textAlign: 'center',
        marginLeft: '100px',
      }}
    >
      Applied
    </Box>
  ) : (
    <Button
      variant="contained"
      color="primary"
      sx={{ minWidth: '150px', fontSize: '0.95rem' }}
    >
      Apply
    </Button>
  )}
</td>
                    </tr>
                  </React.Fragment>
                ))}
              </tbody>
            </table>
            </Box>
          </Box>
        )}
      </Box>
); 
}

export default CompanyApplications;