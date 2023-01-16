import React from "react";
import Modal from "./Modal";

class Component extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            display: 'none',
            fade: false,
            show: false
        }
    }

    handleClose = (e) => {
        e.preventDefault();
        this.setState({
            modal: !this.state.modal,
            display: 'block',
            fade: true,
            show: true
        });
    }

    handleCancel = () => {
        this.setState({
            display: 'none',
            fade: false,
            show: false
        });
    }

    render() {
        const infoFromState = this.state;

        return (
            <div>
                <button type="button" className="modal-open-button btn btn-danger" onClick={this.handleClose}>Open</button>
                <Modal isOpen={this.state.modal} infoFromState={infoFromState}>
                    <Modal.Header toClose={this.handleCancel}>Modal title</Modal.Header>
                    <Modal.Body>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit
                    </Modal.Body>
                    <Modal.Footer>
                        <button type="button" className="modal-close-button btn btn-secondary" onClick={this.handleCancel}>Cancel</button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}

export default Component;