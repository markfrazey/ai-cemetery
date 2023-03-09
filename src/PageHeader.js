import * as React from 'react';
import Fade from '@mui/material/Fade';

export default function PageHeader(props) {
  return (
    <Fade in={props.in} mountOnEnter unmountOnExit>
      <h1>{props.text}</h1>
    </Fade>
  );
}