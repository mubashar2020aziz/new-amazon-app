import React, { Component } from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Flag from 'react-world-flags';
import Header from './component/Header';
import HeaderModel3 from './component/HeaderModel3';
import {
  faMapMarker,
  faBars,
  faUser,
  faSearch,
  faChevronDown,
  faCartPlus,
} from '@fortawesome/free-solid-svg-icons';

class App extends Component {
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
      <div>
        <div
          className="offcanvas offcanvas-start"
          tabIndex="-1"
          id="offcanvasExample"
          aria-labelledby="offcanvasExampleLabel"
        >
          <div className="offcanvas-header bg-dark text-light">
            <h5 className="offcanvas-title mx-auto" id="offcanvasExampleLabel">
              {/* <i className="fa fa-user-circle-o mx-2" aria-hidden="true"></i> */}
              <FontAwesomeIcon icon={faUser} style={{ color: '#fff' }} />
              Hello,Sign in
            </h5>
            <button
              type="button"
              className="btn-close text-reset bg-light"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <h5 className="text-dark mx-3 font-weight-bold trending">
              Trending
            </h5>
            <p className="text-gray mx-3 best sellers">Best Sellers</p>
            <p className="text-gray mx-3 new release">New Release</p>
            <p className="text-gray mx-3 movers">Movers &amp; Shakers</p>
            <h4 className="text-dark mx-3 my-2 font-weight-bold">
              Digital Content And Devices
            </h4>

            {/* <!-- shop and category End --> */}

            <h6 className="text-muted text-uppercase mx-3 my-3">
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
          </div>
        </div>

        {/* <!-- finish drawer code --> */}

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
              className="lh-1 fs-6  text-white me-1 btn h-100 m-0 row"
              style={{ width: '10%' }}
            >
              <div className="col-2 d-inline-block ">
                <FontAwesomeIcon icon={faMapMarker} className="text-white " />
              </div>
              <div className="col-10 text-white d-inline-block text-start">
                <span style={{ fontSize: '10px' }}>Delivery to Mubashar</span>
                <p style={{ fontSize: '10px', fontWeight: 'bold' }}>
                  pakpattan 5102
                </p>
              </div>
            </button>
            {/* start form */}
            <form className="hform me-1 bg-white w-50 d-inline-block ">
              <div className="row m-0 border-end">
                {/* form button start */}
                <div className="col-1 tdbr p-0 ">
                  <div class="dropdown">
                    <button
                      class="btn btn-sm-light dropdown-toggle"
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
            <button
              className="  btn h-100 p-0"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal2"
              style={{ width: '3%' }}
            >
              <Flag code={'ae'} height="10" className="me-1" />
              <FontAwesomeIcon
                icon={faChevronDown}
                className="text-white w-25"
              />
              <Header />
            </button>
            <button
              className="me-1 btn h-100 p-0"
              style={{ width: '7%', color: '#fff' }}
              data-bs-toggle="modal"
              data-bs-target="#exampleModal3"
            >
              <div style={{ fontSize: '10px' }}>Hello,Sign in</div>
              <span style={{ fontSize: '12px', fontWeight: 'bold' }}>
                Account &amp; Lists
              </span>
              <HeaderModel3 />
            </button>
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
                  {/* navbar sidebarclose */}
                </a>
                {/* <button
                  class="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span class="navbar-toggler-icon"></span>
                </button> */}
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <a
                        className="nav-link active"
                        aria-current="page"
                        href="#/"
                      >
                        BestSeller
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
                        New Release
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
        <div className="m_main position-relative">
          <div className="m_main_top">
            <div
              id="carouselExampleControls"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    src="assets/pix1.jpg"
                    className="d-block w-100"
                    alt="pix1"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="assets/pix2.jpg"
                    className="d-block w-100"
                    alt="pix2"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="assets/pix3.jpg"
                    className="d-block w-100"
                    alt="pix3"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="assets/pix4.jpg"
                    className="d-block w-100"
                    alt="pix4"
                  />
                </div>
              </div>
              <button
                className="carousel-control-prev h-50"
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next h-50"
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
          {/* main2 */}
          <div className=" m_main_bottom position-absolute ">
            <div className="m_main_bottom_1 row m-0 ">
              <div className="col">A</div>
              <div className="col">B</div>
              <div className="col">C</div>
              <div className="col">D</div>
            </div>
            <div className="m_main_bottom_2 row m-0 my-3 p-3">
              <div className="col-6">A</div>
              <div className="col-3">B</div>
              <div className="col-3">C</div>
            </div>
            <div className="m_main_bottom_3 row m-0 my-3">
              <div className="">
                <h3 className="float-start">Today's Deal</h3>
                <button type="button" className=" float-start btn btn-link">
                  see all deals
                </button>
              </div>
              <div
                id="carouselExampleControls2"
                className="carousel slide"
                data-bs-ride="carousel"
              >
                <div className="carousel-inner text-center">
                  <div className="carousel-item active">
                    <div className="imgCont row">
                      <div className="col">1</div>
                      <div className="col">2</div>
                      <div className="col">3</div>
                      <div className="col">4</div>
                      <div className="col">5</div>
                      <div className="col">6</div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="imgCont row">
                      <div className="col">7</div>
                      <div className="col">8</div>
                      <div className="col">9</div>
                      <div className="col">10</div>
                      <div className="col">11</div>
                      <div className="col">12</div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="imgCont row">
                      <div className="col">13</div>
                      <div className="col">14</div>
                      <div className="col">15</div>
                      <div className="col">16</div>
                      <div className="col">17</div>
                      <div className="col">18</div>
                    </div>
                  </div>
                </div>
                <button
                  className="m_cc carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleControls2"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon "
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="m_cc carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleControls2"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon "
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <footer></footer>
      </div>
    );
  }
}

export default App;
