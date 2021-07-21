import './App.css';
import PlayerWidget from './PlayerWidget';

function App() {
  return (
    <div className="interval-app">

      <div className="interval-bar">

        <div className="interval-bar__top--min-second">
          <div className="interval-widget">
            <PlayerWidget songName="But Not For Me" upward={(true)} src="/audio/sample.mp3" />
          <div>
            <span className="interval-name">
              <p>minor 2nd</p>
            </span>
          </div>
            <PlayerWidget songName="Summertime" upward={(false)} src="/audio/Interval-minor 2nd.m4a" />
          </div>
        </div>

      </div>

    </div>
  );
}

export default App;
