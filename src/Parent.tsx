import React, { Component } from 'react';
import Child from './Child';

class Parent extends Component<any, any> {
  childRef = React.createRef<Child>();
  constructor(props: any) {
    super(props);
    this.state = {
      distance: null,
    };
    this.childRef = React.createRef();
  }
  componentDidMount() {
    this.childRef.current?.childBtnClick();
  }
  handleParentClick = () => {
    const { distance } = this.state;
    alert('Parent updated and state value is:' + distance);
  };
  updateSate = (result: any) => {
    this.setState({ distance: result });
  };
  render() {
    return (
      <>
        <Child ref={this.childRef} updateParentSate={this.updateSate} />
        <button onClick={this.handleParentClick}>Parent</button>
      </>
    );
  }
}
export default Parent;
