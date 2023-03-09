import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent, { timelineContentClasses } from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import Fade from '@mui/material/Fade';
import PageHeader from './PageHeader';
import ChatbotCard from './ChatbotCard';
import { useNavigate } from 'react-router-dom';
import Slide from '@mui/material/Slide';


export default function Home(props) {
  const navigate = useNavigate();
  const [slideOut, setSlideOut] = React.useState(true);
  const [navPath, setNavPath] = React.useState("");

  const years = [2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023];

  const handleNavigate = () => {
    navigate(navPath);
  };

  const handleTransition = (path) => {
    setNavPath(path);
    setSlideOut(false);
  };
  return (
    <>
      <PageHeader text="Home" in={true}/>
      <Slide in={slideOut} appear={false} onExited={handleNavigate} direction="right" mountOnEnter unmountOnExit>
        <Fade in={props.isLoaded}  mountOnEnter unmountOnExit>
          <Timeline sx={{
            [`& .${timelineContentClasses.root}`]: {
              flex: 0.25,
            },
          }} position="left">
            {props.isLoaded && years.map(currYear =>
              <TimelineItem key={currYear}>
                <TimelineOppositeContent maxWidth={580}>
                {Object.values(props.chatbotData).filter(currChatbotData => new Date(currChatbotData.start_date).getUTCFullYear() === currYear).map(currChatbotData =>
                  <ChatbotCard data={currChatbotData} handleClick={handleTransition}></ChatbotCard>)
                }
                </TimelineOppositeContent>
                <TimelineSeparator><TimelineDot /><TimelineConnector sx={{height:240}} /></TimelineSeparator>
                <TimelineContent color="text.secondary">{currYear}</TimelineContent>
              </TimelineItem>
            )}
          </Timeline>
        </Fade>
        </Slide>
    </>
  );
}