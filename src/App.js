import './App.css';
import Player from './Player';

function App() {
  return (
    <div>
      <header>
        <h1>
          Music Intervals
        </h1>
        <div>
          <h2>Sample #1</h2>
        <Player src="http://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/alien_shoot.wav" />
        </div>
        <div>
          <h2>Sample #2</h2>
        <Player src="/audio/Interval-minor 2nd.m4a" />
        </div>
        <div>
          <h2>Sample #3</h2>
          <Player src="/audio/sample.mp3" />
        </div>
      </header>
    </div>
  );
}

export default App;
