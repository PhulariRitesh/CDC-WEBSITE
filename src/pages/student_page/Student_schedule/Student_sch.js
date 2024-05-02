import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { Container, Button, Card, CardContent, Typography, Radio } from '@mui/material';
import './student_sch.css';
import {Box} from '@mui/material';

function ImportantDates({ filteredDates }) {
  const sortedDates = filteredDates.slice().sort((a, b) => a.date - b.date);

  return (
    <div className="important-dates">
      {sortedDates.map((date, index) => (
        <Card key={index} style={{ width: '250px', height: '250px', margin: '16px', display: 'inline-block' }}>
          <CardContent>
            <div className="content">
              <div className="company-name" style={{ 
                backgroundColor: 'black', 
                color: 'white', 
                padding: '8px', 
                borderRadius: '1px', 
                marginBottom: '-1px',
                fontWeight: 'bold', 
                fontSize: '18px',
                whiteSpace: 'nowrap', 
                overflow: 'hidden', 
                textOverflow: 'ellipsis', 
                textAlign: 'center',
                height:'17px',
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center'
              }}>
                {date.companyName.toUpperCase()}
              </div>
              <div className="event-name" style={{ 
                backgroundColor: '#1816B4', 
                color: 'white', 
                padding: '8px', 
                borderRadius: '1px', 
                marginBottom: '-1px',
                fontWeight: 'bold', 
                fontSize: '17.5px',
                whiteSpace: 'nowrap', 
                overflow: 'hidden', 
                textOverflow: 'ellipsis', 
                textAlign: 'center',
                height:'23px', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center'
              }}>
                {date.eventName.toUpperCase()}
              </div>
              <div className="date-info" style={{backgroundColor: '#d6e6f9'}}>
                <p style={{ fontSize: '73px', margin:'0', color:'#1816B4' }}>{date.date.getDate()}</p>
                <p style={{ fontSize: '19px', margin:'0', fontWeight:'bold'}}>{date.date.toLocaleString('default', { month: 'long' }).toUpperCase()}</p>
                <p style={{ fontSize: '19px', margin:'0', fontWeight:'bold' }}>{date.date.getFullYear()}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

function Schedule() {
  const [selectedDate] = useState(new Date());
  const [showCalendar, setShowCalendar] = useState(true);
  const [filterType, setFilterType] = useState('APPLIED'); // Default filter type

  const handleFilterChange = (filter) => {
    setFilterType(filter);
  };

  const allCompanies = [
    { companyName: 'Google', eventName: 'Application Deadline', date: new Date(2024, 1, 1) },
    { companyName: 'Google', eventName: 'Resume Shortlisting', date: new Date(2024, 1, 3) },
    { companyName: 'Google', eventName: 'Written Test', date: new Date(2024, 1, 5) },
    { companyName: 'Google', eventName: 'Interview Round 1', date: new Date(2024, 1, 7) },
    { companyName: 'Facebook', eventName: 'Resume Shortlisting', date: new Date(2024, 1, 8) },
    { companyName: 'Facebook', eventName: 'Interview', date: new Date(2024, 1, 9) },
    { companyName: 'Twitter', eventName: 'Written Test', date: new Date(2024, 1, 20) },
    { companyName: 'GoldmanSachs', eventName: 'Interview Round 1', date: new Date(2024, 1, 10) },
    { companyName: 'GoldmanSachs', eventName: 'Interview Round 2', date: new Date(2024, 1, 11) },
    { companyName: 'Codenation', eventName: 'Interview Round 2', date: new Date(2024, 1, 25) },
    { companyName: 'Microsoft', eventName: 'Interview Round 3', date: new Date(2024, 1, 27) },
    { companyName: 'Amazon', eventName: 'Result', date: new Date(2024, 1, 28) },
  ];

  const appliedCompanies = [
    { companyName: 'Google', eventName: 'Application Deadline', date: new Date(2024, 1, 1) },
    { companyName: 'Google', eventName: 'Resume Shortlisting', date: new Date(2024, 1, 3) },
    { companyName: 'Google', eventName: 'Written Test', date: new Date(2024, 1, 5) },
    { companyName: 'Google', eventName: 'Interview Round 1', date: new Date(2024, 1, 7) },
    { companyName: 'Facebook', eventName: 'Resume Shortlisting', date: new Date(2024, 1, 8) },
    { companyName: 'Facebook', eventName: 'Interview', date: new Date(2024, 1, 9) },
    { companyName: 'GoldmanSachs', eventName: 'Interview Round 1', date: new Date(2024, 1, 10) },
    { companyName: 'GoldmanSachs', eventName: 'Interview Round 2', date: new Date(2024, 1, 11) },

  ];

  const filteredCompanies = filterType === 'APPLIED' ? appliedCompanies : allCompanies;
  const companyColorsMap = {};

  return (
    <Box sx={{ display: 'flex', height: '100vh', overflow: 'hidden', width: '100%', }} marginLeft={{md:7}} marginTop={{md:-93,sm:7}}>
    <Container style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', height: '100vh' }}>

      <Typography variant="h7" style={{ marginLeft: '35px',marginTop : '30px', marginBottom: '6px', color: 'blue', textDecoration: 'underline' }}>Schedule</Typography>
      <div className="button-container" style={{marginLeft:'28px', marginBottom:'10px'}}>
        <Button onClick={() => setShowCalendar(false)} style={{ color: showCalendar ? 'initial' : 'darkblue', backgroundColor: showCalendar ? 'initial' : '#d6e6f9', borderRadius: '15px' }}>Important Dates</Button>
        <Button onClick={() => setShowCalendar(true)} style={{ color: showCalendar ? 'darkblue' : 'initial', backgroundColor: showCalendar ? '#d6e6f9' : 'initial', borderRadius: '15px', marginRight:'645px' }}>Schedule</Button>
        <div className="filter-box" style={{ display: 'flex', backgroundColor: '#1816B4', padding: '7px', borderRadius: '10px', marginLeft: '10px', width:'180px' }}>
          <div style={{ display: 'flex', alignItems: 'center', marginRight: '20px' }}>
            <Radio
              id="allRadio"
              name="filterType"
              value="ALL"
              checked={filterType === 'ALL'}
              onChange={() => handleFilterChange('ALL')}
              color="default"
              style={{ padding: '0px', marginRight: '10px', color: 'white' }}
            />
            <span style={{ color: 'white', fontFamily: 'Arial', fontSize: '13px' }}>ALL</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Radio
              id="appliedRadio"
              name="filterType"
              value="APPLIED"
              checked={filterType === 'APPLIED'}
              onChange={() => handleFilterChange('APPLIED')}
              color="default"
              style={{ padding: '0', marginRight: '10px', color: 'white' }}
            />
            <span style={{ color: 'white', fontFamily: 'Arial', fontSize: '13px' }}>APPLIED</span>
          </div>
        </div>
      </div>

      <div className="above-box" style={{ width: '100%' }}>
        <div className="important-dates-container">
          {showCalendar ? null : <ImportantDates filteredDates={filteredCompanies} />}
        </div>
        <div className="calendar-container">
          {showCalendar ? (
            <div>
              <Calendar
                  value={selectedDate}
                  className="custom-calendar"
                  tileContent={({ date }) => {
                    const matchingDates = filteredCompanies.filter(
                      (d) => d.date.toDateString() === date.toDateString()
                    );

                    

                    return (
                      <div className="important-date-marker">
                        {matchingDates.map((matchingDate, index) => {

                          if (!companyColorsMap[matchingDate.companyName]) {
                            const totalColors = 3; // Number of different colors
                            const colorIndex = Object.keys(companyColorsMap).length % totalColors;
                            const colorMap = ['lightgreen', 'lightcoral', '#FFD966'];
                            companyColorsMap[matchingDate.companyName] = colorMap[colorIndex];
                          }

                          const backgroundColor = companyColorsMap[matchingDate.companyName];
                          return (
                            <div key={index} className="event-title-box" style={{ backgroundColor }}>
                              <div className="company-title" style={{ fontWeight: 'bold' }}>
                                <div>{matchingDate.companyName}</div>
                              </div>
                              <div className="event-title">
                                <div>{matchingDate.eventName}</div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    );
                  }}
                />
            </div>
          ) : null}
        </div>
      </div>
      <div className="below-box">
        {/* */}
      </div>
    </Container>
    </Box>
  );
}

export default Schedule;
