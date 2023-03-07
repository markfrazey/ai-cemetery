import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import timelineData from './data.json';
import ChatbotCard from './ChatbotCard';

export default function Home() {
  return (
    <>
      <h1>Home</h1>
      <Timeline position="left">
        <TimelineItem>
          <TimelineOppositeContent>
            <ChatbotCard data={timelineData[0]} />
          </TimelineOppositeContent>
          <TimelineSeparator><TimelineDot /><TimelineConnector sx={{height:240}} /></TimelineSeparator>
          <TimelineContent color="text.secondary">2016</TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent>
            <ChatbotCard data={timelineData[1]} />
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
    </>
  );
}