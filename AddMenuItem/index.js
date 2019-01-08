import React, { Component } from 'react';
 import Modal from './Modal';


import ItemContainerMenu from './ItemContainerMenu';

export default class ModalAddMenuItem extends Component {
//   state = {
//     isModalOpen: false,
// };
// openModal = () =>{this.setState({isModalOpen: true,}) };
// closeModal = () =>{this.setState({isModalOpen: false,}) };


render(){
    const {isModalOpen} = this.state;

    return(
        <div>
            {isModalOpen &&
            <Modal onClose={this.closeModal}>
                <ItemContainerMenu />
                <button type='button' onClick={this.closeModal }>Close</button>
            </Modal>}
        </div>
    )
}
}

