import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Main from './components/Pages/MainPage/Main';
import Startups from './components/Pages/StartupsPage/Startups';
import UserForm from './components/Pages/FormPage/Form';
import Navigation from './components/Navigation/Navigation';
import Technologies from './components/Pages/NewsPage/TechnologiesPage/Technologies';
import StartupDetail from './components/Pages/StartupDetailPage/StartupDetail';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <div>
      <nav>
        <Navigation />
      </nav>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/startups' element={<Startups />} />
        <Route path='/form' element={<UserForm />} />
        <Route path='/news/technologies' element={<Technologies />} />
        <Route path='/startups/startupDetail/:id' element={<StartupDetail />} />
      </Routes>
      <ToastContainer />
    </div>
  );
};

export default App;
