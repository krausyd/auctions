import React from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export interface AuctionItemProps {
    id: number;
    description: string;
    photo_url: string;
    last_price: number;
    showButton: boolean;
}

const AuctionItem = (props: AuctionItemProps) => {
    function currencyFormat(num: number) {
        return `${(num/100).toFixed(2)}`;
    }

    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={props.photo_url} style={{ width: '18rem' }} />
            <Card.Body>
                <Card.Text>
                    {props.description}
                </Card.Text>
                <Card.Subtitle>
                    ${currencyFormat(props.last_price)}
                </Card.Subtitle>
                {props.showButton && <Link to='/push' state={{id: props.id}}><Button variant="primary">Push</Button></Link>}
            </Card.Body>
        </Card>
    )
}

export default AuctionItem