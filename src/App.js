import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Profile from './components/Profile';
import Education from './components/Education';

import Footer from './components/Footer';
import Resume from './components/Resume'
import MouseLight from './components/MouseLight';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ExperienceSlider from './components/ExperienceSlider';
import TodoListPage from './components/project/components/TodoListPage';

const App = () => {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/portfolio" element={<Profile />} />
                <Route path="/education" element={<Education />} />
    

                <Route path="/resume" element={<Resume />} />
                <Route path="/experienceSlider" element={<ExperienceSlider />} />
                <Route path="/projects" element={<TodoListPage />} />
            </Routes>
            <Footer />
            <MouseLight /> 
        </Router>
    );
};

export default App;