import React from 'react';
import BuildingForm from './buildingForm.jsx';

class App extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      buildingInfo: {
        address: '',
        bedrooms: 1,
        bathrooms: 1,
        unit: 10,
        image: '',
        price: 90
      }
    }

    this.submitBuildingInfo = this.submitBuildingInfo.bind(this);
  }

  submitBuildingInfo(building){
    var newBuilding = {
      address: building.address,
      bedrooms: building.bedrooms,
      bathrooms: building.bathroooms,
      unit: building.unit,
      image: building.image,
      price: building.price
    }

    this.setState({
      buildingInfo: newBuilding
    })


  }



  render(){
    return (
      <div>
        <BuildingForm buildingInfo={this.state.buildingInfo} submitBuildingInfo={this.submitBuildingInfo}/>
      </div>
    )
  }
}

module.exports = App;
