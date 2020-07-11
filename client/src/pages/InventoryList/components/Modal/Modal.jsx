import React, { Component } from 'react';
import Modal from "react-modal";
import "./Modal.scss";
import addIcon from "../../../../assets/icons/Icon-add.svg";

Modal.setAppElement('#root')
export default class AddInventory extends Component {
    constructor()
    {super()
      
      this.handleOpenModal = this.handleOpenModal.bind(this);
      this.handleCloseModal = this.handleCloseModal.bind(this);
      this.state = {
        showModal: false
      }}
      handleOpenModal () {
        this.setState({ showModal: true });
      }
      
      handleCloseModal () {
        this.setState({ showModal: false });
      }
    
    render() {
        return (
            <div className="modal">
                 <button src={addIcon} className="modal__button" onClick={this.handleOpenModal}></button>
                <Modal className="modal__body"
                    isOpen={this.state.showModal}
                    contentLabel="Minimal Modal Example">
                        <h1>this is modal</h1>
                        <p>this is the body of the modal</p>
                    <button className="modal__button" onClick={this.handleCloseModal}></button>
                </Modal>
            </div>
        )
    }
}
