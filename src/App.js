import { useState, useEffect } from "react";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Route } from "react-router";
import { BrowserRouter as Router, Routes } from "react-router-dom";
import Home from './Home.js';
import Blog from './Blog.js';
import Cemetery from './Cemetery.js';
import About from './About.js';
import News from './News.js';
import Layout from './Layout.js';
import ChatbotPage from './ChatbotPage.js';
import './App.css';
import { getDatabase, ref, get } from '@firebase/database';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#6096ba',
    },
  },
  typography: {
    h4: {
      fontWeight: 700,
      marginTop: "0.67em"
    },
    fontFamily: '"Merriweather", "Montserrat", "Helvetica", "Arial", sans-serif',
    a: '"Merriweather", "Helvetica", "Arial", sans-serif',
    body2: '"Montserrat", "Helvetica", "Arial", sans-serif',
  },
});

function App() {
  const [isLoaded, updateIsLoaded] = useState(false);
  const [chatbotData, updateChatbotData] = useState({});

  useEffect(() => {
    const db = getDatabase();
    const chatbotsRef = ref(db, "chatbots");
    get(chatbotsRef).then((snapshot) => {
      if (snapshot.exists()) {
        updateIsLoaded(true);
        updateChatbotData(snapshot.val());
      } else {
        console.log("No data available");
      }
    });
  }, []);

  return (
    <Router>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home chatbotData={chatbotData} isLoaded={isLoaded} />} />
            <Route path="blog" element={<Blog />} />
            <Route path="cemetery" element={<Cemetery chatbotData={chatbotData} isLoaded={isLoaded} />} />
            <Route path="News" element={<News chatbotDate={chatbotData} isLoaded={isLoaded} />} />
            <Route path="about" element={<About />} />
            <Route path="chatbots/:id" element={<ChatbotPage chatbotData={chatbotData} isLoaded={isLoaded} />} />
          </Route>
        </Routes>
      </ThemeProvider>
    </Router>
  );
}

export default App;
