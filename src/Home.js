import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent, { timelineContentClasses } from '@mui/lab/TimelineContent';import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import ChatbotCard from './ChatbotCard';
import Slide from '@mui/material/Slide';
import Fade from '@mui/material/Fade';
import PageHeader from './PageHeader';

export default function Home() {
  return (
    <>
      <PageHeader text="Home" in={true}/>
      <Fade in={true}  mountOnEnter unmountOnExit>
        <Timeline sx={{
          [`& .${timelineContentClasses.root}`]: {
            flex: 0.1,
          },
        }} position="left">
          <TimelineItem>
            <TimelineOppositeContent>
            </TimelineOppositeContent>
            <TimelineSeparator><TimelineDot /><TimelineConnector sx={{height:240}} /></TimelineSeparator>
            <TimelineContent color="text.secondary">2016</TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent>
            </TimelineOppositeContent>
            <TimelineSeparator><TimelineDot /><TimelineConnector sx={{height:240}} /></TimelineSeparator>
            <TimelineContent color="text.secondary">2017</TimelineContent>
          </TimelineItem>
          <TimelineItem>
          <TimelineSeparator><TimelineDot /><TimelineConnector sx={{height:240}} /></TimelineSeparator>
            <TimelineContent color="text.secondary">2018</TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator><TimelineDot /><TimelineConnector sx={{height:240}} /></TimelineSeparator>
            <TimelineContent color="text.secondary">2019</TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator><TimelineDot /><TimelineConnector sx={{height:240}} /></TimelineSeparator>
            <TimelineContent color="text.secondary">2020</TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator><TimelineDot /><TimelineConnector sx={{height:240}} /></TimelineSeparator>
            <TimelineContent color="text.secondary">2021</TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator><TimelineDot /><TimelineConnector sx={{height:240}} /></TimelineSeparator>
            <TimelineContent color="text.secondary">2022</TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator><TimelineDot /><TimelineConnector sx={{height:240}} /></TimelineSeparator>
            <TimelineContent color="text.secondary">2023</TimelineContent>
          </TimelineItem>
        </Timeline>
      </Fade>
    </>
  );
}