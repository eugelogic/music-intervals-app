import './App.css';
import Player from './Player';

function App() {
  return (
    <div>

      <div>

        <div>

        <div>
            <span>"Name of the Song"</span>
        </div>

        <div>
          <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 0 24 24" width="48px" fill="#000000">
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z" />
          </svg>
          <Player src="/audio/sample.mp3" />
        </div>

        <div>
          <span>minor 2nd</span>
        </div>

        <div>
          <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 0 24 24" width="48px" fill="#000000">
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z" />
          </svg>
          <Player src="/audio/Interval-minor 2nd.m4a" />
        </div>

        <div>
            <span>"Name of the Song"</span>
        </div>

        </div>

      </div>

    </div>
  );
}

export default App;
