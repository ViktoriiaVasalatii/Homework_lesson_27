import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UsersList from './UserList';
import AlbumsList from './AlbumList';
import PhotosList from './PhotoList';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UsersList />} />
        <Route path="/albums" element={<AlbumsList />} />
        <Route path="/photos" element={<PhotosList />} />
      </Routes>
    </Router>
  );
}

export default App;
