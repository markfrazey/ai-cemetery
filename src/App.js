import logo from './logo.svg';
import './App.css';
import Timelne from './Timeline.js';
import Navbar from './Navbar.js';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#6096ba',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Navbar />
      <Timelne />
    </ThemeProvider>
  );
}

export default App;
