import * as React from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import Box from '@mui/material/Box';
import ChatbotCard, { ChatbotCardLoading } from './ChatbotCard';
import Slide from '@mui/material/Slide';
import PageHeader from './PageHeader';
import { useNavigate } from 'react-router-dom';
import Fade from '@mui/material/Fade';
import FilterListIcon from '@mui/icons-material/FilterList';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import Tooltip from '@mui/material/Tooltip';

export default function Cemetery(props) {
  const navigate = useNavigate();
  const [slideOut, setSlideOut] = React.useState(true);
  const [navPath, setNavPath] = React.useState("");

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleNavigate = () => {
    navigate(navPath);
  };

  const handleTransition = (path) => {
    setNavPath(path);
    setSlideOut(false);
  };

  return (
    <Box sx={{ width: '100%' }}>

      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        spacing={2}
      >
        <PageHeader text="Cemetery" in={slideOut} />
        <Tooltip title="Filter">
          <IconButton onClick={handleClick} aria-label="Filter" >
            <FilterListIcon fontSize="large" />
          </IconButton>
        </Tooltip>

      </Stack>



      <Slide in={slideOut} appear={false} onExited={handleNavigate} direction="right" mountOnEnter unmountOnExit>
        <Fade in={true}  mountOnEnter unmountOnExit>
          <Grid container spacing={3}>
            {!props.isLoaded && Array(9).fill(<Grid xs={4}><ChatbotCardLoading /></Grid>)}
            {props.isLoaded && Object.values(props.chatbotData).sort((a, b) => new Date(a.start_date) - new Date(b.start_date)).map(currChatbotData =>
              <Grid xs={4} key={currChatbotData.id}>
                <ChatbotCard data={currChatbotData} handleClick={handleTransition}></ChatbotCard>
              </Grid>)
            }
          </Grid>
        </Fade>
      </Slide>
    </Box>
  );
}