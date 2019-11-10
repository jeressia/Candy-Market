import React, { Component } from 'react';
import apiRequests from '../../helpers/data/apiRequests';

const defaultCandy = {
    Name: '',
    CandyTypeId: '',
  };
  
export class AddInventory extends Component {
    state = {
        newCandy: defaultCandy,
    }

    formFieldStringState = (name, e) => {
        const tempCandy = {...this.state.newCandy};
        tempCandy[name] = e.target.value;
        this.setState({ newCandy: tempCandy});
    }

    formSubmit = (e) => {
        e.preventDefault();
        const saveCandy = {...this.state.newCandy};
        apiRequests.postCandy(saveCandy)
            .then(() => this.props.refreshCandy())
            .catch(err => console.error('unable to save candy', err));
    }

    nameChange = e => this.formFieldStringState('Name', e);

    candyTypeChange = e => this.formFieldStringState('CandyTypeId', e);

    AddCandy = () => {
        const addCandyForm = document.getElementById('addCandyForm');
        const results = document.getElementById('results') ;
        const showHideButton = document.querySelector('.showAndHide');
        addCandyForm.classList.toggle('hide');
        results.classList.add('hide');
        showHideButton.innerHTML = 'Show All Candy';

    };

    render() {
        const newCandy = {...this.state.newCandy};
        return (
            <div className="AddInventory">
                <button className='btn btn-secondary' onClick={this.AddCandy}>Add Candy</button>
                <form id="addCandyForm" className="hide" onSubmit={this.formSubmit}>
                <h1>New Candy</h1>
                <div className="form-group">
                    <label htmlFor="sampleName">Name</label>
                    <input
                    type="text"
                    className="form-control"
                    id="Name"
                    placeholder="Bubblicious"
                    value = {newCandy.Name}
                    onChange= {this.nameChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="typeId">Type Id</label>
                    <input
                    type="number"
                    className="form-control"
                    id="CandyTypeId"
                    placeholder="1"
                    value = {newCandy.CandyTypeId}
                    onChange= {this.candyTypeChange}
                    />
                </div>
                <button type="submit" className="btn btn-primary">Save Candy</button>
                </form>
                </div>
        )
    }
}

export default AddInventory
