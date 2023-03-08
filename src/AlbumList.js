import React, { useState } from 'react';

function AlbumList({ userId, onClose }) {
    const [albums, setAlbums] = useState([]);
    const url = `https://jsonplaceholder.typicode.com/albums?userId=${userId}`;
    fetch(url)
        .then(response => response.json())
        .then(data => setAlbums(data));

    function handlePhotosClick(albumId) {
        const url = 'https://jsonplaceholder.typicode.com/photos?albumId=${albumId}';
    }

    return (
        <div>
            <button onClick={onClose}>Закрити</button>
            <table>
                <thead>
                    <tr>
                        <th>Назва альбому</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {albums.map(album => (
                        <tr key={album.id}>
                            <td>{album.title}</td>
                            <td><button onClick={() => handlePhotosClick(album.id)}>Photos</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default AlbumList;
