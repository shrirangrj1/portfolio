import React from 'react';
import { Container, Typography } from '@mui/material';
import { motion } from 'framer-motion';

const Resume = () => {
    return (
        <Container style={{ padding: '20px' }}>
            <motion.div 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                transition={{ duration: 0.5 }}
            >
                <Typography variant="h4" gutterBottom style={{ color: '#1e1e2f' }}>
                    Resume
                </Typography>

                <Typography variant="h6">Contact Information</Typography>
                <Typography variant="body1">Email: shrirang.rj@gmail.com</Typography>
                <Typography variant="body1">Phone: 8329117601</Typography>
                <Typography variant="body1">Address: Vasant Utsav Society Kandiwali East Mumbai</Typography>

                <Typography variant="h6" style={{ marginTop: '20px' }}>Profile</Typography>
                <Typography variant="body1" paragraph>
                    Dedicated and detail-oriented React.js developer with four years of hands-on experience creating seamless and intuitive user interfaces. Proficient in translating complex designs and business requirements into high-quality, responsive web applications using React.js and modern JavaScript (ES6+). Strong problem-solving skills coupled with a commitment to delivering scalable and performant solutions. Experienced in collaborative Agile/Scrum environments, excelling in cross-functional teams.
                </Typography>

                <Typography variant="h6">Education</Typography>
                <Typography variant="body1">Post Graduate Program in Advanced Computing | CDAC Mumbai (Kharghar) | 09/2021 – 04/2022 | India</Typography>
                <Typography variant="body1">Bachelors of Engineering | ZCOER Pune | 05/2015 – 06/2018</Typography>

                <Typography variant="h6">Professional Experience</Typography>
                
                <Typography variant="h6">Kotak Bank, Mumbai (Tech Kotak)</Typography>
                <Typography variant="body2">React Developer | 03/2024 – Present</Typography>
                <ul style={{ paddingLeft: '20px' }}>
                    <li>Collaborated with react-hook-form to develop forms and added validations.</li>
                    <li>Engaged in various modules, including Unified Desktop and TAS, for form creation.</li>
                    <li>Developed a shared component using MUI and integrated it into the forms.</li>
                    <li>Provided assistance and guidance to an intern, assigning tasks throughout their internship.</li>
                    <li>Worked autonomously on a module and authored unit test cases using JEST.</li>
                    <li>Managed API integration utilizing react-query.</li>
                    <li>Designed a generic component to scroll images intended for use across multiple forms.</li>
                    <li>Collaborated with microfrontend architecture, utilizing React, Redux, and i18next for form creation and API integration.</li>
                </ul>

                <Typography variant="h6">Laminaar Aviation India Limited</Typography>
                <Typography variant="body2">Software Engineer (ReactJS) | 06/2022 – 03/2024</Typography>
                <ul style={{ paddingLeft: '20px' }}>
                    <li>Developed interactive, responsive, and reusable components that were used across multiple subsystems.</li>
                    <li>Conducted code reviews and provided feedback to peers.</li>
                    <li>Carried out thorough testing using JEST and React Testing Library.</li>
                    <li>Facilitated Scrum framework – sprint planning, daily scrums, sprint reviews, and sprint retrospectives.</li>
                    <li>Implemented form handling and validation for user input.</li>
                    <li>Extracted component logic into HOCs to prevent code repetition.</li>
                    <li>Optimized code by implementing techniques such as virtualization and lazy loading.</li>
                    <li>Created forms using APIs provided by the backend team.</li>
                </ul>

                <Typography variant="h6">HSBC Hyderabad</Typography>
                <Typography variant="body2">Associate | 10/2019 – 08/2021</Typography>
                <ul style={{ paddingLeft: '20px' }}>
                    <li>Worked on a payroll-related project where I developed the HFE (Hub Front End) form to facilitate payment calculations using HTML, CSS, and JavaScript.</li>
                    <li>Actively participated in Scrum-related activities.</li>
                    <li>Written test cases using JEST.</li>
                </ul>

                <Typography variant="h6">Skills</Typography>
                <ul style={{ paddingLeft: '20px' }}>
                    <li>React JS</li>
                    <li>HTML/CSS</li>
                    <li>React Router</li>
                    <li>JavaScript (ES6+)</li>
                    <li>TypeScript</li>
                    <li>Redux & Redux Toolkit</li>
         
                </ul>

            </motion.div>
        </Container>
    );
};

export default Resume;