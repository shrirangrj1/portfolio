import React from 'react';
import { Container, Typography } from '@mui/material';
import { motion } from 'framer-motion';

const Education = () => {
    return (
        <Container style={{ padding: '20px' }}>
            <motion.div 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                transition={{ duration: 0.5 }}
            >
                <Typography variant="h4" gutterBottom style={{ color: '#1e1e2f' }}>
                    Education
                </Typography>
                <Typography variant="h6">Post Graduate Program in Advanced Computing</Typography>
                <Typography variant="body1">CDAC Mumbai (Kharghar) | 09/2021 – 04/2022 | India</Typography>

                <Typography variant="h6">Bachelors of Engineering</Typography>
                <Typography variant="body1">ZCOER Pune | 05/2015 – 06/2018</Typography>
            </motion.div>
        </Container>
    );
};

export default Education;