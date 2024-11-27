import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <AppBar position="static" style={{ backgroundColor: '#1e1e2f' }}>
            <Toolbar>
                <Typography variant="h6" style={{ flexGrow: 1 }}>
                    Shrirang Joshi's Portfolio
                </Typography>
                <Button color="inherit" component={Link} to="/">About</Button>
                <Button color="inherit" component={Link} to="/experienceSlider">Experience</Button>

                <Button color="inherit" component={Link} to="/projects">Projects</Button>
                <Button color="inherit" component={Link} to="/resume">Resume</Button>
            </Toolbar>
        </AppBar>
    );
};

export default Header;