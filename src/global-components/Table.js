import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import  Box  from '@mui/material/Box';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: "#1E53D740",
      color: "blue",
      borderRight: `1px solid ${theme.palette.divider}`, 
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
      borderRight: `1px solid ${theme.palette.divider}`,    
    },
   
  }));
  

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    backgroundColor: "white",
}));

function createData(serial_number,RESUME_NAME,File) {
  return {serial_number,RESUME_NAME,File};
}

const rows = [
  createData(1,'Master Resume','Resume.pdf' ),
  createData(2,'Resume1','Student.csv'),
  createData(3,'Resume2','Students.csv'),
];

export default function Tables() {
  return (
    <TableContainer component={Box} marginTop={5}>
      <Table sx={{ minWidth: 500 }} aria-label="customized table" >
        <TableHead>
          <TableRow>
            <StyledTableCell>SR. No.</StyledTableCell>
            <StyledTableCell align="center">RESUME NAME</StyledTableCell>
            <StyledTableCell align="center">FILE</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.serial_number}>
              <StyledTableCell component="th" scope="row">
                {row.serial_number}
              </StyledTableCell>
              <StyledTableCell align="center">{row.RESUME_NAME}</StyledTableCell>
              <StyledTableCell align="center">{row.File}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}