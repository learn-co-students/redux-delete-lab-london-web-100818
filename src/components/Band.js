import React, { Component } from 'react';

class Band extends Component {

  render() {
    const { band, deleteBand } = this.props
    return(
      <li key={band.id}>
        {band.name}
        <button onClick={() => deleteBand(band.id)}>DELETE</button>
      </li>
    );
  }
};

export default Band;
