import React from "react";
import cn from 'classnames';
import PropTypes from 'prop-types';
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";


class Modal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        const { modalClassNames } = this.props;

        return (
            <div className={cn("modal",{
                    fade: modalClassNames.fade,
                    show: modalClassNames.show
                    })}
                    style={this.props}
                    role="dialog">

                <div className="modal-dialog">
                    <div className="modal-content">{this.props.children}</div>
                </div>
            </div>
        );
    }
}

Modal.Header = Header;
Modal.Body = Body;
Modal.Footer = Footer;

Modal.propTypes = {
    modalClassNames: PropTypes.object
}

export default Modal;