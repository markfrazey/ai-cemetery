import Fade from '@mui/material/Fade';
import * as React from 'react';
import { useParams } from 'react-router-dom';
import { Stack, Typography, Chip, Skeleton, IconButton } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';


/* <IconButton variant="text" aria-label="back"><ArrowBackIcon fontSize="large" /></IconButton> */
export default function ChatbotPage(props) {
  const urlParams = useParams();

  return (
    <Fade in={true} mountOnEnter unmountOnExit>
      <div>
        <Typography variant="h4">
          {!props.isLoaded ? (
            <Skeleton width={120} />
          ) : (
            <>


              {props.chatbotData[urlParams.id].name}
            </>
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
            {props.chatbotData[urlParams.id].tags.split(", ").map((tag) => <Chip label={tag} />)}
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

      </div>
    </Fade>
  );
}