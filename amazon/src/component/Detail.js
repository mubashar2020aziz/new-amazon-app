import React from 'react';
import { faStar, faUser } from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Detail = () => {
  return (
    <>
      <div className="m_main m_dtl_main bg-white mx-auto">
        <div className="m_dtl_top_bannar"></div>
        <div className="row m-0 m_dtl_productcontainer">
          <div className="col-9 tdr">A</div>
          <div className="col-3 tdr">B</div>
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
        <div className="m_dtl_prodInfo">
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
          <table class="">
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
                <td colspan="2">Larry the Bird</td>
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
                  <tr>
                    <td>
                      <a href="#/">5 star</a>
                    </td>
                    <td className="w-50">
                      <div class="progress mb-3">
                        <div
                          class="progress-bar bg-warning"
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
                      <div class="progress mb-3">
                        <div
                          class="progress-bar bg-warning"
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
                      <div class="progress mb-3">
                        <div
                          class="progress-bar bg-warning"
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
                      <div class="progress mb-3">
                        <div
                          class="progress-bar bg-warning"
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
                      <div class="progress mb-3">
                        <div
                          class="progress-bar bg-warning"
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
                <span className="text-warning d-block">Verified Purchase</span>

                <p>
                  This laptop is perfect for home and student use. Don't get
                  blindsided by the negative reviews. The item arrives in sturdy
                  packaging which prevents it from damage during transit. I
                  myself use this laptop for university online meetings. This
                  laptop is not meant for high graphics gaming, low-resolution
                  games are compatible. Rest assured is fine.
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
                <span className="text-warning d-block">Verified Purchase</span>

                <p>
                  This laptop is perfect for home and student use. Don't get
                  blindsided by the negative reviews. The item arrives in sturdy
                  packaging which prevents it from damage during transit. I
                  myself use this laptop for university online meetings. This
                  laptop is not meant for high graphics gaming, low-resolution
                  games are compatible. Rest assured is fine.
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
};
export default Detail;
