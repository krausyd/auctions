import React from 'react';
import AuctionItem from "./AuctionItem";
import { AuctionItemProps } from "./AuctionItem";

const AuctionItemsList = () => {

    const auctionItems = [
        {
            id: 1,
            description: "One hour of deluxe spa treatmet at the best Spa place in Seattle",
            photo_url: "https://www.msccruises.com/int/-/media/global-contents/on-board/spa-beauty-and-fitness/enjoy_spa_01.jpg",
            last_price: 34567,
        },
        {
            id: 2,
            description: "One session of dinner for two, make your own dinner. Frenc cuisine, 4 course meal.",
            photo_url: "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2017/3/20/1/fn_istock_two-women-preparing-meal_s4x3.jpg.rend.hgtvcom.1280.960.suffix/1490061175094.jpeg",
            last_price: 10987,
        },
        {
            id: 3,
            description: "Deluxe Christmas basket. Includes: chocolates, fruit, cookies, sweets, cheese, crackers and sausage.",
            photo_url: "https://cdn2.harryanddavid.com/wcsstore/HarryAndDavid/images/catalog/25_0027261_30EH_35_002x.jpg",
            last_price: 11099,
        }
    ];
    return (
        <div>
            { auctionItems.map(item =>
                <AuctionItem key={item.id} id={item.id} description={item.description} photo_url={item.photo_url} last_price={item.last_price} showButton={true} />)}
        </div>
    )
}

export default AuctionItemsList