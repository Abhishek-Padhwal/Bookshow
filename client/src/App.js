import React from 'react';
import { Route, Routes } from 'react-router'

import Pages from './pages';
import Layout from './layouts';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Pages.Home />} />
      </Route>
    </Routes>
  );
}

export default App;
