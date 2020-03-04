import React, { Component } from 'react';
import CheckUser from './CheckUser';

class User extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [
        { name: 'Vahagn', age: 20, id: 1 },
        { name: 'Armen', age: 26, id: 2 },
        { name: 'Davit', age: 28, id: 3 }
      ]
    };

    this.userDelete = i => {
      let data = [...this.state.data];
      data.splice(i, 1);
      this.setState({
        data: data
      });
    };
  }
  render() {
    return (
      <div>
        <button onClick={this.userDelete.bind(this, this.i)}>Delete</button>
        <CheckUser user={this.state.data} />
      </div>
    );
  }
}

export default User;
