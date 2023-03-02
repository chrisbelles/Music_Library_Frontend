// import React from 'react';

// function SearchTable(props) {
//   const { songs } = props;

//   return (
//     <table style={{ borderCollapse: 'collapse', margin: '0 auto', width: '80%' }}>
//       <thead>
//         <tr>
//           <th style={{ border: '1px solid black', padding: '5px' }}>Title</th>
//           <th style={{ border: '1px solid black', padding: '5px' }}>Artist</th>
//           <th style={{ border: '1px solid black', padding: '5px' }}>Album</th>
//           <th style={{ border: '1px solid black', padding: '5px' }}>Release Date</th>
//           <th style={{ border: '1px solid black', padding: '5px' }}>Genre</th>
//         </tr>
//       </thead>
//       <tbody>
//         {songs.map((song) => (
//           <tr key={song.id}>
//             <td style={{ border: '1px solid black', padding: '5px' }}>{song.title}</td>
//             <td style={{ border: '1px solid black', padding: '5px' }}>{song.artist}</td>
//             <td style={{ border: '1px solid black', padding: '5px' }}>{song.album}</td>
//             <td style={{ border: '1px solid black', padding: '5px' }}>{song.release_date}</td>
//             <td style={{ border: '1px solid black', padding: '5px' }}>{song.genre}</td>
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   );
// }

// export default SearchTable;