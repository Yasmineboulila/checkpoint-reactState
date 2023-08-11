import React, { Component } from 'react'
import './App.css';
export default class App extends Component {
      state = {
        person: {
          
                fullName : "Drake Graham",
                 bio : "Né le 24 octobre 1986 en Ontario, à Toronto, Aubrey Drake Graham est un acteur et un rappeur d'origine canadienne. Il a sorti trois albums studios et de nombreuses mixtapes au cours de sa carrière . Star majeure du hip hop de sa génération, il a collaboré avec les plus grands artistes du moment. ",
                 imgSrc : "https://i0.wp.com/austinemedia.com/wp-content/uploads/2018/09/4-11.jpg",
                 profession : "Rappeur"
               },
        show: false,
        mountedAt: new Date(),
      };
  
  toggleShow = () => {
    this.setState((prevState) => ({ show: !prevState.show }));
  };

  calculateTimeSinceMount = () => {
    const now = new Date();
    const mountedAt = this.state.mountedAt;
    const timeDifference = now.getTime() - mountedAt.getTime();
    const seconds = Math.floor(timeDifference / 1000);
    return seconds;
  };

  componentDidMount() {
    this.interval = setInterval(() => {
      this.forceUpdate();
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }
  render() {
    const { fullName, bio, imgSrc, profession } = this.state.person;
    const { show } = this.state;
   
    return (
      <div className="App">
      <button onClick={this.toggleShow} style={{margin:"25px", backgroundColor: "#f1f1f1", color: "black", fontSize: "16px", padding: "16px 30px", border: "none",cursor: "pointer", borderRadius: "5px", textAlign: "center"}}>
        {show ? 'Hide Profile' : 'Show Profile'}
      </button>
      {show && (
        <div style={{width:"33%",height:"500px", margin:"50px 450px", backgroundColor:"gray"}}>
          <img src={imgSrc} alt={fullName} style={{width:"200px", height:"200px"}}/>
          <h1>{fullName}</h1>
          <p>Profession: {profession}</p>
          <p>Bio: {bio}</p>
        </div>
      )}
      <p>Time since mount: <span style={{fontSize:"x-large", color:"red"}}>{this.calculateTimeSinceMount()}</span> seconds</p>
    </div>
    )
  }

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
