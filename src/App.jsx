import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Main from './components/Pages/MainPage/Main';
import Startups from './components/Pages/StartupsPage/Startups';
import Form from './components/Pages/FormPage/Form';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/startups" element={<Startups />} />
        <Route path="Form" element={<Form />} />
      </Routes>
    </div>
  );
};

export default App;
