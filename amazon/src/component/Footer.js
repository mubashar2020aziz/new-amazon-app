import React from 'react';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'react-bootstrap/esm/Button';

const Footer = () => {
  return (
    <>
      <footer>
        <div
          className="btn w-100 rounded-0 border-0"
          style={{ background: '#37475a', color: '#fff' }}
        >
          Back to top
        </div>
        <div className="m_footer_top">
          <div className="container">
            <div className="row pt-5 text-white">
              <div className="col-md-3 ">
                <h6>Get to Know Us</h6>
                <ul className="nav flex-column">
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      aria-current="page"
                      href="#/"
                    >
                      About Us
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#/">
                      Careers
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#/">
                      Press Releases
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#/">
                      Amazon Cares
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#/">
                      Gift a Smile
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#/">
                      Amazon Science
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-md-3">
                <h6>Connect with Us</h6>
                <ul className="nav flex-column">
                  <li className="nav-item">
                    <a className="nav-link active" href="#/">
                      Facebook
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#/">
                      Twitter
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#/">
                      Instagram
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-md-3">
                <h6>Make Money with Us</h6>
                <ul className="nav flex-column">
                  <li className="nav-item">
                    <a className="nav-link active" href="#/">
                      Sell on Amazon
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#/">
                      Sell Under Amazon Accelator
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#/">
                      Amazon Global Selling
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#/">
                      Become An Affiliate
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#/">
                      Fulfilment by Amazon
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#/">
                      Advertise Your Product
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#/">
                      Amazon Pay on Merchants
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-md-3">
                <h6>Let Us Help You</h6>
                <ul className="nav flex-column">
                  <li className="nav-item">
                    <a className="nav-link active" href="#/">
                      COVID-19 And Amazon
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#/">
                      Your Account
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#/">
                      Return Center
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#/">
                      100% Purchase Protection
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#/">
                      Amazon App Download
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#/">
                      Amazon Assistant Download
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#/">
                      Help
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr className="text-secondary" />
          <div className="d-flex justify-content-center">
            <a href="#/" className="me-5 pt-2">
              <img
                src="assets/amazon logo.png"
                alt="amazon logo"
                style={{ width: '80px', height: '40px' }}
              />
            </a>

            <Button variant=" m_footer-button outline-secondary ">
              <FontAwesomeIcon icon={faGlobe} className="px-1" />
              English
            </Button>
          </div>
          <div className="d-flex justify-content-center">
            <ul className="nav">
              <li className="nav-item ms-1 me-2">
                <a className="nav-link " href="#/">
                  Australia
                </a>
              </li>
              <li className="nav-item ms-1 me-2">
                <a className="nav-link" href="#/">
                  Brazil
                </a>
              </li>
              <li className="nav-item ms-1 me-2">
                <a className="nav-link" href="#/">
                  Canada
                </a>
              </li>
              <li className="nav-item ms-1 me-2">
                <a className="nav-link" href="#/">
                  China
                </a>
              </li>
              <li className="nav-item ms-1 me-2">
                <a className="nav-link" href="#/">
                  France
                </a>
              </li>
              <li className="nav-item ms-1 me-2">
                <a className="nav-link" href="#/">
                  Germany
                </a>
              </li>
              <li className="nav-item ms-1 me-2">
                <a className="nav-link" href="#/">
                  Italy
                </a>
              </li>
              <li className="nav-item ms-1 me-2">
                <a className="nav-link" href="#/">
                  Japan
                </a>
              </li>
              <li className="nav-item ms-1 me-2">
                <a className="nav-link" href="#/">
                  Mexico
                </a>
              </li>
              <li className="nav-item ms-1 me-2">
                <a className="nav-link" href="#/">
                  Netherland
                </a>
              </li>
              <li className="nav-item ms-1 me-2">
                <a className="nav-link" href="#/">
                  Poland
                </a>
              </li>
              <li className="nav-item ms-1 me-2">
                <a className="nav-link" href="#/">
                  Singapore
                </a>
              </li>
              <li className="nav-item ms-1 me-2">
                <a className="nav-link" href="#/">
                  Span
                </a>
              </li>
              <li className="nav-item ms-1 me-2">
                <a className="nav-link" href="#/">
                  Turkey
                </a>
              </li>
              <li className="nav-item ms-1 me-2">
                <a className="nav-link" href="#/">
                  United Arab Amirates
                </a>
              </li>
              <li className="nav-item ms-1 me-2">
                <a className="nav-link" href="#/">
                  United Kingdom
                </a>
              </li>
              <li className="nav-item ms-1 me-2">
                <a className="nav-link" href="#/">
                  Unided State
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="m_footer_bottom">
          <div className="container pt-5">
            <div className="row">
              <div className="col">
                <ul className="nav flex-column">
                  <li className="nav-item">
                    <a className="nav-link " href="#/">
                      AbeBook, Books,art &amp;collectible
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#/">
                      Shopbop Designer Fashion Brands
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col">
                <ul className="nav flex-column">
                  <li className="nav-item">
                    <a className="nav-link " href="#/">
                      AbeBook, Books,art &amp;collectible
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#/">
                      Shopbop Designer Fashion Brands
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col">
                <ul className="nav flex-column">
                  <li className="nav-item">
                    <a className="nav-link " href="#/">
                      AbeBook, Books,art &amp;collectible
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#/">
                      Shopbop Designer Fashion Brands
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col">
                <ul className="nav flex-column">
                  <li className="nav-item">
                    <a className="nav-link " href="#/">
                      AbeBook, Books,art &amp;collectible
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#/">
                      Shopbop Designer Fashion Brands
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col">
                <ul className="nav flex-column">
                  <li className="nav-item">
                    <a className="nav-link " href="#/">
                      AbeBook, Books,art &amp;collectible
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#/">
                      Shopbop Designer Fashion Brands
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <p
            className="text-white text-center mt-3"
            style={{ fontSize: '12px' }}
          >
            Conditions of Use &amp; SalePrivacy NoticeInterest-Based Ads©
            1996-2022, Amazon.com, Inc. or its affiliates
          </p>
        </div>
      </footer>
    </>
  );
};
export default Footer;
