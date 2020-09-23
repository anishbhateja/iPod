import React from 'react';
import ZingTouch from 'zingtouch';
import IpodController from './IpodController';
import IpodScreen from './IpodScreen';

class Ipod extends React.Component {
  rotateEvent = () => {
    const array = ['Songs', 'Albums', 'Artists', 'Playlists'];
    var active = document.getElementsByClassName('active');
    var List = document.getElementsByClassName('item');
    var activeListName = active[0].textContent;
    var currActiveIndex = array.findIndex(function (element) {
      return element === activeListName;
    });
    var nextActiveIndex;

    var touchArea = document.getElementsByClassName('menuController');
    var myRegion = new ZingTouch.Region(touchArea[0]);
    var myTapGesture = new ZingTouch.Rotate({ draggable: false });

    myRegion.bind(touchArea[0], myTapGesture, function (e) {
      if (e.detail.distanceFromLast > 0) {
        active[0].classList.remove(' active');
        if (currActiveIndex === 3) {
          return;
        } else {
          nextActiveIndex = currActiveIndex += 1;
          List[nextActiveIndex].classList.add('active');
        }
      } else {
        active[0].classList.remove(' active');
        if (currActiveIndex === 0) {
          return;
        } else {
          nextActiveIndex = currActiveIndex -= 1;
          List[nextActiveIndex].classList.add('active');
        }
      }
    });
  };
  render() {
    return (
      <div className="IpodScreen">
        <div className="Ipod">
          <IpodScreen />
          <IpodController rotateEvent={this.rotateEvent} />
        </div>
      </div>
    );
  }
}

export default Ipod;
