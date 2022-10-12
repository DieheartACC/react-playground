// import logo from './logo.svg';
// import './App.css';
// import React from "react";
// import GroceryList from "./GroceryList";
//
// function App() {
//   return  <GroceryList />
//   // (
//   //   <div className="App">
//   //     <header className="App-header">
//   //       <img src={logo} className="App-logo" alt="logo" />
//   //       <p>
//   //         Edit <code>src/App.js</code> and save to reload.
//   //       </p>
//   //       <a
//   //         className="App-link"
//   //         href="https://reactjs.org"
//   //         target="_blank"
//   //         rel="noopener noreferrer"
//   //       >
//   //         Learn React
//   //       </a>
//   //     </header>
//   //   </div>
//   // );
// }
//
// export default App;


import React from 'react';
import GroceryList from './GroceryList'
import './App.css'

export default class App extends React.Component {
  state = {
    items: ['Milk', 'Cheese', 'Pork Butt', 'Brisket']
  }
  render() {
    return (
        <div className={"groceries"}>
          <h1>Grocery List</h1>
          <p>Need to buy for smoking</p>
          <GroceryList myList={this.state.items}/>
        </div>
    )
  }
}
