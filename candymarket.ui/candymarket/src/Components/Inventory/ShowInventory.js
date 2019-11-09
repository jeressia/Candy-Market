import React, { Component } from 'react';
import getValues from '../../helpers/data/apiRequests';

import DeleteInventory from './DeleteInventory';
import './Inventory.scss';
import AddInventory from './AddInventory';

export class Inventory extends Component {
    state = {
        candyInventory : []
    }

 
    getValues = () => {
        getValues().then((values) => {
          let myNewValues = [...values];
          const showHideButton = document.querySelector('.showAndHide');
          const results = document.querySelector('.results');
          this.setState({candyInventory: myNewValues});
        results.classList.toggle('hide');

        if (results.classList.contains('hide')) {
          showHideButton.innerHTML = 'Show All Candy';
        }
        else{
          showHideButton.innerHTML = 'Hide Candy';
        }
          
    
        }).catch((error) => {
          console.log('broken', error);
        })
      }
    
      showCandyInventory = () => {
        const myCandy = [...this.state.candyInventory];
      return myCandy.map((candy) => 
          <div className= "singleCandy col-3">
            <div>{candy.name}</div>
            <div className="eatButton">
            <DeleteInventory candy={myCandy}/>
            </div>
         </div>
    )
      }

    render() {
      const candyInventory = this.state.candyInventory;
        return (
            <div className="Inventory">
                <div>
                    <h5>Candy Inventory</h5>
                    <div className="buttonsDiv">
                    <button className=" btn btn-info showAndHide" onClick={this.getValues}>Show All Candy</button>
                    <AddInventory candy={candyInventory}/>
                    </div>
                    <div className="results hide col-12">
                    {this.showCandyInventory()}
                    </div>
                    
                </div>
            </div>
        )
    }
}

export default Inventory
