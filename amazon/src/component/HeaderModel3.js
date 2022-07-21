import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const Test = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button
        variant="none"
        className="me-1 btn h-100 p-0 "
        onMouseEnter={handleShow}
        style={{ width: '7%', color: '#fff' }}
      >
        <div style={{ fontSize: '10px' }}>Hello,Sign in</div>
        <span style={{ fontSize: '12px', fontWeight: 'bold' }}>
          Account &amp; Lists
        </span>
      </Button>

      <Modal className="m_ht_signin_model" show={show} onHide={handleClose}>
        <Modal.Header className="m_signin_model ">
          <button className="btn btn-warning w-50  ">Sign in</button>
          <p className="text-dark fs-6 ">
            New Customers?
            <a href="#/" className="btn btn-link ">
              Start hear
            </a>
          </p>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col-6 tbdr text-dark">
              <ul class="nav flex-column">
                <h5>Your List</h5>
                <li class="nav-item">
                  <a class="nav-link active" href="#/">
                    Create a Wish List
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#/">
                    Find a wish list
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#/">
                    Wish from Anywebsite
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link " href="#/">
                    Baby Wish List
                  </a>
                </li>

                <li class="nav-item">
                  <a class="nav-link " href="#/">
                    Discover Your Style
                  </a>
                </li>

                <li class="nav-item">
                  <a class="nav-link " href="#/">
                    Explore Showroom
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-6 tbdr text-dark">
              <ul class="nav flex-column">
                <h5>Your Account</h5>
                <li class="nav-item">
                  <a class="nav-link active" href="#/">
                    Your Account
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#/">
                    Your Orders
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#/">
                    Your Wish List
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link " href="#/">
                    Your Recommendations
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link " href="#/">
                    Your Prime Membership
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link " href="#/">
                    Your Subscribe &amp; Save Items
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#/">
                    Your Amazon Business Account
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Test;
