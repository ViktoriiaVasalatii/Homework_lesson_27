import React, { useState } from 'react';

function PhotoList({ albumId, onClose }) {
    const [photos, setPhotos] = useState([]);
    const url = 'https://jsonplaceholder.typicode.com/photos?albumId=${albumId}';
    fetch(url)
        .then(response => response.json())
        .then(data => setPhotos(data));

    return (
        <div>
            <button onClick={onClose}>Закрити</button>
            {photos.map(photo => (
                <img key={photo.id} src={photo.url} alt={photo.title} />
            ))}
        </div>
    );
}


export default PhotoList;
