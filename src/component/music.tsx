import React, { useEffect, useState } from 'react';
import axios, { AxiosRequestConfig } from 'axios';

const DeezerPlaylist: React.FC = () => {
  const [playlist, setPlaylist] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      const options: AxiosRequestConfig = {
        method: 'GET',
        url: 'https://deezerdevs-deezer.p.rapidapi.com/playlist/12223072291',
        headers: {
          'X-RapidAPI-Key': 'ceb5f47a8bmsh677a1e7ea79c89ep15847djsnb97369f80080',
          'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
        }
      };

      try {
        const response = await axios.request(options);
        setPlaylist(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  if (!playlist) {
    return <div style={{ textAlign: 'center', marginTop: '20px' }}>Cargando...</div>;
  }

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', fontFamily: 'Arial, sans-serif' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px', color: '#fff' }}>{playlist.title}</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {playlist.tracks.data.map((track: any) => (
          <li key={track.id} style={{ marginBottom: '20px', display: 'flex', alignItems: 'center', borderBottom: '1px solid #eee', paddingBottom: '10px' }}>
            <img src={track.album.cover} alt={track.title} style={{ marginRight: '20px', width: '80px', height: '80px', borderRadius: '8px' }} />
            <div style={{ flex: 1 }}>
              <p style={{ margin: 0, fontSize: '16px', fontWeight: 'bold', color: '#fff' }}>{track.title}</p>
              <p style={{ margin: 0, color: '#a4f', fontWeight: 'bold'  }}>{track.artist.name}</p>
            </div>
            <audio controls style={{ width: '120px' }}>
              <source src={track.preview} type="audio/mpeg" />
              Tu navegador no soporta el elemento audio.
            </audio>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DeezerPlaylist;
