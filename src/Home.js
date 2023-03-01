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

export default function Home() {
  return (
    <>
      <h1>Home</h1>
      <Timeline position="left">
      <TimelineItem>
      <TimelineOppositeContent>
          <Card>
            <CardContent>
              <Typography sx={{ fontSize: 14 }} color="text.secondary">
                March 23, 2016 - March 24, 2016
              </Typography>
              <Typography variant="h5" component="div">
                Tay
              </Typography>
              <Typography color="text.secondary">
                Microsoft
              </Typography>
              <Stack direction="row" spacing={1}>
                <Chip label="Racism" />
                <Chip label="Sexism" />
                <Chip label="Anti-semitism" />
              </Stack>

              <Typography sx={{ fontSize: 14 }}  variant="body2">
                Started scraping harmful and negative (namely anti-Semitic, racist, and sexist) content. Trolls fed the bot offensive and harmful content which the bot learned and got out of control.
                Was reactivated later on, but started spamming the Twitter timeline.
              </Typography>
            </CardContent>
          </Card>
        </TimelineOppositeContent>
        <TimelineSeparator><TimelineDot /><TimelineConnector sx={{height:240}} /></TimelineSeparator>
        <TimelineContent color="text.secondary">2016</TimelineContent>
      </TimelineItem>
      <TimelineItem>
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