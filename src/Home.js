import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import { Card, CardContent, Chip } from '@mui/material';
import { Typography } from '@mui/material';
import { Stack } from '@mui/system';
import timelineData from './data.json';

function TimelineCard(props) {
  return (
    <Card>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary">{props.data.start_date} - {props.data.end_date}</Typography>
        <Typography variant="h5" component="div">{props.data.name}</Typography>
        <Typography color="text.secondary">{props.data.creator}</Typography>
        <Stack direction="row" spacing={1}>
          {props.data.tags.map((tag) => <Chip label={tag} />)}
        </Stack>
        <Typography sx={{ fontSize: 14 }}  variant="body2">{props.data.description}</Typography>
      </CardContent>
    </Card>
  );
}

export default function Home() {
  return (
    <>
      <h1>Home</h1>
      <Timeline position="left">
        <TimelineItem>
          <TimelineOppositeContent>
            <TimelineCard data={timelineData[0]} />
          </TimelineOppositeContent>
          <TimelineSeparator><TimelineDot /><TimelineConnector sx={{height:240}} /></TimelineSeparator>
          <TimelineContent color="text.secondary">2016</TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent>
            <TimelineCard data={timelineData[1]} />
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