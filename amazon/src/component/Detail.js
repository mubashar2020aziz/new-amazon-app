import React, { Component } from 'react';
import {
  faEnvelope,
  faInfo,
  faStar,
  faUser,
} from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ReactImageMagnify from 'react-image-magnify';
class Detail extends Component {
  state = {
    prodSrollFix: 'postion-relative',
  };
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    window.addEventListener('scroll', this.detailHandleScroll);
  }
  detailHandleScroll = () => {
    console.log('detail ok' + window.scrollY);
    if (window.scrollY < 90) {
      this.setState({ prodSrollFix: 'position-relative top-0' });
    } else if (window.scrollY >= 90 && window.scrollY <= 1200) {
      this.setState({ prodSrollFix: 'position-fixed  top-0' });
    } else {
      this.setState({ prodSrollFix: 'position-relative dt1225' });
    }
  };

  // method

  render() {
    return (
      <>
        <div className="m_main m_dtl_main bg-white mx-auto">
          {/* top advrti bannar start */}
          <div className="m_dtl_top_bannar">
            <img
              src="assets/advertise img.jpg"
              alt="adverti dtl bannar"
              className="img-fluid mx-auto d-block"
            />
            {/* top advrti bannar end */}
          </div>
          {/* dtl advertis second-top product bannar start */}
          <div className="m_dtl_top_consider_this_item d-none">
            <h3>Consider these items</h3>
            <div className="row  m-0 h-75">
              <div className="col-4 p-2">
                <a href="#/" className="btn btn-danger rounded-0 w-100 h-100">
                  A
                </a>
              </div>
              <div className="col-4 p-2">
                <a href="#/" className="btn btn-danger rounded-0 w-100 h-100">
                  A
                </a>
              </div>
              <div className="col-4 p-2">
                <a href="#/" className="btn btn-danger rounded-0 w-100 h-100">
                  A
                </a>
              </div>
            </div>
          </div>

          {/* dtl advertis second-top product bannar end */}
          <div className="row m-0 m_dtl_productcontainer">
            {/* zoom container start */}
            <div className="col-9 p-0 tdr">
              <div className="row m-0">
                <div className="col-1 p-0">
                  <ul
                    className={
                      `nav flex-column  mx-auto m_dtl_productThum ` +
                      this.state.prodSrollFix
                    }
                  >
                    <li className="nav-item">
                      <a className="nav-link p-0 mb-1 mt-2 border" href="#/">
                        <img
                          src="assets/zoom1.jpg"
                          alt="zoom1"
                          className="img-fluid"
                        />
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link p-0 mb-1 mt-2 border" href="#/">
                        <img
                          src="assets/zoom1.jpg"
                          alt="zoom1"
                          className="img-fluid"
                        />
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link p-0 mb-1 mt-2 border" href="#/">
                        <img
                          src="assets/zoom1.jpg"
                          alt="zoom1"
                          className="img-fluid"
                        />
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link p-0 mb-1 mt-2 border" href="#/">
                        <img
                          src="assets/zoom1.jpg"
                          alt="zoom1"
                          className="img-fluid"
                        />
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link p-0 mb-1 mt-2 border" href="#/">
                        <img
                          src="assets/zoom1.jpg"
                          alt="zoom1"
                          className="img-fluid"
                        />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col-6 p-0">
                  <div
                    className={`m_dtl_prodMainImg ` + this.state.prodSrollFix}
                  >
                    <ReactImageMagnify
                      {...{
                        smallImage: {
                          alt: 'Wristwatch by Ted Baker London',
                          isFluidWidth: true,
                          src: 'assets/zoom1.jpg',
                        },
                        largeImage: {
                          src: 'assets/zoom2.jpg',
                          width: 1200,
                          height: 1800,
                        },
                        shouldUsePositiveSpaceLens: true,
                      }}
                    />
                  </div>
                </div>
                <div className="col-5 p-0">
                  <h4>
                    HP 14s, 5th Gen AMD Ryzen 3- 8GB RAM/512GB SSD 14
                    inches(35cm) Laptop, FHD IPS Micro-Edge Display/ Backlit
                    Keyboard/Alexa/Windows 11/Fast Charge/Radeon
                    Graphics/1.46Kg/Natural Silver) -14s-fq1089AU
                  </h4>
                  <a href="#/" className="btn btn-link d-block text-start">
                    Visit the HP Store
                  </a>
                  <FontAwesomeIcon icon={faStar} className="text-warning" />
                  <FontAwesomeIcon icon={faStar} className="text-warning" />
                  <FontAwesomeIcon icon={faStar} className="text-warning" />
                  <FontAwesomeIcon icon={faStar} className="text-warning" />
                  <FontAwesomeIcon icon={faStar} className="text-warning" />
                  <span className="ratingCount">4</span>:Ratings
                  <hr />
                  <span className="d-block">
                    M.R.P.:
                    <span className="text-decoration-line-through">
                      ₹50,597.00
                    </span>
                  </span>
                  <span className="d-block">
                    Deal Price: <span className="text-danger">₹36,990.00</span>
                  </span>
                  <span className="d-block">
                    You Save:
                    <span className="text-danger">₹13,607.00 (27%)</span>
                  </span>
                  <ul className="list-group">
                    <li className="list-group-item">
                      <span className="text-danger">Save Extra</span> with 3
                      offer
                    </li>
                    <li className="list-group-item">
                      <span className="text-danger">No Cost EMI:</span> Avail No
                      Cost EMI on select cards for orders above ₹3000
                    </li>
                    <li className="list-group-item">
                      <span className="text-danger">Bank Offer (12):</span>
                      Prime Savings Flat INR 1000 Instant Discount on ICICI Bank
                      Cards. Minimum purchase value INR 40000. For Prime
                      customers only
                    </li>
                  </ul>
                  <ul className="nav">
                    <li className="nav-item">
                      <a className="nav-link " href="#/">
                        <img
                          src="assets/zoomdtl1.png"
                          alt="zoomdtl1"
                          className="img-fluid"
                        />
                        7 Days Replacement
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#/">
                        Amazon Delivery
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#/">
                        1 Year Warranty
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#/">
                        No-Contact Delivery
                      </a>
                    </li>
                  </ul>
                  <a href="#productInfo" className="btn3">
                    See more products details
                  </a>
                </div>
              </div>

              {/* zoom container end */}
            </div>
            {/* detail top page start */}
            <div className="col-3 p-1 tdr">
              {/* social media icon start */}
              <ul className="nav ">
                <li className="nav-item ">
                  <a className="nav-link active" href="#/">
                    Share
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#/">
                    <FontAwesomeIcon icon={faEnvelope} />
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#/">
                    <i class="fab fa-facebook"></i>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#/">
                    <i class="fab fa-twitter"></i>
                  </a>
                </li>
              </ul>
              {/* social media icon end */}
              <form>
                <div className="card">
                  <div className="card-header">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                      />
                      <label
                        className="form-check-label"
                        for="flexRadioDefault1"
                      >
                        <span className="d-block text-dark">With Exchange</span>
                        <span className="d-block text-danger">
                          Up to $ 1800.00 off
                        </span>
                      </label>
                    </div>
                  </div>
                  <div className="card-body">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                      />
                      <label
                        className="form-check-label"
                        for="flexRadioDefault1"
                      >
                        <span className="d-block text-dark">
                          Without Exchange
                        </span>
                        <span
                          className="d-block text-danger"
                          style={{ fontWeight: '300' }}
                        >
                          $ 1800.00
                          <span
                            className="text-dark text-decoration-line-through mx-2"
                            style={{ fontWeight: '300' }}
                          >
                            $2000.00
                          </span>
                        </span>
                      </label>
                    </div>
                    <div>
                      <span className="d-inline-block">Quantity</span>
                      <select
                        className="form-select form-select-sm mb-3 w-25 d-inline-block mx-2"
                        aria-label=".form-select-lg example"
                      >
                        <option selected>1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                      </select>
                    </div>
                    <div className="d-grid gap-2">
                      <button className="btn btn-warning" type="button">
                        Add to Cart
                      </button>
                      <button
                        className="btn btn-primary m_buybtn "
                        type="button"
                      >
                        Buy Now
                      </button>
                    </div>
                    <div className="form-check mt-1">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault1"
                      />
                      <label
                        className="form-check-label"
                        for="flexCheckDefault1"
                      >
                        Add gift options
                      </label>
                    </div>
                  </div>
                </div>
              </form>
              <hr />
              {/* advertisement bannar area start */}
              <select
                className="form-select"
                aria-label="Default select example"
              >
                <option selected>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
              <a href="#/" className=" d-block dtl_sponsoredBox border mt-2">
                <div className="dtl_sponsoredBox_imgcont p-2">
                  <img
                    src="assets/dealimage9.jpg"
                    alt="advertisimg"
                    className="img-fluid"
                  />
                </div>
                <span className="text-dark float-end me-2">
                  Sponsored <FontAwesomeIcon icon={faInfo} />
                </span>
              </a>
              {/* advertisement bannar area end */}
              {/* detail top page end */}
            </div>
          </div>
          <div className="m_dtl_produContBottom border-top border-bottom mb-1"></div>
          <div className="m_dtl_haveQ border-top"></div>
          <div className="m_dtl_prodRelItem border-top border-bottom">
            <h5>Products related to this item</h5>
          </div>
          <div className="m_dtl_cusAlsoView border-top border-bottom">
            <h5>Customers who viewed this item also viewed</h5>
          </div>
          {/* product detail */}
          <div className="m_dtl_prodInfo " id="productInfo">
            <div className="row">
              <div className="col-6 border-top pt-3">
                <h5 className="text-dark">Product information</h5>
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col" className="table-light w-50">
                        #
                      </th>
                      <th scope="col">First</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row" className="table-light w-50">
                        1
                      </th>
                      <td>Mark</td>
                    </tr>
                    <tr>
                      <th scope="row" className="table-light w-50">
                        2
                      </th>
                      <td>Jacob</td>
                    </tr>
                    <tr>
                      <th scope="row" className="table-light w-50">
                        3
                      </th>
                      <td>Larry the Bird</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="col-6 border-top pt-3">
                <h5 className="text-dark">Detail information</h5>
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col" className="table-light w-50">
                        #
                      </th>
                      <th scope="col">First</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row" className="table-light w-50">
                        1
                      </th>
                      <td>Mark</td>
                    </tr>
                    <tr>
                      <th scope="row" className="table-light w-50">
                        2
                      </th>
                      <td>Jacob</td>
                    </tr>
                    <tr>
                      <th scope="row" className="table-light w-50">
                        3
                      </th>
                      <td>Larry the Bird</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          {/* customer question  */}
          <div className="m_dtl_custQnA">
            <h5>Customer Question &amp;Answer</h5>
            <form>
              <input
                placeholder="Have a question and search answers"
                className="form-control form-control-sm w-50"
              />
            </form>
            <table className="">
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td colSpan="2">Larry the Bird</td>
                  <td>@twitter</td>
                </tr>
              </tbody>
            </table>
          </div>
          {/* customer review */}
          <div className="m_dtl_customerReview my-5">
            <div className="row m-0">
              <div className="col-3">
                <div className="m_dtl_customerReview_aside">
                  <h5>Customer Reviews</h5>
                  <table className="table">
                    <tbody>
                      <tr>
                        <td>
                          <a href="#/">5 star</a>
                        </td>
                        <td className="w-50">
                          <div className="progress mb-3">
                            <div
                              className="progress-bar bg-warning"
                              role="progressbar"
                              style={{ width: '55%' }}
                              aria-valuenow="40"
                              aria-valuemin="0"
                              aria-valuemax="55"
                            ></div>
                          </div>
                        </td>
                        <td>
                          <a className="w-25" href="#/">
                            55%
                          </a>
                        </td>
                      </tr>

                      <tr>
                        <td>
                          <a href="#/">4 star</a>
                        </td>
                        <td className="w-50">
                          <div className="progress mb-3">
                            <div
                              className="progress-bar bg-warning"
                              role="progressbar"
                              style={{ width: '29%' }}
                              aria-valuenow="75"
                              aria-valuemin="0"
                              aria-valuemax="29"
                            ></div>
                          </div>
                        </td>
                        <td>
                          <a className="w-25" href="#/">
                            29%
                          </a>
                        </td>
                      </tr>

                      <tr>
                        <td>
                          <a href="#/">3 star</a>
                        </td>
                        <td className="w-50">
                          <div className="progress mb-3">
                            <div
                              className="progress-bar bg-warning"
                              role="progressbar"
                              style={{ width: '6%' }}
                              aria-valuenow="30"
                              aria-valuemin="0"
                              aria-valuemax="6"
                            ></div>
                          </div>
                        </td>
                        <td>
                          <a className="w-25" href="#/">
                            6%
                          </a>
                        </td>
                      </tr>

                      <tr>
                        <td>
                          <a href="#/">2 star</a>
                        </td>
                        <td className="w-50">
                          <div className="progress mb-3">
                            <div
                              className="progress-bar bg-warning"
                              role="progressbar"
                              style={{ width: '2%' }}
                              aria-valuenow="25"
                              aria-valuemin="0"
                              aria-valuemax="2"
                            ></div>
                          </div>
                        </td>
                        <td>
                          <a className="w-25" href="#/">
                            2%
                          </a>
                        </td>
                      </tr>

                      <tr>
                        <td>
                          <a href="#/">1 star</a>
                        </td>
                        <td className="w-50">
                          <div className="progress mb-3">
                            <div
                              className="progress-bar bg-warning"
                              role="progressbar"
                              style={{ width: '8%' }}
                              aria-valuenow="10"
                              aria-valuemin="0"
                              aria-valuemax="8"
                            ></div>
                          </div>
                        </td>
                        <td>
                          <a className="w-25" href="#/">
                            8%
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="col-9">
                <h4>Review's with Images</h4>
                <div className="review_with_img"></div>
                <h4>Top Review's from UAE</h4>
                <div className="m_individual_commit mt-4">
                  <div>
                    <FontAwesomeIcon icon={faUser} />
                    <span className="mx-2"> Mubashar Aziz</span>
                  </div>
                  <div>
                    <FontAwesomeIcon icon={faStar} className="text-warning" />
                    <FontAwesomeIcon icon={faStar} className="text-warning" />
                    <FontAwesomeIcon icon={faStar} className="text-warning" />
                    <FontAwesomeIcon icon={faStar} className="text-warning" />
                    <FontAwesomeIcon icon={faStar} className="text-warning" />
                    <a href="#/" className="mx-2 text-dark">
                      Best Laptop Under 40k
                    </a>
                  </div>
                  <span className="text-dark d-block">
                    Reviewed in UAE on 7 June 2021
                  </span>
                  <span className="text-warning d-block">
                    Verified Purchase
                  </span>

                  <p>
                    This laptop is perfect for home and student use. Don't get
                    blindsided by the negative reviews. The item arrives in
                    sturdy packaging which prevents it from damage during
                    transit. I myself use this laptop for university online
                    meetings. This laptop is not meant for high graphics gaming,
                    low-resolution games are compatible. Rest assured is fine.
                  </p>
                  <span className="text-dark d-block mb-2">
                    7 people to found this help
                  </span>
                  <button className="btn btn-light border">Helpful</button>
                  <button className="btn ">Report abuse</button>
                </div>
                <div className="m_individual_commit mt-4">
                  <div>
                    <FontAwesomeIcon icon={faUser} />
                    <span className="mx-2"> Mubashar Aziz</span>
                  </div>
                  <div>
                    <FontAwesomeIcon icon={faStar} className="text-warning" />
                    <FontAwesomeIcon icon={faStar} className="text-warning" />
                    <FontAwesomeIcon icon={faStar} className="text-warning" />
                    <FontAwesomeIcon icon={faStar} className="text-warning" />
                    <FontAwesomeIcon icon={faStar} className="text-warning" />
                    <a href="#/" className="mx-2 text-dark">
                      Best Laptop Under 40k
                    </a>
                  </div>
                  <span className="text-dark d-block">
                    Reviewed in UAE on 7 June 2021
                  </span>
                  <span className="text-warning d-block">
                    Verified Purchase
                  </span>

                  <p>
                    This laptop is perfect for home and student use. Don't get
                    blindsided by the negative reviews. The item arrives in
                    sturdy packaging which prevents it from damage during
                    transit. I myself use this laptop for university online
                    meetings. This laptop is not meant for high graphics gaming,
                    low-resolution games are compatible. Rest assured is fine.
                  </p>
                  <span className="text-dark d-block mb-2">
                    7 people to found this help
                  </span>
                  <button className="btn btn-light border">Helpful</button>
                  <button className="btn ">Report abuse</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default Detail;
