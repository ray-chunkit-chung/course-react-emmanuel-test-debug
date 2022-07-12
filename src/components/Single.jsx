// @flow

import React from 'react';
import PropTypes from 'prop-types';

const Single = ({ item }) => {
  return (
    <li className="col l6 s12">
      <div className="card">
        <div className="card-content">
          <span className="card-title">{item.title}</span>
        </div>
      </div>
      <br />
    </li>
  );
};

Single.propTypes = {
  item: PropTypes.object.isRequired,
};

export default Single;
