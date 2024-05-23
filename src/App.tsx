import React from 'react';
import './App.css';
import Footer from './component/layout/footer'; 
import Navbar from './component/layout/nav';
import DeezerPlaylist from './component/music'


function App() {
  return (
    <div className="App">
      <header>
      <Navbar />
      </header>

        <div>
          <DeezerPlaylist />
        </div>
        <footer>
        <Footer /> 
        </footer>
    </div>
  );
}

export default App;
