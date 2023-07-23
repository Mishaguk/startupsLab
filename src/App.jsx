import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Main from './components/Pages/MainPage/Main';
import Startups from './components/Pages/StartupsPage/Startups';
import UserForm from './components/Pages/FormPage/Form';
import Navigation from './components/Navigation/Navigation';
import 'bootstrap/dist/css/bootstrap.min.css';
import Technologies from './components/Pages/NewsPage/TechnologiesPage/Technologies';
import StartupDetail from './components/Pages/StartupDetailPage/StartupDetail';
import toastr from 'toastr';

toastr.options = {
  closeButton: false,
  debug: false,
  newestOnTop: false,
  progressBar: false,
  positionClass: 'toast-top-right',
  preventDuplicates: false,
  onclick: null,
  showDuration: '300',
  hideDuration: '1000',
  timeOut: '5000',
  extendedTimeOut: '1000',
  showEasing: 'swing',
  hideEasing: 'linear',
  showMethod: 'fadeIn',
  hideMethod: 'fadeOut',
};

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
        <Route path="/news/technologies" element={<Technologies />} />
        <Route path="/startups/startupDetail/:id" element={<StartupDetail />} />
      </Routes>
    </div>
  );
};

export default App;
