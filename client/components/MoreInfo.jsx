import React from 'react';
import PropTypes from 'prop-types';

export default class Modal extends React.Component {
    render() {
        // Render nothing if the "show" prop is false
        if (this.props.isOpen === false) {
            return null;
        }

        let modalStyle = {
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: '9999',
            backgroundColor: '#fefefe',
            margin: 'auto',
            padding: '20px',
            border: '1px solid #888',
            width: '80%'
        };

        let backdropStyle = {
            position: 'fixed',
            zIndex: '1',
            paddingTop: '100px',
            left: '0',
            top: '0',
            width: '100%',
            height: '100%',
            overflow: 'auto',
            backgroundColor: 'rgba(0,0,0,0.4)'
        };

        return (
                <div>
                    <div style={modalStyle}>{this.props.children}</div>
                    <div style={backdropStyle} onClick={e => this.close(e)}/>
                </div>
                );
    }
    close(e) {
        e.preventDefault();

        if (this.props.onClose) {
            this.props.onClose();
        }
    }
};
