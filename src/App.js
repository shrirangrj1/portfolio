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
import TodoListPage from './components/project/toDoApp/TodoListPage';

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




// import React, { useState } from "react";
// import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
// import LoginForm from "../src/routingcomponents/LoginForm";
// import RegisterForm from "../src/routingcomponents/RegisterForm";
// import ProtectedRoute from "../src/routingcomponents/ProtectedRoute";

// function App() {
//   const [user, setUser] = useState(null);

//   return (
//     <Router>
//         <Header />
//       <Routes>
//         <Route path="/" element={<LoginForm setUser={setUser} />} />
//         <Route path="/register" element={<RegisterForm />} />
//         <Route
//           path="/portfolio"
//           element={<ProtectedRoute user={user}><Profile /></ProtectedRoute>}
//         />
//         <Route
//           path="/projects"
//           element={<ProtectedRoute user={user} isAdmin><TodoListPage /></ProtectedRoute>}
//         />
//         <Route path="*" element={<Navigate to="/" />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;
