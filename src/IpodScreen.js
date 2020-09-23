import React from 'react';
class IpodScreen extends React.Component {
  render() {
    return (
      <div className="screenContainer">
        <div className="screen">
          <h2>iPod.js</h2>

          <div className="list">
            <ul>
              <li className=" item">Songs</li>
              <li className="item">Albums</li>
              <li className="active item">Artists</li>
              <li className="item">Playlists</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default IpodScreen;
