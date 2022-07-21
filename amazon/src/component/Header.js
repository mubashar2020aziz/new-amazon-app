import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Flag from 'react-world-flags';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Test = () => {
  const [show, setShow] = useState(false);

  const handleClose2 = () => setShow(false);
  const handleShow2 = () => setShow(true);

  return (
    <>
      <Button
        variant="none"
        onMouseOver={handleShow2}
        className="  btn h-100 p-0"
        style={{ width: '3%' }}
      >
        <Flag code={'ae'} height="10" className="me-1" />
        <FontAwesomeIcon icon={faChevronDown} className="text-white w-25" />
      </Button>

      <Modal
        className="m_countrydd"
        show={show}
        onHide={handleClose2}
        animation={false}
      >
        <Modal.Header>
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
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
              />
              <label className="form-check-label" for="flexRadioDefault1">
                Default radio
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault2"
                checked
              />
              <label className="form-check-label" for="flexRadioDefault2">
                Default checked radio
              </label>
            </div>

            {/* form end */}
          </form>
        </Modal.Body>
        <Modal.Footer>
          <p style={{ fontSize: '14px' }}>
            <Flag code={'ae'} height="16" /> You are shopping on Amazon.ae
          </p>
          <a href="#/" className="btn btn-link">
            Change country/region
          </a>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Test;
