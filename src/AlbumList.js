import { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';

function AlbumsList() {
    const [albums, setAlbums] = useState([]);
    const location = useLocation();

    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);
        const userId = searchParams.get('userId');

        fetch(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`)
            .then(response => response.json())
            .then(data => setAlbums(data))
            .catch(error => console.error(error));
    }, [location]);

    return (
        <div>
            <h1>Список альбомів користувача </h1>
            <ul>
                {albums.map(album => (
                    <li key={album.id}>
                        {album.title}
                        <br/>
                        <Link to={`/photos?albumId=${album.id}`} style={{textDecoration: "none"}} > Photos</Link>
        
                    </li>
                ))}
            </ul>
        </div>
    );
}
export default AlbumsList;