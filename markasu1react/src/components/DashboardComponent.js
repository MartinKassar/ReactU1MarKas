import React, { Component } from 'react';
import WrapperComponent from './WrapperComponent'
import styles from './wrapper.module.css'

class DashboardComponent extends Component {
  render(){
    return (
      <div className='interface'>
    <WrapperComponent>
       <div>
      
       <input/>
       <br></br>
       <button>add</button>
       <button>removez</button>
       
      </div>
      
    </WrapperComponent>
    
      </div>
    );
  }
}

export default DashboardComponent;






// import React, { Component } from 'react';
// import { render } from 'react-dom';
// import Hello from './Hello';
// import './style.css';

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       isLoggedIn: true
//     };
//   }

//   changeState = () =>  {
//     this.setState({isLoggedIn: !this.state.isLoggedIn})
// //    this.setState(prevState => ({
// //   state: !prevState.state
// // }));
//   }

//   render() {
    
//     console.log(this.state.isLoggedIn)
//     return this.state.isLoggedIn ? (
//       <div className="box">
      
//       <input/>
//       <button>add</button>
//       <button>removez</button>
      
//       <button onClick={this.changeState}>show content</button>
//       </div>
//     ) : (
//       <div className="box">
//       <button onClick={this.changeState}>show content</button>
//       </div>
//     )
    
//   }
// }