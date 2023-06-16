import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Main from './components/Pages/MainPage/Main';
import Startups from './components/Pages/StartupsPage/Startups';
import UserForm from './components/Pages/FormPage/Form';
import Navigation from './components/Navigation/Navigation'
import 'bootstrap/dist/css/bootstrap.min.css'

const App = () => {
  return (
    <div>
      <nav>
        <Navigation />
      </nav>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/startups" element={<Startups />} />
        <Route path="/form" element={<UserForm />} />
      </Routes>
    </div>
  );
};

export default App;
