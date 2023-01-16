import React from "react";
import cn from 'classnames';
import PropTypes from 'prop-types';
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";


class Modal extends React.Component {

    render() {
        const { infoFromState } = this.props;

        const classNames = cn("modal",{
            fade: infoFromState.fade,
            show: infoFromState.show
        });

        return (
            <div className={classNames}
                    style={{display: infoFromState.display}}
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