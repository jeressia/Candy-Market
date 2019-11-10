import React, { Component } from 'react';
import apiRequests from '../../helpers/data/apiRequests';
import AddInventory from './AddInventory';
import CandyCard from './CandyCard';

import './Inventory.scss';


export class Inventory extends Component {
    state = {
        candyInventory : []
    }

 
    getValues = () => {
        apiRequests.getValues().then((values) => {
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
    
      refreshCandy = () => {
        apiRequests.getValues().then((candy) => {
          let candies = [...candy];
          this.setState({candyInventory: candies});
        }
        )};

    render() {
        const candy = [...this.state.candyInventory];
        const allCandy = candy.map((candy) => 
          <CandyCard key={candy.id} candy ={candy} refreshCandy = {this.refreshCandy}/>
        );
      const candyInventory = this.state.candyInventory;
        return (
            <div className="Inventory">
                <div>
                    <h5>Candy Inventory</h5>
                    <div className="buttonsDiv">
                    <button className=" btn btn-info showAndHide" onClick={this.getValues}>Show All Candy</button>
                    <AddInventory candy={candyInventory} refreshCandy = {this.props.refreshCandy}/>
                    </div>
                      <div className="container col-4">
                      <div className="row">
                          <div id="results" className="results hide">
                          { allCandy }
                          </div>
                        </div> 
                      </div>
                      </div> 
                      </div> 
        )
    }
}

export default Inventory;
