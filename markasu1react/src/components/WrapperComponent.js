import React, { Component } from 'react'
import styles from './wrapper.module.css'



// This class works as wrapper for the things we render as children, that ends up in a card. 
//We can adjust state fors show content as well.
export class WrapperComponent extends Component {
  constructor() {
    super();
    this.state = {
      showContent: true
    };
  }
  // Change state showconte as a toggle to hide and show content
  changeState = () => {
    this.setState({ showContent: !this.state.showContent })
    
  }

  render() {

    return (
      <div className={styles.parentBox}>
        <div className={styles.box}>
          {this.state.showContent && this.props.children}

          <button onClick={this.changeState}>show content</button>
        </div>

      </div>

    )

  }
}

export default WrapperComponent

