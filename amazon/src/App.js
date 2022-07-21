import React, { Component } from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Header from './component/Header';
import HeaderModel3 from './component/HeaderModel3';
// import Test from './component/Test';
import {
  faMapMarker,
  faBars,
  faSearch,
  faCartPlus,
  faStar,
} from '@fortawesome/free-solid-svg-icons';
import Canvas from './component/Canvas';

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
        {/* front carousel start */}
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
          {/* front carousel end */}
          {/* main2 */}
          <div className=" m_main_bottom position-absolute ">
            <div className="m_main_bottom_1 row m-0 ">
              {/* carousel upper image start */}
              {/* col 1 start */}
              <div className="col p-2">
                <div className="m_mainbox1 p-3">
                  <div className="m_mainbox1_inner w-100 h-100 bg-success ">
                    <div className="w-100 bg-warning">
                      <h5>Top picks for your home</h5>
                      <div className="row m-0">
                        <div className="col-6 p-0 ">
                          <a
                            href="#/"
                            className=" text-start p-0 rounded-0 btn btn-success w-100 h-100"
                          >
                            <img
                              src="assets/image1.jpg"
                              alt="image1"
                              className="img-fluid"
                            />
                            <p style={{ fontSize: '12px', color: 'gray' }}>
                              ACs
                            </p>
                          </a>
                        </div>
                        <div className="col-6 p-0">
                          <a
                            href="#/"
                            className=" text-start p-0 rounded-0 btn btn-success w-100 h-100"
                          >
                            <img
                              src="assets/image2.jpg"
                              alt="image1"
                              className="img-fluid"
                            />
                            <p style={{ fontSize: '12px', color: 'gray' }}>
                              {' '}
                              Refrigerators
                            </p>
                          </a>
                        </div>
                        <div className="col-6 p-0">
                          <a
                            href="#/"
                            className=" text-start p-0 rounded-0 btn btn-success w-100 h-100"
                          >
                            <img
                              src="assets/image3.jpg"
                              alt="image1"
                              className="img-fluid"
                            />
                            <p style={{ fontSize: '12px', color: 'gray' }}>
                              Microwaves
                            </p>
                          </a>
                        </div>
                        <div className="col-6 p-0">
                          <a
                            href="#/"
                            className=" text-start p-0 rounded-0 btn btn-success w-100 h-100"
                          >
                            <img
                              src="assets/image4.jpg"
                              alt="image1"
                              className="img-fluid"
                            />
                            <p style={{ fontSize: '12px', color: 'gray' }}>
                              Washing machines
                            </p>
                          </a>
                        </div>
                      </div>
                    </div>
                    <a href="#/" className="btn btn-link">
                      see more
                    </a>
                  </div>
                </div>
              </div>
              {/* col 1 end */}
              {/* col 2 start */}
              <div className="col p-2">
                <div className="m_mainbox1 p-3">
                  <div className="m_mainbox1_inner w-100 h-100 bg-success ">
                    <div className="w-100 bg-warning"></div>
                    <a href="#/" className="btn btn-link">
                      see more
                    </a>
                  </div>
                </div>
              </div>
              {/* col2 end */}
              {/* col3 start */}
              <div className="col p-2">
                <div className="m_mainbox1 p-3">
                  <div className="m_mainbox1_inner w-100 h-100 bg-success ">
                    <div className="w-100 bg-warning"></div>
                    <a href="#/" className="btn btn-link">
                      see more
                    </a>
                  </div>
                </div>
              </div>
              {/* col3end */}
              {/* col 4 start */}
              <div className="col">
                <div className="row p-0">
                  <div
                    className="col-12 p-3 mb-3 bg-white p-3"
                    style={{
                      height: '150px',
                    }}
                  >
                    <h4 className="mb-3" style={{ fontWeight: 'bold' }}>
                      Sign in for your best experience
                    </h4>
                    <button className="btn btn-warning border border-secondary w-100 rounded-3 shadow-lg">
                      Sign in securely
                    </button>
                  </div>
                  {/* second part */}
                  <div
                    className="col-12 p-3 bg-white"
                    style={{ height: '238px' }}
                  >
                    <div className=" mb-2" style={{ height: '170px' }}>
                      <a href="#/">
                        <img
                          src="assets/image5.jpg"
                          alt="image5"
                          style={{ height: '150px', marginLeft: '90px' }}
                        />
                      </a>
                    </div>
                    <div className="float-start ">
                      <FontAwesomeIcon icon={faStar} className="text-warning" />
                      <FontAwesomeIcon icon={faStar} className="text-warning" />
                      <FontAwesomeIcon icon={faStar} className="text-warning" />
                      <FontAwesomeIcon icon={faStar} className="text-warning" />
                      <span className="ratingcount">21</span>
                      <div>$1900:00</div>
                    </div>
                    <button className="btn btn-warning btn-sm float-end border border-secondary  rounded-3 shadow-lg">
                      Shop Now
                    </button>
                  </div>
                </div>
              </div>
              {/* col 4 end */}
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
                  <ul class="nav flex-column">
                    <li class="nav-item">
                      <a class="nav-link active" href="#/">
                        Sell on Amazon
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#/">
                        Sell Under Amazon Accelator
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#/">
                        Amazon Global Selling
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#/">
                        Become An Affiliate
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#/">
                        Fulfilment by Amazon
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#/">
                        Advertise Your Product
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#/">
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
              <a href="#/" className="me-5">
                <img
                  src="assets/amazon logo.png"
                  alt="amazon logo"
                  style={{ width: '80px', height: '40px' }}
                />
              </a>
              <a className="" href="#/">
                B
              </a>
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
          <div className="m_footer_bottom">B</div>
        </footer>
      </div>
    );
  }
}

export default App;
