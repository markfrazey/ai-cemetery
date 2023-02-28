import Timelne from './Timeline.js';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Route } from "react-router";
import { BrowserRouter as Router, Link as RouterLink, Routes } from "react-router-dom";
import Home from './Home.js';
import Blog from './Blog.js';
import Cemetery from './Cemetery.js';
import About from './About.js';
import Layout from './Layout.js';

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
    <Router>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="blog" element={<Blog />} />
            <Route path="cemetery" element={<Cemetery />} />
            <Route path="about" element={<About />} />
          </Route>
        </Routes>
      </ThemeProvider>
    </Router>
  );
}

export default App;
