import React from 'react';
import './App.css';

function App() {
  return (
    <>
      <header>
        <div className="a_header_top"></div>
        <div className="a_header_bottom"></div>
      </header>
      <div className="m_main position-relative">
        <div className="m_main_top">
          <div
            id="carouselExampleControls"
            class="carousel slide"
            data-bs-ride="carousel"
          >
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src="assets/pix1.jpg" class="d-block w-100" alt="pix1" />
              </div>
              <div class="carousel-item">
                <img src="assets/pix2.jpg" class="d-block w-100" alt="pix2" />
              </div>
              <div class="carousel-item">
                <img src="assets/pix3.jpg" class="d-block w-100" alt="pix3" />
              </div>
              <div class="carousel-item">
                <img src="assets/pix4.jpg" class="d-block w-100" alt="pix4" />
              </div>
            </div>
            <button
              class="carousel-control-prev h-50"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next h-50"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
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
    </>
  );
}

export default App;
