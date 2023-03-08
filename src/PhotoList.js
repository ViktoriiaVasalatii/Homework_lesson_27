import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function PhotosList() {
  const [photos, setPhotos] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const albumId = searchParams.get('albumId');
    
    fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`)
      .then(response => response.json())
      .then(data => setPhotos(data))
      .catch(error => console.error(error));
  }, [location]);

  return (
    <div>
      <h1>Фотографії з альбому</h1>
      <ul>
        {photos.map(photo => (
          <li key={photo.id}>
            <img src={photo.thumbnailUrl} alt={photo.title} />
            <p>{photo.title}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PhotosList;


