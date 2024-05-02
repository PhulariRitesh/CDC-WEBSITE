// DividerWithText.js
import React from 'react';
import { styled } from '@mui/system';
import Divider from '@mui/material/Divider';

const Container = styled('div')({
  display: 'flex',
  alignItems: 'center',
});

const Border = styled('div')({
  flex: 1,
  borderBottom: '2px solid lightgray',
});

const Content = styled('span')({
  padding: '8px', // Adjust the padding as needed
  fontWeight: 500,
  fontSize: '22px',
  color: 'lightgray',
});

const DividerWithText = ({ children }) => {
  return (
    <Container>
      <Border />
      <Content>{children}</Content>
      <Border />
    </Container>
  );
};

export default DividerWithText;
