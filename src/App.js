import './App.css';
import PlayerWidget from './PlayerWidget';

function App() {
  return (
    <div className="interval-app">

      {/* bar one */}
      <div className="interval-bar">

        <div className="interval-bar__top--min-second">
          <div className="interval-widget">
            <PlayerWidget songName="But Not For Me" darkBG={(true)} upward={(true)} src="/audio/sample.mp3" />
          <div>
            <span className="interval-name--white">
              <p>minor 2nd</p>
            </span>
          </div>
            <PlayerWidget songName="Summertime" darkBG={(true)} upward={(false)} src="/audio/Interval-minor 2nd.m4a" />
          </div>
        </div>

        <div className="interval-bar__bottom--maj-seventh">
          <div className="interval-widget">
            <PlayerWidget upward={(true)} src="/audio/Interval-minor 2nd.m4a" />
          <div>
            <span className="interval-name">
              <p>Major 7th</p>
            </span>
          </div>
            <PlayerWidget upward={(false)} src="/audio/sample.mp3" />
          </div>
        </div>

      </div>

      {/* bar two */}
      <div className="interval-bar">

        <div className="interval-bar__top--maj-second">
          <div className="interval-widget">
            <PlayerWidget darkBG={(true)} upward={(true)} src="/audio/sample.mp3" />
          <div>
            <span className="interval-name--white">
              <p>Major 2nd</p>
            </span>
          </div>
            <PlayerWidget darkBG={(true)} upward={(false)} src="/audio/Interval-minor 2nd.m4a" />
          </div>
        </div>

        <div className="interval-bar__bottom--min-seventh">
          <div className="interval-widget">
            <PlayerWidget upward={(true)} src="/audio/Interval-minor 2nd.m4a" />
          <div>
            <span className="interval-name">
              <p>minor 7th</p>
            </span>
          </div>
            <PlayerWidget upward={(false)} src="/audio/sample.mp3" />
          </div>
        </div>

      </div>

      {/* bar three */}
      <div className="interval-bar">

        <div className="interval-bar__top--min-third">
          <div className="interval-widget">
            <PlayerWidget darkBG={(true)} upward={(true)} src="/audio/sample.mp3" />
          <div>
            <span className="interval-name--white">
              <p>minor 3rd</p>
            </span>
          </div>
            <PlayerWidget darkBG={(true)} upward={(false)} src="/audio/Interval-minor 2nd.m4a" />
          </div>
        </div>

        <div className="interval-bar__bottom--maj-sixth">
          <div className="interval-widget">
            <PlayerWidget upward={(true)} src="/audio/Interval-minor 2nd.m4a" />
          <div>
            <span className="interval-name">
              <p>Major 6th</p>
            </span>
          </div>
            <PlayerWidget upward={(false)} src="/audio/sample.mp3" />
          </div>
        </div>

      </div>

      {/* bar four */}
      <div className="interval-bar">

        <div className="interval-bar__top--maj-third">
          <div className="interval-widget">
            <PlayerWidget darkBG={(true)} upward={(true)} src="/audio/sample.mp3" />
          <div>
            <span className="interval-name--white">
              <p>Major 3rd</p>
            </span>
          </div>
            <PlayerWidget darkBG={(true)} upward={(false)} src="/audio/Interval-minor 2nd.m4a" />
          </div>
        </div>

        <div className="interval-bar__bottom--min-sixth">
          <div className="interval-widget">
            <PlayerWidget upward={(true)} src="/audio/Interval-minor 2nd.m4a" />
          <div>
            <span className="interval-name">
              <p>minor 6th</p>
            </span>
          </div>
            <PlayerWidget upward={(false)} src="/audio/sample.mp3" />
          </div>
        </div>

      </div>

      {/* bar five */}
      <div className="interval-bar">

        <div className="interval-bar__top--perf-fourth">
          <div className="interval-widget">
            <PlayerWidget darkBG={(true)} upward={(true)} src="/audio/sample.mp3" />
          <div>
            <span className="interval-name--white">
              <p>Perfect 4th</p>
            </span>
          </div>
            <PlayerWidget darkBG={(true)} upward={(false)} src="/audio/Interval-minor 2nd.m4a" />
          </div>
        </div>

        <div className="interval-bar__bottom--perf-fifth">
          <div className="interval-widget">
            <PlayerWidget upward={(true)} src="/audio/Interval-minor 2nd.m4a" />
          <div>
            <span className="interval-name">
              <p>Perfect 5th</p>
            </span>
          </div>
            <PlayerWidget upward={(false)} src="/audio/sample.mp3" />
          </div>
        </div>

      </div>

      {/* bar six */}
      <div className="interval-bar">

        <div className="interval-bar__aug-fourth">
          <div className="interval-widget">
            <PlayerWidget upward={(true)} src="/audio/sample.mp3" />
          <div>
            <span className="interval-name">
              <p>Augmented 4th</p>
            </span>
          </div>
            <PlayerWidget upward={(false)} src="/audio/Interval-minor 2nd.m4a" />
          </div>
        </div>

      </div>

      {/* bar seven */}
      <div className="interval-bar">

        <div className="interval-bar__octave">
          <div className="interval-widget">
            <PlayerWidget darkBG={(true)} upward={(true)} src="/audio/Interval-minor 2nd.m4a" />
          <div>
            <span className="interval-name--white">
              <p>Octave</p>
            </span>
          </div>
            <PlayerWidget darkBG={(true)} upward={(false)} src="/audio/sample.mp3" />
          </div>
        </div>

      </div>

    </div>
    // interval-app
  );
}

export default App;
