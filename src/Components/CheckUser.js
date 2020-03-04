import React, { Component } from 'react';

class CheckUser extends Component {
  render() {
    const { user } = this.props;
    const userList = user.map((item, index) => {
      return (
        <li key={index}>
          {item.name}&nbsp;
          {item.age}&nbsp;
          {item.id}
        </li>
      );
    });

    return <h1>{userList}</h1>;
  }
}

export default CheckUser;
