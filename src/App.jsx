import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { GlobalStyle } from "./styles/globalStyles";
import Login from "./pages/Login";
import MainPage from "./pages/MainPage";
import SignUpForm from "./pages/SignUp";
import UserProfileComponent from "./pages/UserProfile";
import ActivitiesPage from "./pages/ActivitiesPage";
import QuizContainer from "./pages/QuizContainer";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<MainPage />} />
        <Route path="/signup" element={<SignUpForm />} />
        <Route path="/profile" element={<UserProfileComponent />} />
        <Route path="/activities" element={<ActivitiesPage />} />
        <Route path="/quiz/*" element={<QuizContainer />} />
      </Routes>
    </Router>
  );
}

export default App;
