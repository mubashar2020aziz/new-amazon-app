import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const Canvas = () => {
  const [show, setShow] = useState(false);

  const handleClose3 = () => setShow(false);
  const handleShow3 = () => setShow(true);
  return (
    <>
      <Button onClick={handleShow3} className="offcanvas"></Button>

      <Offcanvas show={show} onHide={handleClose3}>
        <Offcanvas.Header className="bg-dark text-light">
          <h5 className="offcanvas-title mx-auto" id="offcanvasExampleLabel">
            <FontAwesomeIcon icon={faUser} className="text-white " />
            Hello,Sign in
          </h5>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="offcanvas-body">
            <h5
              className="text-dark mx-3  trending"
              style={{ fontWeight: 'bold' }}
            >
              Trending
            </h5>
            <p className="text-gray mx-3 best sellers">Best Sellers</p>
            <p className="text-gray mx-3 new release">New Release</p>
            <p className="text-gray mx-3 movers">Movers &amp; Shakers</p>
            <h4
              className="text-dark mx-3 my-2 "
              style={{ fontWeight: 'bold', fontSize: '20px' }}
            >
              Digital Content And Devices
            </h4>

            <div className="dropdown">
              <a
                href="#/"
                className="smart-home dropdown-toggle mx-3"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{ textDecoration: 'none', color: '#000' }}
              >
                Echo,Alexa &amp; smart Home
              </a>
              <ul
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton1"
              >
                <li>
                  <a
                    className="dropdown-item"
                    href="#/"
                    style={{ textDecoration: 'none', color: '#000' }}
                  >
                    See All Devices with Alexa
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    href="#/"
                    style={{ textDecoration: 'none', color: '#000' }}
                  >
                    Echo Smart Speaker
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    href="#/"
                    style={{ textDecoration: 'none', color: '#000' }}
                  >
                    Eco Devices &amp; Screen
                  </a>
                </li>
              </ul>
            </div>

            <div className="dropdown">
              <a
                href="#/"
                className="smart-home dropdown-toggle mx-3 mt-2"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{ textDecoration: 'none', color: '#000' }}
              >
                Amazon Kindle &amp; E-Traders
              </a>
            </div>

            {/* <!-- shop and category --> */}

            <h4 className="text-dark mx-3 my-2 font-weight-bold">
              Shop By Category
            </h4>

            <div className="dropdown">
              <a
                href="#/"
                className="smart-home dropdown-toggle mx-3"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{ textDecoration: 'none', color: '#000' }}
              >
                Mobile, Tablet &amp; Accessorie's
              </a>
              <ul
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton1"
              ></ul>
            </div>

            {/* <!-- shop and category End --> */}
          </div>
          <h6
            className="text-muted text-uppercase mx-3 my-3 "
            style={{ fontWeight: 'bold' }}
          >
            Help &amp; Setting
          </h6>
          <a href="#/" className="btn btn-outline-success btn-sm w-100 mb-3">
            Your Account
          </a>
          <a
            href="login.html"
            className="btn btn-outline-warning btn-sm w-100 my-3"
          >
            Sign in
          </a>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};
export default Canvas;
