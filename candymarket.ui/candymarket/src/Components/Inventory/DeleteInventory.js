import React, { Component } from 'react'
import './Inventory.scss';

export class DeleteInventory extends Component {
    deleteCandy
    render() {
        return (
            <div className="DeleteInventory">
                <button className="btn btn-warning eatButton" onClick="this.deleteCandy">Eat</button>
            </div>
        )
    }
}

export default DeleteInventory
