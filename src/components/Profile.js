import React from 'react';
import { Container, Typography } from '@mui/material';
import { motion } from 'framer-motion';

const Profile = () => {
    return (
        <Container style={{ padding: '20px' }}>
            <motion.div 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                transition={{ duration: 0.5 }}
            >
                <Typography variant="h4" gutterBottom style={{ color: '#1e1e2f' }}>
                    Profile
                </Typography>
                <Typography variant="body1" paragraph>
                Dedicated and detail-oriented React.js
developer with four years of hands-on
experience creating seamless and
intuitive user interfaces. Proficient in
translating complex designs and
business requirements into highquality, responsive web applications
using React.js and modern JavaScript
(ES6+). Implementing efficient routing
with React Router, and integrating
RESTful APIs for data retrieval. Created
components to improve the efficiency
and productivity of developers Strong
problem-solving skills coupled with a
commitment to delivering scalable and
performant solutions. Experienced in
collaborative Agile / Scrum
environments, excelling in crossfunctional teams.
                </Typography>
            </motion.div>
        </Container>
    );
};

export default Profile;