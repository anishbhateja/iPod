import React from 'react';
import ZingTouch from 'zingtouch';
import IpodController from './IpodController';
import IpodScreen from './IpodScreen';

class Ipod extends React.Component {
  constructor() {
    super();

    this.state = {
      menu: [],
      image:
        'https://images.unsplash.com/photo-1500964757637-c85e8a162699?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1078&q=80',
    };
  }
  //Renders the menu options list
  getMenu = () => {
    const { menu } = this.state;
    if (menu.length !== 0) {
      this.setState({
        menu: [],
        image:
          'https://images.unsplash.com/photo-1500964757637-c85e8a162699?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1078&q=80',
      });
    } else {
      this.setState({
        menu: [
          { name: 'Songs', className: '' },
          { name: 'Albums', className: '' },
          { name: 'Artists', className: '' },
          { name: 'Playlists', className: '' },
        ],
        image:
          'https://images.unsplash.com/photo-1500964757637-c85e8a162699?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1078&q=80',
      });
    }
  };

  //Sets the background image in accordance to the 'active' class
  getImage = () => {
    const { menu } = this.state;
    if (menu.length !== 0) {
      let activeList = document.getElementsByClassName('active');
      let activeListName = activeList[0].textContent;
      if (activeListName === 'Songs') {
        this.setState({
          image:
            'https://cdn5.vectorstock.com/i/1000x1000/76/24/music-logo-on-black-background-icon-vector-12217624.jpg',
        });
      } else if (activeListName === 'Albums') {
        this.setState({
          image:
            'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/music-album-cover-design-template-0b55f32b3855ba41707a08e386e95d6e_screen.jpg?ts=1561485226',
        });
      } else if (activeListName === 'Artists') {
        this.setState({
          image:
            'https://www.onlinelogomaker.com/blog/wp-content/uploads/2017/06/music-logo-design.jpg',
        });
      } else if (activeListName === 'Playlists') {
        this.setState({
          image: 'https://wallpapercave.com/wp/wp6090719.jpg',
        });
      }
    }
  };

  //Captures the rotating degree angle and changes the active list in accordance with the angle of rotation
  rotateEvent = () => {
    var touchArea = document.getElementsByClassName('menuController');
    var myRegion = new ZingTouch.Region(touchArea[0]);
    var myTapGesture = new ZingTouch.Rotate({ draggable: false });

    myRegion.bind(touchArea[0], myTapGesture, (e) => {
      if (
        //rotation angle between 0 and 90
        e.detail.distanceFromOrigin > 0 &&
        e.detail.distanceFromOrigin <= 90
      ) {
        this.setState({
          menu: [
            { name: 'Songs', className: 'active' },
            { name: 'Albums', className: '' },
            { name: 'Artists', className: '' },
            { name: 'Playlists', className: '' },
          ],
        });
      } else if (
        //rotation angle between 90 and 180
        e.detail.distanceFromOrigin > 90 &&
        e.detail.distanceFromOrigin <= 180
      ) {
        this.setState({
          menu: [
            { name: 'Songs', className: '' },
            { name: 'Albums', className: 'active' },
            { name: 'Artists', className: '' },
            { name: 'Playlists', className: '' },
          ],
        });
      } else if (
        //rotation angle between 180 and 270
        e.detail.distanceFromOrigin > 180 &&
        e.detail.distanceFromOrigin <= 270
      ) {
        this.setState({
          menu: [
            { name: 'Songs', className: '' },
            { name: 'Albums', className: '' },
            { name: 'Artists', className: 'active' },
            { name: 'Playlists', className: '' },
          ],
        });
      } else if (
        //rotation angle between 270 and 360
        e.detail.distanceFromOrigin > 270 &&
        e.detail.distanceFromOrigin <= 360
      ) {
        this.setState({
          menu: [
            { name: 'Songs', className: '' },
            { name: 'Albums', className: '' },
            { name: 'Artists', className: '' },
            { name: 'Playlists', className: 'active' },
          ],
        });
      }
    });
  };
  render() {
    const { menu, image } = this.state;

    return (
      <div className="IpodScreen">
        <div className="Ipod">
          <IpodScreen menu={menu} image={image} />
          <IpodController
            rotateEvent={this.rotateEvent}
            getMenu={this.getMenu}
            getImage={this.getImage}
          />
        </div>
      </div>
    );
  }
}

export default Ipod;
