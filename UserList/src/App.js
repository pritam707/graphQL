import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UserList from './components/UserList';
import AddUser from './components/AddUser';



function CustomRoutes() {
  return (
    <main>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<UserList />} />
          <Route path="/addUser" element={<AddUser />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default CustomRoutes;