import './App.css';
import PlayerWidget from './PlayerWidget';

function App() {
  return (
    <div>

      <div>

        <div>

        <PlayerWidget songName="But Not For Me" upward={(true)} src="/audio/sample.mp3" />

        <div>
          <span>minor 2nd</span>
        </div>

        <PlayerWidget songName="Summertime" upward={(false)} src="/audio/Interval-minor 2nd.m4a" />

        </div>

      </div>

    </div>
  );
}

export default App;
