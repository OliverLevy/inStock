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
                    shouldCloseOnOverlayClick={false}
                    isOpen={this.state.showModal}
                   >
                        <h1>Create New</h1>
                        <form onSubmit={this.handleCloseModal} action="">
                            <label htmlFor="">
                                <input type="text"/>
                            </label>
                            <label htmlFor="">
                                <input type="text"/>
                            </label>
                            <label htmlFor="">
                                <input type="text"/>
                            </label>
                            <label htmlFor="">
                                <input type="text"/>
                            </label>
                            <label htmlFor="">
                                <textarea type="text"/>
                            </label>
                            <button>SAVE</button>
                            <button>CANCEL</button>
                        </form>
                </Modal>
            </div>
        )
    }
}
