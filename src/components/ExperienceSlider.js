import React from 'react';
import Slider from 'react-slick';
import { Container, Typography } from '@mui/material';

const ExperienceSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <Container style={{ padding: '20px' }}>
            <Typography variant="h4" gutterBottom style={{ color: '#1e1e2f' }}>
                Experience, Education & Skills
            </Typography>
            <Slider {...settings}>
                {/* Experience Section */}
                <div>
                    <Typography variant="h5">Professional Experience</Typography>
                    <Typography variant="h6"> • Kotak Bank, Mumbai (Tech Kotak)</Typography>
                    <Typography variant="body2">React Developer | 03/2024 – Present</Typography>
                    <ul>
                        <li>Collaborated with react-hook-form to develop forms and added validations.</li>
                        <li>Engaged in various modules for form creation.</li>
                        <li>Developed a shared component using MUI and integrated it into the forms.</li>
                        <li>Provided assistance and guidance to an intern,
                            assigning tasks throughout their internship</li>
                        <li>Worked autonomously on a module and authored unit
                            test cases using JEST</li>
                        <li>Managed API integration utilizing react-query.</li>
                        <li>Designed a generic component to scroll image
                            intended for use across multiple forms.</li>
                        <li>Collaborated with microfrontend architecture,
                            utilizing React, Redux, and i18next for form creation
                            and API integration</li>

                    </ul>

                    <Typography variant="h6"> • LaminaarAviation India Limited</Typography>
                    <Typography variant="body2">React Developer | 06/2022 – 03/2024</Typography>
                    <ul>
                        <li>Developed interactive, responsive, and reusable
                            components that were used across multiple
                            subsystems</li>
                        <li>Conducted code reviews and provided feedback to
                            peers</li>
                        <li>Carried out through testing using JEST and React
                            Testing Library</li>
                        <li>Facilitated Scrum framework – sprint planning, daily
                            scrums, sprint reviews, and sprint retrospectives.</li>
                        <li>Implemented form handling and validation for user
                            input.</li>
                        <li>Extracted component logic into HOCs to prevent
                            code repetition.</li>
                        <li>I optimized my code by implementing techniques
                            such as virtualization and lazy loading</li>
                        <li>Created form usingAPI provided by the backend team</li>

                    </ul>

                    <Typography variant="h6"> • HSBC Hyderabad</Typography>
                    <Typography variant="body2">Associate | 10/2019 – 08/2021</Typography>
                    <ul>
                        <li>Worked on a payroll-related project where I worked
                            the HFE (Hub Front End) form to facilitate payment
                            calculations using HTML, CSS and Javascript.</li>
                        <li>Actively participated in Scrum-related activities</li>
                        <li>Written test cases using JEST.</li>


                    </ul>
                </div>


                <div>

                    <div>
                        <Typography variant="h5"> • Education</Typography>
                        <Typography variant="h6">Post Graduate Program in Advanced Computing</Typography>
                        <Typography variant="body2">CDAC Mumbai (Kharghar) | 09/2021 – 04/2022 | India</Typography>

                        <Typography variant="h6">Bachelors of Engineering</Typography>
                        <Typography variant="body2">ZCOER Pune | 05/2015 – 06/2018</Typography>

                    </div>
                    <div style={{marginTop:"10px"}}>
                    <Typography variant="h5"> • Skills</Typography>
                    <ul>
                        <li>React JS</li>
                        <li>HTML/CSS</li>
                        <li>JavaScript (ES6+)</li>
                        <li>TypeScript</li>
                        <li>Redux & Redux Toolkit</li>
                        <li>React Router</li>
                        <li>Webpack and
                            Babel</li>
                        <li>Unit Testing</li>

                        <li>Git and Version Control</li>
                        <li>Agile/Scrum</li>


                    </ul>
                    </div>

                </div>


            </Slider>
        </Container>
    );
};

export default ExperienceSlider;