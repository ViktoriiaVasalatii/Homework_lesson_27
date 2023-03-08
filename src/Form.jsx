// // import React, { useState } from 'react';

// // function UserList() {
// //   const [users, setUsers] = useState([]);

// //   // Запитуємо список користувачів з API
// //   fetch('https://jsonplaceholder.typicode.com/users')
// //     .then(response => response.json())
// //     .then(data => setUsers(data));

// //   function handleAlbumClick(userId) {
// //     // Відкриваємо модальне вікно зі списком альбомів конкретного користувача
// //     const url = `https://jsonplaceholder.typicode.com/albums?userId=${userId}`;
// //     // Додайте код для відображення модального вікна зі списком альбомів
// //   }

// //   return (
// //     <table>
// //       <thead>
// //         <tr>
// //           <th>Ім'я</th>
// //           <th>Електронна пошта</th>
// //           <th></th>
// //         </tr>
// //       </thead>
// //       <tbody>
// //         {users.map(user => (
// //           <tr key={user.id}>
// //             <td>{user.name}</td>
// //             <td>{user.email}</td>
// //             <td><button onClick={() => handleAlbumClick(user.id)}>Album</button></td>
// //           </tr>
// //         ))}
// //       </tbody>
// //     </table>
// //   );
// // }

// function AlbumList({ userId, onClose }) {
//   const [albums, setAlbums] = useState([]);

//   // Запитуємо список альбомів конкретного користувача з API
//   const url = `https://jsonplaceholder.typicode.com/albums?userId=${userId}`;
//   fetch(url)
//     .then(response => response.json())
//     .then(data => setAlbums(data));

//   function handlePhotosClick(albumId) {
//     // Відкриваємо модальне вікно зі списком фотографій з альбому
// const url = 'https://jsonplaceholder.typicode.com/photos?albumId=${albumId}';
// // Додайте код для відображення модального вікна зі списком фотографій
// }

// return (
// <div>
// <button onClick={onClose}>Закрити</button>
// <table>
// <thead>
// <tr>
// <th>Назва альбому</th>
// <th></th>
// </tr>
// </thead>
// <tbody>
// {albums.map(album => (
// <tr key={album.id}>
// <td>{album.title}</td>
// <td><button onClick={() => handlePhotosClick(album.id)}>Photos</button></td>
// </tr>
// ))}
// </tbody>
// </table>
// </div>
// );
// }

// function PhotoList({ albumId, onClose }) {
// const [photos, setPhotos] = useState([]);

// // Запитуємо список фотографій з цього альбому з API
// const url = 'https://jsonplaceholder.typicode.com/photos?albumId=${albumId}';
// fetch(url)
// .then(response => response.json())
// .then(data => setPhotos(data));

// return (
// <div>
// <button onClick={onClose}>Закрити</button>
// {photos.map(photo => (
// <img key={photo.id} src={photo.url} alt={photo.title} />
// ))}
// </div>
// );
// }


// // Зверніть увагу на те, що компоненти "AlbumList" та "PhotoList" отримують функцію "onClose" як пропс, яка буде викликана при закритті модального вікна.

// // Тепер потрібно об'єднати всі компоненти разом. Можна створити головний компонент "App", який буде містити "UserList" та модальні вікна для відображення списків альбомів та фотографій. Ось як це можна зробити:

