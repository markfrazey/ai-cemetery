import * as React from 'react';
import { Outlet, Link as RouterLink } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Container from '@mui/material/Container';
import SvgIcon from '@mui/material/SvgIcon';
import { ReactComponent as CemeteryLogo } from './logo.svg';
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
          <SvgIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}>
            <CemeteryLogo />
          </SvgIcon>
          <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
            <Link
                component={RouterLink}
                variant="inherit"
                underline="hover"
                color="text.primary"
                to="/"
              >
                Chatbot Cemetery
              </Link>
          </Typography>
          <nav>
            <Link
              component={RouterLink}
              variant="inherit"
              underline="hover"
              color="text.primary"
              to="/"
              sx={{ my: 1, mx: 1.5 }}
            >
              Home
            </Link>
            <Link
              component={RouterLink}
              variant="inherit"
              underline="hover"
              color="text.primary"
              to="/cemetery"
              sx={{ my: 1, mx: 1.5 }}
            >
              Cemetery
            </Link>
            <Link
              component={RouterLink}
              variant="inherit"
              underline="hover"
              color="text.primary"
              to="/blog"
              sx={{ my: 1, mx: 1.5 }}
            >
              Blog
            </Link>
            <Link
              component={RouterLink}
              variant="inherit"
              underline="hover"
              color="text.primary"
              to="/about"
              sx={{ my: 1, mx: 1.5 }}
            >
              About
            </Link>
          </nav>
        </Toolbar>
      </AppBar>
      <Container>
        <Outlet />
      </Container>
    </>
  );
}
