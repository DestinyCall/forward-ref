import React, { Component } from 'react';
export default class Child extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      distance: null,
    };
  }
  childBtnClick = () => {
    let distance = 100;
    this.setState({ distance });
    this.props.updateParentSate(distance);
  };
  render() {
    return (
      <div>
        <button onClick={this.childBtnClick} style={{ display: 'none' }} />
      </div>
    );
  }
}
