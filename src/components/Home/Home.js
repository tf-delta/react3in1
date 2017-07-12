/**
 * Created by peterk on 7/11/17.
 */
import React from 'react';

import actions from '../../actions';

class Home extends React.Component {
  render() {
    const {reducer, noop} = this.props;
    return (
        <div>
        <h1>Home</h1>
        <p onClick={()=>noop()}>Click HERE to increase the count below</p>
        <p>Count: {reducer.count}</p>
        </div>
    );
  }
}

export default Home;
