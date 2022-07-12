// @flow

import React from 'react';
import PropTypes from 'prop-types';

// type Item = {
//   items: {
//     id: Number,
//     title: String,
//     category: String,
//     description: String,
//     link: String,
//     release_date: String,
//     views: String,
//     image: String,
//   },
// };

function Single({ item }) {
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
}

Single.propTypes = {
  item: PropTypes.shape.isRequired,
};

export default Single;
