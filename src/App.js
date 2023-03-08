import React, { useState } from 'react';
import Modal from 'react-modal';
import UserList from './UserList';
import AlbumList from './AlbumList';
import PhotoList from './PhotoList';

function App() {
  const [albumUserId, setAlbumUserId] = useState(null);
  const [photoAlbumId, setPhotoAlbumId] = useState(null);

  function handleAlbumClose() {
    setAlbumUserId(null);
  }

  function handlePhotoClose() {
    setPhotoAlbumId(null);
  }

  return (
    <div>
      <UserList />
      <Modal isOpen={albumUserId !== null} onRequestClose={handleAlbumClose}>
        {albumUserId !== null && (
          <AlbumList userId={albumUserId} onClose={handleAlbumClose} />
        )}
      </Modal>
      <Modal isOpen={photoAlbumId !== null} onRequestClose={handlePhotoClose}>
        {photoAlbumId !== null && (
          <PhotoList albumId={photoAlbumId} onClose={handlePhotoClose} />
        )}
      </Modal>
    </div>
  );
}

export default App;
