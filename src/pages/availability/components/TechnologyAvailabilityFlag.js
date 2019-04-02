import React, { Component } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class TechnologyAvailabilityFlag extends Component {
  render() {
    if (this.props.isAvailable) {
      return <FontAwesomeIcon icon="check" color="#76D7C4" />;
    }

    return <FontAwesomeIcon icon="times" color="#CD5C5C" />;
  }
}

TechnologyAvailabilityFlag.propTypes = {
  isAvailable: PropTypes.bool.isRequired
};

export default TechnologyAvailabilityFlag;
