import React, { Component } from 'react';
import apiRequests from '../../helpers/data/apiRequests';
import './Inventory.scss';

export class DeleteInventory extends Component {
    state = {
        candy: []
    }

    getInventory = () => {
        apiRequests.getValues()
          .then(candy => this.setState({ candy }))
          .catch(err => console.error('uh-oh, no candy', err));
      }

    deleteCandy = (event) => {
        const candyId = event.target.id;
            apiRequests.DeleteInventory(candyId)
              .then(() => this.props.refreshCandy())
              .catch(err => console.error('not deleted', err));
        }

    render() {
        const candy = {...this.props.candy};
        return (
            <div className="DeleteInventory">
                <button className="btn btn-warning eatButton" onClick={this.deleteCandy} id={candy.id}>Eat</button>
            </div>
        )
    }
}

export default DeleteInventory
