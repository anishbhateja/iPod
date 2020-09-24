import React from 'react';
import IpodScreenList from './IPodScreenList';

class IpodScreen extends React.Component {
  render() {
    return (
      <div className="screenContainer">
        <div className="screen">
          <h2 className="title">iPod.js</h2>
          <div className="listContainer">
            <div className="list">
              <ul>
                {this.props.menu.map((item) => {
                  return <IpodScreenList item={item} />;
                })}
              </ul>
            </div>
          </div>

          <div className="imageContainer">
            {/* <img src="https://images.unsplash.com/photo-1500964757637-c85e8a162699?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1078&q=80"></img> */}
            <img src={this.props.image}></img>
          </div>
        </div>
      </div>
    );
  }
}

export default IpodScreen;
