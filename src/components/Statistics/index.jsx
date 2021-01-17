import React from "react";
import PropTypes from "prop-types";

function Statistics({ good, bad, neutral, total, percentage }) {
  return (
    <ul>
      <li>
        <p>Good:{good}</p>
      </li>
      <li>
        <p>Neutral:{neutral}</p>
      </li>
      <li>
        <p>Bad:{bad}</p>
      </li>
      <li>
        <p>Total:{total}</p>
      </li>
      <li>
        <p>Postitive feedback:{percentage}%</p>
      </li>
    </ul>
  );
}

Statistics.propTypes = {};

export default Statistics;
