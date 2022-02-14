import * as React from 'react';
import { BrowserRouter as Router, Route,Routes } from "react-router-dom";
import Parent from './Parent'

class App extends React.Component {
  render() {
    return (
      <Router>
          <Routes>
            <Route path="/" element={<Parent />}/>       
          </Routes>
        </Router>
    );
  }
}
export default App;