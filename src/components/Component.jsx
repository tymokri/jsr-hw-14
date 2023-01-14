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

    toggle = (e) => {
        e.preventDefault();
        this.setState({
            modal: !this.state.modal,
            display: 'block',
            fade: true,
            show: true
        });
    }

    handleClose = () => {
        this.setState({
            display: 'none',
            fade: false,
            show: false
        });
    }

    render() {
        const display = this.state.display;
        const modalClassNames = this.state;

        return (
            <div>
                <button type="button" className="modal-open-button btn btn-danger" onClick={this.toggle}>Open</button>
                <Modal isOpen={this.state.modal} display={display} modalClassNames={modalClassNames}>
                    <Modal.Header toggle={this.handleClose}>Modal title</Modal.Header>
                    <Modal.Body>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit
                    </Modal.Body>
                    <Modal.Footer>
                        <button type="button" className="modal-close-button btn btn-secondary" onClick={this.handleClose}>Cancel</button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}

export default Component;