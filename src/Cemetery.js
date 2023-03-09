import * as React from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import { Card, CardContent, Chip } from '@mui/material';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import { Stack } from '@mui/system';
import ChatbotCard, { ChatbotCardLoading } from './ChatbotCard';
import Slide from '@mui/material/Slide';
import PageHeader from './PageHeader';
import { useNavigate } from 'react-router-dom';

export default function Cemetery(props) {
  const navigate = useNavigate();
  const [slideOut, setSlideOut] = React.useState(true);
  const [navPath, setNavPath] = React.useState("");

  const handleNavigate = () => {
    navigate(navPath);
  };

  const handleTransition = (path) => {
    setNavPath(path);
    setSlideOut(false);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <PageHeader text="Cemetery" in={slideOut}></PageHeader>
      <Slide in={slideOut} appear={false} onExited={handleNavigate} direction="right" mountOnEnter unmountOnExit>
        <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          {!props.isLoaded && Array(6).fill(<Grid xs={6}><ChatbotCardLoading /></Grid>)}
          {props.isLoaded && Object.values(props.chatbotData).map(currChatbotData =>
            <Grid xs={6}>
              <ChatbotCard data={currChatbotData} handleClick={handleTransition}></ChatbotCard>
            </Grid>)
          }
        </Grid>
      </Slide>
    </Box>
  );
}