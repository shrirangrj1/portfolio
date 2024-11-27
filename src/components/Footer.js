import React from 'react';
import { Container, Typography } from '@mui/material';

const Footer = () => {
    return (
        <Container style={{ marginTop: '20px', textAlign: 'center', backgroundColor: '#ff4081', padding: '10px', borderRadius: '8px' }}>
            <Typography variant="body2" color="#ffffff">
                © {new Date().getFullYear()} Shrirang Joshi. All rights reserved.
            </Typography>
        </Container>
    );
};

export default Footer;