import { Outlet } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

export default function Layout() {
  return (
    <>
      <AppBar
        position="static"
        color="default"
        elevation={0}
        sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
      >
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
            Chatbot Cemetery
          </Typography>
          <nav>
            <Link
              variant="inherit"
              color="text.primary"
              href="/"
              sx={{ my: 1, mx: 1.5 }}
            >
              Home
            </Link>
            <Link
              variant="inherit"
              color="text.primary"
              href="/cemetery"
              sx={{ my: 1, mx: 1.5 }}
            >
              Cemetery
            </Link>
            <Link
              variant="inherit"
              color="text.primary"
              href="/blog"
              sx={{ my: 1, mx: 1.5 }}
            >
              Blog
            </Link>
            <Link
              variant="inherit"
              color="text.primary"
              href="/about"
              sx={{ my: 1, mx: 1.5 }}
            >
              About
            </Link>
          </nav>
        </Toolbar>
      </AppBar>
      <Outlet />
    </>
  );
}