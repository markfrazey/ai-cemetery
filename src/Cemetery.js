import Grid from '@mui/material/Unstable_Grid2';
import { Card, CardContent, Chip } from '@mui/material';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import { Stack } from '@mui/system';


export default function Cemetery() {
  return (
    <Box sx={{ width: '100%' }}>
      <h1>Cemetery</h1>
      <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6}>
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
        </Grid>
        <Grid item xs={6}>
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
        </Grid>
        <Grid item xs={6}>
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
        </Grid>
        <Grid item xs={6}>
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
        </Grid>
      </Grid>
    </Box>
  );
}