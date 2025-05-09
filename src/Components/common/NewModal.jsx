import React, { useState } from "react";
import { Modal } from "react-bootstrap";


const NewModal = ({ show, handleClose, modalHeader, modalBody, modalFooter }) => {
    return (
        <Modal show={show} onHide={handleClose}>
            {
                modalHeader && <Modal.Header closeButton>
                    <Modal.Title>
                        {modalHeader}
                    </Modal.Title>
                </Modal.Header>
            }
            {
                modalBody && <Modal.Body>
                    {modalBody()}
                </Modal.Body>
            }
            {
                modalFooter && <Modal.Footer>
                    {modalFooter()}
                </Modal.Footer>
            }

        </Modal>
    );
};

export default NewModal;
