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
        <div className="m_main1">
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
        <div className="m_main2 w-100 position-absolute "></div>
      </div>
      <footer></footer>
    </>
  );
}

export default App;
