import Fade from '@mui/material/Fade';
import * as React from 'react';
import { useParams } from 'react-router-dom';
import { Stack, Typography, Chip, Skeleton, Link } from '@mui/material';

export default function ChatbotPage(props) {
  const urlParams = useParams();

  return (
    <Fade in={true} mountOnEnter unmountOnExit>
      <div>
        <Typography variant="h4">
          {!props.isLoaded ? (
            <Skeleton width={120} />
          ) : (
            props.chatbotData[urlParams.id].name
          )}
        </Typography>

        <Typography color="text.secondary">
          {!props.isLoaded ? (
            <Skeleton width={120} />
          ) : (
            props.chatbotData[urlParams.id].start_date + " - " + props.chatbotData[urlParams.id].end_date
          )}
        </Typography>

        {!props.isLoaded ? (
          <div>
            <Skeleton />
            <Skeleton />
            <Skeleton width="60%" />
          </div>
        ) : (
          <Stack direction="row" spacing={1}>
            {props.chatbotData[urlParams.id].tags.split(", ").map((tag) => <Chip label={tag} key={tag}/>)}
          </Stack>
        )}

        {!props.isLoaded ? (
          <div>
            <Skeleton />
            <Skeleton />
            <Skeleton width="60%" />
          </div>
        ) : (
          <Typography variant="body1">{props.chatbotData[urlParams.id].description}</Typography>
        )}

        <br />

        <Typography variant="h6" color="text.secondary">
          {!props.isLoaded ? (
            <Skeleton width={120} />
          ) : (
            "Read more:"
          )}
        </Typography>

        {!props.isLoaded ? (
          <div>
            <Skeleton />
            <Skeleton />
            <Skeleton width="60%" />
          </div>
        ) : (
          <ul>
            {props.chatbotData[urlParams.id].links.split(", ").map((link) => <li><Link href={link} key={link} target="_blank" rel="noopener">{link}</Link></li>)}
          </ul>
        )}

      </div>
    </Fade>
  );
}