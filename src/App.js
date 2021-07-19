import './App.css';
import Player from './Player';

function App() {
  return (
    <div>

      <div>

        <div>

        <Player songName="But Not For Me" upward={(true)} src="/audio/sample.mp3" />

        <div>
          <span>minor 2nd</span>
        </div>

        <Player songName="Summertime" upward={(false)} src="/audio/Interval-minor 2nd.m4a" />

        </div>

      </div>

    </div>
  );
}

export default App;
