import React from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

/*import { useState, ChangeEvent } from 'react';
import Modal from 'react-bootstrap/Modal';
import ModalBody from "react-bootstrap/ModalBody";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalFooter from "react-bootstrap/ModalFooter";
import ModalTitle from "react-bootstrap/ModalTitle";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import AuctionItem from './AuctionDashboard/AuctionItem';
*/
interface PushModalProps {
    itemId: number;
    isOpen: boolean;
    handleClose: () => void;
    handleSubmit: () => void;
}

const auctionItem = {
    id: 1,
            description: "One hour of deluxe spa treatmet at the best Spa place in Seattle",
            photo_url: "https://www.msccruises.com/int/-/media/global-contents/on-board/spa-beauty-and-fitness/enjoy_spa_01.jpg",
            last_price: 34567,
};

const PushModal = ({itemId, handleClose, handleSubmit, isOpen}: PushModalProps) => {
    let [newAmount, setNewAmount] = useState((auctionItem.last_price/100)+1);
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setNewAmount(parseInt(e.target.value));
    }

    return(
        <>
        <Modal show={isOpen} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
        {/* <div
      className="d-flex align-items-center justify-content-center"
      style={{ height: "100vh" }}
      >
      </div>
        <Modal show={isOpen} onHide={handleClose} backdrop="static">
            <ModalHeader closeButton>
            <ModalTitle>Pushing for an Auction Item</ModalTitle>
            </ModalHeader>
            <ModalBody>
                <AuctionItem id={itemId} description={auctionItem.description} photo_url={auctionItem.photo_url} last_price={auctionItem.last_price} showButton={false} />
                <Form.Group>
                    <Form.Label>New Price:</Form.Label>
                    <Form.Control type='text' onChange={handleChange} value={newAmount} placeholder={auctionItem.last_price.toString()}></Form.Control>
                </Form.Group>
            </ModalBody>

      <ModalFooter>
        <Button variant="primary" onClick={handleSubmit}>
          Submit 
        </Button>
      </ModalFooter>
    </Modal> */}
    </>
    )
}

export default PushModal