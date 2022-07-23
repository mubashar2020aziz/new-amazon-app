import React, { Component } from 'react';
import Header from '../component/Header';
import HeaderModel3 from '../component/HeaderModel3';
import {
  faMapMarker,
  faBars,
  faSearch,
  faCartPlus,
  faCaretDown,
} from '@fortawesome/free-solid-svg-icons';
import Canvas from '../component/Canvas';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class MainHeader extends Component {
  //properties
  state = {
    x: '',
  };
  //constructor
  constructor(props) {
    super(props);
    this.state = {};
  }
  //method
  //always use fat arrow function otherwise create
  //error this.state is not a function
  handleScroll = () => {
    console.log('okok' + window.scrollY);
    if (window.scrollY >= 60) {
      //add position-fixed start-0 top-0
      this.setState({ x: 'position-fixed start-0 top-0' });
    } else {
      //remove position-fixed start-0 top-0
      this.setState({ x: '' });
    }
  };
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }
  render() {
    return (
      <>
        <header>
          <div className={`a_header_top p-1 w-100 ` + this.state.x}>
            <button className="me-1 btn h-100" style={{ width: '10%' }}>
              <img
                className="img-fluid"
                src="assets/amazon logo.png"
                alt="amazon logo"
              />
            </button>
            <button
              className="lh-1 fs-6  text-white me-1 btn h-100 m-0 "
              style={{ width: '10%' }}
            >
              <div className="col-2 d-inline-block ">
                <FontAwesomeIcon icon={faMapMarker} className="text-white " />
              </div>
              <div className="col-10 text-white d-inline-block ">
                <span style={{ fontSize: '10px' }}>Delivery to Mubashar</span>
                {/* <p style={{ fontSize: '10px', fontWeight: 'bold' }}>
                  pakpattan 5102
                </p> */}
              </div>
            </button>
            {/* start form */}
            <form className="hform me-1 bg-white w-50 d-inline-block ">
              <div className="row m-0 ">
                {/* form button start */}
                <div className="col-1 tdbr p-0 ">
                  <div class="dropdown">
                    <button
                      class="btn btn-white   dropdown-toggle"
                      type="button"
                      id="dropdownMenuButton1"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      All
                    </button>
                    <ul
                      class="dropdown-menu"
                      aria-labelledby="dropdownMenuButton1"
                    >
                      <li>
                        <a class="dropdown-item" href="#/">
                          Action
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#/">
                          Another action
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#/">
                          Something else here
                        </a>
                      </li>
                    </ul>
                  </div>

                  {/* form buton end */}
                </div>
                <div className="col-10 tdbr2 p-0 ">
                  <input className="form-control  " type="text" />
                </div>
                {/* search button start */}
                <div className="col-1 tdbr3 p-0 ">
                  <button type="submit" className=" w-100 btn btn-warning">
                    <FontAwesomeIcon icon={faSearch} className="fs-5" />
                  </button>
                </div>
              </div>
            </form>
            {/* form end */}

            <Header />

            {/* header model 3 start */}
            <HeaderModel3 />
            {/* header model 3 end */}
            <button
              className=" btn h-100 p-0"
              style={{ width: '7%', color: '#fff' }}
            >
              <div style={{ fontSize: '12px' }}>Return</div>
              <span style={{ fontSize: '16px', fontWeight: 'bold' }}>
                &amp;Orders
              </span>
            </button>
            <button
              className=" btn h-100 p-0 text-white"
              style={{ width: '7%' }}
            >
              <FontAwesomeIcon icon={faCartPlus} className="fs-3" /> Cart
            </button>
          </div>
          <div className="a_header_bottom">
            <nav className="ms-2 navbar navbar-expand-lg  float-start">
              <div className="container-fluid">
                <a className="navbar-brand " href="#/">
                  <FontAwesomeIcon
                    icon={faBars}
                    className="mx-1 fs-6"
                    type="button"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasExample"
                    aria-controls="offcanvasExample"
                  />
                  All
                </a>
                <Canvas />
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <a className="nav-link" href="#/">
                        Best Seller
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#/">
                        Mobiles
                      </a>
                    </li>

                    <li className="nav-item">
                      <a className="nav-link" href="#/">
                        Electronic
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#/">
                        Fashion
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#/">
                        Prime <FontAwesomeIcon icon={faCaretDown} />
                      </a>
                    </li>

                    <li className="nav-item">
                      <a className="nav-link" href="#/">
                        Customer Service
                      </a>
                    </li>

                    <li className="nav-item">
                      <a className="nav-link" href="#/">
                        Amazon Pay
                      </a>
                    </li>

                    <li className="nav-item">
                      <a className="nav-link" href="#/">
                        Computers
                      </a>
                    </li>
                  </ul>
                  <a href="/" className="hbanner d-none">
                    <img
                      src="assets/advertise img.jpg"
                      alt="advertise bannar"
                    />
                  </a>
                  <ul className="nav float-start ">
                    <li className="nav-item">
                      <a className="nav-link" href="#/">
                        Home &amp;Kitchen
                      </a>
                    </li>

                    <li className="nav-item">
                      <a className="nav-link" href="#/">
                        Today's Deal
                      </a>
                    </li>

                    <li className="nav-item">
                      <a className="nav-link" href="#/">
                        Toy's&amp;Games
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#/">
                        Books
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#/">
                        Sell
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#/">
                        Coupons
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </header>
      </>
    );
  }
}
export default MainHeader;
