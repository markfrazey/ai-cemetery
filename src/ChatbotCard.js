import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea, Stack, Chip, Skeleton } from '@mui/material';

export function ChatbotCardLoading() {
  return (
    <Card sx={{ height: 160 }}>
      <CardContent>
        <Skeleton width={80} />
        <Skeleton width={120} height={40} />
        <Skeleton width={60} />
        <Skeleton width={120} height={40} />
      </CardContent>
    </Card>
  );
}

export default function ChatbotCard(props) {
  const handleClick = () => {
    props.handleClick("/chatbots/" + props.data.id);
  }

  return (
    // <Slide direction="up" in={checked} mountOnEnter unmountOnExit>
      <Card key={props.data.id}>
        <CardActionArea onClick={(handleClick)} sx={{ height: 160 }}>
          <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary">{props.data.start_date} - {props.data.end_date}</Typography>
            <Typography variant="h5" component="div">{props.data.name}</Typography>
            <Typography color="text.secondary" marginBottom={1}>{props.data.creator}</Typography>
            <Stack direction="row" spacing={1}>
              {props.data.tags.split(", ").map((tag) => <Chip label={tag} />)}
            </Stack>
          </CardContent>
        </CardActionArea>
      </Card>
    // </Slide>
  );
}