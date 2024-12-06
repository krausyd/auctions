import React from 'react';
import { useState, ChangeEvent } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import AuctionItem from '../components/AuctionDashboard/AuctionItem'

const auctionItem = {
    id: 1,
    description: "One hour of deluxe spa treatmet at the best Spa place in Seattle",
    photo_url: "https://www.msccruises.com/int/-/media/global-contents/on-board/spa-beauty-and-fitness/enjoy_spa_01.jpg",
    last_price: 34567,
};

const Push = () => {
    let [newAmount, setNewAmount] = useState((auctionItem.last_price / 100) + 1);
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setNewAmount(parseInt(e.target.value));
    }

    const handleSubmit = () => {

    }

    return (
        <>
            <AuctionItem id={auctionItem.id} description={auctionItem.description} photo_url={auctionItem.photo_url} last_price={auctionItem.last_price} showButton={false} />
            <Form.Group>
                <Form.Label>New Price:</Form.Label>
                <Form.Control type='text' onChange={handleChange} value={newAmount} placeholder={auctionItem.last_price.toString()}></Form.Control>
                <Button variant="primary" type="submit" onClick={handleSubmit}>
                    Push
                </Button>
            </Form.Group>
        </>
    )
};

export default Push;