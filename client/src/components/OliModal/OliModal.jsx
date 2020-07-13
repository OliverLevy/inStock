import React, { Component } from "react";
import Modal from 'react-modal'
import {default as ToggleSwitch}  from 'react-switch'
import './OliModal.scss'

export default class OliModal extends Component {

  state={
    modelIsOpen: false,
    switchValue: false
  }

  toggleModal = () => {
    if (this.state.modelIsOpen === false) {
      this.setState({
        modelIsOpen: true
      })
    } else {
      this.setState({
        modelIsOpen: false
      })
    }
  }

  submitNewWarehouse = () => {

  }

  handleSwitch = () => {
    
  if(this.state.switchValue === false){
    this.setState({
      switchValue: true
    })
  } else {
    this.setState({
      switchValue: false
    })
  }
  }

  render() {
    return (
      <div>
        <button onClick={this.toggleModal}>oliModal</button>
        <Modal isOpen={this.state.modelIsOpen} className='modal' overlayClassName='overlay' >
          <h1>this is olivers modal</h1>
          <form>
            <input type="text"/>
            <ToggleSwitch onChange={this.handleSwitch} checked={this.state.switchValue}/>
          </form>
          <button onClick={this.toggleModal}>cancel</button>
          <button onClick={this.submitNewWarehouse}>submit</button>
        </Modal>
      </div>
    )
  }
}
