/**
 * Created by peterk on 7/11/17.
 */

import React from 'react';

const About = ({reducer}) => (
    <div>
        <h1>About</h1>
        <p>Current count: {reducer.count}</p>
    </div>
);

export default About;
