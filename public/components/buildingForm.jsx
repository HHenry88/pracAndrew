const React = require('react');

var BuildingForm = (props) => (
  <div>
    <h1>Input your Unit's information</h1>

    <form onSubmit={() => this.props.submitForm()}>
      <label>Address</label>
      <input type="text" value={props.buildingInfo.address}/>
              <br/>
      <label>Unit</label>
      <input type="text" value={props.buildingInfo.unit}/>
            <br/>
      <label>Bedrooms</label>
      <input type="text" value={props.buildingInfo.bedrooms}/>
          <br/>
      <label>Bathrooms</label>
      <input type="text" value={props.buildingInfo.bathrooms}/>
        <br/>
      <label>Price</label>
      <input type="text" value={props.buildingInfo.price}/>
      <br/>
      <label>Input image</label>
      <input type="text" value={props.buildingInfo.image}/>
      <br/>
      <button type="submit">Submit</button>
    </form>
  </div>
)


module.exports = BuildingForm;
