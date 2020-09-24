import React from 'react';

class IpodScreenList extends React.Component {
  render() {
    // const { item } = this.props.item;
    return (
      <li className={this.props.item.className}>{this.props.item.name}</li>
    );
  }
}

export default IpodScreenList;
