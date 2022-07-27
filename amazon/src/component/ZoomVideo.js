import React, { Component } from 'react';

class ZoomVideo extends Component {
  render() {
    return (
      <>
        <div
          className="modal m_prodVideoBoxModel"
          id="exampleModal"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-xl  ">
            <div className="modal-content">
              <div className="modal-body">
                <ul className="nav nav-tabs ">
                  <li className="nav-item">
                    <a className="nav-link " data-bs-toggle="tab" href="#video">
                      VIDEOS
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" data-bs-toggle="tab" href="#images">
                      IMAGES
                    </a>
                  </li>
                </ul>

                {/* <!-- Tab panes --> */}
                <div className="tab-content">
                  <div className="tab-pane container active" id="video">
                    <div className="row ">
                      <div className="col-7">A</div>
                      <div className="col-5">B</div>
                    </div>
                  </div>
                  <div className="tab-pane container fade" id="images">
                    <div className="row ">
                      <div className="col-8">C</div>
                      <div className="col-4">D</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer"></div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default ZoomVideo;
