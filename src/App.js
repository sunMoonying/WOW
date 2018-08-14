import React, { Component } from 'react';
import './App.css';
import Sidebar from './components/Sidebar'
class App extends Component {
  render() {
    return (
      <div className="App">
        <Sidebar></Sidebar>
        {
            this.props.children 
            //路由容器 
            
        }
      </div>
    );
  }
}

export default App;
