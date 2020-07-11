import React, { Component, useState } from 'react';
import Modal from "react-modal";
import "./Modal.scss";
import addIcon from "../../../../assets/icons/Icon-add.svg";

Modal.setAppElement('#root')

function AddInventory () {
    const [modalIsOpen, setModalIsOpen] = useState(false)

    return (

        <div className="modal">
            <button className="modal__button-open" onClick={()=> setModalIsOpen(true)}></button>
            <Modal className="modal__body" isOpen={modalIsOpen} shouldCloseOnOverlayClick={false} onRequestClose={()=> setModalIsOpen(false)}>
            <h1>Create New</h1>
                        <form className="modal__form" onSubmit={() => setModalIsOpen(false)}action="">

                            <div className="modal__input-wrapper">
                                <label name="name">
                                    PRODUCT
                                    <input type="text"/>
                                </label>
                                <label htmlFor="">
                                    LAST ORDERED
                                    <input type="text"/>
                                </label>
                             </div>

                             <div className="modal__input-wrapper">
                                <label name="name">
                                    CITY
                                    <input type="text"/>
                                </label>
                                <select>
                                    COUNTRY
                                    <option>
                                        Canada
                                    </option>
                                </select>
                             </div>

                             <div className="modal__input-wrapper">
                                <label htmlFor="">
                                QUANTITY
                                    <input type="text"/>
                                </label>
                                <label htmlFor="">
                                SWITCH
                                    <input type="text"/>
                                </label>
                             </div>

                             <label htmlFor="">
                                 ITEM DESCRIPTION
                                 <textarea type="text"/>
                             </label>
                            
                            <div className="modal__button-wrapper">
                                <button className="modal__form-button">SAVE</button>
                                <button className="modal__form-button" onClick={() => setModalIsOpen(false)}>CANCEL</button>
                            </div>
                         </form>
            </Modal>
        </div>
    )
}

export default AddInventory;































// export default class AddInventory extends Component {
//     constructor()
//     {super()
      
//       this.handleOpenModal = this.handleOpenModal.bind(this);
//       this.handleCloseModal = this.handleCloseModal.bind(this);
//       this.state = {
//         showModal: false
//       }}
//       handleOpenModal () {
//         this.setState({ showModal: true });
//       }
      
//       handleCloseModal () {
//         this.setState({ showModal: false });
//       }
    
//     render() {
//         return (
//             <div className="modal">
//             <button src={addIcon} className="modal__button" onClick={this.handleOpenModal}></button>
//                 <Modal className="modal__body"
//                     shouldCloseOnOverlayClick={false}
//                     isOpen={this.state.showModal}
//                    >
//                         <h1>Create New</h1>
//                         <form onSubmit={this.handleCloseModal} action="">
//                             <label htmlFor="">
//                                 <input type="text"/>
//                             </label>
//                             <label htmlFor="">
//                                 <input type="text"/>
//                             </label>
//                             <label htmlFor="">
//                                 <input type="text"/>
//                             </label>
//                             <label htmlFor="">
//                                 <input type="text"/>
//                             </label>
//                             <label htmlFor="">
//                                 <textarea type="text"/>
//                             </label>
//                             <button>SAVE</button>
//                             <button>CANCEL</button>
//                         </form>
//                 </Modal>
//             </div>
//         )
//     }
// }