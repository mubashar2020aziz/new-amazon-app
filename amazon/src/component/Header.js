import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';

import Flag from 'react-world-flags';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Test extends Component {
  // property
  state = {};

  // constructor
  constructor(props) {
    super(props);
    this.state = {};
  }

  // method
  render() {
    return (
      <>
        <Button
          variant="none"
          className="  btn h-100 p-0 position-relative m_countrydd_btn"
          style={{ width: '3%' }}
        >
          <Flag code={'ae'} height="10" className="me-1" />
          <FontAwesomeIcon icon={faChevronDown} className="text-white w-25" />
          <div className="m_countrydd position-absolute bg-white rounded-2 border p-3 text-start">
            <div className="arrow-up position-absolute"></div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
              />
              <label className="form-check-label" for="flexRadioDefault1">
                English
              </label>
            </div>
            <hr />
            <form>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                />
                <label className="form-check-label" For="flexRadioDefault1">
                  Default radio
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault2"
                />
                <label className="form-check-label" For="flexRadioDefault2">
                  Default radio
                </label>
              </div>

              {/* form end */}
            </form>
            <hr />
            <p style={{ fontSize: '11px' }}>
              <Flag code={'ae'} height="16" className="d-inline-block" />
              <span className="d-inline-block">
                You are shopping on Amazon.ae
              </span>
            </p>
            <a href="#/" className="btn btn-link">
              Change country/region
            </a>
          </div>
        </Button>
      </>
    );
  }
}

export default Test;
