import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Stack, Chip } from '@mui/material';

export default function ChatbotCard(props) {
  return (
    <Card>
      <CardActionArea>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary">{props.data.start_date} - {props.data.end_date}</Typography>
          <Typography variant="h5" component="div">{props.data.name}</Typography>
          <Typography color="text.secondary">{props.data.creator}</Typography>
          <Stack direction="row" spacing={1}>
            {props.data.tags.map((tag) => <Chip label={tag} />)}
          </Stack>
          <Typography sx={{ fontSize: 14 }}  variant="body1">{props.data.description}</Typography>
        </CardContent>
        <CardActions>
          <Button size="medium">Read More</Button>
        </CardActions>
      </CardActionArea>
    </Card>
  );
}