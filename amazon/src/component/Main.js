import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import FirstCarousel from '../component/FirstCarousel';

import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Main = () => {
  return (
    <>
      <div className="m_main position-relative ">
        <div className="m_main_top">
          <FirstCarousel />
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
                          <p style={{ fontSize: '12px', color: 'gray' }}>ACs</p>
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
          {/* today deal start carousel */}

          <div className="m_main_bottom_3 row m-0 my-3">
            <div className="mb5">
              <h3 className="float-start">Today's Deal</h3>
              <button
                type="button"
                className=" float-start btn btn-link text-decoration-none"
              >
                see all deals
              </button>
            </div>
            <Carousel className="carouselExampleControls2">
              <Carousel.Item>
                <div className="imgCont row">
                  <div className="col p-0 text-center">
                    <a href="#/">
                      <div className="imgPlace    ">
                        <img
                          src="assets/dealimage1.jpg"
                          alt="dealimg"
                          style={{ width: '80%', height: '200px' }}
                        />
                      </div>
                      <span className="span1">
                        <span>Up to</span>
                        <span>$990</span>
                        <span>off</span>
                      </span>
                      <span className="span2">Prime Day Early Deal</span>
                    </a>
                  </div>
                  <div className="col p-0 text-center">
                    <a href="#/">
                      <div className="imgPlace   ">
                        <img
                          src="assets/dealimage2.jpg"
                          alt="dealimg"
                          style={{ width: '80%', height: '200px' }}
                        />
                      </div>
                      <span className="span1">
                        <span>Up to</span>
                        <span>$990</span>
                        <span>off</span>
                      </span>
                      <span className="span2">Prime Day Early Deal</span>
                    </a>
                  </div>
                  <div className="col p-0 text-center">
                    <a href="#/">
                      <div className="imgPlace    ">
                        <img
                          src="assets/dealimage3.jpg"
                          alt="dealimg"
                          style={{ width: '80%', height: '200px' }}
                        />
                      </div>
                      <span className="span1">
                        <span>Up to</span>
                        <span>$990</span>
                        <span>off</span>
                      </span>
                      <span className="span2">Prime Day Early Deal</span>
                    </a>
                  </div>
                  <div className="col p-0 text-center">
                    <a href="#/">
                      <div className="imgPlace   ">
                        <img
                          src="assets/dealimage4.jpg"
                          alt="dealimg"
                          style={{ width: '80%', height: '200px' }}
                        />
                      </div>
                      <span className="span1">
                        <span>Up to</span>
                        <span>$990</span>
                        <span>off</span>
                      </span>
                      <span className="span2">Prime Day Early Deal</span>
                    </a>
                  </div>
                  <div className="col p-0 text-center">
                    <a href="#/">
                      <div className="imgPlace    ">
                        <img
                          src="assets/dealimage5.jpg"
                          alt="dealimg"
                          style={{ width: '80%', height: '200px' }}
                        />
                      </div>
                      <span className="span1">
                        <span>Up to</span>
                        <span>$990</span>
                        <span>off</span>
                      </span>
                      <span className="span2">Prime Day Early Deal</span>
                    </a>
                  </div>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="imgCont row">
                  <div className="col p-0 text-center">
                    <a href="#/">
                      <div className="imgPlace    ">
                        <img
                          src="assets/dealimage6.jpg"
                          alt="dealimg"
                          style={{ width: '80%', height: '200px' }}
                        />
                      </div>
                      <span className="span1">
                        <span>Up to</span>
                        <span>$990</span>
                        <span>off</span>
                      </span>
                      <span className="span2">Prime Day Early Deal</span>
                    </a>
                  </div>
                  <div className="col p-0 text-center">
                    <a href="#/">
                      <div className="imgPlace    ">
                        <img
                          src="assets/dealimage7.jpg"
                          alt="dealimg"
                          style={{ width: '80%', height: '200px' }}
                        />
                      </div>
                      <span className="span1">
                        <span>Up to</span>
                        <span>$990</span>
                        <span>off</span>
                      </span>
                      <span className="span2">Prime Day Early Deal</span>
                    </a>
                  </div>
                  <div className="col p-0 text-center">
                    <a href="#/">
                      <div className="imgPlace    ">
                        <img
                          src="assets/dealimage8.jpg"
                          alt="dealimg"
                          style={{ width: '80%', height: '200px' }}
                        />
                      </div>
                      <span className="span1">
                        <span>Up to</span>
                        <span>$990</span>
                        <span>off</span>
                      </span>
                      <span className="span2">Prime Day Early Deal</span>
                    </a>
                  </div>
                  <div className="col p-0 text-center">
                    <a href="#/">
                      <div className="imgPlace    ">
                        <img
                          src="assets/dealimage9.jpg"
                          alt="dealimg"
                          style={{ width: '80%', height: '200px' }}
                        />
                      </div>
                      <span className="span1">
                        <span>Up to</span>
                        <span>$990</span>
                        <span>off</span>
                      </span>
                      <span className="span2">Prime Day Early Deal</span>
                    </a>
                  </div>
                  <div className="col p-0 text-center">
                    <a href="#/">
                      <div className="imgPlace    ">
                        <img
                          src="assets/dealimage10.jpg"
                          alt="dealimg"
                          style={{ width: '80%', height: '200px' }}
                        />
                      </div>
                      <span className="span1">
                        <span>Up to</span>
                        <span>$990</span>
                        <span>off</span>
                      </span>
                      <span className="span2">Prime Day Early Deal</span>
                    </a>
                  </div>
                </div>
              </Carousel.Item>
            </Carousel>
          </div>
          {/* todays deal carousel end */}
          <div className="m_main_bottom_4 row m-0 my-3">
            <div className="mb5">
              <h3 className="float-start">
                Frequently repurchased in Drugstore
              </h3>
            </div>
            <Carousel className="carouselExampleControls2">
              <Carousel.Item>
                <div className="imgCont row">
                  <div className="col p-0 text-center">
                    <a href="#/">
                      <div className="imgPlace    ">
                        <img
                          src="assets/frequestimage1.jpg"
                          alt="frequestimg"
                          style={{ width: '70%', height: '200px' }}
                        />
                      </div>
                    </a>
                  </div>
                  <div className="col p-0 text-center">
                    <a href="#/">
                      <div className="imgPlace   ">
                        <img
                          src="assets/frequestimage2.jpg"
                          alt="frequestimg2"
                          style={{ width: '70%', height: '200px' }}
                        />
                      </div>
                    </a>
                  </div>
                  <div className="col p-0 text-center">
                    <a href="#/">
                      <div className="imgPlace    ">
                        <img
                          src="assets/frequestimage3.jpg"
                          alt="frequestimg"
                          style={{ width: '70%', height: '200px' }}
                        />
                      </div>
                    </a>
                  </div>
                  <div className="col p-0 text-center">
                    <a href="#/">
                      <div className="imgPlace   ">
                        <img
                          src="assets/frequestimage4.jpg"
                          alt="frequentimg"
                          style={{ width: '70%', height: '200px' }}
                        />
                      </div>
                    </a>
                  </div>
                  <div className="col p-0 text-center">
                    <a href="#/">
                      <div className="imgPlace    ">
                        <img
                          src="assets/frequestimage5.jpg"
                          alt="frequentimg"
                          style={{ width: '70%', height: '200px' }}
                        />
                      </div>
                    </a>
                  </div>
                  <div className="col p-0 text-center">
                    <a href="#/">
                      <div className="imgPlace    ">
                        <img
                          src="assets/frequestimage6.jpg"
                          alt="frequentimg"
                          style={{ width: '70%', height: '200px' }}
                        />
                      </div>
                    </a>
                  </div>
                  <div className="col p-0 text-center">
                    <a href="#/">
                      <div className="imgPlace    ">
                        <img
                          src="assets/frequestimage7.jpg"
                          alt="frequentimg"
                          style={{ width: '70%', height: '200px' }}
                        />
                      </div>
                    </a>
                  </div>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="imgCont row">
                  <div className="col p-0 text-center">
                    <a href="#/">
                      <div className="imgPlace    ">
                        <img
                          src="assets/frequestimage8.jpg"
                          alt="frequentimg6"
                          style={{ width: '70%', height: '200px' }}
                        />
                      </div>
                    </a>
                  </div>
                  <div className="col p-0 text-center">
                    <a href="#/">
                      <div className="imgPlace    ">
                        <img
                          src="assets/frequestimage9.jpg"
                          alt="frequentimg7"
                          style={{ width: '70%', height: '200px' }}
                        />
                      </div>
                    </a>
                  </div>
                  <div className="col p-0 text-center">
                    <a href="#/">
                      <div className="imgPlace    ">
                        <img
                          src="assets/frequestimage10.jpg"
                          alt="dealingimg8"
                          style={{ width: '70%', height: '200px' }}
                        />
                      </div>
                    </a>
                  </div>
                  <div className="col p-0 text-center">
                    <a href="#/">
                      <div className="imgPlace    ">
                        <img
                          src="assets/frequestimage11.jpg"
                          alt="frequentimg"
                          style={{ width: '70%', height: '200px' }}
                        />
                      </div>
                    </a>
                  </div>
                  <div className="col p-0 text-center">
                    <a href="#/">
                      <div className="imgPlace    ">
                        <img
                          src="assets/frequestimage12.jpg"
                          alt="dealimg"
                          style={{ width: '70%', height: '200px' }}
                        />
                      </div>
                    </a>
                  </div>
                  <div className="col p-0 text-center">
                    <a href="#/">
                      <div className="imgPlace    ">
                        <img
                          src="assets/frequestimage13.jpg"
                          alt="dealimg"
                          style={{ width: '70%', height: '200px' }}
                        />
                      </div>
                    </a>
                  </div>
                  <div className="col p-0 text-center">
                    <a href="#/">
                      <div className="imgPlace    ">
                        <img
                          src="assets/frequestimage14.jpg"
                          alt="dealimg"
                          style={{ width: '70%', height: '200px' }}
                        />
                      </div>
                    </a>
                  </div>
                </div>
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
