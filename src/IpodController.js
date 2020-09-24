import React from 'react';

class IpodController extends React.Component {
  //   rotateEvent = () => {
  //     var touchArea = document.getElementsByClassName('menuController');
  //     var myRegion = new ZingTouch.Region(touchArea[0]);
  //     var myTapGesture = new ZingTouch.Rotate();
  //     myRegion.bind(touchArea[0], 'rotate', function (e) {
  //       console.log('wheels');
  //     });
  //   };

  buttonClicked = (getImage) => {
    const homeButton = document.getElementsByClassName('homeButton');
    homeButton[0].addEventListener('click', function () {
      // console.log('home button pressed');
      getImage();
    });
  };

  componentDidMount() {
    this.props.rotateEvent();
    this.buttonClicked(this.props.getImage);
  }

  render() {
    const { getMenu, getImage } = this.props;

    return (
      <div style={styles.controllerContainer} className="controllerContainer">
        <div style={styles.menuController} className="menuController">
          <h3
            onClick={() => {
              getMenu();
            }}
            style={styles.menu}
            className="menu"
          >
            MENU
          </h3>
          <img
            style={styles.fastForward}
            className="fastForward"
            src="https://www.flaticon.com/svg/static/icons/svg/31/31085.svg"
          ></img>
          <img
            style={styles.fastRewind}
            className="fastRewind"
            src="https://www.flaticon.com/svg/static/icons/svg/64/64488.svg"
          ></img>
          <img
            style={styles.pause}
            className="pause"
            src="https://www.flaticon.com/svg/static/icons/svg/64/64595.svg"
          ></img>
          <div style={styles.homeButton} className="homeButton"></div>
        </div>
      </div>
    );
  }
}

const styles = {
  controllerContainer: {
    height: 200,
    width: 200,
    background: '#c0c0c0',
    boxSizing: 'border-box',
    paddingTop: 25,
  },
  menuController: {
    height: 150,
    width: 150,
    background: 'white',
    margin: 'auto',
    boxSizing: 'border-box',
    borderRadius: 100,
    padding: 35,
    position: 'relative',
  },
  homeButton: {
    height: 75,
    width: 75,
    margin: 'auto',
    background: '#c0c0c0',
    borderRadius: 50,
    position: 'relative',
    top: 1,
  },
  fastForward: {
    height: 20,
    width: 20,
    position: 'absolute',
    right: 7,
    top: 70,
  },
  fastRewind: {
    height: 20,
    width: 20,
    position: 'absolute',
    left: 7,
    top: 70,
  },
  pause: {
    height: 18,
    width: 18,
    position: 'absolute',
    bottom: 12,
    left: 67,
  },
  menu: {
    position: 'absolute',
    top: -9,
    left: 50,
    fontStyle: 'initial',
    fontWeight: 'bolder',
  },
};

export default IpodController;
