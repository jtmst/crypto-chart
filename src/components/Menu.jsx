import React from 'react';

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showDropdown: false,
    };
  }

  render() {
    return (
      <div>
        <fieldset data-type="horizontal">
          <label htmlFor="BTC">BTC</label>
          <input type="checkbox" id="BTC" className="menuCheckbox"></input>
          <label htmlFor="BTC">ETH</label>
          <input type="checkbox" id="ETH" className="menuCheckbox"></input>
          <label htmlFor="BTC">XRP</label>
          <input type="checkbox" id="XRP" className="menuCheckbox"></input>
          <label htmlFor="BTC">BCH</label>
          <input type="checkbox" id="BCH" className="menuCheckbox"></input>
          <label htmlFor="BTC">LINK</label>
          <input type="checkbox" id="LINK" className="menuCheckbox"></input>
        </fieldset>

        {/* This is going to be a dropdown for selecting Month/Quarter/Year */}
        {/* <div className="dd-wrapper">
          <div className="dd-header">
            <div className="dd-header-title"></div>
          </div>
          <ul className="dd-list">
            <li className="dd-list-item"></li>
            <li className="dd-list-item"></li>
            <li className="dd-list-item"></li>
          </ul>
        </div> */}
      </div>
    );
  }
}

export default Menu;
