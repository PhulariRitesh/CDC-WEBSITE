import Login from './pages/loginPage/components/Login';
import CompanyProfile from './pages/recruiter_page/Profile_page/CompanyProfile';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Recruiter from './pages/recruiter_page/Recruiter'
import Student from './pages/student_page/student';
import { Box } from '@mui/material';
import SignRecruiter from './pages/SignUp_Page/SignRecruiter';
import { Schedule } from '@mui/icons-material';


function App() {
  return (
     <Box className="App">
      {/* <Login/> */}
      {/* <Recruiter/> */}
      <Router>
        <Routes>
        <Route path='/' element={<Login/>}></Route>
        <Route path='/RecruiterHome' element={<Recruiter/>}></Route>
        <Route path='/StudentHome' element={<Student/>}></Route>
        <Route path='/signup' element={<SignRecruiter/>}></Route>
        <Route path='/dar' element={<Schedule/>}></Route>
          
        </Routes>
      </Router>
      {/* <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <FloatingForm /> */}
    </Box> 
  );
}

export default App;
