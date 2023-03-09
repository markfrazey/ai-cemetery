import markImage from './img/Mark.jpg';
import nilaImage from './img/Nila.jpg';
import minsuhImage from './img/Minsuh.jpg';
import brandonImage from './img/Brandon.jpeg';
<<<<<<< HEAD
=======
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Grid2 from '@mui/material/Unstable_Grid2'; // Grid version 2
import { Typography } from '@mui/material';

>>>>>>> 17f294a (Added Meet the Team)

export default function About() {

  let teamMembers = [
    {
      name: 'Mark Frazey',
      image: markImage
    },
    {
      name: 'Nila Ragu',
      image: nilaImage
    },
    {
      name: 'Minsuh Kim',
      image: minsuhImage
    },
    {
      name: 'Brandon Mendoza',
      image: brandonImage
    }
  ];

  return (
    <>
      <h1>About</h1>
      <p>Welcome to Chatbot Cemetery, a website dedicated to exploring the rise and fall of chatbots over the past six years.</p>
      <p>As the popularity of chatbots grew, so did the number of bots created. However, not all chatbots were successful and many were shut down due to various reasons.</p>
      <p>Through our website, we aim to provide insight into why certain chatbots failed, whether it was due to lack of user engagement, technological limitations, or ethical concerns.</p>
      <h1>Meet The Team</h1>
      <Grid2 container spacing={3}>
        <Grid2>
          <Avatar
        alt="Mark Frazey"
        src={markImage}
        sx={{ width: 200, height: 200 }}
          />
        <Typography variant="h5" textAlign="center">Mark Frazey</Typography>
      </Grid2>
      <Grid2>
        <Avatar
          alt="Brandon Mendoza"
          src={brandonImage} 
          sx={{ width: 200, height: 200 }}
        />
        <Typography variant="h5">Brandon Mendoza</Typography>
        </Grid2>
        <Grid2>
          <Avatar
            alt="Nila Ragu"
            src={nilaImage}
            sx={{ width: 200, height: 200 }}
          />
          <Typography variant="h5" textAlign="center">Nila Ragu</Typography>
      </Grid2>
      <Grid2>
        <Avatar
          alt="Minsuh Kim"
          src={minsuhImage}
          sx={{ width: 200, height: 200 }}
        />
        <Typography variant="h5" textAlign="center">Minsuh Kim</Typography>
      </Grid2>
    </Grid2>
  </>
  );
}