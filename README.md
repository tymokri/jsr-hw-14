# JSR-hw-14
React. Make component Modal.jsx

<button type="button" className="modal-open-button btn btn-danger" onClick={this.toggle}>Open</button>
<Modal isOpen={this.state.modal}>
    <Modal.Header toggle={this.toggle}>Modal title</Modal.Header>
    <Modal.Body>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit
    </Modal.Body>
    <Modal.Footer>
        <button type="button" className="modal-close-button btn btn-secondary" onClick={this.toggle}>Cancel</button>
    </Modal.Footer>
</Modal>

In the open state, stitching: <div class="modal" style="display: none;">
changes to <div class="modal fade show" style="display: block;">
An open modal window has two buttons covering it: a cross at the top right and a Cancel button at the bottom right.