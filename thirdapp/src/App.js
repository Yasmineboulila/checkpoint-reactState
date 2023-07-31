import React, { Component } from 'react'
import './App.css';
export default class App extends Component {
  constructor(){
    super()
    this.state={
      Person:
      {fullName:'Drake Graham',bio:'...',imgSrc:'https://i0.wp.com/austinemedia.com/wp-content/uploads/2018/09/4-11.jpg',profession:'rappeur'} ,show:false}
  }
}
    [visible, setVisible] = this.setState(false);
    [count, setCount] = this.setState(0);

   componentDidMount() {
    const {count} = this.state;
    this.interval = setInterval(() => {
      this.setState((prevState) => ({ count: prevState.count + 1 }));
    }, 1000);
  }
   handleToggle = () => {
    this.setVisible((current) => !current)};
  render() {
    const { fullName, bio, imgSrc, profession } = this.state.person;
    const { show } = this.state;
   
    return (
      <div className="App">
      <button onClick={()=>this.handleToggle()}> </button>
        if (show=true){
          <img src={Person.imgSrc} className="App-logo" alt="logo" />,
          <p>{Person.fullName}</p>,
          <p>Count: {count}</p>
        } 
      </div>
    )
  }




// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
      // <header className="App-header">
      //   <img src={logo} className="App-logo" alt="logo" />
      //   <p>
      //     Edit <code>src/App.js</code> and save to reload.
      //   </p>
      //   <a
      //     className="App-link"
      //     href="https://reactjs.org"
      //     target="_blank"
      //     rel="noopener noreferrer"
      //   >
      //     Learn React
      //   </a>
      // </header>
//     </div>
//   );
// }

// export default App;
