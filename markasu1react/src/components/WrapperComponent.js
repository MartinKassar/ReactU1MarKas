import React, { Component } from 'react'
import styles from './wrapper.module.css'
// import React, { Fragment } from 'react'



export class WrapperComponent extends Component {
  constructor() {
    super();
    this.state = {
      showContent: true
    };
  }

  changeState = () =>  {
    console.log(this.state.showContent)
         this.setState({showContent: !this.state.showContent})
         
         
    //     this.setState(prevState => ({
    //    state: !prevState.state
    //  }));
   }

  render() {
    
    return (
      
      <div className={styles.box}>
        {this.state.showContent && this.props.children}
        
      <button onClick={this.changeState}>show content</button>
      </div>
      
      
      
    )
    
    }
}

export default WrapperComponent

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