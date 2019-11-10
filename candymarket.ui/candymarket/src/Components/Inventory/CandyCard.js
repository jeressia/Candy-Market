import React, { Component } from 'react';
import DeleteInventory from '../Inventory/DeleteInventory';
import DonateInventory from '../Inventory/DonateInventory';

export class CandyCard extends Component {
    render() {
        const {candy} = this.props;
        return (
            <div className= "singleCandy col">
            <div>{candy.name}</div>
            <div className="cardButtons">
            <DeleteInventory candy={candy} refreshCandy = {this.props.refreshCandy}/>
            <DonateInventory candy={candy}/>
            </div>
            <div class="w-100"></div>
         </div>
        )
    }
}

export default CandyCard
